import http from "k6/http";
import { API_URL } from "../../config.js";
import { handleSummary } from "../reports.js";

export default function () {
  const res = http.get(`${API_URL}/crocodiles/`);

  if (res.status !== 200) {
    console.error(`Erro no teste de fumaça: status ${res.status}`);
  }
}

export { handleSummary }; 