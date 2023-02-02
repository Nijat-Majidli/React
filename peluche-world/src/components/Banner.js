import '../styles/Banner.css'

// Les props sont des objets que l'on peut passer dans les paramètres de notre composant fonction.
// La prop technique "children" indique les éléments enfants (ici, les balises div, img et h1) dans l'élément parent (composant Banner)  ->  voir le fichier "App.js"
// La prop technique "children" est utile lorsqu'un composant ne connaît pas le nombre de ses éléments enfants à l'avance.
function Banner(props) 
{
    const children = props.children

	return <div className='banner'> {children} </div>
}

export default Banner

