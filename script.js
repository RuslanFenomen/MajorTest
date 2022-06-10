
const themeBtn = document.querySelector('.theme__btn')
const bodyBg = document.querySelector('body');

if (themeBtn === true) {
    themeBtn.onclick = function () {
        bodyBg.classList.toggle('active');
        if (bodyBg.classList.contains('active') === true) {
            themeBtn.innerHTML = 'Светлая тема';
        } else {
            themeBtn.innerHTML = 'Темная тема';
        }
    }
}

const arreySubject = ['МалиНа', 'МороЖеное', 'МармелаД', 'МисКа', 'МеЧ', 'НаПиток', 'МеШок', 
'МорС', 'МикроволноВка', 'МаРакуйя', 'ГноМ', 'ГараЖ', 'ГаДюка', 'ГазетчиК', 'ЖеваЧка', 'ГроБ', 
'ЖурнаЛ', 'ЖелеЗо', 'ЖираФ', 'ЖуРавль', 'ДеНьги', 'ТелеГа', 'ДалмаТин', 'ДоКтор', 'ТапоЧки', 
'ДуПло', 'ДуЛо', 'ДоСка', 'ДиВан', 'ДРон', 'КаштаН', 'КоЖа', 'КеДы', 'КуХня', 'КлюЧ', 'КоПьё', 
'КаШа', 'КоСа', 'КоВер', 'ХРен', 'ЧайНик', 'ЧуГун', 'ЧелюсТь', 'ЧеК', 'ЧеЧевица', 'ЧаПан', 'ЧаШа', 
'ЧаСы', 'ЧерВь', 'ЧеРеп', 'ПеНь', 'ПороГ', 'ПуДра', 'ПеКарь', 'ПеЧь', 'ПрицеП', 'ПуШка', 'ПёС', 
'ПиВо', 'ПаРта', 'ШиНа', 'ШпаГа', 'ШТрудель', 'ШоКолад', 'иШаЧок', 'ШиПы', 'ШЛяпа', 'ЛаЗер', 
'ШарФ', 'ШоРты', 'СеНо', 'СиГара', 'СеДло', 'СоК', 'СкотЧ', 'СаПог', 'СуШки', 'СаЗан', 'СоВа', 
'СеРебро', 'ВиНо', 'ВаГон', 'ВеДро', 'ВеКо', 'ВраЧ', 'ВыПечка', 'ВыШка', 'ВеСы', 'ВаФли', 'ВеРёвка', 
'ЦеМент', 'РоЖок', 'РобоТ', 'РаКета', 'РуЧка', 'ЦеПь', 'РеШетка', 'РиСунок', 'РеВольвер', 'РыЦарь'];

const testNumber = document.querySelector('.test__number');
const testInput = document.querySelector('.test__input');
const testBtn = document.querySelector('.test__btn');
const testBtnText = document.querySelector('.test__btn-text');
const nextBtn = document.querySelector('.next');
const startBtn = document.querySelector('.start');
const NumberOfTests = document.querySelector('.number__tests');
const startBacgraund = document.querySelector('.btns');
const reload = document.querySelector('.reload');

let arreyNumbers = [];
let increase = 0;

startBtn.onclick = function () {
    for (let i = 0; i < NumberOfTests.value; i++) {
        let randomNum = Math.floor(Math.random() * 100);
        arreyNumbers.push(`${randomNum}`);
    }

    if (arreyNumbers[`${increase}`] >= 0 && arreyNumbers[`${increase}`] <= 9) {
        testNumber.innerHTML = `0${arreyNumbers[`${increase}`]}`;
    } else {
        testNumber.innerHTML = arreyNumbers[`${increase}`];
    }

    if (NumberOfTests.value !== '') {
        startBacgraund.style.transform = 'translateY(-100%)';
    }

    reload.style.display = 'none';
}

nextBtn.onclick = function () {
    if (arreyNumbers[`${increase + 1}`] === undefined) {
        testNumber.innerHTML = 'Все:)';
        reload.style.display = 'block';
        testInput.style.display = 'none';   
        testBtn.style.display = 'none';

    } else {
        if (arreyNumbers[`${increase}`] >= 0 && arreyNumbers[`${increase}`] <= 9) {
            testNumber.innerHTML = arreyNumbers[`0${increase + 1}`];
        } else {
            testNumber.innerHTML = arreyNumbers[`${increase + 1}`];
        }
    }
    increase++;
    testInput.value = '';
    nextBtn.style.display = 'none';
    testBtnText.innerHTML = '';
}

testBtn.onclick = function () {
    let testInputValue = testInput.value;
    let arreySubjectValue = arreySubject[arreyNumbers[`${increase}`]];
    testBtnText.innerHTML = '';
    if (testInputValue === arreySubjectValue) {
        testBtnText.innerHTML = 'Ответ верный :)';
        testBtnText.style.color = 'green';
        nextBtn.style.display = 'block';
    } else {
        testBtnText.style.color = 'red';
        testBtnText.innerHTML = 'Ответ неверный либо допущена грамматическая ошибка :(';
    }
}































// let arreyList = [];

// function arr() {
//     arreySubject.forEach(item => {
//         contenList.innerHTML = `
//         <li class="content__item">
//         <p class="content__item-number">
//         ${arreySubject.length - 1}
//         </p>
//         <p class="content__item-text">
//         ${item}
//         </p>
//         </li>
//         `;
//     });
//     return;
// }
// arr();





