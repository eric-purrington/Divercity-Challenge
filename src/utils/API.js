export default {
    getJobs: function() {
        return fetch("https://divercity-test.herokuapp.com/jobs", {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    loginUser: function(username, password) {
        return fetch("https://divercity-test.herokuapp.com/login", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username, 
                "password": password
            }),
            redirect: 'follow'
          })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }, 
    registerUser: function(name, username, password) {
        return fetch("https://divercity-test.herokuapp.com/register", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username, 
                "password": password, 
                "name": name
            }),
            redirect: 'follow'
          })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }, 
    applyToJob: function(motivation, cover_letter) {
        return fetch("https://divercity-test.herokuapp.com/jobs/2/apply", {
            method: 'POST',
            headers: {"Content-Type": "application/x-www-form-urlencoded", "Authorization": "a token"},
            body: {
                "motivation": motivation, 
                "cover_letter": cover_letter
            },
            redirect: 'follow'
          })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}