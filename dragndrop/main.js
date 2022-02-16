function dragstart_handler1(ev) {
    // On ajoute l'identifiant de l'élément cible à l'objet de transfert
    ev.dataTransfer.setData("text/plain", ev.target.innerText);
}

function dragstart_handler1(ev) {
    // On crée une image qu'on utilise pour le déplacement
    // Note : on changera "example.gif" vers une vraie image
    // (sinon l'image par défaut sera utilisée)
    let img1 = new Image();
    img1.src = 'images/porte.png';
    ev.dataTransfer.setDragImage(img1, 10, 10);
}




//deuxieme script

let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;

  // make it half transparent
  event.target.style.opacity = 0;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);
