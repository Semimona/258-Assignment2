function subbmitee(){

    if (localStorage.clickcount) {
     localStorage.clickcount = Number(localStorage.clickcount) + 1;
     } else {
     localStorage.clickcount = 1;
    }
     var array = new Array();
     
    var tmp = String(document.getElementById("username").value);
     array.push(tmp); 
     var tmp1 = String(document.getElementById("password").value)
     array.push(tmp1);
     var tmp2 = String(document.getElementById("password_again").value)
     array.push(tmp2);
     var tmp3 = String($(":radio[name=sex]:checked").val());
     array.push(tmp3);
     var tmp4 = String(document.getElementById("birthday").value);
     array.push(tmp4);
     var tmp5 = String(document.getElementById("postcode").value);
     array.push(tmp5);
     var tmp6 = String(document.getElementById("phone").value);
     array.push(tmp6);
     var tmp7 = String(document.getElementById("email").value);
     array.push(tmp7);
     var tmp8 = String(document.getElementById("opinion").value);
    array.push(tmp8);
 
    var tmp9 = timestampToTime(new Date().valueOf());
    array.push(tmp9);

    localStorage.setItem(String(localStorage.clickcount),JSON.stringify(array));
 

}
function timestampToTime(time) {
      var date = new Date(time);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';

      var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
      var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
      var strDate = Y + M + D + h + m + s;
      return strDate;
}