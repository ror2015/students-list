$(document).ready(function(){
  $('#button1').on('click', function(){

    $.ajax({
      url: "http://localhost:3000/students.json"
    }).done(function(data) {
      alert(data[0].full_name);
    });


  });
});