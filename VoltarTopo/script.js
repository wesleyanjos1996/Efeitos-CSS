const btn = document.querySelector("#btnTop")

btn.addEventListener('click', function() {
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', hidder)

function hidder() {
    if (window.scrollY > 500) {
        btn.style.display = 'flex'
    } else {
        btn.style.display = 'none'
    }
}

hidder()