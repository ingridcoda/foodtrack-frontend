const foodId = 0;
const userId = 0;


function login(_document, password) {
    axios.get('http://localhost:3000/user/login?document=' + _document + '&password=' + password, {})
        .then(response => {
            console.log(response)
            window.location.href = "tracking.html";
        })
        .catch(error => {
            console.log(error)
        })
}

function logout() {
    axios.get('http://localhost:3000/user/logout', {})
        .then(response => {
            console.log(response)
            window.location.href = "logout.html";
        })
        .catch(error => {
            console.log(error)
        })
}

function register(name, doc, password, confirmPassword, telephone, userFunction) {
    this.userId++;
    axios.get('http://localhost:3000/user/register?document=' + doc + 'name=' + name + '&email=' + password + '&confirmPassword='+ confirmPassword + '&telephone='+ telephone + '&userFunction='+ userFunction,  {})
        .then(response => {
            console.log(response)
            window.location.href = "tracking.html";
        })
        .catch(error => {
            console.log(error)
        })
}

function userExists() {
    axios.get('http://localhost:3000/user/userExists', {})
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}


function getFood() {
    axios.get('http://localhost:3000/food/food', {})
        .then(response => {
            console.log(response);
            window.location.href = "tracking-and-incident-data.html";
        })
        .catch(error => {
            console.log(error)
        })
}

function foodExists() {
    axios.get('http://localhost:3000/food/foodExists', {})
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

function insertNewTrackingStep() {
    axios.get('http://localhost:3000/food/insertNewTrackingStep', {})
        .then(response => {
            console.log(response);
            window.location.href = "register-successful.html";
        })
        .catch(error => {
            console.log(error)
        })
}

function insertNewIncident(_barCode, incidentType, disposal) {
    axios.get('http://localhost:3000/food/insertNewIncident?barCode=' + _barCode + 'incidentType=' + incidentType + '&disposal=' + disposal, )
        .then(response => {
            console.log(response);
            window.location.href = "register-successful.html";
        })
        .catch(error => {
            console.log(error)
        })
}

function trackFood(_barCode) {
    axios.get('http://localhost:3000/food/trackFood?barCode=' + _barCode, {})
        .then(response => {
            console.log(response);
            window.location.href = "tracking-and-incident-data.html";
        })
        .catch(error => {
            console.log(error)
        })
}

function goToHome() {
    window.location.href = "index.html";
}

function goToRegister() {
    window.location.href = "register.html";
}

function goToTracking() {
    window.location.href = "tracking.html";
}

function goToRegisterStep() {
    window.location.href = "register-tracking-step.html";
}

function goToRegisterIncident() {
    window.location.href = "register-incident.html";
}

function goToRegisterSuccessful() {
    window.location.href = "register-successful.html";
}