function palindrome(str) {
    str = str.toUpperCase().replace(/\s/g,'')
    return  str === str.split('').reverse().join('')
}
console.log(palindrome('racecar'))
console.log(palindrome('А роза упала на лапу Азора'))


function FizzBuzz(num) {
    for (let i = 0; i <= num; i++) {
        if(i % 3 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if(i % 3 === 0) {
            console.log('fizz')
        } else if(i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}
FizzBuzz(30)