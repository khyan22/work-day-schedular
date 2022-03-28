//clock and date function
setInterval(function() {
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(date);
}, 1000)

var timeBlock = function(){
    //takes the local hour
    var currentHour = moment().hour()

    //changes timeblock color to match the time in relation to local time
    $(".time-block").each(function() {
        var selectedHour = parseInt($(this).attr("id").split("t")[1])

        //checks timeblock hour and compares it to current time
        if (currentHour < selectedHour) {
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")
        } else if(currentHour === selectedHour) {
            $(this).removeClass("past")
            $(this).removeClass("future")
            $(this).addClass("present")
        } else {
            $(this).removeClass("present")
            $(this).removeClass("future")
            $(this).addClass("past")
        }
    })

}

//saves text area and time block data into localStorage when you click the save button
$(".saveBtn").on("click", function() {
    var memo = $(this).siblings(".description").val()
    var timeBlock  = $(this).parent().attr("id")

    localStorage.setItem(timeBlock, memo)
})

//retrieves data from localStorage and send it back to the timeBlock 
$("#t9 .description").val(localStorage.getItem("t9"));
$("#t10 .description").val(localStorage.getItem("t10"));
$("#t11 .description").val(localStorage.getItem("t11"));
$("#t12 .description").val(localStorage.getItem("t12"));
$("#t13 .description").val(localStorage.getItem("t13"));
$("#t14 .description").val(localStorage.getItem("t14"));
$("#t15 .description").val(localStorage.getItem("t15"));
$("#t16 .description").val(localStorage.getItem("t16"));
$("#t17 .description").val(localStorage.getItem("t17"));

timeBlock()