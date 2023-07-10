user_name = localStorage.getItem("username")
document.getElementById("user_name").innerHTML = "welcome "+ user_name
const firebaseConfig = {
      apiKey: "AIzaSyCeUUKCLkXKWISgcwGBOnyYhFevuCQ3NSw",
      authDomain: "kwitter-1a388.firebaseapp.com",
      databaseURL: "https://kwitter-1a388-default-rtdb.firebaseio.com",
      projectId: "kwitter-1a388",
      storageBucket: "kwitter-1a388.appspot.com",
      messagingSenderId: "720334766516",
      appId: "1:720334766516:web:4755a6cd8cbf9d973ab2e1",
      measurementId: "G-0DL2JQEYF2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names are - " + Room_names)
      row = "<div class='room_name' id = "+Room_names + " onclick = 'redirect(this.id)'> #"+Room_names + " </div> " ; 
      document.getElementById("output").innerHTML += row
      //End code 
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      }) ; 
      localStorage.setItem("my room name is", room_name)
      window.location = "kwitter_page.html"
}
function redirect(name)
{
      console.log(name)
      localStorage.setItem("theroomihaveclickedis",name)
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("my room name is")
      window.location = "index.html"
}