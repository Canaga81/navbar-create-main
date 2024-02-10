import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Unity from "./pages/Unity/Unity";
import Ehtrade from "./pages/Ehtrade/Ehtrade";
import YusifMMC from "./pages/YusifMMC/YusifMMC";
import NavHeader from "./components/NavHeader/NavHeader";
import Footer from "./components/Footer/Footer";
import Interyer from "./pages/Interyer/Interyer";
import Sidebar from "./components/Sidebar/Sidebar";
import SuEsasliBoyalar from "./pages/SuEsasliBoyalar/SuEsasliBoyalar";
import Sellozik_boyalar from "./pages/Sellozik_boyalar/SellozikBoyalar";
import HammentonBoya from "./pages/HammentonBoyalar/HammentonBoya";
import Sintetik_boyalar from "./pages/Sintetik_boyalar/Sintetik_boyalar";
import Sellozik_ve_Sintetik_tiner from "./pages/Sellozik_ve_Sintetik_tiner/Sellozik_ve_Sintetik_tiner";
import SenayeBoyalari from "./pages/SənayeBoyalar/SənayeBoyalari";

function App() {
  return (
    <>

      <BrowserRouter>
        <NavHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          {/* Doğru yolları kullanın */}
          <Route path="/unity" element={<Unity />} />
          <Route path="/ehtrade" element={<Ehtrade />} />
          <Route path="/yusifummmc" element={<YusifMMC />} />
          <Route path="/interyer" element={<Interyer />} />
          <Route path="/suesasliboyalar" element={<SuEsasliBoyalar/>} />
          <Route path="/sellozikboyalar" element={<Sellozik_boyalar/>} />
          <Route path="/hammentonboyalar" element={<HammentonBoya />} />
          <Route path="/sintetikboyalar" element={<Sintetik_boyalar/>} />
          <Route path="/sellozikvesintetiktiner" element={<Sellozik_ve_Sintetik_tiner/>} />
          <Route path="/sənayeboyalari" element={<SenayeBoyalari/>} />
          
        </Routes>

        <Sidebar />

        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
