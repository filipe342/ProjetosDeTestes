import http from "k6/http";
import { API_URL } from "../../config.js";

export default function () {
  const res = http.get(`${API_URL}/crocodiles/`);

  if (res.status !== 200) {
    console.error(`Erro ao obter crocodilos: status ${res.status}`);
  }
}