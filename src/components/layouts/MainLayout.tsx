import { Outlet, useLocation } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import FloatingActionButton from "../common/FloatingActionButton";

const MainLayout = () => {
  const location = useLocation();
  const showFAB = !["/create-post"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-dark-800">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        <Header />
        <main className="py-12">
          <Outlet />
        </main>
        <Footer />
      </div>
      {showFAB && <FloatingActionButton />}
    </div>
  );
};

export default MainLayout;
