const choice = document.querySelector('#color')

let color = ['white', 'black', 'blacklight']

choice.addEventListener('click', ()=>{
    if(choice.value === color[1]){
        document.querySelector('body').style.backgroundColor = 'black'
    }else if (choice.value === color[0]){
        document.querySelector('body').style.backgroundColor = 'white'
    }else if(choice.value === color[2]){
        document.querySelector('body').style.backgroundColor = '#1C1C1C'
    }
})