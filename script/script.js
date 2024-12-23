const sections = document.querySelectorAll("section")

let currentSection = 0

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    currentSection = Math.min(currentSection + 1, sections.length - 1)
  } else {
    currentSection = Math.max(currentSection - 1, 0)
  }

  sections[currentSection].scrollIntoView({
    behavior: "smooth",
  })
})

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault()

    const target = document.querySelector(anchor.getAttribute("href"))

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
})
