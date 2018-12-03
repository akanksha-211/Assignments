// Ajax programming using raw xmlHTTP request

function reqListener(){
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://jsonplaceholder.typicode.com/users");
oReq.send();

// http://www.example.org/example.txt