export const getTitle = (tag, className, text) => {
  const title = document.createElement(tag);
  title.classList.add(className);
  title.textContent = text;

  return title;
};
export const getSection = (className) => {
  const section = document.createElement("section");
  section.classList.add(className);

  return section;
};
export const getBox = (className) => {
  const div = document.createElement("div");
  div.classList.add(className);

  return div;
};
export const getFieldset = (className) => {
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add(className);

  return fieldset;
};
export const getLabel = (forId, className) => {
  const label = document.createElement("label");
  label.classList.add(className);
  label.for = forId;

  return label;
};
export const getInput = (className, type, id, name, placeholder) => {
  const input = document.createElement("input");
  input.classList.add(className);
  input.type = type;
  input.id = id;
  input.name = name;
  input.placeholder = placeholder;

  return input;
};
export const getButton = (className, text) => {
  const button = document.createElement("button");
  button.classList.add(className);
  button.textContent = text;

  return button;
};
export const getSpanInput = (className, classNameMod, text) => {
  const span = document.createElement("span");
  span.classList.add(className, classNameMod);
  span.textContent = text;

  return span;
};
export const getParagraph = (className, text) => {
  const p = document.createElement("p");
  p.classList.add(className);
  p.textContent = text;

  return p;
};
export const getList = (className) => {
  const ul = document.createElement("ul");
  ul.classList.add(className);

  return ul;
};
export const getResultItem = (item) => {
  const resultItem = document.createElement("li"),
    resultNumber = document.createElement("p"),
    resultText = document.createElement("p");

  resultItem.classList.add("result__item", item.color);
  resultNumber.classList.add("result__number", item.color);
  resultText.classList.add("result__text");

  resultNumber.textContent = item.result;
  resultText.textContent = item.text;

  resultItem.append(resultNumber, resultText);

  return resultItem;
};
