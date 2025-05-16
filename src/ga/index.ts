// src/ga/index.ts
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-CFXCFQ3P3Z"); // <-- substitui pelo teu ID GA4
};

export const sendPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};