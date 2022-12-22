import React from 'react';
import PropTypes from 'prop-types';

import { PhotoView, PhotoTitle, PhotoDesc } from '../../styled/Photo';
import { Photo } from '../../styled/FullSizePhoto';

export const PhotoComponent = ({ url, user, description, width, height }) => {
  return (
    <PhotoView>
      <Photo width={width} height={height} url={url} />
      <PhotoTitle>{user}</PhotoTitle>
      <PhotoDesc>{description}</PhotoDesc>
    </PhotoView>
  );
};

PhotoComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string,
  user: PropTypes.string,
  description: PropTypes.string
};
