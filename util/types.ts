export type ToggleDrawerProps = {
  setDrawerOpen: (arg0: boolean) => boolean;
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
