import axios from 'axios'

/* ================ Fetch GSheet API data (Upgraded Version) ================ */

const getGoogleData = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      const needle = 'google.visualization.Query.setResponse('
      return JSON.parse(
        res.data.substring(res.data.indexOf(needle) + needle.length, res.data.length - 2)
      ).table
    })
    .then((res) => {
      const cols = res.cols.map((col) => {
        return col.label
      })
      const rows = res.rows.map((row) => {
        return row.c.map((value) => {
          return value === null ? null : value.v
        })
      })
      return arrayToObjects([cols, ...rows])
    })
    .catch((err) => {
      console.log(err)
    })
}

const arrayToObjects = (arr) => {
  const keys = arr.shift().filter((n) => n)
  return arr.map(function (values) {
    return keys.reduce(function (o, k, i) {
      o[k] = values[i]
      return o
    }, {})
  })
}

async function getData(tab) {
  const url = `https://docs.google.com/spreadsheets/d/1RZ-k4T_Ys4C1LMNhNibEnvdj228bFEAz48EL8daOQhI/gviz/tq?headers=1&sheet=${tab}`
  return getGoogleData(url)
}

export default getData
