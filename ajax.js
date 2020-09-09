async function ajaxGet(url) {
    let rs = null;
    await $.ajax({
        type: 'GET',
        dataType: "json",
        url: url,
        timeout: 30000,
        cache: true,
        success: function (result) {
            rs = result;
        }
    });
    return rs;
}
async function ajaxPost(url, data) {
    let rs = null;
    await $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        url: url,
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            rs = result
        }
    });
    return rs;
}
async function ajaxPut(url, data) {
    let rs = null;
    await $.ajax({
        type: 'PUT',
        data: JSON.stringify(data),
        // headers: {
        //     "Authorization": "ss_lg"
        // },
        url: url+"/"+data.id,
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            rs = result;
        }
    })
    return rs;
}
async function ajaxDelete(url, id) {
    let rs = null;
    await $.ajax({
        type: 'DELETE',
        // headers: {
        //     "Authorization": "ss_lg"
        // },
        url: url+"/"+id,
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            rs = result
        }
    })
    return rs;
}