


const parar = document.getElementById('parar')
const iniciar = document.getElementById('iniciar')
const numeros = document.getElementById('numeros')
let num = 1;
let interval;
let avaible = false

const actualizarNumero =  () => {
    var mili = new Date();
    var num = mili.getMilliseconds();
    
        numeros.textContent = num;
}

// actualizarNumero()
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

iniciar.addEventListener('click', ()=>{
        interval = setInterval(actualizarNumero, 10)
        avaible = true
})


parar.addEventListener('click', ()=>{
        if(avaible){
                clearInterval(interval)
                var resp = getRandomInt(2,100)
                numeros.textContent = resp;
        }
        avaible = false
})
