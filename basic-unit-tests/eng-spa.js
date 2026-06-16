const englishCode = "HELLO";
const spanishCode = "HOLA";

function getHelloLink(language) {
    switch (language.toLowerCase()) {
        case englishCode.toLowerCase():
            return '/hello';
        case spanishCode.toLowerCase():
            return '/hola';
    }
    // This function is not getting tested
    /*
    return '';
    */
}

module.exports = getHelloLink;
