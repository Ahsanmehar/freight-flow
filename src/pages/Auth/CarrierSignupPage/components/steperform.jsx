import React, { useState } from 'react';
import { CompanyDetails } from './CompanyDetails';

const steps = [
    { label: 'Account Info' },
    { label: 'Carrier Details' },
    { label: 'Confirmation' },
];

function StepperForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(prev => prev - 1);
        }
    };

    return (
        <div>
            <div>
                {activeStep === 0 && (
                    <div>
                        <CompanyDetails
                            formData={formData}
                            setFormData={setFormData}
                            errors={errors}
                            setErrors={setErrors}
                        />
                    </div>
                )}
                {/* {activeStep === 1 && <div><CarrierDetails/></div>}
                {activeStep === 2 && <div><Confirmation/></div>} */}
            </div>
            <div style={{ marginTop: 24 }}>
                <button onClick={handleBack} disabled={activeStep === 0}>Back</button>
                <button onClick={handleNext} disabled={activeStep === steps.length - 1} style={{ marginLeft: 8 }}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default StepperForm