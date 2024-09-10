//Keycloak configuration to use Keycloak as identity provider for single sign-on.
const keycloak = new Keycloak({
    url: 'https://auth.nffa.eu/auth',
    realm: 'NEP',
    clientId: 'metastore'
});
export { keycloak };

//Show the input for the backend service URL. This property should only be enabled for debugging.
export const showServiceUrl = false;

//The max. number of elements obtained in a single search request.
export const page_size = 5;
