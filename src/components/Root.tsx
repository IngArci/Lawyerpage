import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { WhatsAppButton } from "./WhatsAppButton";
import { LanguageProvider } from "../contexts/LanguageContext";

export default function Root() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}