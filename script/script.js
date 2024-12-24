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

const form = document.getElementById("contact-form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const name = form.elements["name"].value.trim()
  const email = form.elements["email"].value.trim()
  const message = form.elements["message"].value.trim()

  if (!name || !email || !message) {
    alert("Please fill in all fields")
    return
  }

  alert("Message sent! Thank you for contacting us.")
  form.reset()
})
