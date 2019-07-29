var TimerJS = {

	list: new Array(),
	timeToString: function(time){

		var minute = Math.floor(time / 60);
		if (minute < 10) {
			minute = '0' + minute;
		}

		var second = time % 60;
		if (second < 10) {
			second = '0' + second;
		}

		return minute + ':' + second;
		
	},

	counterInterval: function(element, text, time, timer, hooks)
	{

		element.innerHTML = TimerJS.timeToString(time) + text; 
		if (time <= 0) {

			var finish = element.getAttribute('finish');
			if (finish == null) {
				element.innerHTML = '';
			}else{
				element.innerHTML = finish;
			}
			TimerJS.clearTimer(timer);

			if (typeof hooks.onFinish != "undefined") {
				hooks.onFinish(element);
			}

		}

	},

	findTimerId: function(timerId)
	{

		return TimerJS.list.indexOf(timerId);

	},

	clearTimer: function(timerId)
	{

		var timer = TimerJS.findTimerId(timerId);
		if (timer == -1) {
			return false;
		}

		clearInterval(timerId);
		return TimerJS.list.splice(timer, 1);
	},

	start: function(element, hooks)
	{

		var timers = new Array();
		document.querySelectorAll(element).forEach( function(element, index) {

			var text   = element.getAttribute('text');
			var time   = element.getAttribute('time');
			if (time == null) {
				return false;
			}

			time = Number(time);
			if (time <= 0) {
				return false;
			}

			if (text == null) {
				text = '';
			}else{
				text = ' ' + text;
			}

			var timer = setInterval(function(){
				time--;
				TimerJS.counterInterval(element, text, time, timer, hooks);
			}, 1000);

			timers.push(timer);
			TimerJS.list.push(timer);

			TimerJS.counterInterval(element, text, time, timer, hooks);

		});

		return timers;
	},

	stop: function(timerId)
	{

		TimerJS.clearTimer(timerId);

	},

	stopAll: function()
	{

		let timers = TimerJS.list.slice(0);
		for (var i = 0; i < timers.length; i++) {
			this.stop(timers[i]);
		}

	}

};
