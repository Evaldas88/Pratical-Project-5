import { HashRouter, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import NotFound from "./components/NotFound/Notfound";


function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
