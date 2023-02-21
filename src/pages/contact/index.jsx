import { useContext } from 'react';
import { myContext } from '../../assets/my-context';
import Wraper from '../../components/wraper';
import './style.scss'
function Contact(){
    let box = useContext(myContext)
    return (
        <div className='contactPage'>
            <div className='text-about'>
                <h1>Contact Page</h1>
                <p>You may use <a href="#">Simple Contact Form</a> to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.</p>
            </div>
            <div className='contact-box'>
                <div className='sendMess'>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'/>
                    <div className='contact-btn'>
                        <input type="button" value='Send'/>
                    </div>
                </div>
                <div className='messegBox'>
                    <div><h1>Our Address</h1></div>
                    <div>   
                        <p>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
                    </div> 
                    <div><i className='icon-phone'/><h3>080-090-0110</h3></div>
                    <div><i className='icon-envelop'/><h3>info@company.co</h3></div>
                    <div className='soc-site'>
                        <i className='icon-facebook2'/>
                        <i className='icon-twitter'/>
                        <i className='icon-instagram'/>
                    </div>
                </div>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.338230228774!2d-43.37716098555755!3d-23.011350247394436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2zQXYuIEzDumNpbyBDb3N0YSAtIEJhcnJhIGRhIFRpanVjYSwgUmlvIGRlIEphbmVpcm8gLSBSSiwg0JHRgNCw0LfQuNC70LjRjw!5e0!3m2!1sru!2s!4v1674042371687!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map-box'/>
                </div>
               <div className='wrap-box'>
                    <div className='text-about'>
                        <h1>FAQs</h1>
                        <p>This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666</p>
                    </div>
                    <div className='wraper'>
                        {box.wraperInf.map(el => <Wraper key={el.id} text={el}/>)}
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Contact;