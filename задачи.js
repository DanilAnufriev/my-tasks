function palindrome(str) {
    str = str.toUpperCase().replace(/\s/g,'')
    return  str === str.split('').reverse().join('')
}
console.log(palindrome('racecar'))
console.log(palindrome('А роза упала на лапу Азора'))


