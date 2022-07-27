import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  largeImageURL,
  webformatURL,
  tags,
  setUrl,
}) {
  return (
    <GalleryItem>
      <GalleryItemImg
        src={webformatURL}
        alt={tags}
        onClick={() => {
          setUrl(largeImageURL);
        }}
      />
    </GalleryItem>
  );
}
ImageGalleryItem.proptype = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
};
