import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'


class App extends Component 
{
    // On crée un state "persons" qui contient des objets :
    state = {
        persons: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    }


    // La méthode removePerson() supprime un élément du state "persons" :
    removePerson = (param) => {
        // Nous pouvons accéder à tous les states via "this.state". 
        // Nous utilisons "this.state.persons" pour récupérer le contenu du state "persons" et on le met dans const people:
        const people = this.state.persons   
        // On peut aussi écrire de cette façon :  const { persons } = this.state
      
        // Pour modifier le state "persons", nous utilisons setState() méthode de la classe App :
        this.setState({
            // On utilise la méthode filter() de Javascript pour parcourir les éléments du tableau people :
            persons: people.filter((value, index) => {
                return param !== index
            }),
        })
    }


    // La méthode addPerson() ajoute un nouveau élément dans le state "persons", en utilisant l'opérateur spread (...) de ES6 :
    addPerson = (person) => {
        this.setState({ 
            persons: [...this.state.persons, person] 
        })
    }


    render() 
    {
        const { persons } = this.state  

        return (
            <div className="container">
                <h1>Members</h1>
                
                {/* Nous transmettons le state "persons" et la méthode removePerson() au composant Table via le props "personsData" et le props "removeData"  */}
                <Table  personsData={persons}  removeData={this.removePerson} />

                {/* Nous transmettons la méthode addPerson() au composant Form via le props "addData"  */}
                <Form  addData={this.addPerson} />
            </div>
        )
    }
}

export default App
