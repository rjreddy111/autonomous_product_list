// Write your JS code here
import Stars from '../Stars'

const StarRating = props => {
  const {rating, filledColor, emptyColor} = props
  console.log(rating)
  const stars = []
  for (let i = 0; i < 5; i += 1) {
    stars.push(
      <Stars
        key={i}
        filled={i < rating}
        filledColor={filledColor}
        emptyColor={emptyColor}
      />,
    )
  }
  return <div className="star-rating">{stars}</div>
}

export default StarRating
