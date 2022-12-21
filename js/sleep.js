const sleepForm = document.getElementById("sleep-form");
const sleepInput = sleepForm.querySelector("input");
sleepForm.addEventListener("submit", sleepSubmit);

document.getElementById("sleep-menu").addEventListener('click',sleep_calculator);
var show_date = new Date();

now_hour = show_date.getHours()
now_min = show_date.getMinutes()

function sleep_calculator(tmp = 0, h = show_date.getHours(), m = show_date.getMinutes()){
    show_date.setHours(h+1);
    show_date.setMinutes(m+44);
    h = String(show_date.getHours()).padStart(2, 0);
    m = String(show_date.getMinutes()).padStart(2, 0);
    const sleepCycle1 = document.getElementById("sleepCycle-1");
    sleepCycle1.innerText = `수면 사이클 1회 : ${h}:${m}`;

    for (let i=2; i < 7; i++){
        show_date.setHours(show_date.getHours()+1);
        show_date.setMinutes(show_date.getMinutes()+30);
        h = String(show_date.getHours()).padStart(2, 0);
        m = String(show_date.getMinutes()).padStart(2, 0);
        let sleepCycle2_6 = document.getElementById(`sleepCycle-${i}`);
        sleepCycle2_6.innerText =`수면 사이클 ${i}회 : ${h}:${m}`;
    }

    show_date = new Date()
}

function sleepSubmit(event){
    event.preventDefault();
    const data = sleepInput.value;
    sleepInput.value = "";

    let list_data = data.split(":");
    sleep_calculator(0, Number(list_data[0]), Number(list_data[1]));
}