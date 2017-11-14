size=prompt("size?")

for (let j=0; j<size; j++) {
  let container = document.getElementById("container");
  let row = document.createElement("div");
  row.id = j + "row";
  container.appendChild(row);
  for (let i=1; i<=size; i++) {
    let element = document.createElement("input");
    element.type = "checkbox";
    element.id = i + j*size;
    element.class = "dead"
    row.appendChild(element)
  }
}
