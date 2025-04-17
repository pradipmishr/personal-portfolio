document.getElementById("viewResume").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default behavior
    window.open("resume.pdf", "_blank"); // Open resume in a new tab (make sure the path is correct)
});

document.getElementById("downloadResume").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default behavior
    const link = document.createElement("a");
    link.href = "resume.pdf"; // Path to the resume file
    link.download = "My_Resume.pdf"; // Suggested filename for download
    link.click(); // Trigger the download
});
