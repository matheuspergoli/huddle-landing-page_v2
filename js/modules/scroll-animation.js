export default function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      } else {
        entry.target.classList.remove('active')
      }
    })
  }, {
    threshold: 0.3
  })

  sections.forEach(section => {
    observer.observe(section)
  })




  // const sections = document.querySelectorAll('.js-scroll')
  // const windowHeight = window.innerHeight * 0.4
  
  // function animateScroll() {
  //   sections.forEach(section => {
  //     const sectionTop = section.getBoundingClientRect().top - windowHeight
  //     const isSectionVisible = sectionTop - windowHeight < 0
  //     if (isSectionVisible) {
  //       section.classList.add('active')
  //     } else {
  //       section.classList.remove('active')
  //     }
  //   })
  // }
  // animateScroll()
  // window.addEventListener('scroll', animateScroll)
}