var size=prompt("size?")
function buildField(size) {
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
  console.log(getNeighbours(13))
}
console.log(size)
buildField(size)

function getNeighbours(x) {
  return [document.getElementById(x-size-1)&&document.getElementById(x-size-1).checked,
    document.getElementById(x-size)&&document.getElementById(x-size).checked,
    document.getElementById(x-size+1)&&document.getElementById(x-size+1).checked,
    document.getElementById(x-1)&&document.getElementById(x-1).checked,
    document.getElementById(x+1)&&document.getElementById(x+1).checked,
    document.getElementById((-1+Number(size))+x)&&document.getElementById((-1+Number(size))+x).checked,
    document.getElementById((0+Number(size))+x)&&document.getElementById((0+Number(size))+x).checked,
    document.getElementById(x+(Number(size)+1))&&document.getElementById(x+(Number(size)+1)).checked];
  }

  function alive(id) {
    return getNeighbours(id).filter(el => el).length;
  }
  function birth(id) {
    console.log('dead');
    if (alive(id) === 3) {
    console.log('birth');
     document.getElementById(id).className = "toBeBorn";
   }
 }

    function deathByIsolation(id) {
      if (alive(id) < 2)
      {  document.getElementById(id).className = "toDie";
      }}

      function deathByOvercrowding(id) {
        if (alive(id) > 3){
          document.getElementById(id).className = "toDie";
        }
      }
      function survival(id) {
        if (alive(id) === 2 || alive(id) === 3) {
          document.getElementById(id).className = "toBeBorn";
        }
      }

function rebirth() {
  for (let i=1; i<= size**2; i++) {
    if (document.getElementById(i).className === "toDie") {
      document.getElementById(i).checked = false;
    } else if (document.getElementById(i).className === "toBeBorn") {
      document.getElementById(i).checked = true;
    }
  }
}

function judgementDay() {
console.log('clicked');
  for (let i=1; i<= size**2; i++) {
    console.log(getNeighbours(i).filter(el => el).length);
    let element = document.getElementById(i);
    if (element.checked) {
      deathByIsolation(i);
      deathByOvercrowding(i);
      survival(i);
    } else {
      birth(i);
    }
  }
  rebirth();
}

      function demonstrate() {
        console.log(getNeighbours(5));
      }
