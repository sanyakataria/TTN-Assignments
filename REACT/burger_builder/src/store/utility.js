export const updateObject = (oldObject, upldatedProperties) => {
  return {
    ...oldObject,
    ...upldatedProperties,
  };
};
