 import * as firebase from "firebase";
 
 const config = {
    apiKey: "AIzaSyAnMTWCDIJqw4ILB6p-TifS6eX0f8R0FOs",
    authDomain: "filipinomovies-e99fa.firebaseapp.com",
    databaseURL: "https://filipinomovies-e99fa.firebaseio.com",
    projectId: "filipinomovies-e99fa",
    storageBucket: "filipinomovies-e99fa.appspot.com",
    messagingSenderId: "520585762715"
};
firebase.initializeApp(config);

const database = firebase.database();

/*
const votesRef = database.ref('/votes');

votesRef.push({voted: true});
votesRef.on('child_added').then((child) => {
    this.setState({count: 10});
});
*/


export default {database};