import Star from './Star'
import '../styles/PelucheItem.css'

function PelucheItem(props) 
{
    const { id, image, name, price, stock, star } = props

	return (
		<li key={id} className='peluche-item' onClick={() => handleClick(name)}>
			<img className='peluche-item-image' src={image} alt={`${name}`} />
			{name} {price}€
			{ stock==='disponible' ? <div style={{color:'green'}}> {stock} </div> : <div style={{color:'red'}}> {stock} </div> }
			<div>
				<Star starValue={star} />
			</div>
		</li>
	)


    function handleClick(pelucheName) 
    {
        alert(`Vous voulez acheter 1 ${pelucheName} ? Très bon choix ✨✨✨`)
    }
}

export default PelucheItem

