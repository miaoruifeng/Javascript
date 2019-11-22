import $ from 'jquery'
import './css/style.css'
import './css/style.less'
import './css/style.scss'

$(function () {
	$("li:even").css('backgroundColor', 'pink')
	$("li:odd").css('backgroundColor', 'lightblue')
})