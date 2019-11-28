	let top_light = document.querySelector('.trafficlights:nth-child(1)')
	let middle_light = document.querySelector('.trafficlights:nth-child(2)')
	let bottom_light = document.querySelector('.trafficlights:nth-child(3)')
	let timerId1, timerId2, timerId3;
	let running = false;

function runTrafficLight() {
	if (running) {
		button.setAttribute('value', 'start');
		top_light.setAttribute('data-light-color', 'red');
		middle_light.setAttribute('data-light-color', 'yellow');
		bottom_light.setAttribute('data-light-color', 'green');

		
		clearTimeout(timerId1);
		clearTimeout(timerId2);
		clearTimeout(timerId3);

			

		running = false;
	} else {
		redLightStart();
		running = true;
		button.setAttribute('value', 'stop');

		
	}
}

function redLightStart() {
	top_light.setAttribute('data-light-color', 'red');
	middle_light.setAttribute('data-light-color', 'black');
	bottom_light.setAttribute('data-light-color', 'black');
	timerId1 = setTimeout(greenLightStart, 5000);
}

function yellowLightStart() {
	top_light.setAttribute('data-light-color', 'black');
	middle_light.setAttribute('data-light-color', 'yellow');
	bottom_light.setAttribute('data-light-color', 'black');
	timerId2 = setTimeout(redLightStart, 2000);
}

function greenLightStart() {
	top_light.setAttribute('data-light-color', 'black');
	middle_light.setAttribute('data-light-color', 'black');
	bottom_light.setAttribute('data-light-color', 'green');
	timerId3 = setTimeout(yellowLightStart, 5000);
}

let button = document.querySelector("#startMe");
button.addEventListener('click', runTrafficLight);