import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
  name: "animeList",
  initialState: {
    list: [], // Liste d'animés ajoutés par l'user
  },
  reducers: {
    addAnime: (state, action) => { // Ajouter un anime à la liste
      state.list.push(action.payload);
    },
    removeAnime: (state, action) => { // supp un anime de la liste
      state.list = state.list.filter((anime) => anime.mal_id !== action.payload);
    },
  },
});

export const { addAnime, removeAnime } = animeSlice.actions;
export default animeSlice.reducer;