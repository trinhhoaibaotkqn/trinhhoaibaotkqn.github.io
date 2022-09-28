var text_content = 'Vì cậu quá đẹp trai';
var end =document.querySelector('.end');
var background =document.querySelector('.background');
var btn_accept = document.getElementById('btn-accept');
var modal_container = document.getElementById('modal-container');
var btn_sent = document.getElementById('btn-sent');
var btn_refuse = document.getElementById('btn-refuse');
var text_input = document.querySelector('input[type="text"]')
var lenghtText = text_content.length; 

btn_accept.addEventListener('click',()=> {
    modal_container.classList.add('show');
    var arrIn = text_content.split("");
    var arrOut = [];

    text_input.addEventListener('keyup',(e)=>{
        if(arrOut.length<lenghtText){
            if(e.which != 8 && e.which != 46){
                arrOut.push(arrIn.shift());
                text_input.value = arrOut.join("");
            }else{
                arrIn.unshift(arrOut.pop());
                text_input.value = arrOut.join("");
            }
        }else{
            text_input.addEventListener('keyup',(e)=>{
                text_input.value = arrOut.join("");
            })
            btn_sent.addEventListener('click',()=> {
                modal_container.classList.remove('show');
                end.style.display = "flex";
                background.style.display = "none";
            })
        }
    })
})



btn_refuse.addEventListener('mouseover',()=>{
    var top = Math.random()*85 + '%';
    var right = Math.random()*85 + '%';
    btn_refuse.style.top = top;
    btn_refuse.style.right = right;
    btn_refuse.style.tranform = 'none';
})
