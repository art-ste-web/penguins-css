//tabs
const tabs = document.querySelector('.p-ui-tabs');
if(tabs) {
    tabsHandler();
}

function tabsHandler() {
    const tabsTitles = document.querySelectorAll('.tab-title');
    const tabsContents = document.querySelectorAll('.tab-content');
   
    //count number of tab titles, add attr with number and event listnener for handle click
    for(let i=0; i<tabsTitles.length; i++) {
        //console.log(tabsTitles[i]);
        tabsTitles[i].setAttribute('data-title-num', [i]);
        tabsTitles[i].addEventListener('click', showTabContent);
        
    }

    //count number of tab contents, add attr with number and get heights of all contents blocks
    let elHeights = [];
    for(let i=0; i<tabsContents.length; i++) {
        tabsContents[i].setAttribute('data-content-num', [i]);
        
    }
    
}

//handle click on tabs titles and show tabs content
function showTabContent(e) {
    const tabsTitles = document.querySelectorAll('.tab-title');
    const tabsContents = document.querySelectorAll('.tab-content');

    //get number of clicked title
    let currentTabNum = e.target.getAttribute('data-title-num');

    //set active tab title
    for(let i=0; i<tabsTitles.length; i++) {
        tabsTitles[i].classList.remove('active-tab');
        if(i==currentTabNum) {
            tabsTitles[i].classList.add('active-tab');
        }
    }
    console.log(currentTabNum);

    //show active tab content
    for(let i=0; i<tabsContents.length; i++) {
        tabsContents[i].classList.remove('show-content');
        tabsContents[i].style.display = 'none';
        if(i==currentTabNum) {
            tabsContents[i].classList.add('show-content');
            tabsContents[i].style.display = 'block';
        }
    }
}