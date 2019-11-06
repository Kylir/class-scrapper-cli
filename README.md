# Yet Another CLI Web Scrapper

This program is a very simple, straight to the point, command line web scrapper written in NodeJS.

## Usage

The application takes two parameters:

- the URL to visit
- the selector to apply (for instance `.storylink` or `.title`)

On the shell type the following:

```
node index.js <URL> <SELECTOR>
```

This will display all the retrieved items and the closest link.


## Examples

### Top Hacker News

To retrieve a list of top hackernews stories type the following:

```
node index.js "https://news.ycombinator.com/best" ".storylink"
```

### The Guardian UK articles

To retrieve the titles and associated link to the articles of The Guardian, type:

```
node index.js "https://www.theguardian.com/uk" "a.js-headline-text"
```

## Installation

To use the program you need to:

- Install NodeJS
- Clone this repository
- Install the dependencies
- Run the program

