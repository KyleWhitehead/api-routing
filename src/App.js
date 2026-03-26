import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Posts />} />
    </Routes>
  );
}

export default App;
