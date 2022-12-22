import React from 'react';

import styled from 'styled-components/native';

import Photo from '../Photo/Photo';
import PropTypes from 'prop-types';

const PhotoView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
  background-color: #777799;
  border: 1px;
`;
const PhotoTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
`;

const PhotoDesc = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
`;

export function PhotoComponent({ url, user, description, width, height }) {
  return (
    <PhotoView>
      <Photo width={width} height={height} url={url} />
      <PhotoTitle>{user}</PhotoTitle>
      <PhotoDesc>{description}</PhotoDesc>
    </PhotoView>
  );
}

PhotoComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string,
  user: PropTypes.string,
  description: PropTypes.string
};
