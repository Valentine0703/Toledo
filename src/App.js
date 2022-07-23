
import Home from "./page/Home";
import Nosotros from "./page/Nosotros";
import Vehiculos from "./page/Vehiculos";
import Grupos from "./page/Grupos";
import Blog from "./page/Blog";
import Contacto from "./page/Contacto";
import Admin from "./page/Admin";
import Order from "./page/Admin/Order";
import Customer from "./page/Admin/Customer";
import Car from "./page/Admin/Car";
import {useMediaQuery} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/admin/customer" element={<Customer />} />
        <Route path="/admin/car" element={<Car />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
