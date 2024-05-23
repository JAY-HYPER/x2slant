function changeImageA(filename) {
  let img = document.querySelector('.bodyColor');
  img.setAttribute("src", filename);
}
function changeImageB(filename) {
  let img = document.querySelector('.armColor');
  img.setAttribute("src", filename);
}
function changeImageC(filename) {
  let img = document.querySelector('.main');
  img.setAttribute("src", filename);
}