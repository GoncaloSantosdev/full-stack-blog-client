// React Router
import { Link, useParams, useNavigate } from "react-router-dom";
// React Query
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// Services
import { deletePost, getPostById } from "../services/postAPI";
// Components
import { EditPostForm } from "../components";

const PostDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post-details", id],
    queryFn: () => getPostById(id as string),
  });

  const queryClient = useQueryClient();

  const {
    mutate: deletePostMutation,
    isPending,
    error: deletePostError,
  } = useMutation({
    mutationKey: ["deletePost"],
    mutationFn: () => deletePost(id as string),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts-list"] });
      navigate("/");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (deletePostError) return <div>Error: {deletePostError?.message}</div>;
  if (isPending) return <div>Deleting post...</div>;

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Post Details</h1>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Posts
          </Link>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => deletePostMutation()}
          >
            Delete Post
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{post?.post?.title}</h2>
        <p className="text-sm text-gray-500 mt-3">{post?.post?.description}</p>
      </div>
      <div className="mt-4">
        <EditPostForm post={post?.post} />
      </div>
    </div>
  );
};

export default PostDetailsPage;
