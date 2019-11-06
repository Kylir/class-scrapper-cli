const axios = require('axios')
const cheerio = require('cheerio')
const chalk = require('chalk')

// read command line args
if (process.argv.length !== 4) {
    console.error('Error! Wrong number of parameters!')
    console.error('\nUsage: node index.js <URL> <SELECTOR>\n')
    console.error('Examples:')
    console.error('\tnode index.js "https://news.ycombinator.com/best" ".storylink"')
    console.error('\tnode index.js "https://lemonde.fr/" "p.article__title"')
    console.error('\tnode index.js "https://www.theguardian.com/uk" "a.js-headline-text"')
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

axios
    .get(url, options)
    .then(response => {
        const $ = cheerio.load(response.data)
        $(selector).each( (i, elm) => {
            const text = chalk.green( $(elm).text() )
            const link = chalk.blue( $(elm).closest('a').attr('href') )
            console.log( text + ' ' + link)
        });
    })
    .catch(err => {
        console.error(err)
    })
