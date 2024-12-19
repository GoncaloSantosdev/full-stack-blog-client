import { Routes, Route } from "react-router-dom";
// Pages
import { Home, Posts, About, Contact, CreatePost } from "./pages";
// Components
import { MainLayout } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Route>
    </Routes>
  );
};

export default App;
