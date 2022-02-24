function myFunction() {
  var li = document.createElement("li");
  var input = document.getElementById("itp1");
  let i = document.createElement("i");
  i.className = "fa-solid fa-x";
  i.onclick=function(){
    this.parentElement.remove();
  }
  li.innerText=input.value;
  li.appendChild(i);

  if (!input.value.trim()) {
    alert("bos ola bime");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  input.value = "";
}

function Sil() {
  document.getElementById("myList").innerHTML = "";
}
