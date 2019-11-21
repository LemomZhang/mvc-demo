import './app1.css'
import $ from 'jquery'

const $number = $('.number')
const $actions = $('.actions')
const localStorage_number = localStorage.getItem('output.number')
$number.text(localStorage_number || 100)
$actions.on('click','button',(e)=>{
    const action = e.currentTarget.innerHTML
    if(action==='+1'){
        let number = parseInt($number.text())
        number+=1
        localStorage.setItem('output.number',number)
        $number.text(number)
    }else if(action==='-1'){
        let number = parseInt($number.text())
        number-=1
        localStorage.setItem('output.number',number)
        $number.text(number)
    }else if(action==='×2'){
        let number = parseInt($number.text())
        number*=2
        localStorage.setItem('output.number',number)
        $number.text(number)
    }else{
        let number = parseInt($number.text())
        number/=2
        localStorage.setItem('output.number',number)
        $number.text(number)
    }
})