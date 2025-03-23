//To get the choice of the user
const buttons=document.querySelectorAll(".container button");
buttons.forEach(function(btn){
    btn.addEventListener("click",PlayRound);
});

function getHumanChoice(event){
    
    let choice=event.currentTarget.className;
    return choice;    
}

//Generate a randome choice from computer
function getCompChoice(){
    const res=Math.floor(Math.random()*3);//values till 3-1=2
    if(res==0){
        return "rock";
    }
    else if(res==1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

//Function to calculate the win and losses
let win=0;
let lose=0;
let draw=0;

function PlayRound(event){
    const prompt=document.querySelector(".prompt");//To get prompt
    let c_choice=getCompChoice();
    let h_choice=getHumanChoice(event);

    if(c_choice==h_choice){
        prompt.innerText="Its a tie,points to both";
        prompt.style.color="blue";
        draw+=1;
    }
    else if(c_choice=="rock" && h_choice=="scissor"){
        prompt.innerText="You lose as "+h_choice +" loses to "+ c_choice;
        prompt.style["color"]="red";
        lose+=1;
    }
    else if(c_choice=="paper" && h_choice=="rock"){
        prompt.innerText="You lose as "+h_choice +" loses to "+ c_choice;
        prompt.style["color"]="red";
        lose+=1;
    }
    else if(c_choice=="scissor" && h_choice=="paper"){
        prompt.innerText="You lose as "+h_choice +" loses to "+ c_choice;
        prompt.style["color"]="red";
        lose+=1;
    }
    else{
        prompt.innerText="You Win as "+h_choice +" wins against to "+ c_choice;
        prompt.style["color"]="green";
        win+=1;
    }


//To update the score container
    const scores=document.querySelectorAll(".score span");

    scores.forEach(function(span){

        if(span.id=="win"){
            span.innerText=win;
        }
        else if(span.id=="lose"){
            span.innerText=lose;
        }
        else{
            span.innerText=draw;
        }
    });
    
}



