function Table (props){
    return <>
        <thead>
            <tr>
                {props.matrix[0].map(item=>{
                    return <th>{'col' +item}</th>
                })};
            </tr>
        </thead>
        <tbody>
            {props.matrix.map(item=>{
                return <tr>{item.map(el =><td>{el}</td>
                )}</tr>
            })}
        </tbody>
    </>
}
 
export default Table;