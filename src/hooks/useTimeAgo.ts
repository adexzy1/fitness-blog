import { formatDistance } from 'date-fns';

const useTimeAgo = (time: string) => {
  const timeAgo = () => {
    if (time) {
      return formatDistance(new Date(time), new Date());
    } else {
      return '';
    }
  };

  return {
    timeAgo,
  };
};

export default useTimeAgo;
