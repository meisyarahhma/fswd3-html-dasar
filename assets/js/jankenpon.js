alert("Selamat datang di permainan jankenpon");
let response_nama = prompt("Siapa namamu?");

// komputer = kertas
let response = prompt("Pilihlah salah satu dari ketiga ini : batu, kertas, gunting");
if (response == "batu") {
    alert ("Nama:" + response_nama + "\nAnda memilih: " + response  + "\nKomputer memilih: kertas"  + "\nHasil: anda kalah");
} else if (response == "kertas") {
    alert ("Nama:" + response_nama + "\nAnda memilih: " + response  + "\nKomputer memilih: kertas"  + "\nHasil: seri");
} else if (response == "gunting") {
    alert ("Nama:" + response_nama + "\nAnda memilih: " + response  + "\nKomputer memilih: kertas"  + "\nHasil: anda menang");
} else{
    alert ("Anda Tidak Menjawab");
}

