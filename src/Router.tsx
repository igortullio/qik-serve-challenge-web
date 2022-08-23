import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}