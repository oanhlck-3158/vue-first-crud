import apiClient from "./ApiClient";
import type {Post} from "../types/PostType";

class PostDataService {
  getAll(): Promise<any> {
    return apiClient.get("/posts")
  }

  get(id: number): Promise<any> {
    return apiClient.get(`/posts/${id}`)
  }

  create(post: Post): Promise<any> {
    return apiClient.post("/posts", post)
  }

  update(id: number, post: any): Promise<any> {
    return apiClient.patch(`/posts/${id}`, post)
  }

  delete(id: number): Promise<any> {
    return apiClient.delete(`/posts/${id}`)
  }
}

export default new PostDataService();
