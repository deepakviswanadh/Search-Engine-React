import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID VTgWAm_KksurfPaJNXUbaTYxrNR_uCLMfHw9V-jA6dI",
  },
});
