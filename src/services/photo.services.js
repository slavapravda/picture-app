import { urls } from '../constans/urls';
import { axiosService } from './axios.service';

export const photoServices = {
  allPhotos: () => axiosService.get(urls.key).then((value) => value.data),
  singlePhoto: (id) => axiosService.get(id.concat(urls.key)).then((value) => value.data)
};
