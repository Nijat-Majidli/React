import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.jpg'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'
import { BsFillBasketFill } from "react-icons/bs";


// useState est un hook qui permet d’ajouter un state de React à des composants fonctions. 
// useEffect est un hook qui permet d’ajouter un effet de React à des composants fonctions. 
// Les hooks useState et useEffect sont uniquement accessibles dans un composant fonction. Donc ce n'est pas possible de les utiliser dans un composant classe, ou dans une simple fonction JavaScript.
// Un hook est une fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React. On peut d'ailleurs les importer directement depuis React.
// Les hooks ont été ajoutés à React dans la version 16.8. Les hooks permettent aux composants fonctions d'avoir accès à state et 
// à d'autres fonctionnalités de React. De ce fait, les composants de classe ne sont généralement plus nécessaires. 
function App() 
{
	// La propriété "localStorage" de l'objet Window de JavaScript permet d'enregistrer les données en format clé/valeur dans notre navigateur sans date d'expiration. 
	// La méthode getItem() permet de récupérer les données ('cart') depuis "localStorage" :
	const savedCart = window.localStorage.getItem('cart')
	
	// Le state est un objet React qui est utilisé pour contenir des données ou des informations sur le composant.
	// Pour créer et modifier un state on utilise la "syntaxe de décomposition" -> les crochets [] :
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	// Ici, nous créeons le state "cart" et la fonction "updateCart" en utilisant la syntaxe de décomposition avec le hook useState().
	// La fonction updateCart sert à modifier le state "cart" et lui attribuer une valeur initiale. 
	// Il est important de préciser une valeur initiale dans notre state. Sinon, elle sera "undefined" par défaut.
	// La valeur initiale de notre state est définit dans le paramètre de useState().
	
	// On utilise le hook useEffect pour ajouter un effet à notre composant fonction :
	useEffect(() => {window.localStorage.setItem('cart', JSON.stringify(cart))}, [cart])
	// Ici, le hook useEffect accepte 2 paramètres.
	// Le premier paramètre est une fonction qui correspond à l'effet à exécuter. Ici, il s'agit de la méthode setItem() qui permet 
	// de créer un objet 'cart' sur le "localStorage". Avec la fonction JSON.stringify on convertit cet objet en format JSON. 
	// Le deuxième paramètre est un tableau noté entre crochets: [cart]. Il s'agit du tableau de dépendances qui précise le moment quand on veut déclencher l'effet.
	// Dans notre cas, on veux que la méthode setItem() crée un objet 'cart' sur localStorage lorsque notre panier (cart) change.
	
	// On applique la méthode reduce() de JavaScript sur le prop "cart" qui contient un tableau. Cette méthode exécute une fonction de
	// réduction sur chaque élément du tableau et renvoie une seule valeur: le résultat cumulé (accumulateur) de la fonction.
	const total = cart.reduce((accumulateur, cartElement) => accumulateur + cartElement.amount, 0)

	// Afin d'afficher ou de cacher le panier on va créer le state "isOpen" associée avec la fonction "setIsOpen" et de l'initialiser à la valeur false :
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			<Banner>
				<div className='basketContainer'>
					<BsFillBasketFill className='basket' onClick={() => setIsOpen(true)}/> 
					{ total>0 ? <span style={{color:"orange", fontSize:20}}>{total}</span> : null}
				</div>
				<div className='logoContainer'>
					<img src={logo} alt='peluche world' className='logo' />
					<h1 className='title'>Peluche world</h1>
				</div>
			</Banner>
			
			<div className='layout'>
				<Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />
                <ShoppingList cart={cart} updateCart={updateCart} />
			</div>

			<Footer />
		</div>
	)
}

export default App


