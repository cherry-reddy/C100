// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBoQ18GVUBjsdFeM6SrRp6qvhTkgDo6Dv4",
    authDomain: "chatwebapp-9959c.firebaseapp.com",
    databaseURL: "https://chatwebapp-9959c-default-rtdb.firebaseio.com",
    projectId: "chatwebapp-9959c",
    storageBucket: "chatwebapp-9959c.appspot.com",
    messagingSenderId: "808060325714",
    appId: "1:808060325714:web:2a3e286b74f0c7491d748b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



