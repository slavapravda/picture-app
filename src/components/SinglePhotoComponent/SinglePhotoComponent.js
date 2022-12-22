import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { getSinglePhoto } from '../../redux/slice/photoOperations';
import { PhotoComponent } from '../PhotoComponent/PhotoComponent';
import PropTypes from 'prop-types';

function SinglePhotoComponent({ route }) {
  const { id } = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSinglePhoto({ id }));
  }, [dispatch, id]);
  const { singlePhoto } = useSelector((state) => state.photoReducer);
  return (
    <View>
      {singlePhoto && <PhotoComponent url={singlePhoto.urls.full} width={100} height={800} />}
    </View>
  );
}

export default SinglePhotoComponent;

SinglePhotoComponent.propTypes = {
  route: PropTypes.object
};
