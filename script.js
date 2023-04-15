// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Save text content to local storage
  $(".btn").click(function(event){
    event.preventDefault()
    var timeId = $(this).parent().attr('id');
    var userInput = $(this).siblings('textarea').val()
    localStorage.setItem(timeId, userInput)
  })
  // Get the current time and set it as a variable
  var date24 = dayjs().format("H")
  // Go through each time block and determine whether the present, past, or future classes should be applied
  if (date24 == 9) {
    $("#hour-9").addClass("present")
  } else if (date24 > 9) {
    $("#hour-9").addClass("past")
  } else if (date24 < 9) {
    $("#hour-9").addClass("future")
  }

  if (date24 == 10) {
    $("#hour-10").addClass("present")
  } else if (date24 > 10) {
    $("#hour-10").addClass("past")
  } else if (date24 < 10) {
    $("#hour-10").addClass("future")
  }

  if (date24 == 11) {
    $("#hour-11").addClass("present")
  } else if (date24 > 11) {
    $("#hour-11").addClass("past")
  } else if (date24 < 11) {
    $("#hour-11").addClass("future")
  }

  if (date24 == 12) {
    $("#hour-12").addClass("present")
  } else if (date24 > 12) {
    $("#hour-12").addClass("past")
  } else if (date24 < 12) {
    $("#hour-12").addClass("future")
  }

  if (date24 == 13) {
    $("#hour-1").addClass("present")
  } else if (date24 > 13) {
    $("#hour-1").addClass("past")
  } else if (date24 < 13) {
    $("#hour-1").addClass("future")
  }

  if (date24 == 14) {
    $("#hour-2").addClass("present")
  } else if (date24 > 14) {
    $("#hour-2").addClass("past")
  } else if (date24 < 14) {
    $("#hour-2").addClass("future")
  }

  if (date24 == 15) {
    $("#hour-3").addClass("present")
  } else if (date24 > 15) {
    $("#hour-3").addClass("past")
  } else if (date24 < 15) {
    $("#hour-3").addClass("future")
  }

  if (date24 == 16) {
    $("#hour-4").addClass("present")
  } else if (date24 > 16) {
    $("#hour-4").addClass("past")
  } else if (date24 < 16) {
    $("#hour-4").addClass("future")
  }

  if (date24 == 17) {
    $("#hour-5").addClass("present")
  } else if (date24 > 17) {
    $("#hour-5").addClass("past")
  } else if (date24 < 17) {
    $("#hour-5").addClass("future")
  }

  // Retrive user input from local storage and set it to the text content of the text areas
  $(".time-block").each(function() {
    var timeID = $(this).attr("id")
    console.log(timeID)
    var textArea = localStorage.getItem(timeID)
    console.log(textArea)
    if (textArea) {
      $(this).find("textarea").val(textArea)
    }
  })

  // TODO: Add code to display the current date in the header of the page.
  var currentDay = $("#currentDay")
  var date = dayjs().format("MMMM D YYYY")
  currentDay.text(date)
});