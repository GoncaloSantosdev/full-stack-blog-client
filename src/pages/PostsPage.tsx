import { CreatePostForm, PostsList } from "../components";

const PostsPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <CreatePostForm />
      <PostsList />
    </div>
  );
};

export default PostsPage;
