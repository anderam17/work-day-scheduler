
//Sets date at the top of the page
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


function updateHour(){
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function(){
        var blockTime = $(this).attr("id");
        console.log(blockTime);

        if(currentHour > blockTime){
            $(this).addClass("past");
        } else if(currentHour == blockTime){
            // $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

updateHour();

//get input from user. Store it in an object. Print to the screen
$(".saveBtn").on("click", function(){
    var todoInput= $(this).siblings(".description").val().trim();
    var rowTime = $(this).parent().attr("id");

    window.localStorage.setItem(rowTime, todoInput);
})

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



