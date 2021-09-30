function RPA(){
	let arguments = {};
	const robot = UiPathRobot.init();
	robot.startJob(
		{
			processId: '18c8911c-5340-4fed-a8b7-622722a20c1b',
			arguments: {}
		}
	).then(result => console.log(result), err => console.log(err));
}
