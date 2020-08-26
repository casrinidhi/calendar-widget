(function($){
	$.fn.calendar = function(options){
		var $ele = this;

		var config = $.extend({
			year: new Date().getFullYear(),
			month: 0,
			weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
			monthsLabel: ["JANUARY", "FEBRAUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
			events: [],
			enableOnlyEvents: true,
			callback: ""
		}, options);

		var MONTHS_IN_YEAR = 12;
		var DAYS_IN_WEEK = 7;

		function createDateEle(data, id, event){
			return $("<div/>", {
				class: "col-1 text-center seven-cols"
			}).append($("<span/>", {
				class: "calendar-date",
				text: data,
				"data-date": id
			}));
		};

		function createMonthLabel(index){
			return $("<div/>", {
				class: "col-12 text-center month-label",
				text: config.monthsLabel[index]
			});
		};

		function createWeekEle(data) {
			return $("<div/>", {
				class: "col-1 text-center seven-cols"
			}).append($("<span/>", {
				class: "calendar-week",
				text: data
			}));
		}

		function createWeekLabel(){
			var rowDiv = $("<div/>", {
				class: "row no-gutters week-label"
			});

			_.times(DAYS_IN_WEEK, function(day){
				rowDiv.append(createWeekEle(config.weekLabel[day]));
			});

			return rowDiv;
		}

		function getStartDayOfMonth(year, month){
			return new Date(year, month, 1).getDay();
		}

		function getDaysInMonth(year, month){
			return 32 - new Date(year, month, 32).getDate();
		};

		function create(month){
			$ele.append(createMonthLabel(month));
			$ele.append(createWeekLabel());

			var rowDiv = $("<div/>", {
				class: "row no-gutters calendar-dates"
			});

			/* Insert blank elements till the beginning of the month. Required for bootstrapping */
			var startDayOfMonth = getStartDayOfMonth(config.year, month);
			_.times(startDayOfMonth, function(){
				rowDiv.append(createDateEle());
			});

			var daysInMonth = getDaysInMonth(config.year, month);
			_.times(daysInMonth, function(day){
				var formattedDay = ("0" + (parseInt(day) + 1)).slice(-2);
				var formattedMonth = ("0" + (parseInt(month) + 1)).slice(-2);
				var currentDate = config.year + "-" + formattedMonth + "-" + formattedDay;

				rowDiv.append(createDateEle(formattedDay, currentDate, event));
			});

			$ele.append(rowDiv);
		}

		if(config.month){
			create(config.month - 1);
		} else {
			_.times(MONTHS_IN_YEAR, function(month){
				create(month);
			});
		}

		/* Find elements and add events */
		$.each(config.events, function(index, date){
			var notificationSpan = $("<span/>", {
				class: "fas fa-circle calendar-event-icon"
			});

			$ele.find("[data-date='" + date + "']").parent().append(notificationSpan);
		});

		/* Add click event to the dates */
		$ele.find((config.enableOnlyEvents)? '.calendar-event-icon' : '.calendar-date').parent().click(function(e){
			e.preventDefault();

			var date = $(this).find('.calendar-date').data('date');
			if(config.callback){
				config.callback(date.toString());
			}
		});
	}
}(jQuery));