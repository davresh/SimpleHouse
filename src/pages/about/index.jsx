import './style.scss';

import user6 from '../../assets/image/about-06.jpg'
import User from '../../components/user';
import IconBox from '../../components/iconbox';
import { useContext } from 'react';
import { myContext } from '../../assets/my-context';
function About(){
    let box = useContext(myContext);
    return (
        <div className='aboutPage'>
            <div className='text-about'>
                <h1>About Simple House</h1>
                <p>This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.</p>
            </div>
            <div className='about-box'>
                {box.users.map((el,i) => <User key={i} user={el}/>)}
            </div>
            <div className='girl'>
            </div>
            <div className='donec'>
                {box.icn.map(el => <IconBox key={el.id} add={el}/>)}
            </div>
            <div className='history'>
                <div className='history-img'>
                    <img src={user6} alt="" />
                </div>
                <div className='history-text'>
                    <h1>History of our restaurant</h1>
                    <p>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
                    <p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a href="#">contact TemplateMo</a> for additional permissions about our templates. Thank you.</p>
                </div>
            </div>
        </div>
    )
}
export default About;