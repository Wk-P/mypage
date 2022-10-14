const cancel_url = "./login.html";
const main_url = "./main.html";
window.onload = function() {
    let user_data_json;
    document.getElementById("cancel").onclick = function() {
        window.location.href = cancel_url;
    };
    document.getElementById("submit").onclick = function() {
        var formData = new FormData(document.getElementById("form"));
        var username = formData.get("username");
        var password1 = formData.get("password1");
        var password2 = formData.get("password2");
        var email = formData.get("email");
        if (username == "") { alert("请输入用户名!"); return;}
        if (password1 == "") { alert("请输入密码"); return;}
        if (password2 == "") { alert("请确认密码"); return;}
        if (email == "") { alert("请输入Email"); return;}
        if (password1 != password2) { alert("请重新确认密码"); return;}
        else {
            user_data_json = JSON.stringify({
                username: username,
                password: password2,
                email: email
            });
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    if (xmlhttp.responseText == "Successfully!") {
                        window.location.href = main_url;
                        alert("注册成功!\n正在转跳...\n");
                    }
                }
            }
            xmlhttp.open("POST", "../php/register.php", true);
            xmlhttp.send(user_data_json);
        }
    };
};