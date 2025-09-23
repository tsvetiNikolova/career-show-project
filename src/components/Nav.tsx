import { useState } from 'react';
import careerExplorerLogo from '../assets/Career_game_logo.svg'
import clockIcon from '../assets/clockIcon.svg'
import useNavViewmodel from '../viewModels/useNavViewmodel';
import diadrawLogo from '../assets/diadrawLogo.svg'
import navStripes from '../assets/navStripes.svg'
import careerShowLogo from '../assets/careerShowLogo.svg';
import close from '../assets/close.svg';
import arrowDropDownHelp from '../assets/arrow_drop_down.png';


type NavProps = {
    page: number;
    userName: string;
}


function Nav({ page, userName }: NavProps) {
    const { formattedTime } = useNavViewmodel()
    const [showMenu, setShowMenu] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div>
            <div className='nav'>
                {/* toggle menu */}
                <img
                    src={navStripes}
                    onClick={() => setShowMenu(!showMenu)}
                    style={{ cursor: 'pointer' }}
                />

                <span style={{ backgroundColor: 'white', height: '50px', borderRadius: '6px' }}>
                    <img
                        src={careerExplorerLogo}
                        alt='career explorer logo'
                        style={{ width: '80px', height: '65px', marginTop: '-10px' }}
                    />
                </span>

                <div style={{ margin: '0 20px' }}></div>
            </div >

            <div className='subnav' style={{ visibility: page === 4 ? 'hidden' : 'visible' }}>
                <p style={{ fontWeight: '300', width: '30%', margin: 0 }}>
                    36 <br /> Players Exploring
                </p>

                <p style={{ fontWeight: '300' }}>
                    <span style={{ display: 'flex', gap: '8px' }}>
                        <img src={clockIcon} /> {formattedTime}
                    </span>
                </p>

                <img src={diadrawLogo} style={{ width: '28vw' }} />
            </div>

            {/* Slide-out menu */}
            {showMenu && (
                <>
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#1616163D',
                            zIndex: 999
                        }}
                    />
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '300px',
                            height: '100%',
                            backgroundColor: 'white',
                            boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
                            padding: '20px',
                            zIndex: 1000,
                            overflowY: 'auto'
                        }}
                    >
                        <button
                            onClick={() => setShowMenu(false)}
                            style={{ float: 'right', border: 'none', background: 'none' }}
                        >
                            <img src={close} />
                        </button>

                        <div style={{ marginTop: '40px' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%',
                                gap: '15px'
                            }}>
                                <img src={careerShowLogo} alt='career explorer logo' style={{ width: '30vw' }} />
                                <h5 style={{ margin: 0, fontWeight: 800 }}>X</h5>
                                <img src={diadrawLogo} style={{ width: '30vw' }} alt='diadraw logo' />
                            </div>
                            <h4 style={{ margin: '2.5em 0 0.5em 0' }}>Welcome, {userName}</h4>
                            <p style={{ color: '#FF294D', margin: 0 }}>Explore Connect Grow</p>
                            <br></br>
                            <div style={{
                                display: 'flex', justifyContent: 'center', gap: '8px'
                            }}
                                onClick={() => {
                                    setShowInfo(!showInfo)
                                }}
                            >
                                <h4 style={{ margin: 0 }}>Help</h4>
                                <img src={arrowDropDownHelp}
                                    style={{ rotate: showInfo ? '0deg' : '180deg' }}
                                />
                            </div>
                            <div className='helpInfo' style={{ display: showInfo ? 'block' : 'none' }}>
                                <p className='textAlignLeft'>Answer the questions about all the companies.</p>
                                <p className='textAlignLeft'>Once you finish, you’ll automatically be entered into the raffle.</p>
                                <p className='textAlignLeft'>3 lucky winners will receive special prizes provided by <b>Diadraw</b>.</p>
                                <p className='textAlignLeft'>Winners will be drawn at random after the exhibition ends and announced on the game’s website.</p>
                                <p className='textAlignLeft'>Each winner will also receive a personal email with instructions on how to claim their prize.</p>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </div >
    );
}

export default Nav;
