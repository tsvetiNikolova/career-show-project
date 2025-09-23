import careerShowLogo from '../assets/careerShowLogo.svg';
import diadrawLogo from '../assets/diadrawLogo.svg';
import useLoginViewmodel from '../viewModels/useLoginViewmodel';

type LandingPageProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}

function LandingPage({ page, setPage, setUserName }: LandingPageProps) {
    const { name, email, setName, setEmail, nameError, emailError, handleStartExploring, validateName, validateEmail }
        = useLoginViewmodel({ page, setPage, setUserName })

    return (
        <div>
            <img src={careerShowLogo} alt='career explorer logo' style={{margin:'2.5em 0 0.8em 0'}} />
            <h5 style={{margin:0, fontWeight:800}}>X</h5>
            <img src={diadrawLogo} style={{ width: '40vw', margin:'0.8em 0 2.5em 0' }} alt='diadraw logo' />
            <h5 style={{ width: '50vw', margin: 'auto' }}>Meet top 32 employers and explore career opportunities, all in one place.</h5>
            <p>Get a chance to win a prize!</p>
           
            {/* implement it */}
            <h3 style={{ fontWeight: 400, margin: '1.5em 0' }}>36 Players Exploring</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <label className='labelForInput' htmlFor='name'>Full name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter your full name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        validateName(e.target.value);
                    }}
                />
                {nameError && <p style={{ color: '#FF294D', fontSize: '14px', marginTop: '-30px', width: '72%', margin: '10px auto', textAlign: 'left' }}>{nameError}</p>}

                <label className='labelForInput' htmlFor='email'>Email address</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='your.email@example.com'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                    }}
                />
                {emailError && <p style={{ color: '#FF294D', fontSize: '14px', width: '72%', margin: '10px auto 0', textAlign: 'left' }}>{emailError}</p>}
                <div style={{ display: "flex", alignItems: 'baseline', justifyContent: 'center' }}>
                    <input
                        type="checkbox"
                        id="dataAgree"
                        name="dataAgree"
                        checked
                    />
                    <label htmlFor="dataAgree" style={{ width: '76%' }}>
                        <p className='textGray' style={{ margin: '36px 0px', width: 'auto' }}>
                            I agree that my data may be used for the purposes of this game and if I am selected as a winner,
                            I consent to my name being published on the game’s website.
                        </p>
                    </label>
                </div>
            <button onClick={handleStartExploring} style={{width: '80%', marginBottom: '3em'}}>Start exploring</button>
            </form>
            <p className='textGray'>
                Your data will not be stored or processed for purposes other than this game.
                For any questions regarding your data, please contact <u style={{ color: 'black' }}>info@diadraw.com</u>
            </p>




        </div>
    );
}

export default LandingPage;