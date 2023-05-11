const scriptURL = 'https://script.google.com/macros/s/AKfycbyIPcVh8v5Yz3I6wptEul4Zr060DrvKth3bQLZwghoDHSlKY-78hyiiJ8Dl_SjwO2GQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
      
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

form.addEventListener('submit', e => {
    e.preventDefault()
    msg.textContent = "Sending..."; 
    fetch(scriptURL, { method: 'POST', body: new FormData(form)}).then(response => {
        msg.textContent = "Message sent successfully.";
        setTimeout(function(){ msg.innerHTML = ""; }, 1500)
        form.reset()
    }).catch(error => console.error('Error!', error.message))
})

window.onload = function() {
    var loading = document.getElementById("loading-screen");
    setTimeout(function() {
      loading.style.display = "none";
      window.location.href = "https://vienna.github.io/index.html"; // Redirect to home page
    }, 3000); // Delay the redirection by 3 seconds (3000 milliseconds)
  }
  