jQuery calendar plugin is a simple way to create a calendar for any given month or year.

Libraries and Frameworks:
1. Bootstrap for resposive design
2. JQuery
3. Undescroe JS

Useage:

1.	Call the jquery plugin on an element. By default it takes current(local system) year to create the calendar for all months
	$('#calendarDiv').calendar();

2.	Pass the year or month or both to create a calendar for a particular year/month. Using this option, the calendar can be made to display monthwise(One month at a time) and when the user clicks on next or previous button, the calendar can be modified accordingly.
	$('#calendarDiv').calendar({
		year: 2017,
		month: 1	/* for January */
	});

3.	Pass events dates to calendar. The dates with events are highlighted in the calendar. The date events are made clickable in the calendar
	$('#calendarDiv').calendar({
		year: 2017,
		events: ["2018-02-01", "2018-01-30", "2018-02-04"]	/* format: YYYY-MM-DD. ISO - International standard date */
	});

4.	The label for month and weeks are also configurable
	$('#calendarDiv').calendar({
		weekLabel: ["Sun", "Mon", "Tue", ...],
		monthsLabel: ["Jan", "Feb", "Mar", ...]
	});

5.	Enable click event for only dates with events or for all dates
	$('#calendarDiv').calendar({
		events: ["2018-02-01", "2018-01-30", "2018-02-04"],	/* format: YYYY-MM-DD. ISO - International standard date */
		enableOnlyEvents: flase
	});
	
6.	Handle on click event on a date. Callback passess data-date parameter
	function successCallback(date, events){
        alert("Date: " + date);
    }

	$('#calendar').calendar({
        callback: successCallback
    });


	
