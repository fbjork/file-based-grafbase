import { createQuery } from "@grafbase/sdk";
import { Post } from "./type";

export const Query = createQuery("posts", {
  resolver: posts,
});

function posts(_, args: { title: string }): Post[] {
  const posts: Post[] = [
    {
      id: "123",
      title: "Hello, world",
    },
  ];

  return posts.filter((post) => post.title.startsWith(args.title));
}
