import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./mycomponents/navbar";
import SmartKeys from "./pages/smart-keys";
import RemoteKeys from "./pages/remote-keys";
import CarKeyCovers from "./pages/car-key-covers";
import CarKeyShells from "./pages/car-key-shells";
import CarBatteries from "./pages/car-batteries";
import Admin from "./pages/admin";
import Footer from "./mycomponents/footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" />
          <Route path="/admin"  element={<Admin/>}/>
          <Route path="/auth" />
          <Route path="/smart-keys" element={<SmartKeys/>} />
          <Route path="/#" element={<RemoteKeys/>}/>
          <Route path="/car-key-covers" element={<CarKeyCovers/>} />
          <Route path="/car-key-shells" element={<CarKeyShells/>} />
          <Route path="/car-batteries" element={<CarBatteries/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
