
// 数据库操作修改
var user_data = ["soar", "000"];
const new_url = "./main.html";
const reg_url = "./register.html";
window.onload = function() {
    document.getElementById("b1").onclick = function() {
        var formData = new FormData(document.getElementById("form"));
        var username = formData.get("username");
        var password = formData.get("password");
        console.log(username, password);
        if (username == user_data[0] && password == user_data[1]) {
            window = window.location.replace(new_url);
        } else {
            alert("用户名或密码错误");
        }
    };

    document.getElementById("b2").onclick = function() {
        window = window.location.replace(reg_url);
    };
};