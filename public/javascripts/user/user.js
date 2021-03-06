// Connect to socket io, detect if we are working on localhost or if we are in prod
var url = 'https://settle-alaurelut.c9users.io';
if (document.location.hostname == "localhost") {
    url = 'localhost';
    var port = 3000;
    var socket = io.connect(url + ':' + port + '/');
}else{
    var socket = io.connect(url);
}

socket.on('notifiedUser', function(data) {
    // display a notification for 5 seconds on navbar
    var notif = document.getElementById('notif');
    var user = JSON.parse(window.localStorage['userData'] || '{}');
    if (data.friendId == user.facebookId) {
        setTimeout(function() {
                notif.innerHTML = '';
            },
            5000);
        notif.innerHTML += '<a href="/room/' + data.room + '">' + data.userName + ' vous invite à rejoindre sa Room ' + data.descriptionRoom + '</a>';
    }
});
