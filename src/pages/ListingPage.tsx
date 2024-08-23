import { useEffect, useState } from "react"
import DataGrid from "../components/DataGrid/DataGrid"
import ITEM_LIST from "../util/constant"
import './ListingPage.css'


const ListingPage = () => {

    const [items, setitems] = useState(ITEM_LIST)
    const [searchText, getSearchText] = useState('')

    const onTextChange = ((e: React.ChangeEvent<HTMLInputElement>)=> {
        getSearchText(e.target.value)
    })

    useEffect(()=>{
        setitems(()=>{
            return ITEM_LIST.filter(item=> item.name.indexOf(searchText)> -1)
        }
        )
    }, [searchText])
    return (
        <>
            <h1>Product Listing</h1>
            <input className="search-box" type="text" placeholder="search"
             value={searchText} 
             onChange={onTextChange}
            />
            <div className="grid">
             <DataGrid dataObjects={items}/>
            </div>

        </>
    )
}

export default ListingPage