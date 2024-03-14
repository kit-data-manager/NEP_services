// requires jQuery in HTML, like this:
// <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
let keycloak = undefined;
let config = undefined;

function userLoggedIn(_login, _messageCallback, _loginCallback) {
    let username = undefined;
    if (_login) {
        $("#login_icon").attr("class", "sign-out icon")
        $("#login_button_text").text("Logout");
        _messageCallback(0, 'User ' + keycloak.idTokenParsed.preferred_username + ' logged in.');
        config.token = keycloak.token;
        localStorage.setItem("userLoggedIn", true);
        localStorage.setItem("token", config.token);
        username = keycloak.idTokenParsed.preferred_username;
    } else {
        $("#login_icon").attr("class", "sign-in icon")
        $("#login_button_text").text("Login");
        config.token = null;
        localStorage.removeItem("userLoggedIn", true);
        localStorage.removeItem("token", true);
    }
    _loginCallback(_login, username);
}

function applyConfig(_keycloak,
                     _showServiceUrl,
                     _appDescription,
                     _config,
                     _messageCallback = (status, message) => console.log((status == 0)?"INFO: ":"ERROR:" + ": " + message),
                     _loginCallback= (loggedIn, username) => console.log("Logged in: " + loggedIn + "as User: " + username)) {
    keycloak = _keycloak;
    config = _config;
    if (!_showServiceUrl) {
        $('#service-url-input').empty();
    }
    // set header
    $('#app-logo').attr("src", _appDescription["app-logo"]);
    let header = _appDescription["app-title"] +
        '<div id="app-subtitle" class="sub header">' + _appDescription["app-subtitle"] + '</div>';
    
    $('#app-title').html(header);

    if (typeof keycloak != typeof undefined) {
        keycloak.onAuthSuccess = function () {
            userLoggedIn(true, _messageCallback, _loginCallback);
        };
        keycloak.onAuthLogout = function () {
            userLoggedIn(false, _messageCallback, _loginCallback);
        };
    
        keycloak.onTokenExpired = () => {
            addMessage(0, 'Keycloak token expired. Trying to refresh.');
            keycloak.updateToken(30).success(() => {
                _messageCallback(0, 'Successfully got a new token.');
                config.token = keycloak.token;
                if(loginCallback) loginCallback(true, keycloak.idTokenParsed.preferred_username);
            }).catch(() => {
                _messageCallback(1, "Failed to refresh keycloak token.");
                userLoggedIn(false, _messageCallback, _loginCallback)
                config.token = null;
                if(loginCallback) loginCallback(false, undefined);
            });
        };
    
        keycloak.init({
            responseMode: 'fragment',
        });
    
        $("#login_button").click(() => {
            if ($("#login_button_text").text() === "Login") {
                keycloak.login();
            } else {
                keycloak.logout();
            }
        });
    } else {
        $("#login_button").attr("style", "display:none");
        if($("#logged_in_as")) {
            $("#logged_in_as").attr("style", "display:none");
        }
    }
}
