import 'whatwg-fetch'
import 'es6-promise'

class RunFetch{

    get(url){
        let result = fetch(url, {
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json, text/plain, */*'
            },
            // 设置允许cors跨域
            mode: 'cors'
        });
        return result;
    }

    obj2params(obj) {
        let result = '';
        let item;
        for (item in obj) {
            result += '&' + item + '=' + encodeURIComponent(obj[item]);
        }
        
        if (result) {
            result = result.slice(1);
        }
        
        return result;
    }

    post(url,paramsObj){
        let result = fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: this.obj2params(paramsObj)
        });
        
        return result;
    }
}

export const Fetch = new RunFetch()