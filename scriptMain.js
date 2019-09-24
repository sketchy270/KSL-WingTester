$(document).ready(function() {
  document.getElementById('leftWing').addEventListener('change', uploadLeft, true);
  function uploadLeft(){
      var file = document.getElementById("leftWing").files[0];
      var reader = new FileReader();
      reader.onloadend = function(){
          document.getElementById('leftSide').style.backgroundImage = "url(" + reader.result + ")";
      }
      if(file){
          reader.readAsDataURL(file);
      }else{
      }
  }

  document.getElementById('rightWing').addEventListener('change', uploadRight, true);
  function uploadRight(){
      var file = document.getElementById("rightWing").files[0];
      var reader = new FileReader();
      reader.onloadend = function(){
          document.getElementById('rightSide').style.backgroundImage = "url(" + reader.result + ")";
      }
      if(file){
          reader.readAsDataURL(file);
      }else{
      }
  }

  document.getElementById('titan-ad').addEventListener('change', uploadTitan, true);
  function uploadTitan(){
      var file = document.getElementById("titan-ad").files[0];
      var reader = new FileReader();
      reader.onloadend = function(){
          document.getElementById('titan').style.backgroundImage = "url(" + reader.result + ")";
      }
      if(file){
          reader.readAsDataURL(file);
      }else{
      }
  }

  $('#toggleWindow').click(function () {
    $('.overlay').toggle(this.checked);
  });
});
