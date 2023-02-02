import { useEffect } from 'react'
import { BsTrash } from "react-icons/bs"
import '../styles/Cart.css'
import '../styles/TrashBin.css'

function Cart(props) 
{	
	// Les props sont des objets que l'on peut passer dans les paramètres de composant fonction.
	// Pour récupérer les props on utilise la "syntaxe de déstructuration" -> les accolades {} : 
	const { cart, updateCart, isOpen, setIsOpen } = props
    // Cette syntaxe nous permet de directement déclarer les variables (cart, updateCart, isOpen, setIsOpen) et de les assigner la valeur d'une propriété d'un objet (ou tableau).
	// Ici, on évite de multiplier les déclarations qui sans cette syntaxe auraient été:	
	// const cart = props.cart,	
	// const updateCart = props.updateCart
	// const isOpen = props.isOpen,
	// const setIsOpen = props.setIsOpen,

	// On applique la méthode reduce() de JavaScript sur le prop "cart" qui contient un tableau. Cette méthode exécute une fonction de
	// réduction sur chaque élément du tableau et renvoie une seule valeur: le résultat cumulé (accumulateur) de la fonction.
	const total = cart.reduce((accumulateur, cartElement) => accumulateur + cartElement.amount * cartElement.price, 0)

	// Ici, on utilise le hook useEffect pour déclencher un alert lorsque le total de notre panier change:
	// useEffect(() => {alert(`J'aurai ${total}€ à payer 💸`)}, [total])

	// Ici, on utilise le hook useEffect pour mettre à jour le titre de l'onglet de notre navigateur lorsque le total de notre panier change:
	useEffect(() => {document.title = `PW: ${total}€ d'achats`}, [total])

    return isOpen ? (
        <div className='cart'>
			<button 
				className='cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>

			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map((cartElement, index) => (
							<div key={index}>
								{cartElement.name} {cartElement.price}€ x {cartElement.amount} 
								<BsTrash onClick={() => deleteFromCart(cartElement.name)} className="trashBin" />
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>) : (<div>Votre panier est vide</div>)
			}
        </div>
    ) : (null)


	function deleteFromCart(name) 
	{
		// La méthode filter() de JavaScript exécute une fonction pour chaque élément du tableau et crée un nouveau tableau rempli d'éléments qui réussissent un test fourni par cette fonction.
		const newCart = cart.filter((cartElement) => cartElement.name !== name)

		console.log(newCart)

		updateCart([...newCart])
	}
}


export default Cart
