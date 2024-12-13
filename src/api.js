import axios from "axios";

const API_URL = "https://api.jikan.moe/v4";

// Fonction pour récupérer les animés populaires
export const fetchAnimes = async () => {
  const response = await axios.get(`${API_URL}/top/anime`);
  return response.data.data; // Liste des animés
};

// Fonction pour récupérer les détails d'un animé 
export const fetchAnimeDetails = async (id) => {
  const response = await axios.get(`${API_URL}/anime/${id}`);
  return response.data.data; // Détails d'un animé
};

// Fonction pour rechercher des animés mot clef
export const searchAnime = async (searchTerm) => {
  const response = await axios.get(`${API_URL}/anime`, {
    params: { q: searchTerm, limit: 8 }, // Paramètres de recherche
  });
  return response.data.data; // Résultats de recherche
};
