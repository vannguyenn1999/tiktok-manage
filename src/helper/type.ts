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

type CommentItem = {
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
  post: {
    id: string;
    img_thum: string;
    time: {
      day: string;
      hour: string;
    };
    title: string;
    like: number;
    comment: number;
    view: number;
  };
  comment: {
    text: string;
    time: {
      day: string;
      time: string;
    };
  };
};

export type { TYPE_USER, CommentItem };
