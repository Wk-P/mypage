
// 数据库操作修改
var user_data = {"soar":"000", "MONSTER":"123"};
const new_url = "./main.html";
const reg_url = "./register.html";
window.onload = function() {
    document.getElementById("b1").onclick = function() {
        var formData = new FormData(document.getElementById("form"));
        var username = formData.get("username");
        var password = formData.get("password");
        if (password == user_data[username]) {
            window.location.href = new_url;
        } else {
            alert("用户名或密码错误");
        }
    };
    document.getElementById("b2").onclick = function() {
        window.location.href = reg_url;
    };
};