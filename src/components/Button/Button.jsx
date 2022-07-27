import PropTypes from 'prop-types'
import { BtnLoadMore } from "./Button.styled";

export default function Button({onClick}) {
   return <BtnLoadMore onClick={onClick}>Load More</BtnLoadMore>
};
Button.propType = {
   onClick: PropTypes.func.isRequired
}
