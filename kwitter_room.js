
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
document.getElementById("user_name").innerHTML=" Welcome " + user_name +"!" ;
  
function addRoom(){
    room_name=document.getElementById("room_name").value;
  localStorage.setItem("room_name",room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding user"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
    console.log("room_name = "+ Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+= row;  
      
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}