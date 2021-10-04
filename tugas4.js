var siswa1 = "179";
var siswa2 = "158";
var siswa3 = "165";

if (siswa1>siswa2) {
  if (siswa1>siswa3) {
    console.log("Tinggi badan Siswa 1 merupakan yang tertinggi");
  }else {
    console.log("Tinggi badan Siswa 1 merupakan yang tertinggi kedua");
  }
} else {
  if (siswa2>siswa3) {
    console.log("Tinggi badan Siswa 2 merupakan yang tertinggi");
  }
  else {
    console.log("Tinggi badan Siswa 2 merupakan yang tertinggi kedua");
  }
}

console.log("Hasil Tinggi badan siswa");
console.log("Siswa 1 : 179 cm");
console.log("Siswa 3 : 165 cm");
console.log("Siswa 2 : 158 cm");
