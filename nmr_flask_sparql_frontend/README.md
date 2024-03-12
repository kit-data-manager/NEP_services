# NMR Flask SPARQL frontend

This is the flask frontend for NMR SPARQL queries. This application is behind a keycloak.

## Endpoints
| Endpoint               | Description                                           |
|------------------------|-------------------------------------------------------|
| `/`                    | User Interface                                        |
| `/api`                 | JSON endpoint to get raw data, same url syntax as `/` |
| `/authenticate`        | Authentication endpoint, not for public use           |
| `/authenticate_return` | Authentication redirect endpoint, not for public use  |

## Local Test Setup
How to setup the flask server, the keychain authentication and the SPARQL database with example data.
The instructions are for a commpletely local test setup and will slighlty differ if you use existing services.
### Keycloak
1. Download the [Keycloak ZIP](https://www.keycloak.org/downloads)
2. Extract the zip and run `./bin/kc start-dev`
3. Open the Web interface at http://localhost:8080 and create an admin user
4. Create Realm (Optional: use "master" as existing default) 
    1. Select the dropdown menu in the top left displaying `Keycloak` -> `Create realm`
    2. Enter the Realm name and click create
5. Create Client
    1. Select `Clients` under `Manage` in the top left
    2. Select `Create client`
    3. Enter an `Client ID` which represents this application (`nmr_flask` used here as example) and set `Client type` to `OpenID Connect`
    4. Click on `Next`, leave everything under `Capability Config` at its default value here and click `Next` again
    5. Set the following values under `Login Settings` (or similar ones matching your setup)

        | Option                          | Value                   | Annotation                                        |
        |---------------------------------|-------------------------|---------------------------------------------------|
        | Root URL                        | `http://localhost:8080` | Flask URL                                         |
        | Home URL                        |                         | Empty, defaults to Root URL                       |
        | Valid redirect URIs             | `/*`                    | Any path on this server                           |
        | Valid post logout redirect URIs | `-`                     | We do not use this so we disable it with a hyphen |
        | Web origins                     | `+`                     | A plus enables all valid redirect URIs            |

### SPARQL
1. Start the [stain/jena-fuseki](https://hub.docker.com/r/stain/jena-fuseki/) docker container, exposing port `3030`: `docker run -p 3030:3030 -e ADMIN_PASSWORD=password stain/jena-fuseki`
2. Open the site in the browser http://localhost:3030 and login as user `admin` with password `password`
3. Create a new dataset `fdo_graph`
4. Select `add data` and upload the [example dataset](../testing/example_FDO_Graph/FDO-Graph.ttl)
Note that this port should not be exposed to the outside world using the flask app, this is purely localhost usage only.
### Flask
1. Install the required packages: `pip install -r requirements.txt`
2. Configure all the environment variables in [.env](./.env)

| Variable            | Default Value                             | Required | Description                                                  |
|---------------------|-------------------------------------------|----------|--------------------------------------------------------------|
| `FLASK_SECRET_KEY`  | `"secret"`                                | `true`   | Secret key to protect against cookie data tampering          |
| `FLASK_URL`         | `"localhost:8000"`                        | `true`   | Public application url                                       |
| `SPARQL_URL`        | `"http://localhost:3030/fdo_graph/query"` | `true`   | Private sparql url (port not exposed)                        |
| `KEYCLOAK_URL`      | `"http://localhost:8080"`                 | `true`   | Public Keycloak url (may be on different server)             |
| `KEYCLOAK_REALM`    | `"master"`                                | `true`   | Keycloak client management group, "master",exists by default |
| `KEYCLOAK_CLIENT`   | `"nmr_flask"`                             | `true`   | Keycloak client (application) id                             |
| `DEBUG_MODE`        | `"true"`                                  | `false`  | Whether to run flask in debug mode                           |

For deployment `DEBUG_MODE` **must** be set to false and `FLASK_SECRET_KEY` should be changed to a long random Base64 value.
Additionally `http` should be replaced with `https`, especially for Keycloak.
3. Start the application: `python3 app.py`
### Example Query
<table>
<tr>
    <td>User Interface</td>
    <td><a>http://localhost:8000/?record_attribute=digitalObjectLocation&attribute_value=b2share</a></td>
</tr>
<tr>
    <td>Raw Data</td>
    <td><a>http://localhost:8000/api?record_attribute=digitalObjectLocation&attribute_value=b2share</a></td>
</tr>
</table>