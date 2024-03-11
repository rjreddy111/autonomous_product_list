import {Component} from 'react'
import {TailSpin} from 'react-loader-spinner'

import StarRating from '../StarRating'

import './index.css'

class ProductDetails extends Component {
  state = {productDetails: {}, isLoading: true}

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://fakestoreapi.com/products/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.id,
      title: data.title,
      price: data.price,
      description: data.description,
      image: data.image,
      rating: data.rating.rate,
      count: data.rating.count,
    }

    this.setState({
      productDetails: updatedData,
      isLoading: false,
    })
  }

  renderLoading = () => (
    <div className="loading">
      <TailSpin />
    </div>
  )

  render() {
    const {productDetails, isLoading} = this.state
    const {title, price, description, image, rating, count} = productDetails

    return (
      <div className="main-details-page">
        {isLoading ? (
          this.renderLoading()
        ) : (
          <>
            <h4>{title}</h4>
            <img src={image} className="image-style" alt={title} />
            <div className="rating-price-count">
              <h5>
                Buy at <span className="price-details">Rs. {price} </span>
              </h5>
              <p className="rating-style">
                <StarRating
                  rating={rating}
                  filledColor="gold"
                  emptyColor="#ddd"
                />{' '}
                ({count})
              </p>
            </div>
            <p>{description}</p>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </>
        )}
      </div>
    )
  }
}

export default ProductDetails
