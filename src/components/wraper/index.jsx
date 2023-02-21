import { useState } from 'react';
import './style.scss';

function Wraper({text}){
    let [line,setLine] = useState('55px')
    let [rotat,setRotat] = useState(0)
    return (
        <div className='block-wrap' style={{height:line}}>
            <div className='border-block' onClick={()=>{
                setLine(line=='55px'?'118px':'55px')
                setRotat(!rotat?-90:0)
            }}>
                <h3>{text.name}</h3>
                <i className='icon-play3' style={{rotate:rotat+'deg'}}/>
            </div>
            <div className='wrap-text'>
                <p>{text.info}</p>
            </div>
        </div>
    )
}
export default Wraper;