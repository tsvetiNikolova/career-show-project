import Nav from "./Nav";
import trophy from '../assets/trophy.svg'
import time from '../assets/access_time.svg'
import diadrawLogo from '../assets/diadrawLogo.svg'

function Completed() {
    return (
        <div>
            <Nav page={4}></Nav>
            <img src={trophy} style={{ width: '13vw', marginTop: '5em' }} />
            <h3 style={{ fontWeight: 400 }}>Game Completed!</h3>
            <h5 style={{ lineHeight: '1.4em' }}>Results will be announced<br />
                <b style={{ fontWeight: 500 }}>after 5 PM on October 9 </b></h5>
            <div className="performanceCard" style={{
                position: 'relative',
                height:'220px',
                textAlign: 'center',
                paddingTop: '20px'
            }}>
                <h5 style={{
                    margin: '0 0 10px 0'
                }}>Winners</h5>

                <ol style={{
                    position: 'absolute',
                    top: '68px',
                    left: '10px',
                }}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>

                <img src={time} style={{
                    display: 'block',
                    margin: '36px auto 0 auto'
                }} />
            </div>

            <br />
            <img src={diadrawLogo} style={{ width: '40vw', margin: '1.3em 0' }} />
            <p style={{ width: '70%', margin: '0.5em auto 5em' }}>
                In that time you can see the coding challenge <a className="redUnderline">here</a> or
                explore our carrer options <a className="redUnderline">here</a>
            </p>
        </div>
    );
}

export default Completed;