import { NavbarSatu } from "../components/navbar";
import { FooterSatu } from "../components/Footer";
import Home from "../pages/Home";

export default function MainLayout() {
  return (
    <>
      <header></header>
      <nav>
        <NavbarSatu />
      </nav>
      <main className="p-4 h-screen bg-blue-50">
        <Home />
      </main>
      <footer>
        <FooterSatu />
      </footer>
    </>
  );
}
