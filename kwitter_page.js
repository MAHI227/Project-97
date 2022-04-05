
  var firebaseConfig = {
      apiKey: "AIzaSyAQOQJrFTPM0L7sEZKGhyk9MPznDCie5ys",
      authDomain: "kwitter-app-5874a.firebaseapp.com",
      databaseURL: "https://kwitter-app-5874a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-5874a",
      storageBucket: "kwitter-app-5874a.appspot.com",
      messagingSenderId: "882510531703",
      appId: "1:882510531703:web:ede95852412f04a0a84a72"
    };
    
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
    function send()
{
msg=document.getElementById("msg").value;
console.log(msg);
firebase.database().ref(room_name).push({

      name:user_name,
      message:msg,
      like:0
});
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
      console.log(message_data);
name= message_data["name"];
message=message_data["message"];
      like=message_data["like"];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML+=row;      
} });  }); } 
getData();

function updateLike(message_id){
console.log("click on like button -"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
      updatedLike=Number(likes)+1;
      console.log(updatedLike);

            firebase.database().ref(room_name).child(message_id).update({
            like:updatedLike
            });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
