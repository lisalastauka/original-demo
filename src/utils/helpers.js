export const isMobile = () => {
  const { width } = document && document.body.getBoundingClientRect();
  return width <= 768;
};
