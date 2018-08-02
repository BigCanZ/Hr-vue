export default {
  listData (data) {
    let allData = data.blocks
    // 合并键值对
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
    // 处理下拉框的相关数据关联
    let formData = allData.result.rows
    for (var m in formData) {
      if (formData[m].fieldForm === '1' || formData[m].fieldForm === '2' || formData[m].fieldForm === '7') {
        let selectData = allData['templatePropertyValue_' + formData[m].fieldId]
        let selectdata = []
        selectdata.push(selectData)
        formData[m].selectdata = selectdata
        // 将选择框中propertyValue与相关数据中的值对应
        if (formData[m].fieldForm === '1' || formData[m].fieldForm === '2') {
          if (formData[m].propertyValue !== '') {
            let rowList = formData[m].selectdata[0].rows
            rowList.forEach(item => {
              if (item.selectValueId === formData[m].propertyValue) {
                formData[m].propertyValue = item.selectValue
              }
            })
          }
        }
      }
    }
    // console.log(data)
    data.blocks.result.rows = formData
    return data
  }
}
