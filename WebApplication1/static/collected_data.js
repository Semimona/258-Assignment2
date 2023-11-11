function adddata() {
     var count = localStorage.getItem("clickcount");
     var title = ["Username: ", "Password: ", "Confirm Password: ","Gender: ","Date of Birth", "Post Code: ", "Phone number: ", "Email: ", "Feedback: ", "Time: "];
     for (let i = 1; i <= count; i++) {
     var dataarray = new Array();
     dataarray = JSON.parse(localStorage.getItem(String(i)));
     var element = document.getElementById("collecteddata");
     element.appendChild(document.createElement("h1").appendChild(document.createTextNode(i)));
     for (let j = 0; j < 10; j++) {
     var text = dataarray[j];
     var li = document.createElement("li");
     var node = document.createTextNode(title[j] + text);
     li.appendChild(node);
     element.appendChild(li);
     }
     element.appendChild(document.createElement("br"));
     element.appendChild(document.createElement("br"));
     element.appendChild(document.createElement("br"));
     element.appendChild(document.createElement("br"));
     }
    }
    window.onload = adddata;
    function clearall(){
     window.localStorage.clear();
     adddata();
    }