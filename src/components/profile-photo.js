import PropTypes from 'prop-types';
import Image from 'next/image';

export default function ProfilePhoto({ src, alt, size = 400 }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`rounded-full m-2 p-2`}
      width={size}
      height={size}
    />
  );
}

ProfilePhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
};