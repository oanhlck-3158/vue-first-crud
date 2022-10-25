import type {IPost} from "../types/PostType";
import type { ICreatePost } from "@/views/CreatePostView.vue";
import {http} from "../services/http";

class PostDataService {
  getAll = async():Promise<IPost[]> => {
    return await http.get("/posts");
  }

  get = async(slug: string):Promise<IPost> => {
    return await http.get(`/posts/${slug}`);
  }

  create = async(post: ICreatePost):Promise<IPost> => {
    return await http.post("/posts", post);
  }

  update = async(id: number, post: any):Promise<IPost> => {
    return await http.patch(`/posts/${id}`, post);
  }

  delete = async(id: number):Promise<IPost> => {
    return await http.delete(`/posts/${id}`);
  }
}

export default new PostDataService();
