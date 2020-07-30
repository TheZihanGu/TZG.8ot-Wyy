var result = new Vue({
    el: '#result',
    data: {
        message: '生不出人，我很抱歉。'
    }
})
new ClipboardJS('.copy');
function getResult() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', "https://api.tzg6.com/api/wyy", true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = eval('(' + httpRequest.responseText + ')');
            console.log(json[0].text)
            result.message = json[0].text
        }
    }
}
function onCopy() {
    mdui.snackbar({
        message: '复制成功!'
      });
}