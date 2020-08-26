$(document).ready(function(){
    function successCallback(date){
        alert("Date: " + date);
    }

	$('#calendar').calendar({
        callback: successCallback,
        year: 2018,
        events: ["2018-02-01", "2018-01-30", "2018-02-04"]	/* Unique array list to highlight dates with events */
    });
});