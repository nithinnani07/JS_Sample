function (element, input) {

	var script1 = document.createElement('script');
	script1.src = 'https://download.uipath.com/js/Latest/UiPathRobot.js';
	script1.type = 'text/javascript';
	document.head.appendChild(script1);
	
	var script2 = document.createElement('script');
	script2.src = 'https://cdn.jsdelivr.net/gh/nithinnani07/JS_Test@main/TriggerProcesses.js';
	script2.type = 'text/javascript';
	document.head.appendChild(script2);

	const button = document.createElement('input');
	button.type='button';
	button.value='RPA Trigger';
	button.onClick='RPA()';
	document.getElementsByClassName('FPdoLc lJ9FBc')[0].appendChild(button);
}
