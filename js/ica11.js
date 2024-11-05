const tellFortune = function (numChildren, partnerName, geoLocation, jobTitle) {
    const text = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids`;
    console.log(text);

    document.getElementById("fortune").innerHTML = text;
}

tellFortune(2, "tim", "Denver", "Surgeon");
tellFortune(5, "joey", "Chicago", "Businessman");
tellFortune(3, "josh", "Ireland", "Developer");

const calculateDogAge = (puppyAge) => {
    console.log(puppyAge);
    const dogAge = `Your doggie is ${puppyAge * 7} in dog years!`
    console.log(dogAge);
    document.getElementById("dog_age").innerHTML = dogAge;
}

document.getElementById("dog_button").addEventListener("click", () => {
    const age = document.getElementById("age_input").value;
    calculateDogAge(age * 1)
});

const reverseNumber = (number) => {
    const numAsString = `${number}`;

    let reversedString = '';

    for(let i = numAsString.length - 1; i >= 0; i--) {
        reversedString += numAsString[i];
    }

    document.getElementById("reverse_string").innerHTML = reversedString;

}



reverseNumber(32243);
reverseNumber(1234);

const alphabeticalOrder = (string) => {
    const compareFunc = (a, b) => { return a.codePointAt(0) - b.codePointAt(0) }
   
    const charArray = string.split('');

    const sortedString = charArray.sort(compareFunc);

    document.getElementById("alphabet_order").innerHTML = sortedString.join('');
}

alphabeticalOrder("webmaster");
alphabeticalOrder("zyxwvuts");

const firstToUpper = function(string) {
    const wordsInSentence = string.split(' ');

    for(let i = 0; i < wordsInSentence.length; i++) {
        wordsInSentence[i] = wordsInSentence[i][0].toUpperCase() + wordsInSentence[i].substring(1);
    }

    document.getElementById("first_upper").innerHTML = wordsInSentence.join(' ');
}

firstToUpper("the quick brown fox");
firstToUpper("ethan is listening to miguel right now");

