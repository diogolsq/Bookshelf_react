export const signup = (credentials, token) => {
    return dispatch => {
        return fetch('http://localhost:3000/users/sign_up', {
            credentials: 'include',
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          })
        .then(response => response.text())
        .then(userData => {
            if(userData.error){
                console.log(userData.errors)
            } else {
                dispatch(addUser(userData.data))
            }

        })
        .catch(console.log())
    }
}