import {
  entryCalculation,
  entryCalculationNumber,
  entryCalculationResult,
  entryHeightInput,
  entryWeightInput,
  resultArr,
} from "../main";
import { scrollToResult } from "./scrollToResult";
import { validation } from "./validation";

export const calculateBMI = () => {
  const arr = resultArr;

  const weightValue = Number(entryWeightInput.value),
    heightValue = Number(entryHeightInput.value);

  const isValid = validation();

  if (isValid === true) {
    return;
  }

  let result = (weightValue / Math.pow(heightValue / 100, 2)).toFixed(1);

  entryCalculationNumber.textContent = result;

  result <= 18.5
    ? (entryCalculationResult.textContent = arr[0].text)
    : result > 18.5 && result <= 25
    ? (entryCalculationResult.textContent = arr[1].text)
    : result > 25 && result <= 30
    ? (entryCalculationResult.textContent = arr[2].text)
    : result > 30 && result <= 35
    ? (entryCalculationResult.textContent = arr[3].text)
    : result > 35 && result <= 40
    ? (entryCalculationResult.textContent = arr[4].text)
    : result > 40
    ? (entryCalculationResult.textContent = arr[5].text)
    : "";

  scrollToResult(entryCalculation);

  entryWeightInput.value = "";
  entryHeightInput.value = "";
};
