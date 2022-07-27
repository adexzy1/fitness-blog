const useExcerpt = (item: string, length: number) => {
  let excerpt = item.substring(0, length);

  //re-trim if we are in the middle of a word
  excerpt = excerpt.substring(
    0,
    Math.min(excerpt.length, excerpt.lastIndexOf(' '))
  );
  return excerpt;
};

export default useExcerpt;
