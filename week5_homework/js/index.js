//1. Use a public API
//2. Update the DOM based on the response from the API
$(function(){

    // //SUPER basic example
    // $.get("http://headshot.mockable.io/menu", function(response) {
    //     $('body').append(response.brunch[0].name);
    // });

    var response = firebase.database();
    var table = response.ref("new_table");

    table.set({folder:"portfolio"});

    data.on('value', function(response) {
        var folder = response.val();
      }
      $('#display').html(''); //reset songs
      for(key in dispplay) {
          var dish = display[key];
          console.log(cool_art_stuff);
        }
        $('#display').append(s);
    });



        $('#addArt').on('click', function(event){

          var art = {
              image: $('#image').val()
          });
          $('#art').val('');

          data.push(art);
        };


        $('#menu').on('click', '.delete', function(){
          var id = $(this).data('id');
});
