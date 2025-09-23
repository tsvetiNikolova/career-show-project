import { useEffect } from 'react';

import { useTimer } from '../components/TimerContext';

export type CompanyData = {
    logo: string;
    name: string;
    description: string;
};

export type HomePageProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setSelectedCompany: React.Dispatch<React.SetStateAction<CompanyData | null>>;
    companies: { [key: string]: CompanyData };
    userName: string;
}

let completed:number = 3;

function useHomePageViewmodel({ setPage, setSelectedCompany }: HomePageProps) {

    const { setIsRunning } = useTimer();

    useEffect(() => {

        if (completed === 32) {

            setPage(4);

            setIsRunning(false);

        } else {

            setPage(2);

            setIsRunning(true);

        }

    }, [completed, setPage, setIsRunning]);



    const handleCardClick = (companyData: CompanyData) => {

        setPage(3);

        setSelectedCompany(companyData);

    };



    return { handleCardClick, completed };

}



export default useHomePageViewmodel;