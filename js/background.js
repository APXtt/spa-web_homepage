const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]; // background img 이름을 array에 넣어둠

//random으로 이미지 나타내기
const chosenImage = images[Math.floor(Math.random() * images.length)];


// 배경 이미지 넣는 형식 url('img주소')
const bgImage = `url(img/${chosenImage})`;

// body에 추가
// document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage}))`;
document.body.style.backgroundImage = bgImage;