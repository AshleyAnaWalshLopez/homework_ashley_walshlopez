//Have a conversation with yourself!
//1. Create a click event on the addMessage button
//2. Inside the click event capture the input value of message
//3. Append the message to conversation
$('#message').val('How can I help?');
$('#addMessage').on('click', function(){
    var message = $('#message').val();
    $('#conversation').append('<li class="list-group-item list-group-item-success">'
    + message +
    '</li>'
  );
    $('#message').val('');

});
