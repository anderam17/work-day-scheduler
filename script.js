//Create time blocks and send them to div class=container
//Date at the top of the page - from js moment (?)
//3 columns: time, to-do, save
// to-do section should change color depending on if time had passed
    //if (blah) $(#id) = class change
    //get time from js moment
//

//maybe do this in a for loop
// var row = $("<div>").attr("class", "row");
var timeCol = $("<div>").attr("class", "col-md-2");
timeCol.text("Test");
var todoCol = $("<div>").attr("class", "col-md-8");
todoCol.text("Test");
var saveCol = $("<div>").attr("class", "col-md-2 saveBtn");
saveCol.text("Test");
 
$(".container").append(row);
$(".container").append(timeCol);
$(".container").append(todoCol);
$(".container").append(saveCol);