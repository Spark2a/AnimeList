import React, { useState } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { addAnime, removeAnime } from "../redux/animeSlice";
import { searchAnime } from "../api";
import { Link } from "react-router-dom";

const List = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Redux hooks
  const animeList = useSelector((state) => state.anime.list);
  const dispatch = useDispatch();

  // Gestion de la recherche
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      try {
        const results = await searchAnime(searchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
      }
    }
  };

  // Ajouter un animé à la liste avec gestion des doublons avec methode some
  const handleAddAnime = (anime) => {
    // Vérifier si l'animé est déjà dans la liste
    if (!animeList.some((item) => item.mal_id === anime.mal_id)) {
      dispatch(addAnime(anime));
    } else {
      alert("Cet animé est déjà dans votre liste !");
    }
  };

  // Supprimer un animé de la liste
  const handleRemoveAnime = (id) => {
    dispatch(removeAnime(id));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MyAnimeList
          </Link>
          <div>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <h1 className="text-center my-4">Ma Liste d'Animés</h1>
        
        {/* Formulaire de recherche */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher un animé..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Rechercher
            </button>
          </div>
        </form>
        
        {/* Résultats de recherche */}
        <div className="row mb-4">
          {searchResults.map((anime) => (
            <div key={anime.mal_id} className="col-md-3 mb-3">
              <div className="card">
                <img
                  src={anime.images.jpg.image_url}
                  className="card-img-top"
                  alt={anime.title}
                  style={{ maxHeight: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{anime.title}</h6>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleAddAnime(anime)}
                  >
                    Ajouter
                  </button>
                  <Link to={`/details/${anime.mal_id}`} className="btn btn-primary btn-sm m-2">
                    Voir les détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Liste d'animés */}
        <h2>Ma Liste</h2>
        <div className="row">
          {animeList.map((anime) => (
            <div key={anime.mal_id} className="col-md-3 mb-3">
              <div className="card">
                <img
                  src={anime.images.jpg.image_url}
                  className="card-img-top"
                  alt={anime.title}
                  style={{ maxHeight: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{anime.title}</h6>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveAnime(anime.mal_id)}
                  >
                    Supprimer
                  </button>
                  <Link to={`/details/${anime.mal_id}`} className="btn btn-primary btn-sm m-2">
                    Voir les détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
