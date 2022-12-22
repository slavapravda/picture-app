import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native';

import { getPhotos } from '../../redux/slice/photoOperations';
import { PhotoComponent } from '../PhotoComponent/PhotoComponent';

import PropTypes from 'prop-types';

export function PhotoListComponent({ navigation }) {
  const { photos } = useSelector((state) => state.photoReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SinglePhoto', { id: item.id })}>
          <PhotoComponent
            id={item.id}
            url={item.urls.small}
            user={item.user.name}
            description={item.description}
            width={100}
            height={500}
          />
        </TouchableOpacity>
      )}
    />
  );
}

PhotoListComponent.propTypes = {
  navigation: PropTypes.object
};
