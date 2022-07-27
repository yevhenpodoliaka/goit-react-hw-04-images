import { Audio } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PropTypes from 'prop-types';
import { LoaderWrap } from './Loader.styled';

export default function Loader({ visible }) {
  return (
    <LoaderWrap>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        visible={visible}
      />
    </LoaderWrap>
  );
}
Loader.propType = {
  visible: PropTypes.bool.isRequired,
};
