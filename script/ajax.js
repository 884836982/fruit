//GET封装
function ajaxGet(path) {
    return new Promise(function(success, failed) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path);
        xhr.send(null);
        xhr.onload = function() {
            if (xhr.status == 200) {
                success(xhr.response);
            }

        }
    })

}
//POST封装
function ajaxPost(url, data) {
    console.log(url, data);
    return new Promise(function(success) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        xhr.send(data);
        xhr.onload = function() {

            if (xhr.status == 200) {
                console.log(xhr.response);
                success(xhr.response);
            } else {
                alert("失败");
            }
        }
    })

}

//jsonp封装
function jsonp(url, call) {
    return new Promise(function(success, failed) {
        //1.创建全局函数
        var cb_name = 'hx' + new Date().getTime();
        window[cb_name] = function(res) {
                success(res);
            }
            //2.创建script标签
        var script = document.createElement("script");
        var reg = /\?/.test(url) ? "&" : "?";
        script.src = url + reg + call + "=" + cb_name;
        document.body.appendChild(script);
        //3.script标签加载完成删除script
        script.onload = function() {
            this.remove();
        }
    })
}