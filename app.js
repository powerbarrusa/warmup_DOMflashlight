document.addEventListener('DOMContentLoaded', () => {

  var light = document.getElementsByClassName("off");
  var mouseClick = function() {
    // var lightDiv = document.createElement("div");
        light.className = "on";
        document.body.appendChild(light);        
    };
    // 3. Add the event listener for the element and function
    light.addEventListener("click", mouseClick);
})
