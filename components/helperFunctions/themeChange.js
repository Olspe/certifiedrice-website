export const themeChange = (mode) => {
  if (mode) {
    window.document.body.classList.remove('myLight');
    window.document.body.classList.add('myDark');
    let classLength = window.document.getElementsByClassName('box').length;

    if (classLength > 0) {
        let boxes = window.document.getElementsByClassName('box');
        for (let i = 0; i < classLength; i++) {
            console.log('child is:', boxes[i]);
            boxes[i].classList.remove('myDarkBorder');
            boxes[i].classList.add('myLightBorder');
        }
    }

  }

  else {
    window.document.body.classList.remove('myDark');
    window.document.body.classList.add('myLight');
    let classLength = window.document.getElementsByClassName('box').length;

    if (classLength > 0) {
        let boxes = window.document.getElementsByClassName('box');

        for (let i = 0; i < classLength; i++) {
            boxes[i].classList.remove('myLightBorder');
            boxes[i].classList.add('myDarkBorder');
        }
    }
  }
  
}

//,<