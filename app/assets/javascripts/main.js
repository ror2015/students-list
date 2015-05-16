$(document).ready(function(){
  $('#student_name').selectize({
    sortField: 'text',
    valueField: 'id',
    labelField: 'full_name',
    load: function(query, callback) {
      if (!query.length) return callback();
      $.ajax({
        url: 'http://localhost:3000/students.json?full_name=' + encodeURIComponent(query),
        type: 'GET',
        error: function() {
          callback();
        },
        success: function(res) {
          callback(res.slice(0, 10));
        }
      });
    }
  });

  $('#calendar').fullCalendar({
    // put your options and callbacks here
    lang: 'pl',
    editable: true,
    events: app.vars.events
  });
});
