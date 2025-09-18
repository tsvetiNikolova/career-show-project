import careerExplorerLogo from '../assets/Career_game_logo.svg'
import diadrawLogo from '../assets/diadrawLogo.svg'
import careerShowLogo from '../assets/Logo_CareerShow.svg'
import prizes from '../assets/prize.svg'
import drawing1 from '../assets/drawing1.svg'
import drawing2 from '../assets/drawing2.svg'

type LandingPageProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}
function LandingPage({ page, setPage }: LandingPageProps) {
    return (
        <div>
            <img src={careerExplorerLogo} alt='career explorer logo' />
            <h1 style={{padding:'1em'}}>
                Meet the companies at Career Show Plovdiv and win a prize!
            </h1>
            <img src={drawing2} style={{position:'absolute', left:0, marginTop:'-140px'}}/>
            <button style={{marginBottom:'30px'}} onClick={() => { setPage(++page) }}>Enter to Win</button>

            <p className='pading'>Welcome to the Career Explorer page – an interactive quiz-style game!</p>
            <p className='pading'>The goal is to get to know all the exhibitors and answer questions related to the participating companies.</p>
            <img src={drawing1} style={{position:'absolute', right:0, marginTop:'-20px'}}/>
            <h3>
                How to join?
            </h3>
            <ol className='left' style={{display:'inline-block'}}>
                <li>Click the Login button to start the game.</li>
                <li>Enter your first name, last name, and email address.</li>
                <li>Answer the questions about all the companies.</li>
                <li>Once you finish, you’ll automatically be entered into the raffle.</li>
            </ol>
            <h3>Prizes</h3>
            <p className='pading left'>Everyone who answers the questions correctly will take part in the raffle.</p>
            <p className='pading left'><span style={{color:'#FF294D'}}>3 lucky winners</span> will receive special prizes provided by <b>Diadraw</b></p>
            <p className='pading left'>
                Winners will be drawn at random after the exhibition ends and announced on the game’s website.
            </p>
            <p className='pading left'>Each winner will also receive a personal email with instructions on how to claim their prize.</p>
            <img src={prizes} alt='prize image' style={{width:'100%'}}/>
            <div id="organizerCard" style={{ border: '8px solid #CAFF00', borderRadius: '16px', margin: '1.5em' }}>
                <p id="capitalLettersText">The game is organized by Diadraw with the support of Career Show Plovdiv.</p>
                <div className='images' style={{display:'flex', justifyContent:'space-between', padding:'1em'}}>
                    <img src={diadrawLogo} alt='diadraw logo' />
                    <img src={careerShowLogo} alt='career show logo' />
                </div>
            </div>
            <button style={{marginBottom:'30px'}} onClick={() => { setPage(++page) }}>Enter to Win</button>
            <div style={{backgroundColor:'#321E41', color:'#F6F8F0',  boxSizing: 'border-box', overflow: 'auto'}}>
                <h4>Winners</h4>
                <p>The winners will be announced here - after the event ends.</p>
                <ol style={{marginBottom:'2em'}}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        </div>
    );
}

export default LandingPage;