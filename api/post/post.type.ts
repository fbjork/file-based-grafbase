import { createType } from "@grafbase/sdk";

export interface Post {
  id: string;
  title: string;
}

// export const Post = createType("Post", {
//   fields: {
//     id: string,
//     title: string,
//   },
// });

// export const Type = createType("Post", {
//   type: Post,
// });
