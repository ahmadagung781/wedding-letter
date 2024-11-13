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


// Fungsi untuk menampilkan kartu ucapan dan menyimpannya ke localStorage
function showGreeting() {
    // Mendapatkan nilai input
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Validasi sederhana: jika input kosong, tidak menampilkan kartu
    if (name === "" || message === "") {
      alert("Mohon isi nama dan pesan ucapan Anda.");
      return;
    }
  
    // Membuat objek ucapan
    const greetingData = {
      name: name,
      message: message
    };
  
    // Menyimpan data ke localStorage
    localStorage.setItem("greetingData", JSON.stringify(greetingData));
  
    // Menampilkan kartu ucapan
    displayGreetingCard(greetingData);
  }
  
  // Fungsi untuk menampilkan kartu ucapan dari data yang diberikan
  function showGreeting() {
    // Mendapatkan nilai input
    const name = document.getElementById("name").value.trim();
    const location = document.getElementById("location").value.trim();
    const message = document.getElementById("message").value.trim();
    const attendance = document.querySelector('input[name="attendance"]:checked');
  
    // Validasi sederhana
    if (name === "" || location === "" || message === "" || !attendance) {
      alert("Mohon isi semua kolom dan pilih status kehadiran.");
      return;
    }
  
    // Membuat objek ucapan
    const greetingData = {
      name: name,
      location: location,
      message: message,
      attendance: attendance.value,
      timestamp: new Date().toLocaleString("id-ID", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
  
    // Menyimpan data ke localStorage
    let greetings = JSON.parse(localStorage.getItem("greetings")) || [];
    greetings.push(greetingData);
    localStorage.setItem("greetings", JSON.stringify(greetings));
  
    // Menampilkan kartu ucapan
    displayGreetingCard(greetingData);
  
    // Membersihkan form
    document.getElementById("name").value = "";
    document.getElementById("location").value = "";
    document.getElementById("message").value = "";
    attendance.checked = false;
  }
  
  function displayGreetingCard(data) {
    const greetingList = document.getElementById("greetingList");
  
    // Membuat elemen kartu ucapan
    const card = document.createElement("div");
    card.className = "greeting-card";
    card.innerHTML = `
      <p class="name-location">${data.name}, ${data.location}</p>
      <p>${data.message}</p>
      <p class="timestamp">${data.timestamp}</p>
    `;
  
    function saveGreetingToStorage(greetingData) {
        let greetings = JSON.parse(localStorage.getItem("greetings")) || [];
        greetings.push(greetingData);
        localStorage.setItem("greetings", JSON.stringify(greetings));
        
        // Panggil fungsi untuk menampilkan kartu ucapan
        displayGreetingCard(greetingData);
    }

    // Menambahkan kartu ke daftar
    greetingList.appendChild(card);
  }
  
  function loadGreetingsFromStorage() {
    const greetingList = document.getElementById("greetingList");
    const greetings = JSON.parse(localStorage.getItem("greetings")) || [];
    greetings.sort((a, b) => new Date (b.timestamp) - new Date(a.timestamp));
    greetings.forEach(greeting => {
        displayGreetingCard(greeting);});
}
  
  document.addEventListener('DOMContentLoaded', loadGreetingsFromStorage);
  
