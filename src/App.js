import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Customer from "./pages/customer/Customer";
import Products from "./pages/products/Products";
import Quote from "./pages/quote/Quote";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quotes" element={<Quote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
