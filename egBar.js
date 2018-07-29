function checkForSelf() {
  if (document.getElementById('UTilBar') == null) {
    return false;
  } else {
    return true;
  }
}

function establishCan() {
  let __body = document.getElementsByTagName('body')[0];
  let __case = document.createElement('div');
  let __can = document.createElement('canvas');

  __case.appendChild(__can);
  __body.appendChild(__case);

  let __case_box = __case.getBoundingClientRect();

  __case.id = "UTilBar";
  __case.style.cssText = 'position: fixed; top: 0; z-index: 999'

  __can.width = __case_box.width;
  __can.height = 64;

  let __ctx = __can.getContext('2d');
  __ctx.fillStyle = "#FF00FF";
  __ctx.fillRect(0, 0, __can.width, __can.height);
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
