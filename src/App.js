import React, { useState } from 'react';
import { calTime } from './helpers';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

const displayInitState = {
	targetedTime: '',
	leaveAt: '',
	alarmAt: '',
	sleepAt: ''
};

function App() {
	const [ display, setDisplay ] = useState(displayInitState);

	const formSubmit = (data) => {
		const { targetedTime, travelHour, travelMin, prepareHour, prepareMin, sleepingTime } = data;

		const leaveAt = calTime(targetedTime, travelHour, travelMin);
		const alarmAt = calTime(leaveAt, prepareHour, prepareMin);
		const sleepAt = calTime(alarmAt, sleepingTime);

		setDisplay({
			targetedTime,
			leaveAt,
			alarmAt,
			sleepAt
		});
	};

	const resetDisplay = () => {
		setDisplay(displayInitState);
	};

	return (
		<div className="app">
			<div className="wrapper">
				<h1 className="heading">Sleep Time Planner</h1>
				{/* Form */}
				<Form formSubmit={formSubmit} resetDisplay={resetDisplay} />
				{/* Display */}
				{display.targetedTime && <Display display={display} />}
			</div>
		</div>
	);
}

export default App;
