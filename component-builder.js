function loadComponent(componentPath, placeholderId) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            console.log(data)
            document.getElementById(placeholderId).innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading the component from ${componentPath}:`, error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent('components/page3.html', 'page3');
});
