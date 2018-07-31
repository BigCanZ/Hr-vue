export default {
  listData (data) {
    let baseData = data.blocks.result.rows
    let baseDataName = data.blocks.result.meta.columns
    var baseJson = []
    let nameArr = baseDataName.map((item) => {
      return item.name
    })
    baseData.forEach(item => {
      let outArr = {}
      for (let index in item) {
        outArr[nameArr[index]] = item[index]
      }
      baseJson.push(outArr)
    })
    return baseJson
  },
  HomeData (err) {
    console.log(err)
  }
}
