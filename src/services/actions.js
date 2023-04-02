// konstante
export const FETCH_USERDATA_SUCCESS = 'FETCH_USERDATA_SUCCESS';
export const FETCH_REPOSDATA_SUCCESS = 'FETCH_REPOSDATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const DELETE_USER_DATA = "DELETE_USER_DATA";
export const DELETE_REPOS_DATA = "DELETE_REPOS_DATA";


// dohvaćanje podataka
export function fetchUserData(userName) {
    return dispatch =>
      fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => dispatch({type: FETCH_USERDATA_SUCCESS, data}))
        .catch(error => dispatch({type: FETCH_DATA_ERROR, error: error.toString()}));
  }

export function fetchReposData(userName) {
    return dispatch =>
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json())
        .then(data => dispatch({type: FETCH_REPOSDATA_SUCCESS, data}))
        .catch(error =>dispatch({type: FETCH_DATA_ERROR, error: error.toString()}));
}


// brisanje podataka
export function deleteUserData() {
  return dispatch => dispatch({type: DELETE_USER_DATA, data: null});
}

export function deleteReposData() {
  return dispatch => dispatch({type: DELETE_REPOS_DATA, data: []});
}

