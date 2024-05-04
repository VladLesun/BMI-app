import {
  entryHeightInpValidate,
  entryHeightInput,
  entryWeightInpValidate,
  entryWeightInput,
} from "../main";

export const validation = () => {
  let validationResult = false;

  const weightValue = Number(entryWeightInput.value),
    heightValue = Number(entryHeightInput.value);

  //! Валидация веса
  entryWeightInput.style.borderColor = "";
  entryWeightInpValidate.textContent = "";
  if (weightValue <= 10 || weightValue > 450) {
    validationResult = true;
    entryWeightInput.style.borderColor = "#f00";
    entryWeightInpValidate.textContent = "Введите корректный вес";
  }
  if (weightValue === 0) {
    validationResult = true;
    entryWeightInput.style.borderColor = "#f00";
    entryWeightInpValidate.textContent = "Введите вес";
  }

  //! Валидация роста
  entryHeightInput.style.borderColor = "";
  entryHeightInpValidate.textContent = "";
  if (heightValue <= 50 || heightValue > 230) {
    validationResult = true;
    entryHeightInput.style.borderColor = "#f00";
    entryHeightInpValidate.textContent = "Введите корректный рост";
  }
  if (heightValue === 0) {
    validationResult = true;
    entryHeightInput.style.borderColor = "#f00";
    entryHeightInpValidate.textContent = "Введите рост";
  }

  return validationResult;
};
