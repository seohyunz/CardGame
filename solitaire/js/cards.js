const shape = ["C","D","H","S"];
const value = [
    "1","2","3","4","5","6","7","8","9","X","J","Q","K"
];

function Card(shape,value){
    this.shape=shape;
    this.value=value;
}

//카드덱 생성
function Deck(){
    this.card=[];
    for(let i=0; i<shape.length; i++){
        for(let j=0; j<value.length; j++){
            this.card.push(new Card(value[j],shape[i]));
        }
    }

    return this.card;
}

//덱 섞기
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
 }
 

let deck = new Deck();
deck=shuffle(deck);
console.log(deck);




