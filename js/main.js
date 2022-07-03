
function openModal(){
  var modal = document.getElementById('modal');
  var window = document.getElementById('window');
  modal.classList.toggle('hide');
  window.classList.toggle('hide');
}

function openModalContact(){
  var modal = document.getElementById('contact');
  var window = document.getElementById('contact-window');
  modal.classList.toggle('hide');
  window.classList.toggle('hide');
}

function closeSuccess(){
  var modal = document.getElementById('modal-success');
  var window = document.getElementById('modal-success__window');
  modal.classList.toggle('hide');
  window.classList.toggle('hide');
}

$('#send-sign').on('submit', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'telegram.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
    }
  });
  var modal = document.getElementById('modal');
  var window = document.getElementById('window');
  modal.classList.toggle('hide');
  window.classList.toggle('hide');

  var modal1 = document.getElementById('modal-success');
  var window1 = document.getElementById('modal-success__window');
  modal1.classList.toggle('hide');
  window1.classList.toggle('hide');
});