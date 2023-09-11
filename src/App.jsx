import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LibraryView from "./features/library/LibraryView";
import FetchBooksView from "./features/fetchBooks/FetchBooksView";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LibraryView/>}/>
        <Route path="/search" element={<FetchBooksView/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
