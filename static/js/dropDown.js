import { displayResults } from './addOrRemove.js'

var searchResults = document.getElementById('search-results');
var searchInput = document.getElementById('search-input');

function usingDropDown(results) {
    searchResults.innerText = '';
    if (results.length > 0) {
        var ul = document.createElement('ul');
        results.forEach(function (result) {
            var li = document.createElement('li');
            li.textContent = result;
            li.addEventListener('click', function () {
                searchInput.value = result;
                selectResult(result);
                searchResults.style.display = 'none';
            });
            ul.appendChild(li);
        });
        searchResults.appendChild(ul);
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}


document.addEventListener('click', function (event) {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
    }
});


function selectResult(result) {
    displayResults(result);
}

export { usingDropDown};