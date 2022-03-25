function getAngkaTerbesarKedua(personaName){
 if (personaName != null) {
        if (personaName != 0) {
                return (dataAngka.sort((a,b)=> b-a)[1]);
        }else{
            return 'Error : Data tidak boleh 0';
        }
    }else{
        return 'Error : Bro where is the parameter ?'; 
    }

};

  const dataAngka = [9,4,7,7,4,3,2,2,8]

  console.log(getAngkaTerbesarKedua(dataAngka));
  console.log(getAngkaTerbesarKedua(0))
  console.log(getAngkaTerbesarKedua());

