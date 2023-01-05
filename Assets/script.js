$(function () {
  $(".saveBtn").click(function () {
    let hour = $(this).parent().attr('id');
    let text = $(this).siblings('textarea').val();
    localStorage.setItem(hour, text);
    //console.log($(this).parent().attr('id'));
  })

  $('.time-block').each(function () {
    $(this).children('textarea').text(localStorage.getItem($(this).attr('id')))
    let time = $(this).children('.text-center').text(); //HTML
    let now = dayjs().format('hA'); //Current Hour
    //let x = $(this).text()
    if (time === now) {
      //Present
      $(this).removeClass().addClass('row time-block present');
      //console.log(x)
    }
    else if (time > now) {
      //Future
      $(this).removeClass().addClass('row time-block future');
      //console.log(x)
    }
    else {
      //Past
      $(this).removeClass().addClass('row time-block past');
      //console.log(x)
    }
  })
  
const current = dayjs().format('MM-DD-YY')
$('#currentDay').text(current);
});
