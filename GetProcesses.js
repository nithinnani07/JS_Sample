function RPA(){
	let arguments = {};
	const robot = UiPathRobot.init();
	robot.getProcesses().then(result => {
		for(let i=0; i<result.length;i++){
			console.log(result[i].name);
		}
	}, err => {
		console.log(err);
	});
}
