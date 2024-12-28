import { Route, Routes } from "react-router-dom";
// Pages
import { PostDetailsPage, PostsPage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailsPage />} />
    </Routes>
  );
};

export default App;
