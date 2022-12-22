const images = ["0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"]; // background img 이름을 array에 넣어둠

//random으로 이미지 나타내기
const chosenImage = images[Math.floor(Math.random() * images.length)];


// 배경 이미지 넣는 형식 url('img주소')
const bgImage = `url(img/${chosenImage})`;

// body에 추가
// document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage}))`;
document.body.style.backgroundImage = bgImage;