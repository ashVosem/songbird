export default (length) => {
  const dotColorsClasses = [];

  for (let i = 0; i < length; i += 1) {
    dotColorsClasses.push([`${i}`, 'default']);
  }

  return Object.fromEntries(dotColorsClasses);
};
