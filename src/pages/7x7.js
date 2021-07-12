import { BrowserRouter, Link } from 'react-router-dom';
import './pagesStyle.css';
import Game from '../components/7x7/Game';
import backArrow from './img/backArrow.png';

const sevenxseven = () => {
    return (
        <BrowserRouter forceRefresh>
            <Link to='/' className='home'>
                <img src={backArrow} alt='HOME'/>
            </Link>
            <Game />
        </BrowserRouter>
    )
}

export default sevenxseven;