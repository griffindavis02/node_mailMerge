const to = document.querySelector('.to')
const toLabel = document.querySelector('.to-label')
const subject = document.querySelector('.subject')
const subjectLabel = document.querySelector('.subject-label')

to.addEventListener('click', () => {
    if(to.getAttribute('edited') == 'false') document.getSelection().collapse(to, 0)
})

to.addEventListener('keydown', () => {
    if(to.getAttribute('edited') == 'false') {
        toLabel.innerText = ''
        to.setAttribute('edited', 'true')
    }
})

to.addEventListener('focusin', () => {
    toLabel.classList.add('highlighted')
})

to.addEventListener('focusout', () => {
    if(toLabel.innerText.trim() == 0) {
        toLabel.innerText = 'to'
        to.setAttribute('edited', 'false')
    }
    if(to.getAttribute('edited') == 'false') toLabel.classList.remove('highlighted')
})

subject.addEventListener('click', () => {
    if(subject.getAttribute('edited') == 'false') document.getSelection().collapse(subject, 0)
})

subject.addEventListener('keydown', () => {
    if(subject.getAttribute('edited') == 'false') {
        subjectLabel.innerText = ''
        subject.setAttribute('edited', 'true')
    }
})

subject.addEventListener('focusin', () => {
    subjectLabel.classList.add('highlighted')
})

subject.addEventListener('focusout', () => {
    if(subjectLabel.innerText.trim() == 0) {
        subjectLabel.innerText = 'subject'
        subject.setAttribute('edited', 'false')
    }
    if(subject.getAttribute('edited') == 'false') subjectLabel.classList.remove('highlighted')
})