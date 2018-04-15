var resizeHandleHorizontal = document.getElementById('horizontal-divider');
var resizeHandleVertical = document.getElementById('vertical-divider');

resizeHandleHorizontal.addEventListener('mousedown', initialiseResizeHorizontal, false);
resizeHandleHorizontal.addEventListener('touchstart', initialiseResizeHorizontal, false);

resizeHandleVertical.addEventListener('mousedown', initialiseResizeVertical, false);
resizeHandleVertical.addEventListener('touchstart', initialiseResizeVertical, false);

window.onresize = (e)=>{
    document.getElementById('console-container').style.width = (window.innerWidth - 6 - document.getElementsByClassName('firepad')[0].offsetWidth) + 'px';
    document.getElementById('input-box').style.height = (window.innerHeight - 6 - document.getElementById('console').offsetHeight) + 'px';
}

function initialiseResizeHorizontal(e) {
    window.addEventListener('mousemove', startResizingHorizontal, false);
    window.addEventListener('touchmove', startResizingHorizontal, false);
    
    window.addEventListener('mouseup', stopResizingHorizontal, false);
    window.addEventListener('touchend', stopResizingHorizontal, false);    
}

function initialiseResizeVertical(e) {
    window.addEventListener('mousemove', startResizingVertical, false);
    window.addEventListener('touchmove', startResizingVertical, false);
    
    window.addEventListener('mouseup', stopResizingVertical, false);
    window.addEventListener('touchend', stopResizingVertical, false);    
}

function startResizingHorizontal(e) {
    var x = ('touches' in e)?e.touches[0].clientX:e.clientX;
    var console1 = document.getElementById('console-container');    
    var firepad = document.getElementsByClassName('firepad')[0];    
    firepad.style.width = (x - firepad.offsetLeft) + 'px';
    console1.style.width = (window.innerWidth - 6 - x + firepad.offsetLeft) + 'px';
}

function stopResizingHorizontal(e) {
    window.removeEventListener('mousemove', startResizingHorizontal, false);
    window.removeEventListener('touchmove', startResizingHorizontal, false);

    window.removeEventListener('mouseup', stopResizingHorizontal, false);
    window.removeEventListener('touchend', stopResizingHorizontal, false);    
}

function startResizingVertical(e) {
    var y = ('touches' in e)?e.touches[0].clientY:e.clientY;    
    var console = document.getElementById('console');    
    var inputBox = document.getElementById('input-box');    
    console.style.height = (y - firepad.offsetTop) + 'px';
    inputBox.style.height = (window.innerHeight - 6 - y + firepad.offsetTop - 40) + 'px';
}
function stopResizingVertical(e) {
    window.removeEventListener('mousemove', startResizingVertical, false);
    window.removeEventListener('touchmove', startResizingVertical, false);
    
    window.removeEventListener('mouseup', stopResizingVertical, false);
    window.removeEventListener('touchend', stopResizingVertical, false);
}