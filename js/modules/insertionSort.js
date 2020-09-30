function insertionSort(arr) {
  let current;
  let i, j;

  for (i = 1; i < arr.length; i++) {
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

function insertionSortRuntime(arr) {
  let begin = Date.now();
  ordered.textContent = insertionSort(arr);
  let end = Date.now();
  let time = (end - begin) * 1000000;
  runtime.textContent = "Tempo de Execução: " + time + "ns";
}

export default insertionSortRuntime;
