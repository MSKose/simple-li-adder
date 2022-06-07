const dilInput = document.querySelector('.diller');
const silBtn = document.getElementById('sil');
const ekleBtn = document.getElementById('ekle');

const dilSection = document.querySelector('#dil-section');


const ul = document.createElement('ul');
dilSection.appendChild(ul);

ekleBtn.addEventListener('click', () => {
    if (!dilInput.value) {
        alert("Please type something")
    }else {
        ul.innerHTML += `<li>${dilInput.value}</li>`;
        dilInput.value = '';
        redControl();
    }
    
});

const redControl = () => {
    document.querySelectorAll('ul li').forEach((lan) => {     // here lan represents li elements in a forEach
        const low = lan.textContent.toLowerCase();
        if (low == "javascript"){
            lan.className = 'red'                     // here we forcefully added a css class to our li element.
        //  lan.setAttribute('class', 'red')          this would be an alternative way to adding class name
        }
    })
}

