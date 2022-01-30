/*
Code developed by William Garcia
Website: https://www.williamgar.com
LinkedIn: https://www.linkedin.com/in/williamgar
GitHub: https://github.com/William-Gar
*/

const rot13 = (str) => {
  let min = 65; //Min ASCII TABLE
  let max = 90; //Max ASCII TABLE
  let displace = 13; //Displacement
  let aux;
  let str2 = "";
  
  for(let i in str){
    if(str.charCodeAt(i) >= min && str.charCodeAt(i) <= max){
      aux = str.charCodeAt(i) + displace;
      
      if(aux > max){
        aux = aux - max + min - 1;
        str2 += String.fromCharCode(aux);
      }else str2 += String.fromCharCode(aux);

    }else str2 += str[i];
  }

  return str2;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
