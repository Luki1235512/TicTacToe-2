import {Link} from "react-router-dom";
import boardImg7 from './img/7x7.png';
import boardImg5 from './img/5x5.png';
import boardImg3 from './img/3x3.png';


const Home = () => {
    return (
        <h1>
            <ul className="nav">
                <li>
                    <Link to='/3x3' className='link'>3x3
                        <br />
                        <img src={boardImg3} alt="3x3 board"></img>
                    </Link>
                </li>
                <li>
                    <Link to='/5x5' className='link'>5x5
                        <br />
                        <img src={boardImg5} alt="5x5 board"></img>
                    </Link>
                </li>
                <li>
                    <Link to='/7x7' className='link'>7x7
                        <br />
                        <img src={boardImg7} alt="7x7 board"></img>
                    </Link>
                </li>
            </ul>
            <div>
            </div>
        </h1>
        
    )
}

export default Home;