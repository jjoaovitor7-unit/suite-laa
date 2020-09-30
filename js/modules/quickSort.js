function quickSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  
  else if (arr.length == 1) {
    return arr;
  }

  let pivo = arr[0];

  let menoresPivo = arr.filter((n) => n < pivo);
  let igualPivo = arr.filter((n) => n == pivo);
  let maioresPivo = arr.filter((n) => n > pivo);

  return quickSort(menoresPivo)
    .concat(igualPivo)
    .concat(quickSort(maioresPivo));
}

function quickSortRuntime(arr) {
  let begin = Date.now();
  ordered.textContent = quickSort(arr);
  let end = Date.now();
  let time = (end - begin) * 1000000;
  runtime.textContent = "Tempo de Execução: " + time + "ns";
}

export default quickSortRuntime;
