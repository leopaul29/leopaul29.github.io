// lib/ga.ts
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-BH054VC7YD";

export const initGA = () => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackEvent = (category, action, label) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};
