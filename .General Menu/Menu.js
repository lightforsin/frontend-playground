function addItem() {
      var node = document.createElement("a");
      var x = document.getElementById("add").value;
      var text = document.createTextNode(x);

      node.setAttribute('href', "#");
      node.appendChild(text);
      document.getElementsByClassName("dropdown-content")[0].appendChild(node);
}
