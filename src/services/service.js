import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default {
    fetchMovies() {
        return firebase.database().ref('/movies').once('value');
    },
}