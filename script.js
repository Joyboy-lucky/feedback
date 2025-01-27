document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData);
  
    fetch("https://script.google.com/macros/s/AKfycbwTJTud6UrBQuQSGV3kEOLR1A80XS9W5K4dDXkPAFIfffbg9wl4ymi0ZUQFsjtXyOwTmQ/exec", {
      method: "POST",
      body: params,
    })
      .then(response => response.json())
      .then(data => alert(data.status === "success" ? data.message : `Error: ${data.message}`))
      .catch(error => {
        alert("Error submitting the form. Please try again.");
        console.error(error);
      });
  });
