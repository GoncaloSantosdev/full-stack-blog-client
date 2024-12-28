import { useForm } from "react-hook-form";
// Validation
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostFormValidation } from "../../../validation/createPostFormValidation";
import { z } from "zod";
// React Query
import { useMutation, useQueryClient } from "@tanstack/react-query";
// Services
import { createPost } from "../../../services/postAPI";

// Add type for the form data based on Zod schema
type CreatePostFormData = z.infer<typeof createPostFormValidation>;

const CreatePostForm = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostFormValidation),
  });

  const {
    mutate: createPostMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts-list"] });
    },
  });

  const onSubmit = (data: CreatePostFormData) => {
    createPostMutation(data);
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <>
      <h1 className="text-2xl font-bold">Create Post</h1>
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
          Create Post
        </button>
      </form>
    </>
  );
};

export default CreatePostForm;
