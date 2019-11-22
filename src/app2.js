import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const index = localStorage.getItem('index') || 0

$tabBar.on('click','li',(e)=>{
    let $li = $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    let $index = $li.index()
    localStorage.setItem('index',$index)
    $tabContent.children().eq($index).addClass('active').siblings().removeClass('active')
})

$tabBar.children().eq(index).trigger('click')