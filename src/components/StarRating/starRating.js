import StarRatings from 'react-star-ratings';

function StarRating(props) {
  return (
    <StarRatings
      rating={props.rating}
      starRatedColor={props.starColor}
      numberOfStars={props.numberOfStars}
      starDimension={props.starDimension}
      starSpacing={props.starSpacing}
      name='rating'
    />
  );
}

export default StarRating;