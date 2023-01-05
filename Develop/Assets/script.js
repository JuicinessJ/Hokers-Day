// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").click(function () {
    let hour = $(this).parent().attr('id');
    let text = $(this).siblings('textarea').val();
    localStorage.setItem(hour, text);
    //console.log($(this).parent().attr('id'));
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //need to implement a change class function for past, present, and future. 

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // $('#hour-9').children('textarea').text(localStorage.getItem('hour-9'));
  $('.time-block').each(function () {
    $(this).children('textarea').text(localStorage.getItem($(this).attr('id')))
    let time = $(this).children('.text-center').text(); //HTML
    let now = dayjs().format('hA'); //Current Hour
    let x = $(this).text()
    if (time === now) {
      //Present
      $(this).removeClass().addClass('row time-block present');
      //console.log(x)
    }
    else if (time > now) {
      //Future
      $(this).removeClass().addClass('row time-block future');
      console.log(x)
    }
    else {
      //Past
      $(this).removeClass().addClass('row time-block past');
      //console.log(x)
    }
  })


// TODO: Add code to display the current date in the header of the page.
const current = dayjs().format('MM-DD-YY')
$('#currentDay').text(current);
});
