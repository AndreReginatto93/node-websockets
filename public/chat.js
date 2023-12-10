// Make connection
var socket = io.connect('http://localhost:4000');

//DOM
var message = document.getElementById('message')
var button = document.getElementById('send')
var output = document.getElementById('output')

//Emit event
button.addEventListener('click', ()=>{
    socket.emit('chat', {
        message: message.value,
        messageOwner: socket.id,
    });
    message.value = ""
})

//Listen for events
socket.on('chat', (data) => {
    output.innerHTML += "<p><strong>"+data.messageOwner+":</strong>"+data.message+"</p>"
})