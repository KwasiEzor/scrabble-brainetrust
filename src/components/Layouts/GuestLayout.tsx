import _Navbar from "../Navbar/_Navbar";
import _Footer from "../Footer/_Footer";
import { Outlet } from "react-router-dom";
import _Container from "../Others/_Container";
const GuestLayout = () => {
  return (
    <>
      <_Navbar />
      <main className="min-h-screen w-full px-8 sm:px-4 border-[1px] border-slate-50">
        <_Container>
          <Outlet />
        </_Container>
      </main>
      <_Footer />
    </>
  );
};

export default GuestLayout;
