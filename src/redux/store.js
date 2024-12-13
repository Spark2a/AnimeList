import { configureStore } from "@reduxjs/toolkit"; //fonction react qui configure le store
import animeReducer from "./animeSlice";  // controle l'état 

// Store utilisant  Redux Toolkit
export const store = configureStore({
  reducer: {
    anime: animeReducer, 
  },
});
