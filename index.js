window.onload = () => {
  module.render();
};

let module = {
  renderHomePage: () => {
    // body
    let body = document.querySelector("body");


    // #page-lading
    let divPageLanding = document.createElement("div");
    divPageLanding.setAttribute("id", "page-landing");
    body.appendChild(divPageLanding);


    // header
    let header = document.createElement("header");
    let h1Header = document.createElement("h1");
    h1Header.innerHTML = 'Suíte <span class="highlight">LAA</span>';
    header.appendChild(h1Header);
    divPageLanding.appendChild(header);


    // .container-input
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

    // #btn-ordenar
    buttonElements = document.createElement("button");
    buttonElements.type = "submit";
    buttonElements.setAttribute("id", "btn-ordenar");
    buttonElements.innerHTML = "Ordenar!";
    divElements.appendChild(buttonElements);


    // .radios-options
    divRadios = document.createElement("div");
    divRadios.classList = "radios-options";
    divPageLanding.appendChild(divRadios);

    // Insertion Sort
    radioInsertionSort = document.createElement("input");
    radioInsertionSort.type = "radio";
    radioInsertionSort.setAttribute("name", "sort");
    radioInsertionSort.setAttribute("id", "insertionSort");
    divRadios.appendChild(radioInsertionSort);

    labelInsertionSort = document.createElement("label");
    labelInsertionSort.innerHTML = "Insertion Sort";
    divRadios.appendChild(labelInsertionSort);

    // Bubble Sort
    radioBubbleSort = document.createElement("input");
    radioBubbleSort.type = "radio";
    radioBubbleSort.setAttribute("name", "sort");
    radioBubbleSort.setAttribute("id", "bubbleSort");
    divRadios.appendChild(radioBubbleSort);

    labelBubbleSort = document.createElement("label");
    labelBubbleSort.innerHTML = "Bubble Sort";
    divRadios.appendChild(labelBubbleSort);

    // Selection Sort
    radioSelectionSort = document.createElement("input");
    radioSelectionSort.type = "radio";
    radioSelectionSort.setAttribute("name", "sort");
    radioSelectionSort.setAttribute("id", "selectionSort");
    divRadios.appendChild(radioSelectionSort);

    labelSelectionSort = document.createElement("label");
    labelSelectionSort.innerHTML = "Selection Sort";
    divRadios.appendChild(labelSelectionSort);

    // Quick Sort
    radioQuickSort = document.createElement("input");
    radioQuickSort.type = "radio";
    radioQuickSort.setAttribute("name", "sort");
    radioQuickSort.setAttribute("id", "quickSort");
    divRadios.appendChild(radioQuickSort);

    labelQuickSort = document.createElement("label");
    labelQuickSort.innerHTML = "Quick Sort";
    divRadios.appendChild(labelQuickSort);

    // .obs
    pObs = document.createElement("p");
    pObs.classList = "obs";
    pObs.innerHTML = "Obs.: Separar os elementos com vírgula.";
    divPageLanding.appendChild(pObs);

    // #ordered
    pOrdered = document.createElement("p");
    pOrdered.setAttribute("id", "ordered");
    divPageLanding.appendChild(pOrdered);

    // #runtime
    pRuntime = document.createElement("p");
    pRuntime.setAttribute("id", "runtime");
    divPageLanding.appendChild(pRuntime);

    // script
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
