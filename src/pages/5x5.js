import { BrowserRouter, Link } from 'react-router-dom'
import Game from '../components/5x5/Game'
import backArrow from './img/backArrow.png';

const fivexfive = () => {
    return (
        <BrowserRouter forceRefresh>
            <Link to='/' className='home'>
                <img src={backArrow} alt="HOME"/>
            </Link>
            <Game />
        </BrowserRouter>
    )
}

export default fivexfive;