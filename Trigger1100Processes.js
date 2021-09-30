function RPA(){
	let arguments = {};
	const robot = UiPathRobot.init();
	robot.startJob(
		{
			processId: 'ebce877c-14f1-442b-a1fc-5389fe76e44d',
			arguments: {}
		}
	).then(result => console.log(result), err => console.log(err));
}
