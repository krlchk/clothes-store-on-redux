import { Header } from "./containers/header";
import { Route, Routes } from "react-router-dom";
import { ProductListing } from "./containers/product-listing";
import { ProductDetail } from "./containers/product-detail";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}/>
        <Route>404 not found!</Route>
      </Routes>
    </>
  );
}

export default App;
