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
// Components
import { Footer, Header } from "./components";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
      </main>
      <Footer />
    </div>
  );
};

export default App;
