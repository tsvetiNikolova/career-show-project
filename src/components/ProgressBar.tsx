import trophy from '../assets/trophy.svg'
type LandingPageProps = {
    progress:number
};

function Card({ progress }: LandingPageProps) {
    const calculatedWidth = `${(progress / 32) * 100}%`;

    return (
        <div>
          <span style={{display:'flex', justifyContent:'center'}}>
            <img src={trophy} alt='trophy icon'></img>
            <p style={{marginLeft:15, color:'#FF294D'}}>{progress} of 32 companies explored</p>
          </span>
          <div id="progressBar" style={{backgroundColor:'#1D1D1D4D', width:'70vw', height:'5px', borderRadius:'3px', margin:'auto'}}>
            <div id='progress' style={{width:calculatedWidth, height:'5px', borderRadius:'3px', backgroundColor:'#CAFF00'}}></div>
          </div>
        </div>
    );
}

export default Card;