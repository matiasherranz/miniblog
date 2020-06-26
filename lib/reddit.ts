import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { RedditStateType } from '../util/types';
import { BASE_REDDIT_URL, PAGE_SIZE } from '../util/constants';

type ParamsType = Record<string, string>;

export const fetchRedditPosts = createAsyncThunk<
  Promise<string>,
  void,
  { state: RedditStateType }
>(
  'notes/fetchPosts',
  async (_, { getState, rejectWithValue }) => {
    console.log('FETCHING POSTS');
    try {
      const { reddit } = getState();
      const params: ParamsType = {
        limit: PAGE_SIZE.toString(),
      };

      if (reddit.after) {
        params.after = reddit.after;
      }

      if (!reddit.hasMore) {
        throw new Error('No more posts available');
      }

      const response = await axios.get(`${BASE_REDDIT_URL}/top.json`, {
        params,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  },
  {
    condition: (_, { getState }) => {
      const { reddit } = getState();

      // Already fetching, cancel this new request
      return reddit.loading !== 'loading';
    },
  }
);
