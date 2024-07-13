import React, { useState } from 'react';

const IdealWeightForm = () => {
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [result, setResult] = useState('');

    const calculateIdealWeight = () => {
        const heightNum = parseFloat(height);
        const ageNum = parseFloat(age);

        if (isNaN(heightNum) || heightNum < 50 || heightNum > 250) {
            setResult('Please enter a valid height between 50 and 250 cm.');
            return;
        }

        if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
            setResult('Please enter a valid age between 1 and 120 years.');
            return;
        }

        let idealWeight;

        if (gender === 'male') {
            idealWeight = 50 + 0.91 * (heightNum - 152.4) + 0.22 * ageNum;
        } else {
            idealWeight = 45.5 + 0.91 * (heightNum - 152.4) + 0.22 * ageNum;
        }

        setResult(`The ideal weight for a ${gender} with a height of ${heightNum} cm and age of ${ageNum} years is ${idealWeight.toFixed(2)} kg.`);
    };

    return (
        <div className="p-6 border rounded-lg shadow-md bg-white w-full max-w-md">
            <h2 className="text-xl font-semibold text-center mb-4">Calculate Ideal Weight</h2>
            <div className="mb-4">
                <label htmlFor="height" className="block mb-2">Height (cm):</label>
                <input type="number" id="height" value={height} onChange={e => setHeight(e.target.value)} className="w-full p-2 border rounded" required min="50" max="250" />
            </div>
            <div className="mb-4">
                <label htmlFor="age" className="block mb-2">Age (years):</label>
                <input type="number" id="age" value={age} onChange={e => setAge(e.target.value)} className="w-full p-2 border rounded" required min="1" max="120" />
            </div>
            <div className="mb-4">
                <label htmlFor="gender" className="block mb-2">Gender:</label>
                <select id="gender" value={gender} onChange={e => setGender(e.target.value)} className="w-full p-2 border rounded" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button onClick={calculateIdealWeight} className="w-full p-2 text-white rounded">Calculate Ideal Weight</button>
            {result && <p className="mt-6 text-center text-xl font-bold text-primary">{result}</p>}
        </div>
    );
};

export default IdealWeightForm;
