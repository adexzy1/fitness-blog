export interface Comments {
  name: string;
  message: string;
  date: string;
  comment_replies: Comments[];
}

export interface Post {
  author: { displayPicture: { url: string }; name: string };
  category: string;
  content: { text: string; html: string };
  coverPhoto: { url: string };
  createdAt: string;
  slug: string;
  title: string;
  id: string;
}

export interface RelatedPost {
  id: string;
  slug: string;
  author: {
    name: string;
  };
  createdAt: string;
  title: string;
}
