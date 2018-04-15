var resizeHandleHorizontal = document.getElementById('horizontal-divider');
var resizeHandleVertical = document.getElementById('vertical-divider');

resizeHandleHorizontal.addEventListener('mousedown', initialiseResizeHorizontal, false);
resizeHandleVertical.addEventListener('mousedown', initialiseResizeVertical, false);

function initialiseResizeHorizontal(e) {
    window.addEventListener('mousemove', startResizingHorizontal, false);
    window.addEventListener('mouseup', stopResizingHorizontal, false);
}

function initialiseResizeVertical(e) {
    window.addEventListener('mousemove', startResizingVertical, false);
    window.addEventListener('mouseup', stopResizingVertical, false);
}

function startResizingHorizontal(e) {
    var console = document.getElementById('console-container');    
    var firepad = document.getElementsByClassName('firepad')[0];    
    firepad.style.width = (e.clientX - firepad.offsetLeft) + 'px';
    console.style.width = (window.innerWidth - 6 - e.clientX + firepad.offsetLeft) + 'px';
}
function stopResizingHorizontal(e) {
    window.removeEventListener('mousemove', startResizingHorizontal, false);
    window.removeEventListener('mouseup', stopResizingHorizontal, false);
}

function startResizingVertical(e) {
    var console = document.getElementById('console');    
    var inputBox = document.getElementById('input-box');    
    console.style.height = (e.clientY - firepad.offsetTop) + 'px';
    inputBox.style.height = (window.innerHeight - 6 - e.clientY + firepad.offsetTop - 40) + 'px';
}
function stopResizingVertical(e) {
    window.removeEventListener('mousemove', startResizingVertical, false);
    window.removeEventListener('mouseup', stopResizingVertical, false);
}