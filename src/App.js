import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { AnimatePresence } from "framer-motion";
import Register from "./pages/Register";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import VenuePage from "./pages/VenuePage";
import ContactPage from "./pages/ContactPage";
import Invited from "./pages/Invited";
import PresidentLetter from "./pages/PresidentLetter";
import CongressDates from "./pages/CongressDates";
import Programm from "./pages/Programm";
import Abstract from "./pages/Abstract";
import CongressGalery2024 from "./pages/CongressGalery2024";

function App() {
  return (
    <>
       <BrowserRouter>
          <Header />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/invited-speakers" element={<Invited />} />
                <Route path="/president-invitation" element={<PresidentLetter />} />
                <Route path="/date-of-congress" element={<CongressDates />} />
                <Route path="/venue" element={<VenuePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/view-the-programm" element={<Programm />} />
                <Route path="/abstracts" element={<Abstract />} />
                <Route path="/congress-2024-galery" element={<CongressGalery2024 />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
              <Footer />
            </AnimatePresence>
        </BrowserRouter>
    </>
  );
}

export default App;
