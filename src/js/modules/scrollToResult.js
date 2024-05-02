export const scrollToResult = (resultElem) => {
  if (document.body.clientWidth <= 730) {
    resultElem.scrollIntoView(0, -10);
  }
};
