export default (length) => {
  const dotColorsClasses = [];

  for (let i = 0; i < length; i++) {
    dotColorsClasses.push([`${i}`, 'default']);
  }

  return Object.fromEntries(dotColorsClasses);
};
