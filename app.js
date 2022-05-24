const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['pink', 'blue','red', 'green', 'yellow','purple','brown','crimson','yellowgreen','orange'];
const result = document.querySelector('#result');
const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const inOrder = document.querySelector('#in_order');
const inOrderCheck = document.querySelector('#in_order_check');
const lblInOrder = document.querySelector('#lbl_in_order');
let func;
let state=true;
let number=0;
func = changeBackgroundWithRGBColor();
inOrder.classList.add('hidden');
inOrderCheck.checked = false;
radio1.checked = true;
document.body.addEventListener('change', function (e) {

    switch (e.target.id) {
        case 'radio1':
            state=true;
            inOrder.classList.remove('show');
            inOrder.classList.add('hidden');
            break;
        case 'radio2':
            state=false;
            inOrder.classList.add('show');
            inOrder.classList.remove('hidden');
            break;
    }
});

button.addEventListener('click', function (e) {
    if (state === true){
        func = changeBackgroundWithRGBColor();
    }else{
        func = changeBackgroundWithTextColor();
    }
});


function changeBackgroundWithTextColor() {
    let selectedNumber;
    if(inOrderCheck.checked === true){
       selectedNumber = number;
       console.log("order");
       number++;
       lblInOrder.innerHTML="In Order (" + number+")";
       if(number >= colors.length){
           number = 0;
        }
    }else{
        lblInOrder.innerHTML="In Order";
        selectedNumber = Math.floor(Math.random()*colors.length);
        console.log("random");
    }
    const selectedColor = colors[selectedNumber];
    body.style.background = selectedColor;
    result.innerHTML = selectedColor;
    
}

function changeBackgroundWithRGBColor() {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const selectedColor = "rgb("+red+","+green+","+blue+")";
    body.style.background = selectedColor;
    result.innerHTML = selectedColor;
    
}
