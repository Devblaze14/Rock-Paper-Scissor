
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

function getHumanChoice(){
    let choice=prompt("enter your choice (Rock/Paper/scissor) : ");
    choice=choice.toLowerCase();
    return choice;    
}

function PlayRound(){

    let c_score=0;
    let h_score=0;
    let n=5;

    while(n--){
        let c_choice=getCompChoice();
        let h_choice=getHumanChoice();

        if(c_choice==h_choice){
            console.log("Its a tie,points to both");
        }
        else if(c_choice=="rock" && h_choice=="scissor"){
            console.log("You lose as "+c_choice +" loses to "+ h_choice);
            c_choice++;
        }
        else if(c_choice=="paper" && h_choice=="rock"){
            console.log("You lose as "+c_choice +" loses to "+ h_choice);
            c_choice++;
        }
        else if(c_choice=="scissor" && h_choice=="paper"){
            console.log("You lose as "+c_choice +" loses to "+ h_choice);
            c_choice++;
        }
        else{
            console.log("You Win as "+c_choice +" loses to "+ h_choice);
            h_choice++;
        }
    }
    if(c_score>h_score){
        console.log("Computer Wins");
    }
    else{
        console.log("User Wins");
    }

    
}

PlayRound();
