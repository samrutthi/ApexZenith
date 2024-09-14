document.addEventListener("DOMContentLoaded", function () {
    // Get references to the sidebar links and sections
    const addPatientLink = document.querySelector('a[href="#patient-form"]');
    const allocateTherapistLink = document.querySelector('a[href="#allocate-therapist"]');
    const reviewReportLink = document.querySelector('a[href="#review-report"]');
  
    const addPatientSection = document.querySelector("#patient-form");
    const allocateTherapistSection = document.querySelector("#allocate-therapist");
    const reviewReportSection = document.querySelector("#review-report");
  
    // Function to hide all sections
    function hideAllSections() {
      addPatientSection.style.display = "none";
      allocateTherapistSection.style.display = "none";
      reviewReportSection.style.display = "none";
    }
  
    // Show the Add Patient Details section by default
    hideAllSections();
    addPatientSection.style.display = "block";
  
    // Event listener for Add Patient Details link
    addPatientLink.addEventListener("click", function (e) {
      e.preventDefault();
      hideAllSections();
      addPatientSection.style.display = "block";
    });
  
    // Event listener for Allocate Therapist link
    allocateTherapistLink.addEventListener("click", function (e) {
      e.preventDefault();
      hideAllSections();
      allocateTherapistSection.style.display = "block";
    });
  
    // Event listener for Review Pre-Assessment Report link
    reviewReportLink.addEventListener("click", function (e) {
      e.preventDefault();
      hideAllSections();
      reviewReportSection.style.display = "block";
    });
  
    // Example of handling form submission for the Add Patient Details section
    const patientForm = document.querySelector("#patient-form form");
    patientForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get form values
      const patientName = document.querySelector("#patientName").value;
      const age = document.querySelector("#age").value;
      const gender = document.querySelector("#gender").value;
      const phone = document.querySelector("#phone").value;
      const height = document.querySelector("#height").value;
      const weight = document.querySelector("#weight").value;
      const bloodGroup = document.querySelector("#bloodGroup").value;
  
      // Perform any form validation or AJAX request here
  
      // Display a success message or clear the form after submission
      alert("Patient details submitted successfully!");
  
      // Optionally, clear the form after submission
      patientForm.reset();
    });
  
    // Handle the allocation process (e.g., First time vs. Therapy Session)
    const allocateButton = document.querySelector("#allocate-therapist button");
    allocateButton.addEventListener("click", function () {
      const firstVisitOption = document.querySelector("#firstVisit").checked;
      const therapySessionOption = document.querySelector("#therapySession").checked;
  
      if (firstVisitOption) {
        alert("Allocating for first time appointment and pre-assessment report...");
      } else if (therapySessionOption) {
        alert("Allocating therapist for therapy session...");
      }
    });
  
    // Handle reviewing of pre-assessment reports
    const reviewButton = document.querySelector("#review-report button");
    reviewButton.addEventListener("click", function () {
      alert("Reviewing pre-assessment report...");
    });
  });
  