/**
* Created by Kay on 2016/3/8.
*/
function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
    alert("請輸入壽星稱");
    } else if (pass.value  == "") {
    alert("請輸入密碼");
    } else if(username.value == "楊芷柔" && pass.value == "joey0724"){
    window.location.href="https://ycycookie.github.io/index/";
    } else {
    alert("請輸入正確的壽星名稱和密碼！")
    }
    }