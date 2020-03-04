const createQueryString = (values: {[key: string]: string}) =>
  Object.keys(values)
        .filter((key) => values[key])
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(values[key]))
        .join('&');

export default createQueryString;
