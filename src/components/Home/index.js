import {Component} from 'react'

import {TailSpin} from 'react-loader-spinner'

import ProductItem from '../ProductItem'

import './index.css'

class Home extends Component {
  state = {products: [], isLoading: true, searcInput: ''}

  componentDidMount = () => {
    this.getProducts()
  }

  getProducts = async () => {
    const url = 'https://fakestoreapi.com/products'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      price: eachData.price,
      description: eachData.description,
      image: eachData.image,
      category: eachData.category,
      rating: eachData.rating.rate,
      count: eachData.rating.count,
    }))

    this.setState({products: updatedData, isLoading: false})
  }

  renderList = () => {
    const {products, searcInput} = this.state
    const resultantQuerry = products.filter(eachProduct =>
      eachProduct.title.toLowerCase().includes(searcInput.toLowerCase()),
    )
    console.log(resultantQuerry)
    return (
      <ul className="unorderd-list">
        {resultantQuerry.map(eachProduct => (
          <ProductItem eachProduct={eachProduct} key={eachProduct.id} />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <div className="loading">
      <TailSpin />
    </div>
  )

  onChangeSearch = event => {
    this.setState({searcInput: event.target.value})
  }

  render() {
    const {products, isLoading} = this.state

    console.log(products)
    return (
      <div className="main-container">
        <input
          type="search"
          placeholder="search"
          onChange={this.onChangeSearch}
        />
        <div className="blog-list-container">
          {isLoading ? this.renderLoading() : this.renderList()}
        </div>
      </div>
    )
  }
}

export default Home
