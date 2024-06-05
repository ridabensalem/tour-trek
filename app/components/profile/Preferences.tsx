"use client";

import React, { useState } from 'react';
import ProfileFrameElement from './profileFrame';


const Preferences = () => {
    const [currency, setCurrency] = useState('dollar');
    const [language, setLanguage] = useState('English');
    const [currencyDropdown, setCurrencyDropdown] = useState(false);
    const [languageDropdown, setLanguageDropdown] = useState(false);

    const currencies = [
        { value: 'dollar', label: '$ dollar' },
        { value: 'euro', label: '€ euro' },
        { value: 'pound', label: '£ pound' },
        { value: 'dirham', label: 'dirham' },
    ];

    const languages = [
        { value: 'English', label: 'English', flag: '🇬🇧' },
        { value: 'Italian', label: 'Italian', flag: '🇮🇹' },
        { value: 'French', label: 'French', flag: '🇫🇷' },
        { value: 'Spanish', label: 'Spanish', flag: '🇪🇸' },
    ];

    const handleCurrencyChange = (value: string) => {
        setCurrency(value);
        setCurrencyDropdown(false);
    };

    const handleLanguageChange = (value: string) => {
        setLanguage(value);
        setLanguageDropdown(false);
    };

    const handleCancel = () => {
        console.log('Preferences canceled');
    };

    const handleSave = () => {
        console.log('Preferences saved');
    };

    return (
        <ProfileFrameElement text="Preferences">
        <div className="flex flex-col items-center space-y-48 p-4 h-full">
            <div className="flex flex-row space-x-12 w-full justify-around">
                <div className="relative w-40">
                    <label htmlFor="currency" className="font-bold mb-2">currency</label>
                    <div
                        className="border-1 rounded-md px-4 py-2 cursor-pointer w-full boreder-gray-400 bg-gray-200 font-semibold"
                        onClick={() => setCurrencyDropdown(!currencyDropdown)}
                    >
                        {currencies.find(c => c.value === currency)?.label}
                    </div>
                    {currencyDropdown && (
                        <div className="absolute mt-2 w-full border rounded-md bg-white shadow-lg">
                            {currencies.map(c => (
                                <div
                                    key={c.value}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleCurrencyChange(c.value)}
                                >
                                    {c.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="relative w-40">
                    <label htmlFor="language" className="font-bold mb-2">language</label>
                    <div
                        className="border-1 rounded-md px-4 py-2 cursor-pointer w-full boreder-gray-400 bg-gray-200 font-semibold"
                        onClick={() => setLanguageDropdown(!languageDropdown)}
                        >
                        <div className="flex items-center">
                            <span className="mr-2">{languages.find(l => l.value === language)?.flag}</span>
                            {languages.find(l => l.value === language)?.label}
                        </div>
                    </div>
                    {languageDropdown && (
                        <div className="absolute mt-2 w-full border rounded-md bg-white shadow-lg">
                            {languages.map(l => (
                                <div
                                    key={l.value}
                                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleLanguageChange(l.value)}
                                >
                                    <span className="mr-2">{l.flag}</span>
                                    {l.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={handleCancel}
                    className="border border-pink-500 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-100"
                    >
                    cancel
                </button>
                <button
                    onClick={handleSave}
                    className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                    >
                    save
                </button>
            </div>
        </div>            
        </ProfileFrameElement>
    );
}

export default Preferences;
