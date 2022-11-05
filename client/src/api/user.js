import axios from "axios"

const API = axios.create({baseURL: "http://localhost:8000/api/user/"})

export const loginUser = () => API.post("/logout")
