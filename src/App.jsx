import { Route, Routes } from "react-router-dom";
import { Product } from "./pages/mainpage/Product";
import { Tabungan } from "./pages/mainpage/Tabungan";
import { Blog } from "./pages/mainpage/Blog";
import { Kontak } from "./pages/mainpage/Kontak";
import { Home } from "./pages/mainpage/Home";
import { ProductDetail } from "./pages/mainpage/Product-Detail";
import { ToRegistration } from "./pages/auth/ToRegistration";
import { ProductOrder } from "./pages/mainpage/product-order";
import { RegistrationTravel } from "./pages/auth/travel/RegistrasionTravel";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/produk" element={<Product></Product>}></Route>
        <Route
          path="/produk/detail/:id"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route
          path="/produk/order/:id"
          element={<ProductOrder></ProductOrder>}
        ></Route>
        <Route path="/tabungan" element={<Tabungan></Tabungan>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/kontak" element={<Kontak></Kontak>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/daftar"
          element={<ToRegistration></ToRegistration>}
        ></Route>
        <Route
          path="/daftar/travel"
          element={<RegistrationTravel></RegistrationTravel>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
