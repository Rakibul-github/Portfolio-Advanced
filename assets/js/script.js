const toggleButton = document.getElementsByClassName('btn')[0]
const navitems = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navitems.classList.toggle('active')
})