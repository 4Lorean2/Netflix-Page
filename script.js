const clockElement = document.querySelector(".clock");

const updateClock = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    clockElement.style.position = 'absolute';
    clockElement.style.top = '0';
    clockElement.style.left = '0';
    clockElement.style.color = 'red';
    clockElement.style.fontSize = '24px';
    clockElement.style.fontWeight = 'bold';
    clockElement.style.padding = '10px';
    clockElement.style.background = 'white'; 

    clockElement.textContent = timeString;
  
};

setInterval(updateClock, 1000);
updateClock();
