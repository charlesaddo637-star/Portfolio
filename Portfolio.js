const words =[
    "Web Development...",
    "Front-End Development...",
    "Back-End Development...",
    "Full-Stack Development...",
    "Software Engineering",
    "SQL...",
    "Python...",
    "JavaScript...",
    "Java...",
    "C++...",
];
const typingElement = document.getElementById("typing");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (!isDeleting && charIndex < currentWord.length) {
        typingElement.textContent += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex >0) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();
const username = "charlesaddo637-star";
fetch(`https://api.github.com/users/${username}/repos`)
     .then(response => response.json())
     .then(repos => {
        const projects =document.getElementById("github-projects");
        repos.forEach(repo => {
            projects.innerHTML +=`
            <div class="project">
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available."}</p>
            <button onclick="window.open('${repo.html_url}', '_blank')">View on GitHub</button>   
            </div>`;
        });
     });