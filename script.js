//your JS code here. If required.
const submitInput=document.querySelector('input[type="submit"]')
const fontsizeInput=document.getElementById('fontsize')
const fontcolorInput=document.getElementById('fontcolor')
const rootElement=document.querySelector(':root')

submitInput.addEventListener('click',(e)=>{
	e.preventDefault()
	rootElement.style.setProperty('--fontsize',fontsizeInput.value)
	rootElement.style.setProperty('--fontcolor',fontcolorInput.value)
})