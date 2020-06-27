import { validateUrl, getMediaUrl, truncate } from '../util/utils';
import videoJson from './mocks/videoPost.json';
import imageJson from './mocks/imagePost.json';
import { Post } from '../util/types';
import { FALLBACK_IMAGE } from '../util/constants';

describe('validateUrl utility function', () => {
  test('validateUrl returns the same url provided if it is valid', () => {
    const validUrl = 'https://google.com';
    expect(validateUrl(validUrl)).toEqual(validUrl);
  });

  test('validateUrl returns the default url, if provided, when the url is not valid', () => {
    const invalidUrl = '1234';
    const defaultUrl = 'https://google.com';
    expect(validateUrl(invalidUrl, defaultUrl)).toEqual(defaultUrl);
  });

  test('validateUrl returns undefined when the url is not valid and no default is provided', () => {
    const invalidUrl = '1234';
    expect(validateUrl(invalidUrl)).toBeUndefined();
  });
});

describe('getMediaUrl utility function', () => {
  test('getMediaUrl returns correct url for a video post', () => {
    const videoUrl = 'https://v.redd.it/i4qv2k86pb751/DASH_720?source=fallback';
    const post: Post = videoJson.data;
    expect(getMediaUrl(post)).toEqual(videoUrl);
  });

  test('getMediaUrl returns correct url for an image post', () => {
    const imageUrl = 'https://i.redd.it/obfojf3jfe751.png';
    const post: Post = imageJson.data;
    expect(getMediaUrl(post)).toEqual(imageUrl);
  });

  test('getMediaUrl if post.is_video and post.post_hint !== "image", then validateUrl should have been called', () => {
    const post: Post = imageJson.data;
    post.is_video = false;
    post.post_hint = '';

    // If the post data has a thumbnail
    expect(getMediaUrl(post)).toEqual(post.thumbnail);

    // And if there's no thumbnail on the post:
    post.thumbnail = '';
    expect(getMediaUrl(post)).toEqual(FALLBACK_IMAGE);
  });
});

describe('truncate utility function', () => {
  test('truncate returns a trimmed string', () => {
    const longString = 'some long string that will have to be trimmed';
    const expectedTrimmedString = 'some l...';
    expect(truncate(longString, 6)).toEqual(expectedTrimmedString);
  });
});
