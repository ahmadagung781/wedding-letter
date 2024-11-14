// AOS
AOS.init();

// music
var tempMusic =''
music = document.querySelector('.music')
if (tempMusic){
    music.src = tempMusic
}

// doors
function mulai(){
    window.scrollTo(0, 0)


// doors section
var doorSection = $('#door-section')
var doors = document.querySelectorAll('.door')
// doors.forEach(function(door, index){
//     var direction = (index===0) ? 1 : -1
//     door.style.transform = 'rotateY( ' + (70 * direction) + 'deg)';
// });
// set time out 
setTimeout(function(){
    // music play
    music.play()
    doorSection.css('transform', 'scale(6)')
}, 600)

// set time out door section
setTimeout(function(){
    doorSection.css('opacity', 0)
    $('body').removeClass('overflow-hidden')
    $('body').addClass('transition')
    doorSection.css('display', 'none')
}, 2000)
}

// countdown
var countdownDate = new Date("Dec 1, 2024 10:00:00").getTime()

var x = setInterval(function(){
    var now = new Date().getTime()
    var distance = countdownDate - now
    var days = Math.floor(distance/(1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / (1000))
    document.getElementById('countdown-wedding').innerHTML = `
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${days}</h5>Hari</div></div>
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${hours}</h5>Jam</div></div>
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${minutes}</h5>Menit</div></div>
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${seconds}</h5>Detik</div></div> `
    if (distance < 0) {
        clearInterval(x)
        document.getElementById('countdown-wedding').innerHTML ="<span class='text-center p-2 rounded text-light'><h2>Sudah Dimulai</h2></span>" 
    }
}, 1000)

// nama sambutan
const urlParamas = new URLSearchParams(window.location.search)
const Panggilan = urlParamas.get('p')
const nama = namaParamas.get('n')
const namaSambutan = document.querySelector('#nama-sambutan')
namaSambutan.innerText = `${panggilan} ${nama},`



  // Function untuk menyimpan data ke Local Storage dan menampilkan data pada halaman
  function displayComments() {
    const commentsSection = document.getElementById('comments');
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

    commentsSection.innerHTML = ''; // Hapus konten lama

    savedComments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment', 'border', 'p-3', 'mb-2', 'rounded-3');
      commentElement.innerHTML = `
        <strong>${comment.name}</strong> (${comment.presence ? 'Datang' : 'Berhalangan'})
        <p>${comment.comment}</p>
      `;
      commentsSection.appendChild(commentElement);
    });
  }

  // Function untuk mengirim komentar
  const comment = {
    send: function() {
      const name = document.getElementById('form-name').value;
      const presence = document.getElementById('form-presence').value;
      const commentText = document.getElementById('form-comment').value;

      if (!name || !commentText) return alert('Nama dan ucapan harus diisi');

      const newComment = {
        name,
        presence: presence === '1', // true untuk "Datang", false untuk "Berhalangan"
        comment: commentText
      };

      const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
      savedComments.push(newComment);
      localStorage.setItem('comments', JSON.stringify(savedComments));

      // Kosongkan input setelah submit
      document.getElementById('form-name').value = '';
      document.getElementById('form-presence').value = '0';
      document.getElementById('form-comment').value = '';

      displayComments(); // Tampilkan komentar terbaru
    }
  };

  // Tampilkan komentar saat halaman pertama kali di-load
  document.addEventListener('DOMContentLoaded', displayComments);

  



