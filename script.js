// initializing page and getting previously stored input
function init() {
  var getEvent = localStorage.getItem("event");
  $("textarea").append(getEvent).text();
}

//clear button
var clearBtn = $("<button>");
$(".container").append(clearBtn);
clearBtn.addClass("clear-button").text("CLEAR ALL");
//event to clear the text areas and on click
clearBtn.on("click", function () {
  localStorage.setItem("event", "");
  $(".row").val("");
});

var today = moment();
var getDate = $("#currentDay");
getDate.addClass("description");
$(".description").text(today.format("MM-DD-YYYY"));
$("#currentDay").append(getDate);


var timeBlock = moment();
var now = moment(timeBlock.format("HH"));
// if statements to determine if row is past, present, or future
if ($("#9am").attr("value") > now._i) {
  $("#9amrow").addClass("future");
} else if ($("#9am").attr("value") < now._i) {
  $("#9amrow").addClass("past");
} else {
  $("#9amrow").addClass("present");
}
if ($("#10am").attr("value") > now._i) {
  $("#10amrow").addClass("future");
} else if ($("#10am").attr("value") < now._i) {
  $("#10amrow").addClass("past");
} else {
  $("#10amrow").addClass("present");
}
if ($("#11am").attr("value") > now._i) {
  $("#11amrow").addClass("future");
} else if ($("#11am").attr("value") < now._i) {
  $("#11amrow").addClass("past");
} else {
  $("#11amrow").addClass("present");
}
if ($("#12pm").attr("value") > now._i) {
  $("#12pmrow").addClass("future");
} else if ($("#12pm").attr("value") < now._i) {
  $("#12pmrow").addClass("past");
} else {
  $("#12pmrow").addClass("present");
}
if ($("#1pm").attr("value") > now._i) {
  $("#1pmrow").addClass("future");
} else if ($("#1pm").attr("value") < now._i) {
  $("#1pmrow").addClass("past");
} else {
  $("#1pmrow").addClass("present");
}
if ($("#2pm").attr("value") > now._i) {
  $("#2pmrow").addClass("future");
} else if ($("#2pm").attr("value") < now._i) {
  $("#2pmrow").addClass("past");
} else {
  $("#2pmrow").addClass("present");
}
if ($("#3pm").attr("value") > now._i) {
  $("#3pmrow").addClass("future");
} else if ($("#3pm").attr("value") < now._i) {
  $("#3pmrow").addClass("past");
} else {
  $("#3pmrow").addClass("present");
}
if ($("#4pm").attr("value") > now._i) {
  $("#4pmrow").addClass("future");
} else if ($("#4pm").attr("value") < now._i) {
  $("#4pmrow").addClass("past");
} else {
  $("#4pmrow").addClass("present");
}
if ($("#5pm").attr("value") > now._i) {
  $("#5pmrow").addClass("future");
} else if ($("#5pm").attr("value") < now._i) {
  $("#5pmrow").addClass("past");
} else {
  $("#5pmrow").addClass("present");
}

//click event stores input
var saveBtn = $("button");
function getEvent() {
  saveBtn.click(function () {
    var eventInput = $("textarea").val();
    localStorage.setItem("event", eventInput);
  });
}

//click event stores input
var saveBtn = $(".saveBtn");
function getEvent() {
  saveBtn.click(function () {
    var eventInput = $("textarea").val();
    localStorage.setItem("event", eventInput);
  });
}

init();
getEvent();
