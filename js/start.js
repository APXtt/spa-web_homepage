const MainTitle = document.getElementById("MainTitle");

if (localStorage.getItem("spa_username") === null) {
    while (true){
        let username = prompt('사용하실 닉네임을 입력하시오.');
        if (username == ""){
            alert("닉네임을 입력하셔야 합니다.");
        }
        else if (username.length >= 8){
            alert("8글자 이내의 닉네임을 작성해주세요.");
        }
        else{
            localStorage.setItem("spa_username", username);
            MainTitle.innerText = `안녕하세요, ${username}!`;
            break;
        }
    }
  } else {
    const userName = localStorage.getItem("spa_username");
    MainTitle.innerText = `안녕하세요, ${userName}!`;
  }
  