const BE = 'https://j7b208.p.ssafy.io/api/'


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