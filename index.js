let container = document.querySelector('.Favourite-coffe__slider');
let cards = [{img:"img/coffee-slider-1.png", title: "S’mores Frappuccino", description:"This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.", price:5.50 },
{img:"img/coffee-slider-2.png", title: "Caramel Macchiato", description:"Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.", price:5.00 },
{img:"img/coffee-slider-3.png", title: "Ice coffee", description:"A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.", price:4.50 }
]
let productsIndex = 0;
/*let createElem = function(element, className){
Дописать функцию для генерации элементов
}*/
let createCard = function (card) {
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    let cardImage = document.createElement('img');
    cardImage.classList.add('card__img');
    cardImage.src = card.img;
    cardImage.alt = card.title;
    let cardTitle = document.createElement('h3');
    cardTitle.classList.add('card_title');
    cardTitle.textContent = card.title;
    let cardDescription = document.createElement('p');
    cardDescription.classList.add('card_description');
    cardDescription.textContent = card.description;
    let cardPrice = document.createElement('h3');
    cardPrice.classList.add('card_price');
    cardPrice.textContent = `$ ${card.price}`;
    cardContainer.append(cardImage);
    cardContainer.append(cardTitle);
    cardContainer.append(cardDescription);
    cardContainer.append(cardPrice);
    return cardContainer;
}
let buttonNext = document.createElement('button');
buttonNext.classList.add('button');
buttonNext.classList.add('next');

let buttonPrev = document.createElement('button');
buttonPrev.classList.add('button');
buttonPrev.classList.add('prev');

container.append(buttonPrev)
container.append(buttonNext);


for (let i = 0; i < cards.length; i++) {
    let cardItem = createCard(cards[i]);
    container.append(cardItem);  
  }

const products = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.button')

function show(index){
    products[productsIndex].classList.remove('active');
    products[index].classList.add('active')
    productsIndex = index
}
buttons.forEach((e)=>{
    e.addEventListener('click', (event) => {
        if(event.target.classList.contains('next')){
            let index = productsIndex + 1;
            if(index >= products.length){
                index = 0;
            }
            show(index);
        }
        else if (event.target.classList.contains('prev')){
            let index = productsIndex - 1;
            if(index < 0){
                index = products.length - 1;
            }
            show(index);
        }
    })
})
show(productsIndex)