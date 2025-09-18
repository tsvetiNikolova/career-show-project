import careerExplorerLogo from '../assets/Career_game_logo.svg'
import clockIcon from '../assets/clockIcon.svg'
import useNavViewmodel from '../viewModels/useNavViewmodel';
import diadrawLogo from '../assets/diadrawLogo.svg'
function Nav({ page }: { page: number }) {
    const { formattedTime } = useNavViewmodel()

    return (
        <div>
            <div className='nav'> 
                <div>
                    <p style={{ fontWeight: '300', margin:'0 0 0 25px' }}>Powered by</p>
                    <img src={diadrawLogo} />
                </div>
                <span style={{ backgroundColor: 'white', height: '50px', borderRadius: '6px' }}>
                    <img src={careerExplorerLogo} alt='career explorer logo' style={{ width: '80px', height: '65px', marginTop: '-10px' }} />
                </span>
               
            </div >
            <div className='subnav' style={{ visibility: page === 4 ? 'hidden' : 'visible' }}>
                <p style={{ fontWeight: '300', margin: '15px 0 -10px 0' }}><span style={{ display: 'flex', gap: '8px' }}><img src={clockIcon} /> {formattedTime}</span></p>
                {/* implement it */}
                <p style={{ fontWeight: '300' }}>36 Active Now</p>
            </div>
        </div>

    );
}

export default Nav;