import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { fetchRedditPosts } from '../../lib/reddit';
import { Post, RedditState, RedditStateType } from '../../util/types';

const initialState: RedditState = {
  posts: [],
  readPostIds: {},
  dismissedPostIds: {},
  currentPost: null,
  error: null,
  after: null,
  hasMore: true,
  loading: 'idle',
};

const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    setCurrentPost: (state, action: PayloadAction<Post>) => {
      state.currentPost = action.payload;
      // Set post as read
      state.readPostIds[action.payload.id] = true;
    },
    dismissPost: (state, action: PayloadAction<string>) => {
      state.dismissedPostIds[action.payload] = true;
    },
    toggleAllPosts: (state) => {
      // Display or Dismiss all posts
      if (state.hasMore) {
        state.posts.forEach((post) => (state.dismissedPostIds[post.id] = true));
        state.currentPost = null;
        state.hasMore = false;
      } else {
        state.dismissedPostIds = {};
        state.readPostIds = {};
        state.hasMore = true;
      }
    },
  },
  extraReducers: {
    [fetchRedditPosts.pending.toString()]: (state) => {
      state.loading = 'loading';
    },
    [fetchRedditPosts.fulfilled.toString()]: (state, { payload }) => {
      state.posts = state.posts.concat(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        payload.data.children.map((child: { data: any }) => child.data)
      );
      state.after = payload.data.after;
      state.loading = 'loaded';
    },
    [fetchRedditPosts.rejected.toString()]: (state, { payload }) => {
      state.loading = 'error';
      state.error = payload.error;
    },
  },
});

export const selectPosts = createSelector(
  ({ reddit }: RedditStateType) => ({
    posts: reddit.posts,
    hasMore: reddit.hasMore,
    currentPost: reddit.currentPost,
    readPostIds: reddit.readPostIds,
    dismissedPostIds: reddit.dismissedPostIds,
  }),
  (state) => state
);
export const selectIsLoading = ({ reddit }: RedditStateType): boolean =>
  reddit.loading === 'loading';

export const {
  setCurrentPost,
  dismissPost,
  toggleAllPosts,
} = redditSlice.actions;

const persistConfig = {
  key: 'reddit',
  storage,
  whitelist: ['readPostIds', 'dismissedPostIds', 'hasMore'],
};
const persistedReducer = persistReducer(persistConfig, redditSlice.reducer);

export default persistedReducer;
