import { BrowserRouter, Link } from 'react-router-dom'
import Game from '../components/3x3/Game'
import backArrow from './img/backArrow.png';

const threexthree = () => {
    return (
        <BrowserRouter forceRefresh>
            <Link to='/' className='home'>
                <img src={backArrow} alt="HOME"/>
            </Link>
            <Game />
        </BrowserRouter>
    )
}

export default threexthree;