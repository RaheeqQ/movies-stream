import apple from './imgs/apple.png';
import disney from './imgs/disney.jpeg';
import HBO from './imgs/hbo.png';
import hulu from './imgs/hulu.png';
import netflix from './imgs/N.jpeg';
import prime from './imgs/prime.jpeg';
import './App.css';
const Rightsidebar = () => {
    return ( 
    <div className="right-sidebar">
        <h4 className="side-header">Media Service</h4>
        <div className="nav-icons">
            <img className='icons' src={apple} alt="appleTV" /><span className='channels'>Apple TV</span>
        </div>
        <div className="nav-icons">
            <img className='icons' src={disney} alt="disney" /><span className='channels'>Disney TV</span>
        </div>
        <div className="nav-icons">
            <img className='icons' src={HBO} alt="HBO" /><span className='channels'>HBO MAX</span>
        </div>
        <div className="nav-icons">
            <img className='icons' src={hulu} alt="hulu" /><span className='channels'>Hulu</span>
        </div>
        <div className="nav-icons">
            <img className='icons' src={netflix} alt="netflix" /><span className='channels'>Netflix</span>
        </div>
        <div className="nav-icons">
            <img className='icons' src={prime} alt="prime" /><span className='channels'>Prime</span>
        </div>
      
        <h4 className="side-header">Genre</h4>
        <div className="genres">
            <div className='genres'>
                <a>Action</a>
            </div>
            <div className='genres'>
                <a>Comedy</a>
            </div>
            <div className='genres'>
                <a>Drama</a>
            </div>
            <div>
                <a>Sci-Fi</a>
            </div>
            <div className='Thriller'>
                <a >Thriller</a>
            </div>
            <div className='genres'>
                <a>Western</a>
            </div>
        </div>
    </div>
     );
}
 
export default Rightsidebar;