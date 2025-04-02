type TYPE_USER = {
  id: string;
  user: {
    avatar: string;
    tiktok_id: string;
    tiktok_name: string;
    link_tiktok: string;
  };
  statistical: {
    count_view_video: number;
    count_like: number;
    count_comment: number;
    count_view_profile: number;
    count_following: number;
    count_follower: number;
    count_share: number;
  };
};

export type { TYPE_USER };
