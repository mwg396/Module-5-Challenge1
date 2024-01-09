
  $(function () {
  

  const currentHour = dayjs().format('H');

  $(".time-block").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
  
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id");            
    localStorage.setItem(time, text);
})
    $('.time-div').each(function() {
      const key = $(this).attr('id');
      const value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });

    $("#currentDay").text(dayjs().format("MMMM D, YYYY"));
       

  });