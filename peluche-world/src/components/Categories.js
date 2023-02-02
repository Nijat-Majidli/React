import '../styles/Categories.css'

function Categories({ categories, setActiveCategory, activeCategory }) {
	return (
		<div className='categories'>
			<select
				value={activeCategory}
				onChange={(event) => setActiveCategory(event.target.value)}
				className='categories-select'
			>
				<option value=''>Toutes les catégories</option>
				{categories.map((category, index) => (
					<option key={index} value={category}>
						{category}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories