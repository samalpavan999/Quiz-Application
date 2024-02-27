const StartBtn=document.querySelector('.start-btn')
const PopupInfo=document.querySelector('.popup-info')
const exitBtn=document.querySelector('.exit-btn')
const main=document.querySelector('.main')
const continueBtn=document.querySelector('.continue-btn')
const quizSection=document.querySelector('.quiz-section')
const quizBox=document.querySelector('.quiz-box')
const resultBox=document.querySelector('.result-box')
const tryAgainBtn=document.querySelector('.tryAgain-btn')
const goHomeBtn=document.querySelector('.goHome-btn')
const homeContent=document.querySelector('.home-content')
const About=document.querySelector('.about')
const Header1=document.querySelector('.header1')
const About1=document.querySelector('.about1')
const Contact=document.querySelector('.contact')
const Contact1=document.querySelector('.contact1')
StartBtn.onclick=()=>{
    PopupInfo.classList.add('active');
    main.classList.add('active')
}

exitBtn.onclick=()=>{
    PopupInfo.classList.remove('active')
    main.classList.remove('active')
}

tryAgainBtn.onclick=()=>{
    resultBox.classList.remove('active')
    nextBtn.classList.remove('active')
    quizBox.classList.add('active')

    showCount=0
    showNumb=1
    userScore=0

    showQuestions(showCount)
    questionCounter(showNumb)

    headerScore()

}

goHomeBtn.onclick=()=>{
    resultBox.classList.remove('active')
    nextBtn.classList.remove('active')
    quizSection.classList.remove('active')

    showCount=0
    showNumb=1
    userScore=0

    showQuestions(showCount)
    questionCounter(showNumb)


}

continueBtn.onclick=()=>{
    quizSection.classList.add('active')
    PopupInfo.classList.remove('active')
    main.classList.remove('active')
    quizBox.classList.add('active')
    showQuestions(0)
    questionCounter(1)
    headerScore()
}

About.onclick=()=>{
    homeContent.classList.add('active')
    About1.classList.add('active')
    Contact1.innerHTML=''
    About1.innerHTML=`<p>Welcome to Quiz Website! We are dedicated to providing engaging and educational quizz on a variety of topics. 
    Test your knowledge and challenge yourself with our fun quizz. Stay tuned for regular updates and new quiz categories!</p><br>
    <p style="color:#c40094; opacity:0.5;">Designed and content Created by : Samala Pavan Kumar</p><br>
    <p style="color:#c40094; opacity:0.5;">Languages Used : HTML, CSS, JAVASCRIPT</p>`
}
Header1.onclick=()=>{
    homeContent.classList.remove('active')
    About1.classList.remove('active')
    Contact1.classList.remove('active')
    About1.innerHTML=''
    Contact1.innerHTML=''
}

Contact.onclick=()=>{
    homeContent.classList.add('active')
    Contact1.classList.add('active')
    About1.innerHTML=''
    Contact1.innerHTML=`<p>Email : samalapavan999@gmail.com</p><br>
    <p>Phone : 6305030639 </p>`
}

let showCount=0
let showNumb=1
let userScore=0

const nextBtn=document.querySelector('.next-btn')
nextBtn.onclick=()=>{
    if(showCount<questions.length-1)
    {
        showCount++
        showQuestions(showCount)

        showNumb++
        questionCounter(showNumb)
        nextBtn.classList.remove('active')
    }
    else{
        showResult()
    }
}

const optionList=document.querySelector('.option-list')

function showQuestions(index)
{
    const questionText=document.querySelector(".question-text")
    questionText.textContent=`${questions[index].numb}. ${questions[index].question}`
    
    let optionTag=`<div class="option"> <span>${questions[index].options[0]}</span> </div>
                   <div class="option"> <span>${questions[index].options[1]}</span> </div>
                   <div class="option"> <span>${questions[index].options[2]}</span> </div>
                   <div class="option"> <span>${questions[index].options[3]}</span> </div>`
    optionList.innerHTML=optionTag

    const option=document.querySelectorAll('.option')
    for(let i=0;i<option.length;i++)
    {
        option[i].setAttribute('onclick','optionSelected(this)')
    }
}

function optionSelected(answer)
{
    let userAnswer = answer.textContent.trim().toLowerCase();
    let correctAnswer = questions[showCount].answer.trim().toLowerCase();
    let allOptions= optionList.children.length; 
    if(userAnswer == correctAnswer)
    {
        answer.classList.add('correct')
        userScore+=1
        headerScore()
    }
    else{
        answer.classList.add('incorrect')

        for(let i=0; i<allOptions; i++)
        {
            if(optionList.children[i].textContent .trim().toLowerCase() == correctAnswer)
            {
                optionList.children[i].setAttribute('class','option correct')
            }
        }
    }

    for(let i=0; i<allOptions; i++)
    {
        optionList.children[i].classList.add('disabled')
    }
    nextBtn.classList.add('active')
}

function questionCounter(index)
{
    const questionTotal=document.querySelector(".question-total")
    questionTotal.textContent=`${index} of ${questions.length} Questions`
}

function headerScore(){
    const headerScoreText=document.querySelector('.header-score')
    
}

function showResult()
{
    quizBox.classList.remove('active')
    resultBox.classList.add('active')

    const scoreText=document.querySelector('.score-text')
    scoreText.textContent=`Your Score ${userScore} out of ${questions.length}`

    const circularProgress=document.querySelector('.circular-progress')
    const progressValue=document.querySelector('.progress-value')

    let progressStartValue=-1
    let progressEndValue=(userScore / questions.length)*100
    let speed=30

    let progress= setInterval(()=>{
        progressStartValue++
        progressValue.textContent=`${progressStartValue}%`
        circularProgress.style.background=`conic-gradient(#c40094  ${progressStartValue * 3.6}deg, rgba(255,255,255,.1) 0deg)`
        if(progressStartValue == progressEndValue)
        {
            clearInterval(progress)
        }
    },speed)
}

