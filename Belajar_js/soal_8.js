const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];

function getInfoPenjualan(dataPenjualan) {
    // menghitung total Keuntungan
    let totalBeli = []
    let keuntungan = []
    let totalKeuntungan = []
    let modal = []
    for (let i = 0; i < dataPenjualan.length; i++) {
        totalBeli.push(dataPenjualan[i].sisaStok + dataPenjualan[i].totalTerjual)
        keuntungan.push( dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) 
        modal.push(dataPenjualan[i].hargaBeli * totalBeli[i])
        totalKeuntungan.push(totalBeli[i] * keuntungan[i])
    }
   
    let totalUntung = totalKeuntungan.reduce((param,b)=> param +b,0 )
    let totalModal = modal.reduce((param,b)=> param +b,0 )
    let result = Intl.NumberFormat('id-ID',
          { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(totalUntung);
    let resultModal = Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
      ).format(totalModal);
    let persenUntung = Math.round(( totalUntung / totalModal ) * 100)

    for (let i = 0; i < dataPenjualan.length; i++) {
        if(i == 0){ 
              var totalStok = dataPenjualan[i].totalTerjual;
        }else{
            if(dataPenjualan[i].totalTerjual > totalStok){
                totalStok = dataPenjualan[i].totalTerjual;
            }            
        }
        
    }
    let resultData = dataPenjualanNovel.find((a) => a.totalTerjual === totalStok) 

  
    const data = {
        totalKeuntungan: result,
        totalModal: resultModal,
        persentaseKeuntangan: `${persenUntung}%`,
        produkBukuTerlaris: resultData.namaProduk,
        penulisTerlaris: resultData.penulis,
    }
    return data
}
console.log(getInfoPenjualan(dataPenjualanNovel));
