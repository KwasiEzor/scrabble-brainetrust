import "./App.css";
import { Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/Welcome/WelcomePage";
import AboutPage from "./pages/About/AboutPage";
import GuestLayout from "./components/Layouts/GuestLayout";
import GamesPage from "./pages/Games/GamesPage";
import ContactPage from "./pages/Contact/ContactPage";
import BlogPage from "./pages/Blog/BlogPage";
import ClubsPage from "./pages/Clubs/ClubsPage";
import MembersPage from "./pages/Members/MembersPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import ScrabblePage from "./pages/Scrabble/ScrabblePage";
import AdminLayout from "./components/Layouts/AdminLayout";
import AdminPage from "./pages/Admin/AdminPage";
import DocsPage from "./pages/Docs/DocsPage";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage";
import PasswordResetPage from "./pages/PasswordReset/PasswordResetPage";
import HomePage from "./pages/Home/HomePage";
import { ToastContainer } from "react-toastify";
import AgendaPage from "./pages/Agenda/AgendaPage";
import ScrollButton from "./components/Buttons/ScrollButton";

function App() {
  return (
    <>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/scrabble" element={<ScrabblePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
        </Route>
      </Routes>
      <ToastContainer />
      <ScrollButton />
    </>
  );
}

export default App;
