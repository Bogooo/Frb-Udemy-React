import Table from './Table';
import  {GoArrowUp, GoArrowDown} from 'react-icons/go';
import useSort from "../hooks/useSort";
function SortableTable(props){

    const {config,data} = props;
    const {sortBy,sortOrder,setSortColumn,sortedData}=useSort(data,config);

    const updatedConfig = config.map((column)=>{
       if(!column.sortValue)
       {
           return column;
       }
       return {
           ...column,
           header: ()=> <th className="cursor-pointer hover:bg-gray-500" onClick={()=>setSortColumn(column.label)}>
               <div className="flex items-center">
                   {getIcon(column.label,sortBy,sortOrder)}
                   {column.label}
               </div>
           </th>
       };
    });

    return (<Table {...props} data={sortedData} config={updatedConfig} />);
}

export default SortableTable;

function getIcon(label,sortBy,sortOrder){
    if(label!==sortBy){
        return <div>
            <GoArrowUp/>
            <GoArrowDown/>
        </div>
    }
    if(sortOrder === null){
        return <div>
            <GoArrowUp/>
            <GoArrowDown/>
        </div>
    }
    if(sortOrder === 'asc'){
        return <div>
            <GoArrowUp/>
        </div>
    }
    if(sortOrder === 'desc'){
        return <div>
            <GoArrowDown/>
        </div>
    }
}