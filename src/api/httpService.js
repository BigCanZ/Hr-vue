import axios from 'axios'
export default {
  // ajax请求
  async httpRequest (option = {}) {
    if (option.methods === 'GET' || option.methods === 'get') {
      try {
        return await axios.get(
          option.url, {
            params: option.data
          }
        )
      } catch (e) {}
    } else if (option.methods === 'POST' || option.methods === 'post') {
      try {
        return await axios.post(
          option.url, option.data
        )
      } catch (e) {}
    } else {
      console.log('method not allow!')
    }
  }
}
