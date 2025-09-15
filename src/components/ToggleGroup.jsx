import React, { useState } from 'react';
import { Building2, FileCheck2, CreditCard } from 'lucide-react';

const ToggleGroup = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState('company');

  const options = [
    { id: 'company', label: 'Company', icon: Building2 },
    { id: 'compliance', label: 'Compliance', icon: FileCheck2 },
    { id: 'banking', label: 'Banking', icon: CreditCard }
  ];

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
    onOptionChange?.(optionId);
  };

return (
    <div className="inline-flex flex-wrap gap-5 md:h-[60px] justify-between md:w-lg p-1 bg-gray-100 rounded-lg mx-auto mb-10">
        {options.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedOption === option.id;

            return (
                <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id)}
                    className={`
                        flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                        transition-all duration-200 ease-in-out
                        ${isSelected 
                            ? 'bg-white text-primary shadow-sm' 
                            : 'text-gray-600 hover:text-primary hover:bg-gray-50'}
                        w-full sm:w-auto
                    `}
                >
                    <Icon className="w-4 h-4 lg:w-6 lg:h-6" />
                    {option.label}
                </button>
            );
        })}
    </div>
);
};

export default ToggleGroup;