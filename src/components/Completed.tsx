import Nav from "./Nav";
import trophy from '../assets/trophy.svg'
import time from '../assets/access_time.svg'
import diadrawLogo from '../assets/diadrawLogo.svg'

function Completed() {
    return (
        <div>
            <Nav page={4}></Nav>
            <img src={trophy} style={{ width: '15vw'}} />
            <h3 style={{ fontWeight: 400, marginBottom:'2em' }}>Game Completed!</h3>
            <div className="performanceCard" style={{
                display: 'grid',
                height: '220px',
                textAlign: 'center',
                paddingTop: '20px'
            }}>
                <h5 style={{
                    margin: '0 0 10px 0'
                }}>Winners</h5>

                <h5>3 winners will be announced <b style={{ fontWeight: 500 }}>after 5 PM on October 9</b></h5>
            </div>

            <br />
            <img src={diadrawLogo} style={{ width: '45vw', margin: '1.3em 0' }} />
            <p style={{ width: '70%', margin: '0.5em auto 5em' }}>
                In that time you can see the coding challenge <a className="redUnderline">here</a>
            </p>
        </div>
    );
}

export default Completed;