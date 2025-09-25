type CardProps = {
    standNum?: number;
    logo: string;
    name: string;
    description: string;
    color: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function Card({ standNum, logo, name, description, color, onClick }: CardProps) {
    return (
        <div className="card" onClick={onClick}
            style={{
                cursor: 'pointer',
                backgroundColor: color,
                boxShadow: color === '#321E41' ? 'none' : '0px 60px 70px 20px #00000333'
            }}>
                
            <h5 id="standNum" style={{display:color === '#321E41' ? 'none' : 'block'}}>{standNum}<br></br>щанд</h5>

            <div style={{
                backgroundColor: 'white',
                width: 'fit-content',
                height: '130px',
                margin: 'auto',
                borderRadius: '8px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                    <img src={logo} alt="company logo" />
                
            </div>
            <h5 style={{
                color: color === '#321E41' ? 'white' : 'black',
                fontWeight: color === '#321E41' ? 300 : 400,
            }}>{name}</h5>
            <p style={{
                color: color === '#321E41' ? 'white' : 'black',
                fontWeight: color === '#321E41' ? 300 : 400,
                width: color === '#321E41' ? '75%' : '90%',
                margin: 'auto'
            }}>{description}</p>
        </div>
    );
}

export default Card;