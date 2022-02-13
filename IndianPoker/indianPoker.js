// 5판 3선승

const setNum = ["C","D"];
const value = [
    "1","2","3","4","5","6","7","8","9","X"
];

let deck=[]; //덱
let player_cards; //내 카드
let opponent_cards; //상대 카드

let roundNum =0; //라운드
let chip=10;

let turncount=0;
let count=0;
let myturn;

let ocall=0;
let odie=0;

let callCount=0;
let prior_turn=0;

let pNum;
let oNum;
//카드세팅
for(let i=0; i<setNum.length; i++){
    for(let j=0; j<value.length; j++){
        deck.push(value[j]+setNum[i]);
    }
}

deck=shuffle(deck);
player_cards=deck[count++];
opponent_cards=deck[count++];
console.log(opponent_cards)
turn();




//카드 섞기
function shuffle(deck){
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}


function turn(){
    roundNum=count/2;
    round.innerHTML=roundNum;

    if(count==22){
        if(chip>0)  //스코어가 0보다 크다면
        {
          alert("승리");   //게임 승리
        }
        else if(chip==0)  //스코어가 0이라면
        {
          alert("무승부");  //게임 무승부
        }
        else  //스코어가 0 미만이라면
        {
          alert("패배");   //게임 패배
        } 
    }
    
    if(ocall=1){
        playerTalk.innerHTML='';
        opponentTalk.innerHTML='';
        ocall=0;
    }
    if(odie=1){
        document.getElementById('playerTalk').innerHTML='';
        document.getElementById('opponentTalk').innerHTML='';
        odie=0;
    }
    
    let img = '../image/cards/'+opponent_cards+'.png';
    document.getElementById('oImg').src=img;
    document.getElementById('pImg').src='../image/cards/back.png';

    if(turncount%2==0){
        document.getElementById('turn').innerHTML='MY TURN'
    }else if(turncount%2==1) {
        document.getElementById('turn').innerHTML='COM TURN'
        setTimeout(oturn,2000);
    }

}

function oturn(){
    let chooseCalorDie = Math.floor(Math.random*5)+parseInt(pNum);

    if(chooseCalorDie>7) setTimeout(oDie,1500);
    else{
        if(callCount==1) //2 콜
            ocall=1;

            document.getElementById('opponentTalk').innerHTML="CALL!!"
            document.getElementById('turn').innerHTML='';


            if(prior_turn==0) setTimeout(Call,3000)
            else if(prior_turn==1)setTimeout(Call,3000)
    }
}


function Die(){
    document.getElementById('pImg').src='../image/cards/'+player_cards+'.png';

    document.getElementById('playerTalk').innerHTML='아쉽..'
    document.getElementById('opponentTalk').innerHTML='누워서떡먹기굿'

    chip-=150;

    if(prior_turn==0){
        turncount=1;
        prior_turn=1;
    }
    else if(prior_turn == 1)
    {
        turncount = 0;
        prior_turn = 0;
    } 

    callCount=0;  //각 카운트값 초기화 및 set
    document.getElementById('turn').innerHTML="";
  
    //document.getElementById('chips').innerHTML=chip
    player_cards = deck[count++];
    opponent_cards = deck[count++];  //다음 카드 분배
    setTimeout(turn,3000);  //5초 뒤 Turn함수 동작
}

function Call()  //call 했을 때 동작
{
  document.getElementById('turn').innerHTML = "";
  document.getElementById('playerTalk').innerHTML = "CALL!!";
  if(callCount==1)//서로 call일 경우
  {
    opponentTalk.innerHTML=""; 
    document.getElementById('turn').innerHTML = "";

    callCount=0;  //call_cnt값 0으로 다시 초기화

    Open_Card();  //카드 오픈
  }
  else//첫번째 call
  {
    callCount=1;  //call_cnt 값 1로 set
    turncount+=1;  //turncnt도 1씩 증가
    setTimeout(turn(),3000);  //턴 함수 동작
  }
}

function Open_Card(){
    pNum = player_cards.substr(0,1);
    oNum = opponent_cards.substr(0,1);

    document.getElementById('pImg').src='../image/cards/'+player_cards+'.png';

    if(pNum>oNum){
        setTimeout(CWin(),3000);
    } 
    else if(pNum<oNum){
        setTimeout(CLose(),3000);
        
    }
    else{
        setTimeout(Tie(),3000);
    }
}

function CWin(){
    document.getElementById('playerTalk').innerHTML='굿굿^^'
    document.getElementById('opponentTalk').innerHTML='헐랭'

    chip+=100;
    turncount=0;
    callCount=0;

    ocall=1;

    //document.getElementById('chips').innerHTML=chip
    player_cards=deck[count++]
    opponent_cards=deck[count++]

    setTimeout(turn,1000)
}
function CLose(){
    document.getElementById('playerTalk').innerHTML='에휴'
    document.getElementById('opponentTalk').innerHTML='나이스'


    chip-=150;
    turncount=1;
    callCount=0;

    ocall=1;

    //document.getElementById('chips').innerHTML=chip
    player_cards=deck[count++]
    opponent_cards=deck[count++]

    setTimeout(turn,1000)
}
function Tie(){
    document.getElementById('turn').innerHTML = "동점";

  if(prior_turn == 0)
  {
    turncount = 1;
    prior_turn = 1;
  }
  else if(prior_turn == 1)
  {
    turncount = 0;
    prior_turn = 0;
  }
  callCount=0;  //call_cnt값 0으로 초기화

  player_cards = deck[count++];
  opponent_cards = deck[count++];   //다음카드 분배
  setTimeout(turn,3000);   //3초뒤 Turn 동작
}
function oDie(){
    document.getElementById('opponentTalk').innerHTML = "아놔";

    document.getElementById('pImg').src='../image/cards/'+player_cards+'.png';
    
    document.getElementById('playerTalk').innerHTML = "좋당";

    chip+=100;

    if (prior_turn == 0) {
        turncount = 1;
        prior_turn = 1;
    }
    else if (prior_turn == 1) {
        turncount = 0;
        prior_turn = 0;
    }
    callCount = 0;
    odie = 1;  //각 카운트값 초기화 및 set

    //document.getElementById('chips').innerHTML=chip
    player_cards = deck[count++];
    opponent_cards = deck[count++];  //다음 카드 분배
    setTimeout(turn, 5000);  //5초 뒤 Turn 동작
}




