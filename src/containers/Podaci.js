import {useState} from "react";
import Prikaz from "../components/Prikaz";
import Obrazac from "../components/Obrazac";

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {fetchUserData, fetchReposData, deleteUserData, deleteReposData} from "../services/actions";
import {getUserData, getReposData, getDataError} from "../services/connectFunctions";


function Podaci() {

    // stanje
    const [userName, setUserName] = useState(null);
   
     // Redux
     const user = useSelector(getUserData); // podaci o korisniku {}
     const repos = useSelector(getReposData); // [{}, {}, ...]
     const error = useSelector(getDataError);
     const dispatch = useDispatch(); // omogućuje poziv akcije


    // event handlers
    // dohvaćanje podataka - onClick
    const sendRequest = () => {
        // validacija
        if (userName) { // dohvaćanje podataka samo ako je nešto upisano u polje
            // pozivi akcija
            dispatch(fetchUserData(userName));
            dispatch(fetchReposData(userName));
        } else {
            alert("Upišite ime GitHub korisnika.");
            // pozivi akcija
            // dispatch(deleteUserData());
            // dispatch(deleteReposData());
        }
    }
    
    // unos imena korisnika u polje - onChange
    const handleUserName = (event) => {
        const value = event.target.value;
        setUserName(value.trim()); // u stanje se sprema vrijednost bez suvišnih razmaka
    }

    // brisanje podataka - onClick
    const deleteData = () => {
        // pozivi akcija
        dispatch(deleteUserData());
        dispatch(deleteReposData());
        // promjena stanja
        setUserName(null);
    }
 
    // uvjetno iscrtavanje
    return (
        <div>
            {!user && !(repos.length > 0) ? <Obrazac onUserNameChange={handleUserName} onRequest={sendRequest} /> : error ? <div>{error.toString()}</div> : user && repos.length > 0 ? <Prikaz user={user} repos={repos} onDataDelete={deleteData} /> : <div><Obrazac onUserNameChange={handleUserName} onRequest={sendRequest} /><span style={{color: "red"}}>Nema podataka o korisniku.</span></div>}
        </div>
    );
}

export default Podaci;