//tabs
const tabs = document.querySelector('.p-ui-tabs');
if(tabs) {
    tabsHandler();
}

function tabsHandler() {
    const tabsTitles = document.querySelectorAll('.tab-title');
    const tabsContents = document.querySelectorAll('.tab-content');
    console.log(tabsTitles);
    console.log(tabsContents);
    for(let i=0; i<tabsTitles.length; i++) {
        console.log(tabsTitles[i]);
        tabsTitles[i].setAttribute('data-title-num', [i]);
        tabsTitles[i].addEventListener('click', showTabContent);
        
    }
    for(let i=0; i<tabsContents.length; i++) {
         tabsContents[i].setAttribute('data-content-num', [i]);
    }


    console.log(tabsTitles);
    console.log(tabsContents);
}

function showTabContent(e) {
    const tabsTitles = document.querySelectorAll('.tab-title');
    const tabsContents = document.querySelectorAll('.tab-content');
    let currentTabNum = e.target.getAttribute('data-title-num');
    for(let i=0; i<tabsTitles.length; i++) {
        tabsTitles[i].classList.remove('active-tab');
        if(i==currentTabNum) {
            tabsTitles[i].classList.add('active-tab');
        }
    } 
    console.log(currentTabNum);
    for(let i=0; i<tabsContents.length; i++) {
        tabsContents[i].classList.remove('show-content');
        if(i==currentTabNum) {
            tabsContents[i].classList.add('show-content');

        }
    }
}