let url = {
    hotLists: '/example/1527764192266'
}

// 开发环境和真实环境的切换

let host = 'http://rap2api.taobao.org/app/mock/15016'

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url