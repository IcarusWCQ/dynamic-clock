let previousHour = -1;

function updateClock()
{
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
    
    const body = document.body;
    const clock = document.getElementById("clock");

    if (hours !== previousHour) 
    {
        previousHour = hours;
        
        if (hours >= 6 && hours < 9) 
        {
            body.style.backgroundImage = "url(up/1.png)";
            clock.style.color = "rgb(255, 255, 255)";
        } 
        else if (hours >= 9 && hours < 18) 
        {
            body.style.backgroundImage = "url(up/2.png)";
            clock.style.color = "rgb(255, 255, 255)"
        } 
        else if (hours >= 18 && hours < 22) 
        {
            body.style.backgroundImage = "url(up/3.png)";
            clock.style.color = "rgb(230, 177, 34)"
        }
        else if (hours >= 22 || hours < 6) 
        {
            body.style.backgroundImage = "url(up/4.png)";
            clock.style.color = "rgb(230, 177, 34)"
        }
    }
}

function setMorningBackground() 
{
    document.body.style.backgroundImage = "url(up/1.png)";
    clock.style.color = "rgb(255, 255, 255)";
}

function setAfternoonBackground() 
{
    document.body.style.backgroundImage = "url(up/2.png)";
    clock.style.color = "rgb(255, 255, 255)"
}

function setEveningBackground() 
{
    document.body.style.backgroundImage = "url(up/3.png)";
    clock.style.color = "rgb(230, 177, 34)"
}

function setNightBackground() 
{
    document.body.style.backgroundImage = "url(up/4.png)";
    clock.style.color = "rgb(230, 177, 34)"
    resetButton.innerHTML = '<img src="pu/7.png" alt="Reset">';
}

function resetBackground() 
{
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');

    if (hours >= 6 && hours < 9) 
    {
        setMorningBackground();
    } 
    else if (hours >= 9 && hours < 18) 
    {
        setAfternoonBackground();
    } 
    else if (hours >= 18 && hours < 22) 
    {
        setEveningBackground();
    } 
    else 
    {
        setNightBackground();
    }
}

updateClock();
setInterval(updateClock,1000);

document.getElementById("morning-btn").addEventListener("click", setMorningBackground);
document.getElementById("afternoon-btn").addEventListener("click", setAfternoonBackground);
document.getElementById("evening-btn").addEventListener("click", setEveningBackground);
document.getElementById("night-btn").addEventListener("click", setNightBackground);
document.getElementById("reset-btn").addEventListener("click", resetBackground);