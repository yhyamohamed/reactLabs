import "./App.css";
import Error from "./components/Error";
import Home from "./components/Home";
import ListAllArtists from "./components/ListAllArtists";
import Navbar from "./components/Navbar";
import ShowArtist from "./components/ShowArtist";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
    <div className="container mt-5 bg-light p-1">

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/artists" element={<ListAllArtists />}></Route>
        <Route path="/artists/:id" element={<ShowArtist />}></Route>
        <Route path="Error" element={<Error />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
