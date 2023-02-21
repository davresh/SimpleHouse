import './style.scss';
import mango from '../../assets/image/img-01.jpg';
import Food from '../../components/food';
import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { myContext } from '../../assets/my-context';
function Home(){
    let box = useContext(myContext)
    let [eat,setEat] = useState(box.foods)
    let [color,setColor] = useState(1)
    return (
        <div className='homePage'>
            <div className='text-about'>
                <h1>Welcome to Simple House</h1>
                <p>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
            </div>
            <div className='food'>
                <div className='foodClick'>
                    <input className={color==1?'buttonClick':''} type="button" value="Pizza" onClick={(e)=>{
                        setEat(box.foods)
                        setColor(1)
                    }}/>
                    <input className={color==2?'buttonClick':''} type="button" value="Salad" onClick={()=>{
                        setEat(box.foods.filter(el => el.pizza =='Salad'))
                        setColor(2)
                    }}/>
                    <input className={color==3?'buttonClick':''} type="button" value="Noodle" onClick={()=>{
                        setEat(box.foods.filter(el => el.pizza =='Noodle'))
                        setColor(3)
                    }}/>
                </div>
                <div className='foodList'>
                    {eat.map(el => <Food key={el.id} food={el}/>)}
                </div>

            </div>
            <div className='nulla'>
                <div className='nulla-img'>
                    <img src={mango} alt="" />
                </div>
                <div className='nulla-box'>
                    <h2>Maecenas nulla neque</h2>
                    <p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a href="#">talk to us</a> for additional permissions about our templates. Thank you.</p>
                    <Link className='href-about' to={'/about'}>Read more</Link>
                </div>
            </div>
        </div>
    )
}
export default Home;