
function Table({data,config,keyFn}){

    const renderedData = data.map((rowData)=>{
        const renderedCells = config.map((column)=>{
           return <td key={column.label} className="p-3">{column.render(rowData)}</td>
        });

       return (<tr className="border-b" key={keyFn(rowData)}>
           {renderedCells}
       </tr>);
    });

    const renderedHeaders =config.map((column)=>{
        return <th key={column.label}>{column.label}</th>
    });

    return (<table className="table-auto boorder-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedData}
        </tbody>
    </table>);
}

export default Table;