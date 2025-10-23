//Ambil semua tombol yang memiliki class filter-btn
//(all, Desain Grafis, Desain 3D, Fotografi)
const semua_tombol = document.querySelectorAll(".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");
//karna setiap button harus bisa diklik, dan menjalankan fungsi yang sama
//maka kita gunakan perulangan 
semua_tombol.forEach((tombol_satuan) => {
    tombol_satuan.addEventListener("click", () => {
        
        //ubah tampilan active dulu
        //hapus class active dari semua button 
        semua_tombol.forEach((btn) => btn.classList.remove ("active"))
        
        //tambahkan class active ke tombol yang sedang active
        tombol_satuan.classList.add("active");
        //ambil kategori dari tombol

        //Bagian 2 : ambil kategori dari tombol yang di klik
        //Contoh: <button data-filter="fotografi"> nilainya "fotografi"
        const filter = tombol_satuan.getAttribute("data-filter");

        //Bagian 3 : Tampilkan atau sembunyikan item berdasarkan filter--
        semua_gambar.forEach((gambar_satuan) => {
            if(filter === "all" || gambar_satuan.classList.contains (filter)){
                //gambar akan tertampil
                gambar_satuan.style.display = "block";
            } else{
                gambar_satuan.style.display = "none";
            }
        })
    });
});