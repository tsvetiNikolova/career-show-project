import Nav from './Nav'
import Card from './Card'
import arrow from '../assets/keyboard_arrow_down.svg'
import arrowLeft from '../assets/arrowLeft.svg'
import useCompanyViewmodel from '../viewModels/useCompanyViewmodel'

type CompanyProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    logo: string;
    name: string;
    description: string;
    userName:string;
}

function Company({ page, setPage, logo, name, description, userName }: CompanyProps) {
    const { isIndustryOpen, setIsIndustryOpen, selectedIndustry, isWorkModelOpen, setIsWorkModelOpen, selectedWorkModel, optionsIndustry, optionsWorkModel, handleIndustryChange, handleWorkModelChange }
        = useCompanyViewmodel()

    return (
        <div>
            <Nav page={3} userName={userName}></Nav>
            <button id='goBackBtn' style={{ display: 'flex', gap: '10px' }} onClick={() => { setPage(page - 1) }}><img src={arrowLeft} /> Back to Companies </button>
            <Card
                logo={logo}
                name={name}
                description={description}
                color="#321E41"
            ></Card>
            <div className='questionsCard'>
                <h5>Challenge Questions</h5>

                <div className='dropdownContainer'>
                    <div className='dropdownTrigger' onClick={() => setIsIndustryOpen(!isIndustryOpen)}>
                        В коя индустрия работи фирмата?
                        <span style={{ display: 'flex' }}><img src={arrow} /></span>
                    </div>

                    {isIndustryOpen && (
                        <div className='dropdownOptions'>
                            {optionsIndustry.map((option) => (
                                <div
                                    key={option.value}
                                    className='dropdownItem'
                                    style={{ backgroundColor: selectedIndustry.includes(option.value) ? '#cbe0ffff' : 'white', }}
                                    onClick={() => handleIndustryChange(option.value)}>
                                    {option.value}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className='dropdownContainer'>
                    <div className='dropdownTrigger' onClick={() => setIsWorkModelOpen(!isWorkModelOpen)}>
                        Какъв модел на работа предлага?
                        <span style={{ display: 'flex' }}><img src={arrow} /></span>
                    </div>

                    {isWorkModelOpen && (
                        <div className='dropdownOptions'>
                            {optionsWorkModel.map((option) => (
                                <div
                                    key={option.value}
                                    className='dropdownItem'
                                    style={{ backgroundColor: selectedWorkModel.includes(option.value) ? '#cbe0ffff' : 'white', }}
                                    onClick={() => handleWorkModelChange(option.value)}>
                                    {option.value}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <p>Посочете 1 ключова позиция за компанията</p>
                <input type='textbox' placeholder='Type your answer here...'></input>
                <br></br>
                <br></br>
                <button onClick={() => { setPage(page - 1) }}>Submit Answer</button>
            </div>
        </div>
    );
}

export default Company;