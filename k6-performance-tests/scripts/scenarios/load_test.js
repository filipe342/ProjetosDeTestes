import { stages } from "../stages.js";
import { thresholds } from "../thresholds.js";
import getCrocodiles from "./get_crocodiles.js";
import { handleSummary } from "../reports.js";

export const options = {
  stages: stages,
  thresholds: thresholds,
};

export default function () {
  getCrocodiles();
}

export { handleSummary };