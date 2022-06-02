// current date and time ("MMM Do, YYYY, hh:mm:ss") maybe this if i figure out seconds
var now = moment().dayOfYear(Number);
$("#currentDay").text(now);
// console.log(now); WORKING
// moment-link moment to be in hh:mm
var currentTime = moment().hour();
var currentTimeInt = parseInt(currentTime);
// console.log(currentTime); WORKING
var rows=document.getElementsByClassName("row")
// console.log(rows)

Array.from(rows).forEach(row => {
    // reference to the container to loop over all the row divs and get the id
    let rowIDstring = row.id,
    rowHours;
    // console.log(rowHours) this works and they are integers, why does the below not work;
        // console.log(currentTime);
        if (rowIDstring) {
            rowHours = parseInt(rowIDstring);
        console.log(rowHours)
        }
        console.log(currentTimeInt);
        // console.log(rowIDstring);
        console.log(row);
        if (rowHours){
            // present
            // if the time block is = to the HH of the moment it will be red
            if(currentTimeInt === rowHours){
                // row.addClass("present");
                row.classList.add("present");
            }
            // past
            // if hh in moment > the number on the the side of the timeblock index it will be grey
            else if(currentTimeInt > rowHours){
                // $(".row").addClass("past");
                row.classList.add("past");
            }
            // future
            // if the time block is > the moment HH is will be green
            else if(currentTimeInt < rowHours){
                // $(".row").addClass("future");
                row.classList.add("future");
        }
    }
    // trying to use my for each loop and add the local storage back
    // var textBox=$(this).children(".col-sm-10").children(".form-control").val();
    // console.log(textBox);
    // var theText=$(this).attr('id');
    // console.log(theText);
    // theText.value=localStorage.getItem(textBox);
}       
)

document.getElementById("")

$(".saveBtn").on("click", function(){
    // console.log($(this).parent().siblings(".col-sm-10").children(".form-control").val());
    var textBox=$(this).parent().siblings(".col-sm-10").children(".form-control").val();
    // console.log(textBox);
// button will store in local storage. IT WORKS, stores each text box value with the correct hour key
    var theText=$(this).parent().parent().attr('id');
    localStorage.setItem(theText, JSON.stringify(textBox)); 
});