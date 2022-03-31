var forms = $("form");
var labels = $("label");
var textAreas = $("textarea");
var buttons = $("button");

// Variable stores current hour using military time (0-23) converts string output to number
var currentHour = parseInt(moment().format("H"));

// Sets current date at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Adds data-row attributes to textarea elements because too lazy to manually add them in HTML
// Also adds time values to labels because it was good practice
for (i = 0; i < forms.length; i++){
    var labels = $("label");
    var adjustedTime = i + 9;

    // Iterates through all textarea elements and adds a data-row attr
    $(textAreas[i]).attr("data-row", adjustedTime);

    // Also adds time values to labels because it was good practice
    if (adjustedTime < 12) {
        $(labels[i]).text(`${adjustedTime}AM`);
    } else if (adjustedTime === 12) {
        $(labels[i]).text(`${adjustedTime}PM`);
    } else {
        $(labels[i]).text(`${adjustedTime - 11}PM`);
    };
};

// Adds appropriate color to textarea depending on current time
for (i = 0; i < forms.length; i++) {
    if (textAreas[i].dataset.row < currentHour) {
        $(textAreas[i]).addClass("past");
    } else if (textAreas[i].dataset.row > currentHour) {
        $(textAreas[i]).addClass("future");
    } else {
        $(textAreas[i]).addClass("present");
    }
};


// LOCAL STORAGE //

// eventListener for save buttons to store tasks
$("form").on("click", ".saveBtn", function(event) {
    event.preventDefault();

    // stores value of button's match textarea
    var currentTask = $(this).siblings("textarea");

    // Saves tasks to the localStorage. Textarea data-row value is the key, text inside is the value.
    localStorage.setItem($(currentTask).data("row"), $(currentTask).val());
});

// So I need to iterate through textareas to see if they match any of the keys in the localStorage
// That means each textarea needs to individually iterate though all the localStorage keys
// To make an array of localStorage keys = Object.keys(localStorage);

// for (i = 0; i < forms.length; i++){

//     if ($(textAreas[i]) == )

// for (i = 0; i < localStorage.length; i++) {
//     var previousTask = localStorage.getItem();
//     console.log(previousTask);
// };
// }
// console.log(Object.keys(localStorage));