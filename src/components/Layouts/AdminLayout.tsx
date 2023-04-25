import AdminNavbar from "../Navbar/AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <main className="w-full min-h-screen flex">
        <AdminSidebar className="w-1/5" />
        <section className="content w-4/5 bg-neutral-50 p-4">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
