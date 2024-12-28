// React Query
import { useQuery } from "@tanstack/react-query";
// Services
import { getPosts } from "../../../services/postAPI";
import { PostProps } from "../../../types";
import { Link } from "react-router-dom";

const PostsList = () => {
  const {
    data: postsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts-list"],
    queryFn: getPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold">Posts</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postsData?.posts.map((post: PostProps) => (
          <Link
            to={`/posts/${post._id}`}
            key={post._id}
            className="border border-gray-300 p-4 rounded-md"
          >
            <h2 className="text-xl font-bold">Title: {post.title}</h2>
            <p className="text-sm text-gray-500 mt-3">
              Description: {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
