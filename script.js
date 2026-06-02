function showSection(id){

  // sembunyikan hero
  document.getElementById("hero").style.display = "none";

  // sembunyikan semua section
  const sections =
  document.querySelectorAll(".content-section");

  sections.forEach(section => {
    section.classList.remove("active");
  });

  // tampilkan section yang dipilih
  document
    .getElementById(id)
    .classList.add("active");
}
