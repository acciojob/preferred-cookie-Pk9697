//your JS code here. If required.
const submitInput=document.querySelector('input[type="submit"]')
const fontsizeInput=document.getElementById('fontsize')
const fontcolorInput=document.getElementById('fontcolor')
const rootElement=document.querySelector(':root')
 
if(document.cookie){
	// console.log(document.cookie.preferences)
	const cookie=document.cookie.split('; ').find((cookie)=>cookie.startsWith('preferences'))
	if(cookie){
		const preferences=JSON.parse(cookie.split('=')[1])
		// console.log(JSON.parse(preferences)) 
		setRootElementProperty(preferences)
	}
}
            
submitInput.addEventListener('click',(e)=>{
	e.preventDefault()
	const preferences={
		fontsize:fontsizeInput.value,
		fontcolor:fontcolorInput.value
	}
	document.cookie=`preferences=${JSON.stringify(preferences)};`
	setRootElementProperty(preferences)
})
  
function setRootElementProperty({fontsize,fontcolor}){
	rootElement.style.setProperty('--fontsize',fontsize)
	rootElement.style.setProperty('--fontcolor',fontcolor)
	fontsizeInput.value=fontsize
	fontcolorInput.value=fontcolor
}