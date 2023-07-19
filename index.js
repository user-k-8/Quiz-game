let quiz = document.getElementById("quiz");

class QuizQuestion{

    constructor(optionA, optionB, optionC, optionD, answer, question,img,id,slideID){
        this.optionA =optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
        this.answer = answer;
        this.question = question;
        this.img = img;
        this.id = id;
        this.slideID = slideID;
    }
}

let question1 = new QuizQuestion("A. Nano", "B. NanTech", "C. Not a number" ,"D. New attactedNematic" , "C. Not a number", " NaN stands for...","./img/blockchain.jpg", "q1", "slide1" );
let question2 = new QuizQuestion("A.  Unary", "B. Positive", "C. Increment", "D. Addition","A.  Unary", "++ operator in Java Script is ____ Operator.", "./img/fintech_financial_technology_blockchain_network_thinkstock_664868402-100739353-large.3x2.jpg", "q2",  "slide2"  );
let question3 = new QuizQuestion("A. dynamically", "B. statically", "C. globally", "D. strongly" ,"A. dynamically", "Javascript variables are ______ typed.", "./img/markus-spiske-hbb6GkG6p9M-unsplash-1140x640.jpg", "q3",  "slide3"  );
let question4 = new QuizQuestion("A. client side browser", "B. server side (using Node JS)" , "C. game development/ desktop applications & mobile apps", "D. all of them", "D. all of them", "Javascript can be used for programming______.", "./img/R (7).jpg", "q4",  "slide4" );
let question5 = new QuizQuestion("A.  object oriented", "B. client oriented", "C. network oriented", "D. server oriented", "A.  object oriented", "Java script is an ________scripting language", "./img/TERMite-toolkit.jpg", "q5",  "slide5" );
let question6 = new QuizQuestion("A. String", "B. Codes", "C. Variables", "D. Functions", "C. Variables", "______ are used for storing numbers, dates or other values in a javascript program.", "./img/R (8).jpg" , "q6",  "slide6" );
let question7 = new QuizQuestion("A. impression", "B. parser", "C. regular expression", "D. concatenation" , "C. regular expression", "The system of notations used to effectively process string related operations is called ______ .", "./img/TERMite-toolkit.jpg", "q7",  "slide7" );
let question8 = new QuizQuestion("A.  /* ... */ ", "B.  {…..}", "C. # ... #", "D. $ ... $ ", "A.  /* ... */ ", "In JavaScript, ________ is used for multiline comments", "./img/blockchain.jpg", "q8", "slide8"  );
let question9 = new QuizQuestion("A. onfocus","B. onclick", "C. onblur", "D. onerror", "B. onclick","_____event gets activated when a component is clicked", "./img/featured_code.jpg","q9",  "slide9"  );
let question10 = new QuizQuestion("A.  a procedure", "B. an object", "C. a script", "D. a library","B. an object" ,"A method is a function bound to" ,"./img/fintech_financial_technology_blockchain_network_thinkstock_664868402-100739353-large.3x2.jpg", "q10", "slide10"  );

let questionObjects = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

let questionsContainer = document.querySelector('#question-slides-container');

for(let i=1; i<11; i++){

    const questionHTML = `

    <div class="carousel-item" id="${questionObjects[i-1].slideID}">
            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg slide-container">
                  <div class="col-lg-5 col-md-5" >
                    <h1 class="display-4 fw-bold lh-1 text-body-emphasis slide-header">Question ${i}</h1>
                    <p class="lead paragraph-text"> ${questionObjects[i-1].question}</p>
                    
                    <p><button type="button"  class="btn btn-outline-primary btn-lg px-4 answer-button answer-button " )> ${questionObjects[i-1].optionA} </button></p>
                    <p><button  type="button"   class="btn btn-outline-primary btn-lg px-4 answer-button " > ${questionObjects[i-1].optionB}  </button></p>
                    <p><button  type="button"  class="btn btn-outline-primary btn-lg px-4 answer-button " > ${questionObjects[i-1].optionC} </button></p>
                    <p><button  type="button"   class="btn btn-outline-primary btn-lg px-4 answer-button " > ${questionObjects[i-1].optionD}  </button></p>
                    <p><button type="submit"  class="btn btn-primary btn-lg px-4  me-md-2 fw-bold "  id = "qq${i}"  >Submit</button></p>
               
                    <div id="${questionObjects[i-1].id}" class="output"></div>
                    <br><br>
                  </div>
                  <div class="col-lg-7 col-md-7  p-0 overflow-hidden img-container">
                      <img class="rounded image" src="${questionObjects[i-1].img}" alt="">
                  </div>
                </div>
              </div>
          </div>
    
    `
    questionsContainer.innerHTML+= questionHTML;
}


//removing next button after its clicked
let forwardButton = document.getElementById("next");
forwardButton.addEventListener("click", ()=>{
    forwardButton.style.display ="none";

})

//Storing answers
const optionbuttons = document.querySelectorAll('button[type="button"]'); // selects buttons of type button
optionbuttons.forEach(button1=>{
    button1.addEventListener("click", ()=>{
    
    clickedButton = button1;
    quiz.dataset.buttonContent = button1.textContent;

    })
})

// array to store points for correct answers
let points= []

//Checking answers
const submitbuttons = document.querySelectorAll('button[type="submit"]'); // selects button with type submit
submitbuttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        
        button.style.display ="none" // removes button after it is clicked 
        forwardButton.style.display ="block";
                
        // perform check
        for(const question of questionObjects){
           
        const outputID =   document.getElementById(question.id);
         if(quiz.dataset.buttonContent.includes(question.answer) ){
            outputID.innerHTML ="Your answer is correct! ";
            clickedButton.style.backgroundColor = "rgb(56, 196, 48)";
            points.push(1);
            
          
           
         
         }
         else {
            if(button.id.includes(question.id)){
            outputID.innerHTML =" Your answer is incorrect.";
            clickedButton.style.backgroundColor = "rgb(211, 31, 31)";

            
            }
           
        }
       
    }
    //calculate points
    let sum=0;
    for (let point of points){
        sum +=point
    
     }
     document.getElementById("output-score").innerHTML = sum;
    
 //feedback
let feedback =document.getElementById("feedback");
if(sum>=5){
    feedback.innerHTML = "Congratulations, you passed!"
}
else{
    feedback.innerHTML = "You have less than 5 points. Please retake quiz."
}
})})


// Start again

document.getElementById("reset").addEventListener("click", 
()=>{
    location.reload();
});


