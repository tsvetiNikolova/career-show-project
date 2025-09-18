import Card from './Card'
import Nav from './Nav'
import ProgressBar from './ProgressBar'
import smallDiadrawLogo from '../assets/smallDiadrawLogo.svg';
import useHomePageViewmodel, { type HomePageProps } from '../viewModels/useHomePageViewmodel';



function HomePage({ setPage, setSelectedCompany, companies, userName }: HomePageProps) {

    const {handleCardClick, completed } = useHomePageViewmodel( { setPage, setSelectedCompany, companies, userName } )

    return (
        <div>
            <Nav page={2}></Nav>
            <br></br>
            <img src={smallDiadrawLogo} alt='diadraw logo' />
            <h4>Welcome, {userName}</h4>
            <p style={{ color: '#FF294D' }}>Explore Connect Grow</p>
            <ProgressBar progress={completed}></ProgressBar>
            <br></br>
            <p style={{ fontWeight: 500, width: '80vw', margin: 'auto' }}>Click on any company to learn more and answer their challenge questions</p>
            <br></br>
            <br></br>
            <Card
                logo={companies.signata.logo}
                name={companies.signata.name}
                description={companies.signata.description}
                color='white'
                onClick={() => handleCardClick(companies.signata)}
            ></Card>
            <Card
                logo={companies.diadraw.logo}
                name={companies.diadraw.name}
                description={companies.diadraw.description}
                color='white'
                onClick={() => handleCardClick(companies.diadraw)}
            ></Card>

        </div>
    );
}

export default HomePage;