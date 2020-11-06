const elements = document.getElementById("elements");
const btnSort = document.getElementById("btn-ordenar");

const radioInsertionSort = document.getElementById("insertionSort");
const radioBubbleSort = document.getElementById("bubbleSort");
const radioSelectionSort = document.getElementById("selectionSort");
const radioQuickSort = document.getElementById("quickSort");

const ordered = document.getElementById("ordered");
const runtime = document.getElementById("runtime");

import bubbleSortRuntime from './modules/bubbleSort.js';
import insertionSortRuntime from './modules/insertionSort.js';
import quickSortRuntime from './modules/quickSort.js';
import selectionSortRuntime from './modules/selectionSort.js';

function process(e) {
  let elementsStr = elements.value;
  if (elementsStr.length == 0){ 
    ordered.textContent = "Você não digitou um dado.";
    runtime.textContent = '';
    return;
  }

  let elementsArr = elementsStr.split(",").map(Number);

  if (elementsArr.includes(NaN)){
    ordered.textContent = "Somente números são permitidos.";
    runtime.textContent = '';
    return;
  }

  if (radioInsertionSort.checked == true) {
    insertionSortRuntime(elementsArr);
  }
  
  else if (radioBubbleSort.checked == true) {
    bubbleSortRuntime(elementsArr);
  }
  
  else if (radioSelectionSort.checked == true) {
    selectionSortRuntime(elementsArr);
  }
  
  else if(radioQuickSort.checked == true) {
    quickSortRuntime(elementsArr);
  }
  
  else {
    console.log("Você não selecionou um método de ordenação!");
  }
}

btnSort.addEventListener("click", process);
