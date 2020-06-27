import { FALLBACK_IMAGE } from './constants';
import { Post } from './types';

export const validateUrl = (
  url: string,
  defaultUrl?: string
): string | undefined => {
  try {
    new URL(url);
    return url;
  } catch (e) {
    // Invalid URL, return default
    return defaultUrl;
  }
};

export const getMediaUrl = (post: Post): string | undefined => {
  if (post.is_video) {
    return post.secure_media.reddit_video.fallback_url;
  } else if (post.post_hint === 'image') {
    return post.url;
  } else {
    return validateUrl(post.thumbnail, FALLBACK_IMAGE);
  }
};

export const truncate = (input: string, truncateAt: number): string => {
  return input.length > truncateAt
    ? `${input.substring(0, truncateAt)}...`
    : input;
};
