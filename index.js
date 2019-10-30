const axios = require('axios')
const cheerio = require('cheerio')

// read command line args
if (process.argv.length !== 4) {
    console.error('Error! Wrong number of parameters!')
    console.error('Usage: node index.js <URL> <SELECTOR>')
    console.error('Example: node index.js "https://lemonde.fr/" "p.article__title"')
    process.exit(-1)
}

const url = process.argv[2]
const selector = process.argv[3]
const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36'
    },
    responseType: 'document'
}

axios.get(url, options)
    .then(response => {
        const $ = cheerio.load(response.data)
        $(selector).each( (i, elm) => {
            console.log($(elm).text())
        });
    }).catch(err => {console.error(err)})