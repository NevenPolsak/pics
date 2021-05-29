import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3O9vlfJQyBla14L0j_itWVW6OEtgsug2kaK5UFeOc6c",
  },
});
