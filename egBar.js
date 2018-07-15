function checkForSelf() {
  if (document.getElementById('UTilBar') == null) {
    return false;
  } else {
    return true;
  }
}

function establishCan() {
  let can = document.createElement("canvas");
  can.id = "UTilBar";
  can.width = window.innerWidth;
  can.height = 32;

  document.getElementsByTagName('body')[0].appendChild(can);
  let ctx = can.getContext("2d");
  ctx.fillStyle = "#FF00FF";
  ctx.fillRect(0, 0, can.width, can.height);
}

function init() {
  if (!checkForSelf()) {
    console.log(document.domain);
    document.body.style.background = 'pink';

    establishCan();
  } else {
    console.log("establish failed, bar alredy present");
  }
}
