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

function bubbleSortRuntime(arr) {
  let begin = Date.now();
  ordered.textContent = bubbleSort(arr);
  let end = Date.now();
  let timeNS = (end - begin) * 1000000000;
  let timeS = (end - begin) / 1000000000;
  runtime.textContent = "Tempo de Execução: " + timeNS + "ns ou " + timeS + "s.";
}

export default bubbleSortRuntime;
