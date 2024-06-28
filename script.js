//your JS code here. If required.
const submitInput=document.querySelector('input[type="submit"]')
const fontsizeInput=document.getElementById('fontsize')
const fontcolorInput=document.getElementById('fontcolor')
const rootElement=document.querySelector(':root')
 
if(document.cookie){
	// console.log(document.cookie.preferences)
	const cookies=document.cookie.split('; ')
	const fontsizeCookie=cookies.find((cookie)=>cookie.startsWith('fontsize'))
	const fontcolorCookie=cookies.find((cookie)=>cookie.startsWith('fontcolor'))
	if(fontsizeCookie && fontcolorCookie){
		const fontsize=fontsizeCookie.split('=')[1]
		const fontcolor=fontcolorCookie.split('=')[1]
		// console.log(JSON.parse(preferences)) 
		setRootElementProperty({fontsize,fontcolor})
	}
}
            
submitInput.addEventListener('click',(e)=>{
	e.preventDefault()
	const preferences={
		fontsize:fontsizeInput.value,
		fontcolor:fontcolorInput.value
	}
	// document.cookie=`preferences=${JSON.stringify(preferences)};`
	document.cookie=`fontsize=${fontsizeInput.value};`
	document.cookie=`fontcolor=${fontcolorInput.value};`
	setRootElementProperty(preferences)
})
   
function setRootElementProperty({fontsize,fontcolor}){
	rootElement.style.setProperty('--fontsize',fontsize)
	rootElement.style.setProperty('--fontcolor',fontcolor)
	fontsizeInput.value=fontsize
	fontcolorInput.value=fontcolor
}