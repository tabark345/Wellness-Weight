import React from 'react';
import IdealWeightForm from './components/IdealWeightForm';
import BmiForm from './components/BmiForm';
import logo from './assets/logo.png';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="flex items-center justify-center py-6">
                <img src={logo} alt="Logo" className="h-16" />
            </header>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full max-w-4xl mx-auto">
                <IdealWeightForm />
                <BmiForm />
            </div>
        </div>
    );
};

export default App;
