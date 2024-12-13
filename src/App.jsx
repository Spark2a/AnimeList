import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Details from "./pages/Details";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Router basename="/AnimeList">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirige vers la page d'accueil si la route ne correspond à rien */}
      </Routes>
    </Router>
  );
}

export default App;
