$(document).ready(function(){
  $('#student_name').selectize({
    sortField: 'text'
  });

  $('#calendar').fullCalendar({
    // put your options and callbacks here
    lang: 'pl',
    editable: true,
    events: app.vars.events
  });
});
