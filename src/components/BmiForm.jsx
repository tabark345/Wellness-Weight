import React, { useState } from 'react';
import fat from '../assets/body mass/fat.jpg';
import fat2 from '../assets/body mass/fat-2.jpg';
import fat3 from '../assets/body mass/fat-3.jpg';
import norm from '../assets/body mass/normal.jpg';
import ski from '../assets/body mass/skin.jpg';

const BmiForm = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    const calculateBMI = () => {
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);

        if (isNaN(heightNum) || heightNum < 50 || heightNum > 250) {
            setResult('Please enter a valid height between 50 and 250 cm.');
            return;
        }

        if (isNaN(weightNum) || weightNum < 1 || weightNum > 500) {
            setResult('Please enter a valid weight between 1 and 500 kg.');
            return;
        }

        const heightInMeters = heightNum / 100;
        const bmi = weightNum / (heightInMeters ** 2);
        let imgSrc = '';
        if (bmi < 18.5) {
            imgSrc = ski;
        } else if (bmi >= 18.5 && bmi < 25) {
            imgSrc = norm;
        } else if (bmi >= 25 && bmi < 30) {
            imgSrc = fat3;
        } else if (bmi >= 30 && bmi < 35) {
            imgSrc = fat2;
        } else {
            imgSrc = fat;
        }

        setImageSrc(imgSrc);
        setResult(`The BMI for a height of ${heightNum} cm and weight of ${weightNum} kg is ${bmi.toFixed(2)}.`);
    };

    return (
        <div className="p-6 border rounded-lg shadow-md bg-white w-full max-w-md">
            <h2 className="text-xl font-semibold text-center mb-4">Calculate BMI</h2>
            <div className="mb-4">
                <label htmlFor="heightBmi" className="block mb-2">Height (cm):</label>
                <input type="number" id="heightBmi" value={height} onChange={e => setHeight(e.target.value)} className="w-full p-2 border rounded" required min="50" max="250" />
            </div>
            <div className="mb-4">
                <label htmlFor="weight" className="block mb-2">Weight (kg):</label>
                <input type="number" id="weight" value={weight} onChange={e => setWeight(e.target.value)} className="w-full p-2 border rounded" required min="1" max="500" />
            </div>
            <button onClick={calculateBMI} className="w-full p-2 text-white rounded">Calculate BMI</button>
            {result && <p className="mt-4 text-center">{result}</p>}
            {imageSrc && <img src={imageSrc} alt="BMI category" className="mx-auto mt-4" />}
        </div>
    );
};

export default BmiForm;
