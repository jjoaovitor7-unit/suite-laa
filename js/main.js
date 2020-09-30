elements = document.getElementById("elements");
btnSort = document.getElementById("btn-ordenar");

radioInsertionSort = document.getElementById("insertionSort");
radioBubbleSort = document.getElementById("bubbleSort");
radioSelectionSort = document.getElementById("selectionSort");
radioQuickSort = document.getElementById("quickSort");

ordered = document.getElementById("ordered");
runtime = document.getElementById("runtime");

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let min = i;

    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (arr[i] > arr[min]) {
      let aux = arr[i];
      arr[i] = arr[min];
      arr[min] = aux;
    }
  }

  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  let qtde = arr.length;
  let current;
  let i, j;

  for (i = 1; i < qtde; i++) {
    current = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

function quickSort(arr) {
  if (arr.length == 0){
      return [];
  }

  else if (arr.length == 1){
      return arr;
  }

  let pivo = arr[0];

  let menoresPivo = arr.filter(n => n < pivo);
  let igualPivo = arr.filter(n => n == pivo);
  let maioresPivo = arr.filter(n => n > pivo);

  return quickSort(menoresPivo).concat(igualPivo).concat(quickSort(maioresPivo));
}

function insertionSortRuntime(arr){
  let begin=Date.now();
  ordered.textContent = insertionSort(arr);
  let end = Date.now();
  let time = (end-begin)*1000000;
  runtime.textContent = "Tempo de Execução: " + time + "ns";
}

function bubbleSortRuntime(arr){
  let begin=Date.now();
  ordered.textContent = bubbleSort(arr);
  let end = Date.now();
  let time = (end-begin)*1000000;
  runtime.textContent = "Tempo de Execução: " + time + "ns";

}

function selectionSortRuntime(arr){
  let begin=Date.now();
  ordered.textContent = selectionSort(arr);
  let end = Date.now();
  let time = (end-begin)*1000000;
  runtime.textContent = "Tempo de Execução: " + time  + "ns";
}

function quickSortRuntime(arr){
  let begin=Date.now();
  ordered.textContent = quickSort(arr);
  let end = Date.now();
  let time = (end-begin)*1000000;
  runtime.textContent = "Tempo de Execução: " + time + "ns";
}

function process(e) {
  elementsStr = elements.value;
  if (elementsStr.length == 0){ 
    ordered.textContent = "Você não digitou um dado.";
    runtime.textContent = '';
    return;
  }

  elementsArr = elementsStr.split(",").map(Number);

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
