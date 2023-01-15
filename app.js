const TwoInput = document.querySelector('.two-input')

const FirstTiles = document.querySelector('.first-tiles')

const SecondTiles = document.querySelector('.second-tiles')

const BodySectionText = document.querySelector('.body-input')

const ListSection = document.querySelector('.list')

const BodyTiles = document.querySelector('.body-tiles')

const EndInput = document.querySelector('.end-input').value

const BtnReset = document.querySelector('.btn-reset')

const BtnAddOne = document.querySelectorAll('.tile-1')
const BtnAddTwo = document.querySelectorAll('.tile-2')
const BtnAddThree = document.querySelectorAll('.tile-3')

const Form = document.querySelector('.body-form')

const BodyUl = document.querySelector('.body-ul')


const TileOneElements = [
    'Dear Mr,',
    'Dear Madam,', 
    'Good morning,',
    'Greetings,',
]

const TileTwoElements = [
    'I regret inform you that',
    'I am writing to thank you for',
    'I am writing to let you know',
    'I am writing to response to',
    'I am writing in reply to'
]

const TileThreeElements = [
    'For futher information, please do not heditate to contact me',
    'I hope to greet you again soon',
    'I look forward to hearning from you soon',
    'Thanks for you attention',
    'Thank you in advance'
]



BtnAddOne.forEach(() => {
    addEventListener('click', OneTileCheckFunction)
    
})

BtnAddTwo.forEach(() => {
    addEventListener('click', TwoTileCheckFunction)
})

BtnAddThree.forEach(() => {
    addEventListener('click', ThreeTileCheckFunction)
})



function OneTileCheckFunction(event){
    const { target } = event
  
    const newTileOneElement = document.createElement('li')
 
   
    if(target.id === 'one'){
        
        newTileOneElement.textContent = TileOneElements[0]

        FirstTiles.classList.add('none')
        //script.stop;
    } else if(target.id === 'two'){

        newTileOneElement.textContent = TileOneElements[1]

        FirstTiles.classList.add('none')

    } else if(target.id === 'three'){

        newTileOneElement.textContent = TileOneElements[2]

        FirstTiles.classList.add('none')

    } else if(target.id === 'four'){

        newTileOneElement.textContent = TileOneElements[3]

        FirstTiles.classList.add('none')

    } else {
        return;
    }
        
    
   newTileOneElement.classList.add('new-one-t-element')
  BodyUl.appendChild(newTileOneElement)
  Form.appendChild(BodyUl)
}





function TwoTileCheckFunction(event){

    const {target} = event

    const newTileTwoElement = document.createElement('li')

    if(target.id === 't-one'){

        newTileTwoElement.textContent = TileTwoElements[0]
        SecondTiles.classList.add('none')

    } else if(target.id === 't-two'){

        newTileTwoElement.textContent = TileTwoElements[1]
        SecondTiles.classList.add('none')

    } else if(target.id === 't-three'){

        newTileTwoElement.textContent = TileTwoElements[2]
        SecondTiles.classList.add('none')

    } else if(target.id === 't-four'){

        newTileTwoElement.textContent = TileTwoElements[3]
        SecondTiles.classList.add('none')

    } else if(target.id === 't-five'){

        newTileTwoElement.textContent = TileTwoElements[4]
        SecondTiles.classList.add('none')

    } else{
        return;
    }
    newTileTwoElement.classList.add('new-one-t-element')
    BodyUl.appendChild(newTileTwoElement)
    Form.appendChild(BodyUl)
}


function ThreeTileCheckFunction(event){
    const {target} = event

    const newTileThreeElement = document.createElement('li')

    if(target.id === 't-b-one'){

        newTileThreeElement.textContent = TileThreeElements[0]
        BodyTiles.classList.add('none')

    } else if(target.id === 't-b-two'){

        newTileThreeElement.textContent = TileThreeElements[1]
        BodyTiles.classList.add('none')

    } else if(target.id === 't-b-three'){

        newTileThreeElement.textContent = TileThreeElements[2]
        BodyTiles.classList.add('none')

    } else if(target.id === 't-b-four'){

        newTileThreeElement.textContent = TileThreeElements[3]
        BodyTiles.classList.add('none')

    } else if(target.id === 't-b-five'){

        newTileThreeElement.textContent = TileThreeElements[4]
        BodyTiles.classList.add('none')

    } else{
        return;
    }

    BodyUl.appendChild(newTileThreeElement)
    newTileThreeElement.classList.add('new-one-t-element')
    Form.appendChild(BodyUl)
}





BtnReset.addEventListener('click', ()=> {
    location.reload()
})