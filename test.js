function ajax(){
    var fdata= new FormData();
    fdata.append("name",document.getElementById("username").value);
    
    var httpRequest = new XMLHttpRequest();

   

    httpRequest.onreadystatechange = function(){
    if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      }
        else{
            alert("something wrong");
        }
};
    httpRequest.open('GET','test.php', true);
    httpRequest.send(fdata);
}


addEventListener("submit",ajax,false);