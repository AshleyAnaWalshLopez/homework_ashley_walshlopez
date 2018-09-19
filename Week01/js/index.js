//Declare a variable and assign a value
// like var name = "your name";

var birth = 11;
var gender = "boy";
$('#yourButton').on('click', yourFunction);

function yourFunction()
{
    //use your variablef somewhere inside this function
if(birth >= 11){
  gender = "girl";
}

    $('#result').html(gender);
    console.log("#yourButton was clicked");

}

/*
I tried to create a second button, however, I found these button functions
override the old button.  Would I need to create a seperate file to do this?
Or am I just getting ahead of myself trying to figure this out?

  //newButton
var date = 12;
var answer = "On Schedule";
$('#dateButton').on('click', yourFunction);

function yourFunction()
{
    //use your variablef somewhere inside this function

if(date > 11){
  answer = "Late!"
}

if(date < 11){
  answer = "Early"
}

    $('#dateResult').html(answer);
    console.log("#dateButton was clicked");
}

*/
