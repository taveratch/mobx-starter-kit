import qs from 'query-string'

class ApiManager {
  fetch(options) {
    let proxyPrefix = '/proxy?q='
    if(typeof options.json === 'undefined')
      options.json = true
      
    options.url = proxyPrefix + options.url
    
    if (options.q)
      options.url += '&' + qs.stringify(options.q)
    if(!options.headers)  
      options.headers = {}
    options.headers['Content-Type'] = 'application/json'

    if (options.body)
      options.body = JSON.stringify(options.body)
      
    return new Promise((resolve, reject) => {
      fetch(options.url, options)
        .then(res => {
          if (!res.ok) throw res
          if (options.json)
            return resolve(res.json())
          return resolve(res.text())
        })
        .catch(error => {
          try {
            error.json().then(err => reject(err))
          } catch (err) {
            error.text().then(err => reject(err))
          }
        })
    })
  }
}

const apiManager = new ApiManager()

export default apiManager