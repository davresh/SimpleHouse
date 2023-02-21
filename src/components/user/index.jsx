import './style.scss';

function User({user}){
    return (
        <div className='user-block'>
            <div className='user-img'>
                <img src={user.img} alt={user.name} />
            </div>
            <div className='about-user'>
                <h2>{user.name}</h2>
                <h5>{user.profession}</h5>
                <p>{user.about}</p>
                <div className='user-site'>
                    {user.icons.map((el ,i)=> <i key={i} className={el}/>)}
                </div>
            </div>
        </div>
    )
}
export default User;