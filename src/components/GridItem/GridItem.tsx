import GroceryItem from '../../types'
import './GridItem.css'
import { useNavigate } from 'react-router-dom'
import image from '../../assets/milk.jpg'

type Props = {
    dataObject: GroceryItem,

}

const GridItem = ({ dataObject }: Props) => {


    const navigate = useNavigate();
    return (
        <tr className="data-table-row">
            <td> <img src={dataObject.picture_url}
                onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src=image;
              }}
             alt={dataObject.name} /></td>
            <td>
                <span>{dataObject.name}</span>
            </td>
            <td>
                <span>{dataObject.description}</span>

            </td>
            <td>
                <span>{dataObject.suggested_price}</span>

            </td>
            <td>
                <span>{dataObject.discount_percentage}</span>

            </td>
            <td>
                <span>{dataObject.actual_price}</span>
            </td>
            <td>
                <button onClick={() => {
                    navigate('checkout', {
                        state: {
                            item: dataObject
                        }
                    })
                }}> Buy Now</button>
            </td>
        </tr>
    )
}

export default GridItem