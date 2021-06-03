$(document).ready(function(){
  var dateToday = new Date();
  var dateMe = $("#from, #to").datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 2,
      minDate: dateToday,
      onSelect: function(selectedDate) {
          var option = this.id == "from" ? "minDate" : "maxDate",
              instance = $(this).data("datepicker"),
              date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
          dateMe.not(this).datepicker("option", option, date);
      }
  });

  $('#submit').click(function(){
    var firstName = $('#fname').val();
    var lastName = $('#lname').val();
    var birthdate = $('#birthday').val();
    var fromDate = $('#from').val();
    var toDate = $('#to').val();

    var alertString = `Thanks ${firstName} ${lastName}! Your Cruise leaves on ${fromDate} and return on ${toDate}`;

    if (firstName === ""){
      alert("Please fill up the first name")
      return false;
    } else if (lastName === ""){
      alert("Please fill up the last name")
      return false;
    } else if (birthdate === ""){
      alert("Please fill add your birtday")
      return false;
    } else if (fromDate === ""){
      alert("Please fill up from date")
      return false;
    } else if (toDate === ""){
      alert("Please fill up to date")
      return false;
    } else {
    alert(alertString);
    return false;
    }
  })
});