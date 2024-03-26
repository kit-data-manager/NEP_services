//The backend service URL for the base-repo instance used by the frontend.
export const ajaxBaseUrl = "http://localhost:8081/api/v1/";
//export const ajaxBaseUrl = "https://demo.datamanager.kit.edu:8443/base-repo/api/v1/";

//Supported tags which can be used to tag single files in base-repo. Be aware that while the actual tag (name) will be
//stored in base-repo, the color is just used on the frontend-level and might be different/not available when accessing
//the same base-repo instance with a frontend configured differently.
export const tags = [
    {"name":"rawData", "color":"red"},
    {"name":"analyzedData", "color":"green"},
    {"name":"document", "color":"blue"},
    {"name":"code", "color":"orange"},
    {"name":"deprecated", "color":"black"}
];

//The app description used to customize the frontend, e.g., for a specific project with a custom title and subtitle.
export const appDescription = {
    "app-logo":"./images/disks.jpg",
    "app-title":"Base-Repo Demonstrator",
    "app-subtitle":"Data Resource Management"
};

//Enable/disable the Elastic search functionality. The availability of the search depends on the configuration of
//the configured base-repo instance. If Elastic search is not configured for the underlying base-repo, it should
//also be disabled here.
export const searchEnabled = true;






