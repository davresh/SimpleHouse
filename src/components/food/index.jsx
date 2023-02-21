import './style.scss';

function Food({food}){
    return (
        <div className='food-box'>
            <div className='img-box'>
                <img src={food.img} alt={food.foodName} />
            </div>
            <h2>{food.foodName}</h2>
            <p>{food.aboutFood}</p>
            <h2>{food.value}</h2>
        </div>
    )
}
export default Food;