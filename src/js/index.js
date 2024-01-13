import "@fortawesome/fontawesome-free/js/all.min.js";
import "../style/index.scss";
import { initConsumptionDetails } from "./consumption-details";
import { initCurrentAsset } from "./current-asset";

const initApp = () => {
  initCurrentAsset();
  initConsumptionDetails();
  // initXX();
};

initApp();