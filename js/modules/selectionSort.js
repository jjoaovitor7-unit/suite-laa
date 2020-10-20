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

function selectionSortRuntime(arr) {
  let begin = Date.now();
  ordered.textContent = selectionSort(arr);
  let end = Date.now();
  let timeNS = (end - begin) * 1000000;
  let timeS = (end - begin) / 1000;
  runtime.textContent = "Tempo de Execução: " + timeNS + "ns ou " + timeS + "s.";
}

export default selectionSortRuntime;
