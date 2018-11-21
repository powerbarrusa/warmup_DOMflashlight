document.addEventListener('DOMContentLoaded', () => {

  var light = document.getElementById("flashlight");
  var mouseClick = function() {
      light.classList.toggle("on");
      light.classList.toggle("off");      
    };
    // 3. Add the event listener for the element and function
    light.addEventListener("click", mouseClick);
})
