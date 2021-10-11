import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import checkStrength from './utils/passwordStrength';
import { LinearProgress, TextField } from '@material-ui/core';

function App() {
	const [password, setpassword] = useState('');
	const [strength, setStrength] = useState('');
	const [progress, setProgess] = useState(0);

	const handleChange = (e) => {
		const { name, value } = e.target;
		const result = checkStrength(password);

		if (name === 'newPassword') {
			if (value === '') {
				setProgess(0);
				setStrength('');
			} else {
				setStrength(result.strength);
				setProgess(result.progress);
			}
		}

		setpassword(value);
	};

	return (
		<div>
			<h2 className="text-orange">Password strength</h2>

			<div className="w-1/5">
				<form className="space-y-2">
					<div>
						<TextField
							id="newPassword"
							name="newPassword"
							type="password"
							placeholder="New Password"
							label="New Password"
							onChange={handleChange}
							value={password}
							disableUnderline
							fullWidth
						/>
						<LinearProgress
							variant="determinate"
							value={progress}
							className={{
								root: 'bg-primary mt-px w-1/2',
								bar: `${
									strength === 'Weak'
										? 'bg-appRed'
										: strength === 'Good'
										? 'bg-appBlue'
										: strength === 'Strong'
										? 'bg-green'
										: 'bg-thinGrayBG'
								} `,
							}}
						/>
						{password && <p>Password Strength is {strength}</p>}
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
