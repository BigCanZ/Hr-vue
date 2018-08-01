export default {
  listData (data) {
    let allData = data.blocks
    for (let i in allData) {
      let resultData = allData[i].rows
      let resultDataName = allData[i].meta.columns
      var resultJson = []
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
        resultJson[i] = outArr
      })
      allData[i].rows = resultJson
      allData[i].meta = sortArr
    }
    let formData = allData.result.rows
    let selectdata = []
    for (var m in formData) {
      if (formData[m].fieldForm === '1' || formData[m].fieldForm === '2' || formData[m].fieldForm === '7') {
        let selectData = allData['templatePropertyValue_' + formData[m].fieldId]
        selectdata.push(selectData)
        formData[m].selectdata = selectdata
      }
    }
    // console.log(data.blocks.result.rows)
    console.log(formData)
    data.blocks.result.rows = formData
    return data
  }
}
