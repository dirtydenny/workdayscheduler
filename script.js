$(document).ready(function() {
// listener for click events on the save button.
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
      //set variables
      //save in local storage
    localStorage.setItem(time, value)  
  });

function hourChecker() {
//set current hour
  var currentHour = dayjs().hour();

  // loop in jquery
  $(".time-block").each(function () {
    var blockHr = parseInt($(this).attr("id").split("-")[1]) // hour-10 => [hour, 10] => 10
    
    if (blockHr < currentHour) {
      $(this).addClass("past")
    } else if (blockHr === currentHour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }
  })
}

hourChecker()

setInterval(hourChecker, 10000);


  
  // get items from local storage

  $("#hour-9 .descrption").val(localStorage.getItem("hour-9"));
  $("#hour-10 .descrption").val(localStorage.getItem("hour-10"));
  $("#hour-11 .descrption").val(localStorage.getItem("hour-11"));
  $("#hour-12 .descrption").val(localStorage.getItem("hour-12"));
  $("#hour-13 .descrption").val(localStorage.getItem("hour-13"));
  $("#hour-14 .descrption").val(localStorage.getItem("hour-14"));
  $("#hour-15 .descrption").val(localStorage.getItem("hour-15"));
  $("#hour-16 .descrption").val(localStorage.getItem("hour-16"));
  $("#hour-17 .descrption").val(localStorage.getItem("hour-17"));

  
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
 