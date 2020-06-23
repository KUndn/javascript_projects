// const TypeWriter  =function(textElement, words, wait=3000) {
//     this.textElement = textElement;
//     this.words = words;
//     this.text = '';
//     this.wordIndex=0;
//     this.wait = parseInt(wait,10);
//     this.type();
//     this.IsDeleting  = false;
// }

// //Type method
// TypeWriter.prototype.type = function(){
// //Current Index of words
// const current  = this.wordIndex % this.words.length;
// //full text of current word
// const fullTxt = this.words[current];
// // check if deleting 
// if(this.IsDeleting){
//     //Remove a char
//     this.text = fullTxt.substring(0, this.text.length - 1);

// }else{
//     //Add char
//     this.text = fullTxt.substring(0, this.text.length + 1);
// }
//     //Insert txt into element
//     //console.log(this.text)
//     this.textElement.innerHTML  = ` <span class="txt"> ${this.text} </span>`;
//     // console.log(this.textElement.innerHtml)

//     // initial Type speed
//     let typeSpeed = 300;

//     if(this.IsDeleting){
//         typeSpeed /=2;
//     }

//     // If word is complete
//     if(!this.IsDeleting && this.text=== fullTxt){
//         typeSpeed = this.wait;
//         // Set Is Deleting True
//         this.IsDeleting = true;
//     }else if(this.IsDeleting && this.text === ''){
//         this.IsDeleting=false;
//         //Move to next word
//         this.wordIndex++;
//         //pause brfore typing 
//         typeSpeed = 500; 
//     }
//     console.log(this.textElement.innerHtml)
//     setTimeout( ()=> this.type(), typeSpeed);
// }

// //Init on DOM Load
// document.addEventListener('DOMContentLoaded',init);


// //Init app
// function init(){
//     const textElement = document.querySelector('.txt-type');
//     const words  = JSON.parse(textElement.getAttribute('data-words'));
//     const wait = textElement.getAttribute('data-wait');
//     //Init TypeWriter
//     new TypeWriter(textElement, words, wait);
// }

//ES6 class

class TypeWriter{
    constructor(textElement, words, wait=3000){
        this.textElement = textElement;
        this.words = words;
        this.text = '';
        this.wordIndex=0;
        this.wait = parseInt(wait,10);
        this.type();
        this.IsDeleting  = false; 
    }

type(){
//Current Index of words
const current  = this.wordIndex % this.words.length;
//full text of current word
const fullTxt = this.words[current];
// check if deleting 
if(this.IsDeleting){
    //Remove a char
    this.text = fullTxt.substring(0, this.text.length - 1);

}else{
    //Add char
    this.text = fullTxt.substring(0, this.text.length + 1);
}
    //Insert txt into element
    //console.log(this.text)
    this.textElement.innerHTML  = ` <span class="txt"> ${this.text} </span>`;
    // console.log(this.textElement.innerHtml)

    // initial Type speed
    let typeSpeed = 100;

    if(this.IsDeleting){
        typeSpeed /=2;
    }

    // If word is complete
    if(!this.IsDeleting && this.text=== fullTxt){
        typeSpeed = this.wait;
        // Set Is Deleting True
        this.IsDeleting = true;
    }else if(this.IsDeleting && this.text === ''){
        this.IsDeleting=false;
        //Move to next word
        this.wordIndex++;
        //pause brfore typing 
        typeSpeed = 500; 
    }
    console.log(this.textElement.innerHtml)
    setTimeout( ()=> this.type(), typeSpeed);

    }
}

document.addEventListener('DOMContentLoaded',loadconten);

function loadconten(){
    setTimeout( ()=> init(),500);
}
//Init app
function init(){
    
    const textElement = document.querySelector('.txt-type');
    const words  = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');
    //Init TypeWriter
    new TypeWriter(textElement, words, wait);
    
}
