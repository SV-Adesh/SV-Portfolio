document.addEventListener('DOMContentLoaded', () => {
    const resumeSection = document.getElementById('resume');

    // Function to show the resume section
    function showResume() {
        resumeSection.classList.add('show');
    }

    // Function to hide the resume section
    function hideResume() {
        resumeSection.classList.remove('show');
    }

    // Example usage: Show resume on button click
    document.querySelector('.show-resume-btn').addEventListener('click', showResume);
});
