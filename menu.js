<script>
document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burgerMenu');
  const navLinks = document.getElementById('navLinks');

  burgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('show'); // Skifter klassen "show" til/fra
  });
});

</script>
