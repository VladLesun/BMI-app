import { getResultItem } from "../functions/getElements";

export const renderResultList = (resArr, list) => {
  for (const item of resArr) {
    list.append(getResultItem(item));
  }
};
