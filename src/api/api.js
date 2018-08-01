export default {
  listData (data) {
    let allData = data.blocks
    for (let i in allData) {
      let resultData = allData[i].rows
      let resultDataName = allData[i].meta.columns
      var resultJson = {}
      let nameArr = resultDataName.map((item) => {
        return item.name
      })
      let sortArr = []
      resultData.forEach((item, i) => {
        let outArr = {}
        sortArr.push(item[0])
        for (let index in item) {
          outArr[nameArr[index]] = item[index]
        }
        resultJson[item[0]] = outArr
      })
      allData[i].rows = resultJson
      allData[i].meta = sortArr
    }
    let formData = allData.result.rows
    for (var m in formData) {
      if (formData[m].fieldForm === '1' || formData[m].fieldForm === '2' || formData[m].fieldForm === '7') {
        let selectData = allData['templatePropertyValue_' + formData[m].fieldId]
        formData[m].selectdata = selectData
      }
    }
    return formData
  }
}
