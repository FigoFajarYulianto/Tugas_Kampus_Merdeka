const dataPenjualanPakAdi =[ {
    namaProduct : "Sepatu futsal nike Vapor Academy 8",
    hargaSatuan : 760000,
    kategori    : "Sepatu Sport",
    totalTerjual: 90,
}, 
{
    namaProduct : "Sepatu warrior Tristan Black Brown High",
    hargaSatuan : 960000,
    kategori    : "Sepatu Sneaker",
    totalTerjual: 37,
}, 
{
    namaProduct : "Sepatu warrior Tristan Maroon High",
     kategori    : "Sepatu Sneaker",
    hargaSatuan : 360000,
    totalTerjual: 90,
}, 
{
    namaProduct : "Sepatu warrior Rainbow Tosca Corduroy",
    hargaSatuan : 120000,
    kategori    : "Sepatu Sneaker",
    totalTerjual: 90,
}, 

]


const hitungTotalTerjual = (dataPenjualan) => {
    return "total terjual" + " " + dataPenjualan.reduce((prev, curr)=> prev+curr.totalTerjual, 0 ) + " " + "Sepatu"; 
}

console.log(hitungTotalTerjual(dataPenjualanPakAdi))