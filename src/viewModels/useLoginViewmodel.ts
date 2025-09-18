import React, { useState } from 'react';

type loginProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}

function useLoginViewmodel({ page, setPage, setUserName }: loginProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateName = (name: string) => {
        if (!name.trim()) {
            setNameError('Full name is required.');
            return false;
        }
        setNameError('');
        return true;
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setEmailError('Email address is required.');
            return false;
        }
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            return false;
        }
        setEmailError('');
        return true;
    };

    const handleStartExploring = () => {
        const isNameValid = validateName(name);
        const isEmailValid = validateEmail(email);

        if (isNameValid && isEmailValid) {
            const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
            setUserName(formattedName);
            setPage(++page);
        }
    };
  return {name, email, setName, setEmail, nameError, emailError, handleStartExploring, validateName, validateEmail}
}

export default useLoginViewmodel;