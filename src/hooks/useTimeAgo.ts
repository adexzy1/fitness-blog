import { formatDistance } from 'date-fns';

const useTimeAgo = (time: string) => {
  if (time) {
    return formatDistance(new Date(time), new Date());
  } else {
    return '';
  }
};

export default useTimeAgo;
