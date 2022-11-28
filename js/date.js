const date = document.getElementById("date");

show_date();

function show_date(){
    const show_date = new Date();
    const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
    let y = String(show_date.getFullYear()).padStart(2, 0);
    let m = String(show_date.getMonth() + 1).padStart(2, 0);
    let d = String(show_date.getDate()).padStart(2, 0);
    let week = WEEKDAY[show_date.getDay()];
    date.innerText = `${y}/${m}/${d}(${week})`;
}

setInterval(show_date, 1000);