const container = document.querySelector('.container');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    
    container.textContent = '#'+ ('0'+hours).slice(-2) + ('0'+ mins).slice(-2) + ('0'+seconds).slice(-2);
    container.style.backgroundColor = container.textContent;
}

setInterval(setDate, 1000);

setDate();