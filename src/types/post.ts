import type Author from "@customTypes/author";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  category: string;
  estReadingTime: string;
  content: string;
};

export default PostType;
