import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

export const Photo = ({ width, height, url }) => {
  const PhotoImage = styled.Image`
    width: ${width}%;
    height: ${height}px;
  `;
  return <PhotoImage source={{ uri: url }} />;
};

Photo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string
};
