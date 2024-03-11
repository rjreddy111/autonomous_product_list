// Write your JS code here
const Stars = props => {
  const {filled, filledColor, emptyColor} = props
  console.log(filledColor)
  return (
    <span style={{color: filled ? filledColor : emptyColor}} className="star">
      &#9733; {/* Unicode character for star */}
    </span>
  )
}

export default Stars
