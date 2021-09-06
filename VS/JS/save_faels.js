/*Есть такая «секретная» ссылка: www.youtube.com/get_video_info?video_id=XXXXXX
Вместо XXXXXX подставьте хэш видео, который в ссылке на ролик, типа youtu.be/BWCiWZtrWXU после слеша.

По этой (первой) ссылке вернутся URL-encoded данные. Распакуйте их и возьмите параметр url_encoded_fmt_stream_map. Его значение опять надо распаковать как URL-параметры. И из результата вытащить параметр url – это ссылка на единый скачивабельный видеофайл.

Например, в консоли браузера: */
function getUrlParams(search) {
    let hashes = search.slice(search.indexOf('?') + 1).split('&')
    let params = {}
    hashes.map(hash => {
        let [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    })

    return params
}
var s = '------'; // здесь длиннющая строка из ответа /get_video_info
var a = getUrlParams(s);
var b = getUrlParams(a.url_encoded_fmt_stream_map);
console.log(b.url); // эту ссылку открываем в браузере - это скачиваемый видеофайл