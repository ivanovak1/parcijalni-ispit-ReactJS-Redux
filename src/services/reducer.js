import {FETCH_USERDATA_SUCCESS, FETCH_REPOSDATA_SUCCESS, FETCH_DATA_ERROR, DELETE_USER_DATA, DELETE_REPOS_DATA} from "./actions";

export function reducer(state = {dataError: null, userData: null, reposData: []}, action) {
    switch (action.type) {
      // dohvaćanje podataka + greška
      case FETCH_USERDATA_SUCCESS:
        return {...state, userData: action.data};
      case FETCH_REPOSDATA_SUCCESS:
        return {...state, reposData: action.data};
      case FETCH_DATA_ERROR:
        return {...state, dataError: action.error};
        // brisanje podataka
      case DELETE_USER_DATA:
        return {...state, userData: action.data};
      case DELETE_REPOS_DATA:
        return {...state, reposData: action.data};
        // ako ne prepozna akciju
      default:
        return state;
    }
  }