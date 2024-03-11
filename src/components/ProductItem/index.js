// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const ProductItem = props => {
  const {eachProduct} = props
  const {
    id,
    title,
    price,

    image,
    category,
  } = eachProduct
  return (
    <Link to={`products/${id}`} className="link-style">
      <li className="list-style">
        <p className="titel">{title} </p>

        <p className="category">{category}</p>

        <img src={image} alt={title} className="image" />

        <p className="proce"> Rs. {price}</p>

        <button type="button" className="buy-now">
          View Details
        </button>
      </li>
    </Link>
  )
}

export default ProductItem
