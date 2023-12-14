function isAnagram(str1, str2) {

    //if (str1.length!==str2.length){
      //return false;
    //}
    let str01=str1.replace(/\s/g, '').toLowerCase();
    let str02=str2.replace(/\s/g, '').toLowerCase();
  
    let sortstr1=str01.split("").sort().join("");
    let sortstr2=str02.split("").sort().join("");
  
     if(sortstr1===sortstr2){
            return true;
     }
  {
             return false;
  }
  
  
  }

  console.log(isAnagram("hello", "olleh"));
  

  