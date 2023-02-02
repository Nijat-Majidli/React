import Stars from '../assets/star.png'

function Star(props) 
{
    const { starValue } = props

	const range = [1, 2, 3, 4, 5]

	return (
		<div>
			{ range.map((rangeElem, index) => starValue >= rangeElem ? <span key={index}><img src={Stars} alt='star-icon' style={{ width:12, height:12 }}/></span> : null) }
		</div>
	)
}

export default Star