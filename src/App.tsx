// React Router
import { Routes, Route, Navigate } from "react-router-dom";
// Pages
import {
  CreatePost,
  CreatorsRanking,
  Home,
  Posts,
  Pricing,
  Profile,
  Register,
} from "./pages";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/creators-ranking" element={<CreatorsRanking />} />
      <Route path="/register" element={<Register />} />
      {/* Private Routes */}
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/profile" element={<Profile />} />
      {/* Admin Routes */}
    </Routes>
  );
};

export default App;
