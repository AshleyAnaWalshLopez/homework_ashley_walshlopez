/*
* You get to give yourself an awesome vehicle
* It is an object
* Make it badass
* Be sure to give it the following:
*   - a name that is a string
*   - a distanceToEmpty that is a number of kilometers
 it can travel
*   - a speed that is a number and represents the number
of km/hr your vehicle can travel
*   - a currentLocation
*   - a honkHorn method that returns a string of the
sound that your vehicle makes when you honk the horn
*/

var helicopter = {
  name: "Cobra",
  color:"Death Grey"
  distanceToEmpty: 322,
  speed: 130,
  currentLocation: "Flight Line",
  acceleration: function (){
      return "I can travel" + this.distanceToEmpty;
  },
  missile:{
    name: "Hellfire",
    /*honkHorn mechanism  */
    sound: function{
      console.log("BOOM!")
    }
  }
}
