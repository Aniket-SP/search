function displayResults(selectedResults) {
    const resultContainer = document.getElementById("result-container");

    const resultElement = document.createElement("div");
    resultElement.classList.add("result-item");

    const resultText = document.createElement("span");
    resultText.classList.add("name");
    resultText.textContent = selectedResults;


    // const PONumber = document.createElement("input");
    // PONumber.classList.add("poNumber");

    const quant = document.createElement("input");
    quant.classList.add("quant");



    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = "&#10005;";
    removeButton.addEventListener("click", () => {

        resultContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('remove-button')) {
                const parentDiv = event.target.parentNode;
                parentDiv.parentNode.removeChild(parentDiv);
            }
        });
    });

    resultElement.appendChild(resultText);
    // resultElement.appendChild(PONumber);
    resultElement.appendChild(quant);
    resultElement.appendChild(removeButton);
    resultContainer.appendChild(resultElement);
}

export { displayResults };