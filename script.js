// Puts each panel in to a nodeList for easy selection
const panels = document.querySelectorAll('.panel')
// console.log(panels)
// Looping through the panels
panels.forEach(panel => {
    // console.log(panel)
    panel.addEventListener('click', () => {
        removeActiveClasses()
        // Adds the class of active
        panel.classList.add('active')
    })
})

// Function to remove the active class when another panel is clicked.
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}