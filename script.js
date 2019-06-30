function addRotate() {
  var element = document.getElementById("rotation");
  element.classList.add("rotation");
}

function removeRotate() {
  var element = document.getElementById("rotation");
  element.classList.remove("rotation");
}

$(document).ready(function(){
        // iOS web app full screen hacks.
        if(window.navigator.standalone == true) {
                // make all link remain in web app mode.
                $('a').click(function() {
                        window.location = $(this).attr('href');
            return false;
                });
        }
});
