import './style.scss';
import bg from '../../assets/image/simple-house-01.jpg';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
function Header(){
    let [scroll,setScroll] = useState(false)
    window.onscroll = () => {
        if(window.scrollY>=250){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }   
    return(
        <header style={{backgroundImage:`url(${bg})`}} id='header'>
            <a href="#header" className={`to-top-btn${scroll?' top-btn-block':''}`}>ToTop</a>
            <div className='header-block'>
                <div className='header-logo'>
                    <div className='logo-up'><div className='logo'></div></div>
                    <div className='logo-name'>
                        <h1>Simple House</h1>
                        <h4>new restaurant template</h4>
                    </div>
                </div>
                <div className='header-links'>
                    <div className='header-box'> <NavLink to={'/SimpleHouse'}>Home</NavLink></div>
                    <div className='header-box'><NavLink to={'/about'}>About</NavLink></div>
                    <div className='header-box'><NavLink to={'/contact'}>Contact</NavLink></div>
                </div>
            </div>
        </header>
    )
}
export default Header;