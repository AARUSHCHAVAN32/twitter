function adduser(){
    nameofperson=document.getElementById("user_name").value
    localStorage.setItem("username",nameofperson)
    window.location = "kwitter_room.html"
}