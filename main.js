const symbolValue = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  }
  const sVKeys = Object.keys(symbolValue)
  
  class RomanNumerals {
    static toRoman(num) {
      let index = 0
      let answer = []
      
      while (index != sVKeys.length){
        if (Math.floor(num / symbolValue[sVKeys[index]]) > 0)
          {
            num -= symbolValue[sVKeys[index]]
            answer.push(sVKeys[index])
          }
        else{
          index++
        }
      }
  
      return answer.join('');
    }
  
    static fromRoman(str) {
      str = str.split('')
      let answer = []
      let addPrevious = false
      
      for(let i = 0; i < str.length; i++){
        if (addPrevious)
          {
            answer.push(symbolValue[str.slice(i - 1, i + 1).join('')])
            addPrevious = false
          }
        else if (symbolValue[str[i]] >= symbolValue[str[i + 1]] || i == str.length -1)
          {
            answer.push(symbolValue[str[i]])
          }
        else{
          addPrevious = true
        }
      }
      
      answer = answer.reduce((sum, num) => sum + num, 0)
      
      return answer;
    }
  }