import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Form.css';

const formInitState = {
	targetedTime: '',
	travelHour: '',
	travelMin: '',
	prepareHour: '',
	prepareMin: '',
	sleepingTime: ''
};

const errorMessage = {
	hours: 'Please enter a value not more than 12.',
	minutes: 'Please enter a value not more than 59.',
	minutesRequired: 'Please enter a value. If minutes is not required, enter 0.',
	value: 'Please enter a value.'
};

function Form({ formSubmit, resetDisplay }) {
	const { register, handleSubmit, errors, reset } = useForm();

	const handleReset = () => {
		reset(formInitState);
		resetDisplay();
	};

	return (
		<form className="form" onSubmit={handleSubmit(formSubmit)}>
			<div className="form__group">
				<label className="form__label">Targeted Time</label>
				<input
					className="form__field"
					type="time"
					name="targetedTime"
					placeholder="Targeted Time"
					ref={register({ required: { value: true, message: errorMessage.value } })}
				/>
				{errors.targetedTime && <span className="form__error">{errors.targetedTime.message}</span>}
			</div>

			<div className="form__group">
				<label className="form__label">Travel Time</label>
				<div className="form__row">
					<div className="form__col">
						<input
							className="form__field"
							type="number"
							name="travelHour"
							placeholder="Travel Hour"
							ref={register({
								max: { value: 12, message: errorMessage.hours }
							})}
						/>
						<span className="form__field-text">hr</span>
					</div>
					<div className="form__col">
						<input
							className="form__field"
							type="number"
							name="travelMin"
							placeholder="Travel Minute"
							ref={register({
								max: { value: 59, message: errorMessage.minutes },
								required: { value: true, message: errorMessage.minutesRequired }
							})}
						/>
						<span className="form__field-text">min</span>
					</div>
				</div>
				{errors.travelHour && <span className="form__error">{errors.travelHour.message}</span>}
				{errors.travelMin && <span className="form__error">{errors.travelMin.message}</span>}
			</div>

			<div className="form__group">
				<label className="form__label">Preparation Time</label>
				<div className="form__row">
					<div className="form__col">
						<input
							className="form__field"
							type="number"
							name="prepareHour"
							placeholder="Prepare Hour"
							ref={register({ max: { value: 12, message: errorMessage.hours } })}
						/>{' '}
						<span className="form__field-text">hr</span>
					</div>

					<div className="form__col">
						<input
							className="form__field"
							type="number"
							name="prepareMin"
							placeholder="Prepare Minute"
							ref={register({
								max: { value: 59, message: errorMessage.minutes },
								required: { value: true, message: errorMessage.minutesRequired }
							})}
						/>
						<span className="form__field-text">min</span>
					</div>
				</div>
				{errors.prepareHour && <span className="form__error">{errors.prepareHour.message}</span>}
				{errors.prepareMin && <span className="form__error">{errors.prepareMin.message}</span>}
			</div>
			<div className="form__group">
				<label className="form__label">Sleeping Time</label>
				<input
					className="form__field"
					type="number"
					name="sleepingTime"
					placeholder="Hours of rest"
					ref={register({ required: { value: true, message: errorMessage.value } })}
				/>
				<span className="form__field-text">hr</span>
				{errors.sleepingTime && <span className="form__error">{errors.sleepingTime.message}</span>}
			</div>

			<div className="form__group form__group--btn">
				<button className="form__btn" type="submit">
					Calculate
				</button>
				<button className="form__btn" type="button" onClick={handleReset}>
					Reset
				</button>
			</div>
		</form>
	);
}

export default Form;
