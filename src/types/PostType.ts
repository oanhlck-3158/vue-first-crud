export interface CreatePost {
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  isPublic: boolean;
}

export interface IPost extends CreatePost {
  id: number;
}
