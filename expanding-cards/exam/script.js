const panels = document.querySelectorAll('.panel');

removeAllActiveClass();

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAllActiveClass();
        panel.classList.add('active');
    })    
});

function removeAllActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}