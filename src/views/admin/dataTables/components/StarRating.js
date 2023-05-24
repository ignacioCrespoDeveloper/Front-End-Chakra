import { Icon } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        stars.push(<Icon key={i} as={AiFillStar} color="yellow.500" />);
      } else if (i === filledStars + 1 && hasHalfStar) {
        stars.push(<Icon key={i} as={AiOutlineStar} color="yellow.500" />);
      } else {
        stars.push(<Icon key={i} as={AiOutlineStar} />);
      }
    }

    return stars;
  };

  return <>{renderStars()}</>;
};

export default StarRating;
