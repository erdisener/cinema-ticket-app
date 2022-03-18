import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

export default {
    fetchMovies() {
        return firebase.database().ref('/movieList').once('value');
    },
}