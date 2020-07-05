
//Sets date at the top of the page
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


//function to change the color of the input lines based on the relative time
function updateHour(){
    //grab current hour from moment
    var currentHour = moment().hours();

    // Checks each time block on the page to see if it is earlier, later, or equal to the time of the time associated with that time-block
    $(".time-block").each(function(){
        var blockTime = $(this).attr("id");
    
        // if/else statements changing row color depending on time compared to the current hour
        if(currentHour > blockTime){
            $(this).addClass("past");
        } else if(currentHour == blockTime){
            $(this).removeClass("past");
            $(this).addClass("present");
        }else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

//calling function to change colors of the rows
updateHour();

//get input from user. Print to the screen
$(".saveBtn").on("click", function(){
    //Calling the textarea element by it's class "description".
    //Then calling the id of the parent of the save button to gather what time is associated with that row
    var todoInput= $(this).siblings(".description").val().trim();
    var rowTime = $(this).parent().attr("id");

    // Set user input to local storage
    window.localStorage.setItem(rowTime, todoInput);
})

//setting row text based on what has been saved into local storage by the user
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



