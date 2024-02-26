import { createMutation } from "@grafbase/sdk";
import { Post } from "./post.type";

export const Query = createMutation("createPost", {
  resolver: createPost,
});

function createPost(_, args: { title: string }): Post {
  return { id: "123", title: args.title };
}
