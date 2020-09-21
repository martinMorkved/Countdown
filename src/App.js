import React from 'react';
import './App.css';



var countDownDate = new Date("Oct 29, 2020 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("coutdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("coutdown").innerHTML = "EXPIRED";
  }
}, 1000);




function App() {
  return (
    <div className="background-img">
      
        <h1>Shadowlands Release</h1>
        <p id="coutdown"></p>
      
    </div>
  );
}

export default App;
