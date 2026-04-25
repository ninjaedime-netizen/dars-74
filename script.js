
function add(){
 let t = document.getElementById("task");
 let li = document.createElement("li");
 li.innerText = t.value;
 li.onclick = ()=>li.remove();
 document.getElementById("list").appendChild(li);
 t.value="";
}
