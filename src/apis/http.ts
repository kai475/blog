import ky from 'ky';
import { Options } from 'ky/distribution/types/options';

export const create = (
  options: Options = {
    prefixUrl: 'https://api.github.com',
  }
) => {
  return ky.create(options);
};

export default create();
