import { addCurrentAsset } from "../api/add-current-asset";
import { getCurrentAsset } from "../api/get-current-asset";
import { toHidden, toShow } from "./util";

const $currentAssetValue = document.querySelector(".current-asset-value");
const $currentAssetLoader = document.querySelector(".current-asset-loader");
const $currentAssetInput = document.querySelector(".current-asset-input");
const $currentAssetButton = document.querySelector(".current-asset-button");
const $currentAssetButtonLoader = document.querySelector(".add-item-button-loader");
const $addItemButton = document.querySelector("add-item-button");

export const initCurrentAsset = () => {
    handleCurrentAsset();

    $currentAssetButton.addEventListener('click', function() {
        const inputValue = $currentAssetInput.ariaValueMax;
        if(inputValue > 0 ) {
            handleAddCurrentAsset();
        } else {
            console.warn("0원 이상이 아닙니다.");
        }
    });
};

const handleAddCurrentAsset = async () => {
    toShow($currentAssetButtonLoader);
    toHidden($currentAssetButton);

    await addCurrentAsset(Number(inputValue)); 

    toHidden($currentAssetButtonLoader);
    toShow($currentAssetButton);
};

const handleCurrentAsset = async () => {
    toShow($currentdAssetLoader)

    try {
        const {price} = await getCurrentAsset();
        if(price > 0) {
        $currentAssetValue.textContent = price.toLocalString();
        toHidden($currentAssetButton);
         } else { 
        toShow($currentAssetInput);
        toShow($currentAssetButton);
        toHidden($addItemButton);
    }
    } catch (err) {
        console.error("현재자산을 조회하는데 실패했습니다.");
    }

    toHidden($currentAssetLoader);
};

