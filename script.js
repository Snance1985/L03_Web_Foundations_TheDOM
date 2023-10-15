//getElementById
const demoId = document.getElementById("demo");
console.log(demoId);
demoId.style.background = "yellow";

//getByClassName
const demoClass = document.getElementsByClassName("item");
demoClass[0].style.border = '2px solid orange';

for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '2px solid orange';
}

//getByTagName
const demoTag = document.getElementsByTagName('article');
console.log(demoTag);

for (i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = 'blue dashed';
}

//querySelector
const demoQuery = document.querySelector('.querySel');
demoQuery.style.background = "pink"

//querySelectorAll
const demoQueryAll = document.querySelectorAll('.demo-query-all');
for (i = 0; i < demoQueryAll.length; i++) {
    demoQueryAll[i].style.border = '4px solid purple';
}


