import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import NotFound from "./components/NotFound/Notfound";


function App() {
  return (
    <>
      <BrowserRouter>
      <div id="container">
        <Header />
        <div id="main-content">
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
