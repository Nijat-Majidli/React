
// Nous pouvons récupérer tous les props via "this.props"
// Par exemple, avec "this.props.personsData" nous récupérons le props "personsData"
// Pour récupérer le props "personsData" on peut aussi utiliser le raccourci de ES6 :    const { personsData } = this.props

const Table = (props) => {
    // Nous récupérons le props "personsData" et le props "removeData" envoyés depuis le composant "App.js"
    const { personsData, removeData } = props
  
    return (
        <table>
            <TableHeader />
            <TableBody  tableData={personsData}  tableRemove={removeData} />
        </table>
    )
}

export default Table


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}


const TableBody = (props) => {
    const rows = props.tableData.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.name}</td>
                <td>{value.job}</td>
                <td> <button onClick={() => props.tableRemove(index)}>Delete</button> </td>
            </tr>
        )
    })
  
    return <tbody>{rows}</tbody>
}


