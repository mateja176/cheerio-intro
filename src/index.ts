import * as cheerio from "cheerio"
import fetch from "node-fetch"

const url = "https://www.google.com/search?q=cheerio"

fetch(url)
  .then(res => res.text())
  .then(text => cheerio.load(text))
  .then($ => $("#ires ol"))
  .then($ => $.children())
  .then($ => $.first())
  .then($ => $.html())
  .then(console.log)
  .catch(console.error)
