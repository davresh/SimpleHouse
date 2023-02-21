
import React from "react"
import food1 from '../image/gallery/01.jpg';
import food2 from '../image/gallery/02.jpg';
import food3 from '../image/gallery/03.jpg';
import food4 from '../image/gallery/04.jpg';
import food5 from '../image/gallery/05.jpg';
import food6 from '../image/gallery/06.jpg';
import food7 from '../image/gallery/07.jpg';
import food8 from '../image/gallery/08.jpg';
import user1 from '../image/about-01.jpg'
import user2 from '../image/about-02.jpg'
import user3 from '../image/about-03.jpg'
import user4 from '../image/about-04.jpg'
export const myContext = React.createContext({
    icn:[
        {
            id:13,
            icon:'icon-fire',
            text:'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.',
            color:'#2D99CC'
        },
        {
            id:14,
            icon:'icon-leaf',
            text:'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.',
            color:'#319966'
        },
        {
            id:15,
            icon:'icon-glass2',
            text:'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.',
            color:'#993332'
        }
    ],
    foods:[
        {
            id:1,
            img:food1,
            foodName:'Fusce dictum finibus',
            aboutFood:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            value:'$45 / $55',
            pizza:'Noodle'
        },
        {
            id:2,
            img:food2,
            foodName:'Fusce dictum finibus',
            aboutFood:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            value:'$45 / $55',
            pizza:'Salad'
        },
        {
            id:3,
            img:food3,
            foodName:'Fusce dictum finibus',
            aboutFood:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            value:'$45 / $55',
            pizza:'Noodle'
        },
        {
            id:4,
            img:food4,
            foodName:'Fusce dictum finibus',
            aboutFood:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            value:'$45 / $55',
            pizza:'Salad'
        },
        {
            id:5,
            img:food5,
            foodName:'Fusce dictum finibus',
            aboutFood:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            value:'$45 / $55',
            pizza:'Noodle'
        },
        {
            id:6,
            img:food6,
            foodName:'Fusce dictum finibus',
            aboutFood:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            value:'$45 / $55',
            pizza:'Salad'
        },
        {
            id:7,
            img:food7,
            foodName:'Fusce dictum finibus',
            aboutFood:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            value:'$45 / $55',
            pizza:'Noodle'
        },
        {
            id:8,
            img:food8,
            foodName:'Fusce dictum finibus',
            aboutFood:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            value:'$45 / $55',
            pizza:'Salad'
        },
    ],
    users:[
        {
            id:9,
            img:user1,
            name:'Jennifer Soft',
            profession:'Founder and CEO',
            about:'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
            icons:['icon-facebook2','icon-twitter','icon-instagram','icon-youtube']
        },
        {
            id:10,
            img:user2,
            name:'Jennifer Soft',
            profession:'Founder and CEO',
            about:'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
            icons:['icon-facebook2','icon-twitter','icon-instagram','icon-youtube']
        },
        {
            id:11,
            img:user3,
            name:'Jennifer Soft',
            profession:'Founder and CEO',
            about:'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
            icons:['icon-facebook2','icon-twitter','icon-instagram','icon-youtube']
        },
        {
            id:12,
            img:user4,
            name:'Jennifer Soft',
            profession:'Founder and CEO',
            about:'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
            icons:['icon-facebook2','icon-twitter','icon-instagram','icon-youtube']
        }
    ],
    wraperInf:[
        {
            id:20,
            name:'1. Fusce eu lorem ?',
            info:'#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.'
        },
        {
            id:21,
            name:'2. Vestibulum ante ipsum ?',
            info:'Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.'
        },
        {
            id:22,
            name:'3. Can I redistribute ?',
            info:'Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to contact TemplateMo for additional permissions about our templates. Thank you.'
        },
        {
            id:23,
            name:'4. Ut ac erat sit ?',
            info:'Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.'
        }
    ]
})