
  document.form.onsubmit = processForm;
  function processForm() {
    var userNama = document.form.userNama.value;
    var userCita = document.form.userCita.value;

    var pesanku=document.getElementById('pesan');
    alert(' cita-cita kamu '+ userCita + ' ya ?')
    pesanku.innerHTML='hai ' + userNama + ", semoga cita-cita kamu tercapai yaaa " + " :) !!";
    
    return false;
    
  }