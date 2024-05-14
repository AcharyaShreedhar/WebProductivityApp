
/*  Author:Shree Dhar Acharya
    Date:2023/03/27
    Student ID:8899288
    Application:Carousel Application
*/

//declaring two arrays: one for the days of the week and one for the months of the year
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

let previousMonthButton = document.getElementById('previousMonth');
let nextMonthButton = document.getElementById('nextMonth');
const monthYear = document.getElementById("month");
const calendarBody = document.getElementById("calendar-body");



// Displaying current month and year
function displayMonthYear() {
  monthYear.innerHTML = months[currentMonth] + " " + currentYear;
}

// function to generate calendar for the given month and year
function generateCalendar() {
  // Clearing the previous calendar
  calendarBody.innerHTML = "";

  // Using getDate method to extract the number of days in the current month from the newly created date object
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Using getDay method to extract the day of the week for the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Generating calendar rows
  let calendarRows = "";
  let dayOfMonth = 1;
  for (let i = 0; i < 6; i++) {
    let calendarRow = "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        // Empty cell before the first day of the month
        calendarRow += "<td></td>";
      } else if (dayOfMonth > daysInMonth) {
        // Empty cell after the last day of the month
        calendarRow += "<td></td>";
      } else {
        // Cell for a day of the month
        calendarRow += "<td>" + dayOfMonth + "</td>";
        dayOfMonth++;
      }
    }
    calendarRow += "</tr>";
    calendarRows += calendarRow;
  }

  // Add calendar rows to the calendar body
  calendarBody.innerHTML = calendarRows;
}

// Go to the previous month
if (previousMonthButton) {
previousMonthButton.addEventListener("click", function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  displayMonthYear();
  generateCalendar();
});
}

// Go to the next month
if (nextMonthButton) {
nextMonthButton.addEventListener("click", function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  displayMonthYear();
  generateCalendar();
});
}

// Initial display of the calendar
displayMonthYear();
generateCalendar();




