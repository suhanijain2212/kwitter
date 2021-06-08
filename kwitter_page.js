//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAffNSLCEoAbKZUxAxhCOdinkQXOnY2d1o",
    authDomain: "practice-70e9f.firebaseapp.com",
    databaseURL: "https://practice-70e9f-default-rtdb.firebaseio.com",
    projectId: "practice-70e9f",
    storageBucket: "practice-70e9f.appspot.com",
    messagingSenderId: "1039482373556",
    appId: "1:1039482373556:web:df596eb14f128585b11ee1",
    measurementId: "G-WHV4WHRZBP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4";
message_with_tag = "<h4 class='messageh4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick= 'updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like"+ like + "</span></button><hr>";
row = name_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like;"+ like +"</span></button><hr>";
document.getElementById("output").innerHTML += row;


//End code
    } });  }); }
getData();

function send()
{
    msg= document.getElementById("msg").nodeValue;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
}
