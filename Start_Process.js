function RPA(){
   	let arguments = {};
	const robot = UiPathRobot.init();
	robot.getProcesses()
		.then(process => {
  			let calculatorProcess = processes.find(p => p.name.includes('Message'));
  			let job = new job(calculatorProcess.id, arguments);
  			robot.startJob(job).then(result => {
    				console.log(result);
  			}, err => {
    				console.log(err);
  			})
	}, err => {
  		console.log(err);
	});
}
