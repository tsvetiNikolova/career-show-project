import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/landingPage'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Company from './components/Company'
import { TimerProvider } from './components/TimerContext';
// import careerExplorerLogo from './assets/Career_game_logo.svg';
import signataLogo from './assets/signata.svg'
import diadrawLogo from './assets/diadrawLogo.svg';
import Completed from './components/Completed'
type CompanyData = {
  logo: string;
  name: string;
  description: string;
};

// Define your company data here so it's accessible to both components
const companies: { [key: string]: CompanyData } = {
  signata: {
    logo: signataLogo,
    name: 'SIGNATA',
    description: 'SIGNATA is the specialist for mechatronic systems in the automotive industry.',
  },
  diadraw: {
    logo: diadrawLogo,
    name: 'Diadraw',
    description: 'Diadraw е IT аутсорсинг компания. Предоставя решения за дигитализация и оптимизация на бизнеса.',
  },
};



function App() {
  const [page, setPage] = useState<number>(0);
   const [userName, setUserName] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<CompanyData | null>(null);
  const PageDisplay = () => {
    if (page === 0) {
      return <LandingPage page={page} setPage={setPage}></LandingPage>
    } else if (page === 1) {
      return <Login page={page} setPage={setPage} setUserName={setUserName}></Login>
    } else if (page === 2) {
    return (
        <TimerProvider>
          <HomePage setPage={setPage} setSelectedCompany={setSelectedCompany} companies={companies} userName={userName} />
         </TimerProvider>
      );
    } else if (page === 3 && selectedCompany) {
      return (
        <TimerProvider>
        <Company
          page={page}
          setPage={setPage}
          logo={selectedCompany.logo}
          name={selectedCompany.name}
          description={selectedCompany.description}
        />
        </TimerProvider>
      )
    }
    else if (page === 4) {
      return <Completed></Completed>
    }
  };

  return (
    <TimerProvider>
      <>
        {PageDisplay()}
      </>
    </TimerProvider>
  )
}

export default App
