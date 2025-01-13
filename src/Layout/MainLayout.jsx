import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="duration-500 dark:bg-[#010313]  dark:text-white">

      <main className="min-h-[45vh]">
        <Outlet></Outlet>
      </main>

      <footer className="bg-[#f9f9f9] dark:bg-[#0a1020]">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
