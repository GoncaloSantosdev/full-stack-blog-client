import { Routes, Route } from "react-router-dom";
// Pages
import {
  Home,
  Posts,
  About,
  Contact,
  CreatePost,
  PostDetails,
  Profile,
} from "./pages";
// Components
import { MainLayout, ScrollToTop } from "./components";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Private Routes */}
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
