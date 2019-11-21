import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click','li',(e)=>{
    let $li = $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    let $index = $li.index()
    $tabContent.children().eq($index).addClass('active').siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')