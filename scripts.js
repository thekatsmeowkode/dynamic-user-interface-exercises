
let link = document.querySelector('.nav-item')

link.addEventListener('click', (e) => {
e.preventDefault()
e.stopPropagation()
let dropdown = document.querySelector('.dropdown')
dropdown.classList.add('visible')

}
)

// document.body.addEventListener("click", function(e) {
// 	// e.target was the clicked element
// 	if(e.target == "a") {
// 		alert(e.target.innerText);
// 	}
// });