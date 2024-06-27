const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData()
}
listcontainer.addEventListener("click",function(e) { 
    if(e.target,tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData ()
    }
},false)
//For save our local storage this todo-data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
// "data" is called
function showTask(){
    listContainer.innerHTML =   localStorage.getItemI("data");
}
showTask();

    