import { useEffect, useState } from 'react'
import GroceryItem from '../../types'
import GridItem from '../GridItem/GridItem'
import './DataGrid.css'

type Props = {
    dataObjects: GroceryItem[]
}

type T  = keyof GroceryItem
const DataGrid = ({ dataObjects }: Props) => {
    const [data, setData] =useState<GroceryItem[]>(dataObjects)
    useEffect(()=>{
        setData(dataObjects)
    },[dataObjects])

    const sortTable = (order:string, column:T)=>{
        
        const initialData = [...dataObjects];

        if(column === 'name'){
            if(order === 'DSC')
                initialData.sort((a,b)=> b.name.localeCompare(a.name));
            else
                initialData.sort((a,b)=> a.name.localeCompare(b.name))

        } else if(column=== 'actual_price') {
            if(order === 'DSC')
                initialData.sort((a,b)=> b[column]-a[column]);
            else
                initialData.sort((a,b)=> a[column]-b[column])
        }
        

        setData(initialData)
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th></th>
                    <th className='data-colum-sortable'>Name
                    <button onClick={()=>sortTable('DSC', 'name')}>&#9650;</button>
                    <button onClick={()=>sortTable('ASC', 'name')}>&#9660;</button>

                    </th>
                    <th>Description</th>
                    <th className='data-colum-sortable' >Price  
                        <button onClick={()=>sortTable('DSC', 'actual_price')}>&#9650;</button>
                        <button onClick={()=>sortTable('ASC', 'actual_price')}>&#9660;</button>
                    </th>
                    <th>Discount</th>
                    <th>Final price</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => <GridItem key={index} dataObject={item} />)}
            </tbody>

        </table>
    )
}

export default DataGrid