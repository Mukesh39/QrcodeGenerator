const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');

const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');


const qrContainer = document.querySelector('.qr-body');


let size = sizes.value;

generateBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();  
    isEmptyInput();  
}); 



sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
    

}) ; 


downloadBtn.addEventListener('click' , ()=>{
    let img = document.querySelector('.qr-body img') ; 

    if( img !== null) {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href" , imgAtrr);
    }

    else{
        downloadBtn.setAttribute('href' , `${document.querySelector('canvas').toDataURl()}`) ;  
    }
})

function isEmptyInput(){


    // if(qrText.value.length >0){
    //     genrateQRCode() ;
    // }
    // else{
    //     alert('Enter the Text or Url To Generate Qr code') ;
       
    // }

    qrText.value.length > 0 ?  genrateQRCode() :  alert('Enter the Text or Url To Generate Qr code') ;

}

function genrateQRCode(){

    qrContainer.innerHTML = "";
    new QRCode(qrContainer , {
        text:qrText.value,
        height:size,
        width: size,
        colorLight:"#fff",
        colorDark:"#000",
    });


    // var qrcode = new QRCode("test", {
    //     text: "http://jindo.dev.naver.com/collie",
    //     width: 128,
    //     height: 128,
    //     colorDark : "#000000",
    //     colorLight : "#ffffff",
    //     correctLevel : QRCode.CorrectLevel.H
    // });


}