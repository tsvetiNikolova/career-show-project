import Card from './Card'
import Nav from './Nav'
import ProgressBar from './ProgressBar'
import smallDiadrawLogo from '../assets/smallDiadrawLogo.svg';
import useHomePageViewmodel, { type HomePageProps } from '../viewModels/useHomePageViewmodel';



function HomePage({ setPage, setSelectedCompany, companies, userName }: HomePageProps) {

    const {handleCardClick, completed } = useHomePageViewmodel( { setPage, setSelectedCompany, companies, userName } )

    return (
        <div>
            <Nav page={2} userName={userName}></Nav>
            <br></br>
            <br></br>
            <h4 style={{ fontWeight: 500, width: '60vw', margin: 'auto' }}>Click on any company to learn more and answer their challenge questions</h4>
            <br></br>
            <ProgressBar progress={completed}></ProgressBar>
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