const secondHand = document.querySelector('.secHand');
const minsHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // Changing background based on time of day 
  if((hour >= 5) && (hour < 10)) {
    document.body.style.background = "Pearl"; 
  } else if ( (hour >= 10) && (hour < 16) ) {
    document.body.style.background = "Peach";
  } else if( (hour >= 16) && (hour < 18) ) {
    document.body.style.background = "Orange";
  } else {
    document.body.style.background = "DarkBlue";
  }
}

// call setDate() every 1 seconds (1000miliseconds)
// execute the setDate function each interval, 
// instead of executing its result (which doesn't do anything).
setInterval(setDate, 1000);

/* NOTE:
    In JS, a function is an object that passed around like any other variable. 

    setDate // a reference to the function.
    setDate() // executes the function and evaluates to its result.
*/
