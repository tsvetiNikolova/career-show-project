import { useState } from 'react';
type Option = {
    value: string;
};

function useCompanyViewmodel() {
    const [isIndustryOpen, setIsIndustryOpen] = useState<boolean>(false);
    const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
    const [isWorkModelOpen, setIsWorkModelOpen] = useState<boolean>(false);
    const [selectedWorkModel, setSelectedWorkModel] = useState<string[]>([]);

    const optionsIndustry: Option[] = [
        { value: 'Aвтомобилната' },
        { value: 'Engineering' },
        { value: 'Sales' },
        { value: 'Automotive' },
        { value: 'Production' },
        { value: 'Manufacturing' },
        { value: 'Consulting services' },
        { value: 'BPO' },
        { value: 'Telecommunications' },
        { value: 'IT' },
        { value: 'Accounting' },
        { value: 'Finance' },
        { value: 'Audit' },
        { value: 'Retail' },
        { value: 'Недвижими имоти' },
        { value: 'Marketing / PR' },
        { value: 'Healthcare' },
    ];

    const optionsWorkModel: Option[] = [
        { value: 'Remote' },
        { value: 'Hybrid' },
        { value: 'On-site' },
    ];

    const handleIndustryChange = (value: string) => {
        if (selectedIndustry.includes(value)) {
            setSelectedIndustry(selectedIndustry.filter(val => val !== value));
        } else {
            setSelectedIndustry([...selectedIndustry, value]);
        }
    };

    const handleWorkModelChange = (value: string) => {
        if (selectedWorkModel.includes(value)) {
            setSelectedWorkModel(selectedWorkModel.filter(val => val !== value));
        } else {
            setSelectedWorkModel([...selectedWorkModel, value]);
        }
    };

  return {isIndustryOpen, setIsIndustryOpen, selectedIndustry, isWorkModelOpen, setIsWorkModelOpen, selectedWorkModel, optionsIndustry, optionsWorkModel, handleIndustryChange, handleWorkModelChange}
}

export default useCompanyViewmodel;