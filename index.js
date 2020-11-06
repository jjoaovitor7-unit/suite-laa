window.onload = () => {
  module.render();
};

let module = {
  renderHomePage: () => {
    let body = document.querySelector("body");
    let divPageLanding = document.createElement("div");
    divPageLanding.setAttribute("id", "page-landing");

    let header = document.createElement("header");
    let h1Header = document.createElement("h1");
    h1Header.innerHTML = 'Suíte <span class="highlight">LAA</span>';

    header.appendChild(h1Header);
    divPageLanding.appendChild(header);
    body.appendChild(divPageLanding);

    divElements = document.createElement("div");
    divElements.classList = "container-input";
    divPageLanding.appendChild(divElements);

    labelElements = document.createElement("label");
    labelElements.innerHTML = "Elementos para serem ordenados: ";
    divElements.appendChild(labelElements);

    inputElements = document.createElement("input");
    inputElements.type = "text";
    inputElements.setAttribute("id", "elements");
    divElements.appendChild(inputElements);

    buttonElements = document.createElement("button");
    buttonElements.type = "submit";
    buttonElements.setAttribute("id", "btn-ordenar");
    buttonElements.innerHTML = "Ordenar!";
    divElements.appendChild(buttonElements);

    divRadios = document.createElement("div");
    divRadios.classList = "radios-options";
    divPageLanding.appendChild(divRadios);

    radioInsertionSort = document.createElement("input");
    radioInsertionSort.type = "radio";
    radioInsertionSort.setAttribute("name", "sort");
    radioInsertionSort.setAttribute("id", "insertionSort");
    divRadios.appendChild(radioInsertionSort);

    labelInsertionSort = document.createElement("label");
    labelInsertionSort.innerHTML = "Insertion Sort";
    divRadios.appendChild(labelInsertionSort);

    radioBubbleSort = document.createElement("input");
    radioBubbleSort.type = "radio";
    radioBubbleSort.setAttribute("name", "sort");
    radioBubbleSort.setAttribute("id", "bubbleSort");
    divRadios.appendChild(radioBubbleSort);

    labelBubbleSort = document.createElement("label");
    labelBubbleSort.innerHTML = "Bubble Sort";
    divRadios.appendChild(labelBubbleSort);

    radioSelectionSort = document.createElement("input");
    radioSelectionSort.type = "radio";
    radioSelectionSort.setAttribute("name", "sort");
    radioSelectionSort.setAttribute("id", "selectionSort");
    divRadios.appendChild(radioSelectionSort);

    labelSelectionSort = document.createElement("label");
    labelSelectionSort.innerHTML = "Selection Sort";
    divRadios.appendChild(labelSelectionSort);

    radioQuickSort = document.createElement("input");
    radioQuickSort.type = "radio";
    radioQuickSort.setAttribute("name", "sort");
    radioQuickSort.setAttribute("id", "quickSort");
    divRadios.appendChild(radioQuickSort);

    labelQuickSort = document.createElement("label");
    labelQuickSort.innerHTML = "Quick Sort";
    divRadios.appendChild(labelQuickSort);

    pObs = document.createElement("p");
    pObs.classList = "obs";
    pObs.innerHTML = "Obs.: Separar os elementos com vírgula.";
    divPageLanding.appendChild(pObs);

    pOrdered = document.createElement("p");
    pOrdered.setAttribute("id", "ordered");
    divPageLanding.appendChild(pOrdered);

    pRuntime = document.createElement("p");
    pRuntime.setAttribute("id", "runtime");
    divPageLanding.appendChild(pRuntime);

    scriptMain = document.createElement("script");
    scriptMain.type = "module";
    scriptMain.src = "./public/scripts/main.js";
    divPageLanding.appendChild(scriptMain);
  },
  render: () => {
    let currentPath = location.hash.substr(1); //substr(1) remove o #.
    if (currentPath == "") {
      module.renderHomePage();
    }
  },
};
