import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAnimeDetails } from "../api"; 
import Navbar from "../components/Navbar";

const Details = () => {
  const { id } = useParams(); // Récupérer l'ID de l'animé depuis l'URL
  const [anime, setAnime] = useState(null);

  // Récupérer les détails de l'animé lorsque l'ID change
  useEffect(() => {
    const getAnimeDetails = async () => {
      try {
        const details = await fetchAnimeDetails(id);
        setAnime(details); // Sauvegarder les détails de l'animé dans l'état
      } catch (error) {
        console.error("Erreur lors de la récupération des détails de l'animé :", error);
      }
    };
    getAnimeDetails();
  }, [id]); // Réexécuter chaque fois que l'ID change

  if (!anime) {
    return <div>Loading...</div>; // Afficher un loader 
  }

  return (
    <div>
  {/* Navbar */}
  <Navbar/>


  {/* Détails de l'animé */}
  <h1 className="text-center my-4">{anime.title}</h1>

  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card mb-4">
        {/* Image de l'animé  */}
        <img
          src={anime.images.jpg.image_url}
          className="card-img-top"
          alt={anime.title}
          style={{
            height: "300px",  
            objectFit: "cover",  
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{anime.title}</h5>
          <p className="card-text">{anime.synopsis}</p>
          <p><strong>Genres:</strong> {anime.genres.map((genre) => genre.name).join(", ")}</p>
          <p><strong>Score:</strong> {anime.score}</p>
          <p><strong>Episodes:</strong> {anime.episodes}</p>
          <p><strong>Premier Diffusion:</strong> {anime.aired.string}</p>
          <p><strong>Studio:</strong> {anime.studios.map((studio) => studio.name).join(", ")}</p>
          <p><strong>Durée:</strong> {anime.duration}</p>
        </div>
        <div className="card-footer text-center">
          <Link to="/list" className="btn btn-primary">
            Retour à la liste
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Details;
