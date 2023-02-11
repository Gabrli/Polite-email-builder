const BtnReset = document.querySelector('.btn-reset')

const BtnAddOne = document.querySelectorAll('.tile-1')
const BtnAddTwo = document.querySelectorAll('.tile-2')
const BtnAddThree = document.querySelectorAll('.tile-3')

const TextOne = document.querySelector('#text-one')
const TextTwo = document.querySelector('#text-two')
const TextThree = document.querySelector('#text-three')



BtnAddOne.forEach((x) => x.addEventListener('click', OneTileCheckFunction))

BtnAddTwo.forEach((x) => x.addEventListener('click', TwoTileCheckFunction))

BtnAddThree.forEach((x) => x.addEventListener('click', ThreeTileCheckFunction))


function OneTileCheckFunction(){
    TextOne.innerHTML = this.textContent
}
function TwoTileCheckFunction(){
    TextTwo.innerHTML = this.textContent
}
function ThreeTileCheckFunction(){
    TextThree.innerHTML = this.textContent
}



BtnReset.addEventListener('click', ()=> {
    TextOne.innerHTML = ''
    TextTwo.innerHTML = ''
    TextThree.innerHTML = ''
})
