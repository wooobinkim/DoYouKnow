const BE = 'https://j7b208.p.ssafy.io/api/'
const BE2 = 'https://j7b208.p.ssafy.io/api2/'


// DYKC API
const DYKC = 'dykclub/'
const DYKC2 = 'pytranslate/usually/'

// DataLab API
const DataLab = 'keyword/'


export default{
  // DYKC
  dykc: {
    DYKC: (keyword) => BE + DYKC + `${keyword}/`,
    twitter: (name) => BE + DYKC + DataLab + `${name}/`,
    twitter_translate: (keyword) => BE2 + DYKC2 + `${keyword}/`
  },

  // DataLab
  datalab: {

  }
}