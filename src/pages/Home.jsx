import { useEffect, useState } from "react";
import { fetchAnimes } from "../api";
import { Link } from "react-router-dom";

function Home() {
  const [animes, setAnimes] = useState([]); //initialise l’état animes

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAnimes();
      setAnimes(data.slice(0, 16)); // Limite à 16 animés
    };
    fetchData();
  }, []);

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

      {/* Page Title */}
      <div className="container my-4">
        <h1 className="text-center">My Anime List</h1>
        <p className="text-center text-muted">
          Découvrez les animés populaires et créez votre propre <a class="Info link" href="/list">liste</a> !
        </p>
      </div>

      {/* Anime Cards */}
      <div className="container">
        <div className="row">
          {animes.map((anime) => (
            <div className="col-md-3 mb-4" key={anime.mal_id}>
              <div className="card h-100">
                <img
                  src={anime.images.jpg.image_url}
                  className="card-img-top"
                  alt={anime.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{anime.title}</h5>
                  <p className="card-text">
                    {anime.synopsis ? anime.synopsis.slice(0, 100) + "..." : ""}
                  </p>
                  <Link to={`/details/${anime.mal_id}`} className="btn btn-primary">
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
}

export default Home;
