function RPA(){
	let arguments = {};
	const robot = UiPathRobot.init();
	robot.getProcesses()
		.then(process => {
		  let calculatorProcess = processes.find(p => p.name.includes('SB_Test'));
		  let job = new job(calculatorProcess.id, arguments);
		  robot.startJob(job).then(result => {
		    console.log("Success");
		  }, err => {
		    console.log(err);
		  })
		}, err => {
		  console.log(err);
		});
