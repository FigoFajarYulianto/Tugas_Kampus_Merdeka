 function isiValidPassword(email) {
 if (typeof(email) != 'undefined') {
        if (typeof(email) == 'string') {
            if (email.length > 8) {
                let hurufBesar = new RegExp('[A-Z]')
                let angka = new RegExp('[0-9]')
                if (hurufBesar.test(email)) {
                    if (angka.test(email) ) {
                        return true;
                    }
                }else{
                    return false;
                }
            }else{
              
                return false;
            }
        }else{
            return "Error : Invalid data type"
        }
   }else{
       return "Error : Bro where is the parameter ?"
   }
  }
  console.log(isiValidPassword('Meong2021'))
  console.log(isiValidPassword('meong2021'))
  console.log(isiValidPassword('@eong'))
  console.log(isiValidPassword('Meong2'))
  console.log(isiValidPassword(0))
  console.log(isiValidPassword())

    
    
    



