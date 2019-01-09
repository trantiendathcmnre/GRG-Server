let result = {
    errorCode: true,
    message:''
}

function message(mess) {
    result.message = mess;
    delete result['data'];
    return result;
}

function error(code,mess) {
    result.errorCode = code;
    result.message = mess;
    delete result['data'];
    return result;
}

function data(json) {
    result.errorCode = true;
    delete result['message'];
    result.data = null;
    result.data = json;
    return result;
}

module.exports = {
    message: message,
    error: error,
    data: data
};