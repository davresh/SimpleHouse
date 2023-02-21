import { Link } from 'react-router-dom';
import './style.scss';

function IconBox({add}){
    return (
        <div className='box-icon'>
            <i className={add.icon}/>
            <p>{add.text}</p>
            <div className='box-icon-btn'>
                <Link to={'/SimpleHouse'} style={{backgroundColor:add.color}}>Read more</Link>
            </div>
        </div>
    )
}
export default IconBox;