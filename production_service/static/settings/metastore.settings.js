//The backend service URL for the MetaStore instance used by the frontend.
export const ajaxBaseUrl = "http://localhost:8041/api/v1/";
//export const ajaxBaseUrl = "https://demo.datamanager.kit.edu:8443/metastore/api/v1/";

//The app description used to customize the frontend, e.g., for a specific project with a custom title and subtitle.
export const appDescription = {
    "app-logo":"/static/images/NEP.png",
    "app-title":"NFFA-Europe Data Management and Virtual Access Service",
    "app-subtitle":"NMR Metadata Query and MRI Contrast Prediction",
};

//Enable/disable the Elastic search functionality. The availability of the search depends on the configuration of
//the configured MetaStore instance. If Elastic search is not configured for the underlying MetaStore, it should
//also be disabled here.
export const searchEnabled = false;
