document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); 
    alert('Tự học đi đừng skid');
});

document.addEventListener('copy', function(e) {
    e.preventDefault(); 
    alert('Tự học đi đừng skid.');
});

document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12'  e.keyCode === 123) {
        e.preventDefault();
        alert('Tự học đi đừng skid');
    }

    if ((e.ctrlKey && e.shiftKey && e.key === 'I')  
        (e.metaKey && e.altKey && e.key === 'i')) {
        e.preventDefault();
        alert('Tự học đi đừng skid');
    }

    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
        alert('Tự học đi đừng skid');
    }

    if (e.ctrlKey && e.key === 'S') {
        e.preventDefault();
        alert('Tự học đi đừng skid');
    }
});

const threshold = 160; 
let devtoolsOpen = false;

const checkDevTools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (!(heightThreshold && widthThreshold) && ((window.outerWidth - window.innerWidth) > 20 || (window.outerHeight - window.innerHeight) > 20)) {
        if (!devtoolsOpen) {
            alert('Tự học đi đừng skid');
            devtoolsOpen = true;
        }
    } else {
        if (devtoolsOpen) {
            devtoolsOpen = false;
        }
    }
};

window.addEventListener('resize', checkDevTools);
setTimeout(checkDevTools, 500);
