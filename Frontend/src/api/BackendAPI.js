// const BE = 'http://127.0.0.1:8080'
// const BE = 'https://j7b208.p.ssafy.io/api/'
const BE = 'http://j7b208.p.ssafy.io:8080/api/'


// DYKC API
const DYKC = 'dykclub/'
// DataLab API
const DataLab = 'keyword/'


export default{
  // DYKC
  dykc: {
    category: (keyword) => BE + DYKC + `${keyword}/`,
    profile: (name) => BE + DYKC + DataLab + `${name}/`
  },

  // DataLab
  datalab: {

  }
}