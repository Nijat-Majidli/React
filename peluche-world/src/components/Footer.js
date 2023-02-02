import { useState } from 'react'
import '../styles/Footer.css'

// useState est un hook qui permet d’ajouter le state local React à des composants fonctions.
// Un hook est une fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React. On peut d'ailleurs les importer directement depuis React.

function Footer() 
{
    // Le state est un objet React qui est utilisé pour contenir des données sur le composant.
    // Pour créer et modifier le state on utilise la syntaxe de décomposition avec les crochets [] :
	const [inputValue, setInputValue] = useState('')

    // La syntaxe de décomposition nous permet directement de créer le state "inputValue" et en même temps avec useState nous déclarons la fonction setInputValue pour 
    // modifier ce state et lui attribuer une valeur initiale, qui sera ici d'un string vide ('') 
    // Il est important de préciser une valeur initiale dans votre state. Sinon, elle sera undefined par défaut.

    // Le hook useState() nous renvoie une paire de valeurs dans un tableau de 2 éléments, que nous récupérons dans les variables "inputValue" et 
	// "setInputValue" dans notre exemple. Le premier élément est la valeur actuelle, et le deuxième est une fonction qui permet de la modifier.


	return (
		<footer className='footer'>
			<div className='footer-elem'>
				Pour les passionné·e·s de peluches 
			</div>
			<div className='footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)


    function handleInput(event) 
    {
		setInputValue(event.target.value)
	}

    
	function handleBlur() 
    {
		if (!inputValue.includes('@')) 
        {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse mail valide 😥")
		}
	}
}

export default Footer