//your JS code here. If required.
function updateClock() {
			const now = new Date();
			const date = now.toLocaleDateString();
			const time = now.toLocaleTimeString();
			document.getElementById('timer').innerHTML = `${date} ${time}`;
		}

		// call the function every second to update the time
		setInterval(updateClock, 1000);