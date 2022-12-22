import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

function Photo({ width, height, url }) {
  const PhotoImage = styled.Image`
    width: ${width}%;
    height: ${height}px;
  `;
  return <PhotoImage source={{ uri: url }} />;
}

export default Photo;

Photo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string
};
