import { useState } from 'react'
import { pelucheData } from '../datas/pelucheData'
import PelucheItem from './PelucheItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'


// En utilisant la syntaxe de "déstructuration" {cart, updateCart} on récupére les props directement dans les variables "cart" et "updateCart".
// Donc ici on n'a pas besoin d'écrire:		const { cart, updateCart } = props 
function ShoppingList({ cart, updateCart }) 
{
	// On applique la méthode reduce() de JavaScript sur le tableau "pelucheData". Cette méthode exécute une fonction de
	// réduction sur chaque élément du tableau et renvoie une seule valeur: le résultat cumulé (accumulateur) de la fonction.
	const categories = pelucheData.reduce((accumulateur, peluche) => accumulateur.includes(peluche.category) ? accumulateur : accumulateur.concat(peluche.category), [])
	// Le constant "categories" contient un tableau avec les catégories.

	// Afin d'afficher ou de cacher certains catégories on va créer le state local "activeCategory" associée 
	// avec la fonction setactiveCategory et de l'initialiser à string vide '' :
	const [activeCategory, setActiveCategory] = useState('')
	// Le state local existe à l’intérieur d’un composant. Ce composant peut être re-render autant de fois que l'on veut, mais la data sera préservée.

	return (
		<div className='shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='peluche-list'>
				{pelucheData.map((peluche) => 
					!activeCategory || activeCategory === peluche.category ? (
						<div key={peluche.id}>
							<PelucheItem
								image={peluche.image}
								name={peluche.name}
								price={peluche.price}
								stock={peluche.stock}
								star={peluche.star}
							/>
							<button onClick={() => addToCart(peluche.name, peluche.price, peluche.stock)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)


	function addToCart(name, price, stock) 
	{
		if (stock === 'en rupture')
		{
			alert('Cet article n\'est pas disponible')
			return
		}

		// La méthode find() de JavaScript exécute une fonction pour chaque élément du tableau et renvoie la valeur du premier élément qui réussit un test.
		const pelucheAdded = cart.find((cartElement) => cartElement.name === name)

		if (pelucheAdded) 
		{
			const cartFilter = cart.filter((cartElement) => cartElement.name !== name)

			updateCart([...cartFilter, { name, price, amount: pelucheAdded.amount + 1 }])
		} 
		else 
		{
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
}

export default ShoppingList
