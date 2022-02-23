// get suggestions from an, you can enter the string(custom query) and get the suggestions if there is any on each and every type

const searchSuggestions = (repository, customerQuery) => {
    let suggestions = [];
    let chainOfWords = [];
    chainOfWords.push(customerQuery.substring(0, 2));
    for (let i=2; i<customerQuery.length; i++) {
        chainOfWords.push(chainOfWords[chainOfWords.length-1]+customerQuery[i]);
    }

    for (let i=0; i<chainOfWords.length; i++) {
        let words = repository.filter(repository => repository.toLowerCase().includes(chainOfWords[i].toLowerCase()));
        if (words.length > 0) {
            words.sort();
            if (words.length > 3) {
                suggestions.push(words.slice(0, 3));
            } else {
                suggestions.push(words);
            }
        }

    }
    return suggestions
}
console.log(searchSuggestions(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"));
// console.log(searchSuggestions(["bags", "baggage", "banner", "box", "cloths"], "bags"));
// console.log(searchSuggestions(["havana"], "havana"));