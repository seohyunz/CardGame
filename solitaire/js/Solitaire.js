
const shape = ["C","D","H","S"];
const value = [
    "1","2","3","4","5","6","7","8","9","X","J","Q","K"
];



//선택 카드
let select=[];
for(let i=1; i<=7; i++) select[i]=[];

//카드 덱
let backdeck=[];
let opencard=[];

//결과 카드
let spade=[];
let heart=[];
let dia=[];
let clover=[];

//현재 보드 카드
let boardCard=[];
boardCard['backdeck']=backdeck;
boardCard['opencard']=opencard;
boardCard['select']=select;
boardCard['spade']=spade;
boardCard['heart']=heart;
boardCard['dia']=dia;
boardCard['clover']=clover;


//덱 생성
let deck = new Deck();
//덱 섞기
deck=shuffle(deck);
console.log(deck);

boardCard =set(deck,boardCard);
console.log(boardCard);
// makeBoard(boardCard,playedCards);

const width = 4; //가로
const height = 13; //세로

//container 검색
//전체 틀
const container = document.querySelector(".container");

// setting(width,height);


function Card(shape,value){
    this.shape=shape;
    this.value=value;
}

//카드덱 생성
function Deck(){
    console.log('덱 생성');
    this.card=[];
    for(let i=0; i<shape.length; i++){
        for(let j=0; j<value.length; j++){
            this.card.push(new Card(shape[i],value[j]));
        }
    }

    return this.card;
}

//덱 섞기
function shuffle(deck) {
    console.log('덱 섞기');
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}

//카드 분배
function set(deck,table){
    console.log('덱 세팅');
    table['backdeck']=deck;
    
    let btab = table['select'];
    for(let i=1; i<=7; i++){
        for(let j=i; j<=7; j++){
            btab[i][j]=table['backdeck'].shift();
        }
    }

    return table;
}

function makeBoard(boardCard){
    console.log('테이블 세팅')


    for(let i=1; i<=7; i++){
        for(let j=i; j<=7; j++){
            
        }
    }
}

// function move(backD,d,pop,sCard=1){
//     console.log('덱 이동');
//     if(pop!=true){ //카드 세팅
//         //카드 한 장씩 꺼내서 넣기
//         let card = backD.shift();
//         d.push(card);
//     }
//     else{ //카드 선택시 움직이기
//         while(sCard){
//             let card = backD[backD.length-sCard]; //맨 위 카드 부터
//             backD.splice(backD.length-sCard);
//             d.push(card);
//             sCard--;
//         }
        
//     }
// }

// function makeBoard(boardCard,playedCards){

// }

// const setting = (w, h) => {
//     for (let i = 0; i < h * w; i++) {
//         const card = document.createElement("div");
//         const cardInner = document.createElement("div");
//         const cardFront = document.createElement("div");
//         const cardBack = document.createElement("div");
//         const cardFrontImg = document.createElement("img");
//         const cardBackImg = document.createElement("img");
//         cardFrontImg.src ='./image/cards/back.png'

//         cardBack.id=deck[i].value+deck[i].shape;
//         console.log(cardBack.id);
//         cardBackImg.src='./image/cards/'+cardBack.id+'.png';

//         card.classList.add("card");
//         cardInner.classList.add("card_inner");
//         cardFront.classList.add("card_front");
//         cardBack.classList.add("card_back");
//         cardFrontImg.classList.add("card_Img");
//         cardBackImg.classList.add("card_Img");

//         container.append(card);
//         card.append(cardInner);
//         cardInner.append(cardBack);
//         cardInner.append(cardFront);
//         cardFront.append(cardFrontImg);
//         cardBack.append(cardBackImg);

//        // cardBack.style.backgroundColor = "pink";

//         card.addEventListener('click', () => {
//             card.classList.toggle("filp");
//         });
//     }
// };


