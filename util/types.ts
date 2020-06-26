export type ToggleDrawerProps = {
  setDrawerOpen: (arg0: boolean) => void;
  open: boolean;
};

export type Post = {
  id: string;
  title: string;
  author: string;
  created: number;
  name: string;
  thumbnail: string;
  url: string;
  is_video?: boolean;
  permalink: string;
  post_hint: string;
  num_comments: number;
  is_reddit_media_domain?: boolean;
  secure_media: {
    reddit_video: {
      fallback_url: string;
    };
  };
};

export type RedditState = {
  posts: Post[];
  loading: string;
  currentPost: Nullable<Post>;
  error: Nullable<string>;
  after: Nullable<string>;
  hasMore: boolean;
  readPostIds: Record<string, boolean>;
  dismissedPostIds: Record<string, boolean>;
};

export type RedditStateType = {
  reddit: RedditState;
};
