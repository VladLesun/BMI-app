import {
  getBox,
  getButton,
  getFieldset,
  getInput,
  getLabel,
  getList,
  getParagraph,
  getSection,
  getSpanInput,
  getTitle,
} from "./functions/getElements";
import { calculateBMI } from "./modules/calculateBMI";
import { renderResultList } from "./modules/renderResultList";

//! Элементы
const mainTitle = getTitle(
  "h1",
  "visually-hidden",
  "Body Mass Index - приложение рассчитывающее твой индекс массы тела"
);
export const resultArr = [
  {
    result: "< 18.5",
    text: "недостаточный вес",
    color: "yellow",
  },
  {
    result: "18.5 - 25",
    text: "нормальный вес",
    color: "green",
  },
  {
    result: "25 - 30",
    text: "лишний вес",
    color: "orange",
  },
  {
    result: "30 - 35",
    text: "1 степень ожирения",
    color: "red",
  },
  {
    result: "35 - 40",
    text: "2 степень ожирения",
    color: "red",
  },
  {
    result: "> 40",
    text: "3 степень ожирения",
    color: "red",
  },
];
// entry elems
export const entrySection = getSection("entry"),
  entrySectionTitle = getTitle(
    "h2",
    "visually-hidden",
    "Рассчитай свой индекс массы тела"
  ),
  entryContainer = getBox("container"),
  entryFieldset = getFieldset("entry__fieldset"),
  entryLegend = getTitle(
    "legend",
    "entry__legend",
    "Узнайте свой индекс массы тела"
  ),
  entryWeightLabel = getLabel("weight", "entry__label"),
  entryWeightInput = getInput(
    "entry__input",
    "number",
    "weight",
    "weight",
    "---"
  ),
  entryInpSpanWeight = getSpanInput("entry__span", "entry__span_text", "Вес"),
  entryInpSpanKg = getSpanInput("entry__span", "entry__span_unit", "кг"),
  entryHeightLabel = getLabel("height", "entry__label"),
  entryHeightInput = getInput(
    "entry__input",
    "number",
    "height",
    "height",
    "---"
  ),
  entryInpSpanHeight = getSpanInput("entry__span", "entry__span_text", "Рост"),
  entryInpSpanSm = getSpanInput("entry__span", "entry__span_unit", "см"),
  entryAddBtn = getButton("entry__btn", "Рассчитать"),
  entryCalculation = getBox("entry__calculation"),
  entryCalculationTitle = getTitle("h3", "entry-calculation__title", "Ваш ИМТ"),
  entryCalculationNumber = getParagraph("entry-calculation__number", "---"),
  entryCalculationResult = getParagraph("entry-calculation__result", "");

entryContainer.classList.add("entry__container");

// result elems
const resultSection = getSection("result"),
  resultSectionTitle = getTitle(
    "h2",
    "visually-hidden",
    "Результаты, по которым вы можете определить свой ИМТ"
  ),
  resultContainer = getBox("container"),
  resultList = getList("result__list");

resultContainer.classList.add("result__container");

//! Приложение
entryAddBtn.addEventListener("click", calculateBMI);

renderResultList(resultArr, resultList);

//! Отобразить
// entry elems
entryCalculation.append(
  entryCalculationTitle,
  entryCalculationNumber,
  entryCalculationResult
);
entryWeightLabel.append(entryWeightInput, entryInpSpanWeight, entryInpSpanKg);
entryHeightLabel.append(entryHeightInput, entryInpSpanHeight, entryInpSpanSm);
entryFieldset.append(
  entryLegend,
  entryWeightLabel,
  entryHeightLabel,
  entryAddBtn
);
entryContainer.append(entryFieldset, entryCalculation);
entrySection.append(entrySectionTitle, entryContainer);

// result elems
resultContainer.append(resultList);
resultSection.append(resultSectionTitle, resultContainer);

document.body.append(mainTitle, entrySection, resultSection);
