import { getConsumptionDetails } from "../api/get-consumption-details";
import { toHidden, toShow } from "./util";

const $consumptionDetailsList = document.querySelector(
  ".consumption-details-list"
);
const $consumptionDetailsLoader = document.querySelector(
  ".consumption-details-loader"
);

export const initConsumptionDetails = () => {
  handleGetConsumptionDetails();
};

const createElement = (tagName, className) => {
  const newElement = document.createElement(tagName);
  newElement.className = className;
  return newElement;
};

export const handleGetConsumptionDetails = async () => {
  toShow($consumptionDetailsLoader);
  $consumptionDetailsList.textContent = "";
  const list = await getConsumptionDetails();

  list.map(({ createAt, category, description, price, fundsAtTheTime }) => {
    const $li = createElement("li", "consumption-details-per-day");
    const $pDate = createElement("p", "consumption-details-date");
    const $itemSection = createElement("section", "consumption-details-item");
    const $itemSectionColumn = createElement(
      "section",
      "consumption-details-item-column"
    );
    const $itemCategory = createElement("section");
    const $consumptionDetailsDetail = createElement(
      "div",
      "consumption-details-detail"
    );
    const $consumptionDetailsDetailTitle = createElement(
      "div",
      "consumption-details-detail-row consumption-details-detail-title"
    );
    const $consumptionDetailsDetailSubtitle = createElement(
      "div",
      "consumption-details-detail-row consumption-details-detail-subtitle"
    );
    const $consumptionDetailsItemCaption = createElement(
      "section",
      "consumption-details-item-caption"
    );
    const $deleteSection = createElement("div", "delete-section");
    const $deleteButton = createElement("button", "delete-button");

    // 날짜
    $pDate.textContent = new Date(createAt).toLocaleDateString();
    $li.appendChild($pDate);
    // 카테고리
    $itemCategory.textContent = category;
    $itemSectionColumn.appendChild($itemCategory);

    // 삭제 버튼
    $deleteButton.textContent = "🗑";
    $deleteSection.appendChild($deleteButton);

    // 상세내역
    $consumptionDetailsDetailTitle.textContent = description;
    $consumptionDetailsDetailSubtitle.textContent = price + "원";
    $consumptionDetailsDetail.appendChild($consumptionDetailsDetailTitle);
    $consumptionDetailsDetail.appendChild($consumptionDetailsDetailSubtitle);

    // 캡션
    $consumptionDetailsItemCaption.textContent = `남은 자산 ${fundsAtTheTime.toLocaleString()}원`;

    // 최종 추가
    $itemSectionColumn.appendChild($consumptionDetailsDetail);
    $itemSectionColumn.appendChild($deleteSection);
    $itemSection.appendChild($itemSectionColumn);
    $itemSection.appendChild($consumptionDetailsItemCaption);

    $li.appendChild($itemSection);
    $consumptionDetailsList.appendChild($li);
  });

  toHidden($consumptionDetailsLoader);
};