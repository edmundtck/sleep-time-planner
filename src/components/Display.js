import React, { useEffect, useRef } from 'react';
import { displayTime } from '../helpers';
import '../styles/Display.css';

function Display({ display }) {
	const displaySchedule = useRef(null);

	const scrollToDisplay = () => {
		displaySchedule.current.scrollIntoView({
			behavior: 'smooth'
		});
	};

	useEffect(
		() => {
			scrollToDisplay();
		},
		[ display ]
	);

	return (
		<div className="display" ref={displaySchedule}>
			<h2 className="display__heading">Schedule</h2>
			<div className="display__inner">
				<div className="display__item">
					<div className="display__content">
						<i className="fas fa-bed" />
						<span className="display__time">{displayTime(display.sleepAt)}</span>
					</div>
				</div>
				<div className="display__item">
					<div className="display__content">
						<i className="far fa-bell" />
						<span className="display__time">{displayTime(display.alarmAt)}</span>
					</div>
				</div>
				<div className="display__item">
					<div className="display__content">
						<i className="fas fa-car-side" />
						<span className="display__time">{displayTime(display.leaveAt)}</span>
					</div>
				</div>
				<div className="display__item">
					<div className="display__content">
						<i className="fas fa-map-pin" />
						<span className="display__time display__time--highlight">
							{displayTime(display.targetedTime)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Display;
