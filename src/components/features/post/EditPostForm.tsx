// React Hook Form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostFormValidation } from "../../../validation/createPostFormValidation";
// React Query
import { useMutation, useQueryClient } from "@tanstack/react-query";
// Services
import { updatePost } from "../../../services/postAPI";
// Types
import { PostProps } from "../../../types";

const EditPostForm = ({ post }: { post: PostProps }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostProps>({
    resolver: zodResolver(createPostFormValidation),
    defaultValues: {
      title: post.title,
      description: post.description,
    },
  });

  const queryClient = useQueryClient();

  const {
    mutate: editPostMutation,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["updatePost"],
    mutationFn: (updatedPostData: PostProps) =>
      updatePost(post._id as string, updatedPostData),
    onSuccess: () => {
      // Invalidate details query to fetch the updated post
      queryClient.invalidateQueries({
        queryKey: ["post-details", post._id],
      });
      // Potentially refetch the posts list if you want to see updated data there too
      queryClient.invalidateQueries({
        queryKey: ["posts-list"],
      });
    },
  });

  const onSubmit = (data: PostProps) => {
    editPostMutation(data);
  };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error?.message}</div>;

  return (
    <>
      <h1 className="text-xl font-bold">Edit Post</h1>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            required
            className="border rounded-md p-4 text-sm"
            defaultValue={post.title || ""}
            {...register("title")}
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            required
            className="border rounded-md p-4 text-sm"
            defaultValue={post.description || ""}
            {...register("description")}
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-800 text-white rounded-md px-5 py-3 mt-4 text-sm"
        >
          Edit Post
        </button>
      </form>
    </>
  );
};

export default EditPostForm;
