function getSplitName(personaName){
   if ( typeof personaName != "string") {
      return ('ERROR:This Function Is Only For string');   
                 
            }

var Obj = {
            FirstName: "",
            MiddleName: "",
            LastName: "",  
        };
var Ob = {
            Error: "",
             
        };
     var Obs = {
            ERROR: "",
             
        };

 var splitName = personaName.split(" ");
           
              
            if (splitName.length<=3) {
                    switch (splitName.length) {
                        case 1:
                            Obj.FirstName = splitName[0];
                            break;
                        case 2: 
                            Obj.FirstName = splitName[0];
                            Obj.LastName = splitName[1];
                            break;
                        case 3: 
                            Obj.FirstName = splitName[0];
                            Obj.MiddleName = splitName[1];
                            Obj.LastName = splitName[2]; 
                            break;
                    }
                    return Obj;

                }   else if (splitName.length>3) {
                    switch (splitName.length) {
                        case 4:
                            Ob.Error = 'This Function Is Only For 3 Characters Name';
                            break;
                    }
                    return Ob;
            }   
    
}
console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aldi Aureliya Sukma Darma"))
console.log(getSplitName(0))

