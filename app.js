var toggleButton = document.getElementById('hide');
var Skills2 = document.getElementById('Skills2');
toggleButton.addEventListener('click', function () {
    if (Skills2.style.display === 'none') {
        Skills2.style.display = 'block';
    }
    else {
        Skills2.style.display = 'none';
    }
});
