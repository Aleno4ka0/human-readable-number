module.exports = function toReadable (number) {
    number = number.toString().padStart(3, '0')
    var convertor = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
    var tenConvertor = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}
    var teenConvertor = {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
    var numStr = ''
    if(number[0] !== '0'){
        numStr = convertor[number[0]] + ' hundred '
    }

    if(number[1] !== '0'){
        if(number[1] === '1'){
            var teen = number[1] + number[2]
            numStr += teenConvertor[teen]
            return numStr
        } else{
            numStr += tenConvertor[number[1]] + ' '
        }
    }

    if(number[2] !== '0' || (number[2] === '0' && numStr === '')){
        numStr += convertor[number[2]]
    }
    
    return numStr.trim()
}