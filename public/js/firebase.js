let firebaseConfig = {
    apiKey: "AIzaSyDC0lNHsGGXhCt0DA3paOgxxuHowOh176E",
    authDomain: "prayaaslegal-blogs.firebaseapp.com",
    projectId: "prayaaslegal-blogs",
    storageBucket: "prayaaslegal-blogs.appspot.com",
    messagingSenderId: "936782422525",
    appId: "1:936782422525:web:a1fdb2ecf794bf6abcb994"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore(); 
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}