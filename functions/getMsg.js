exports.handler = async function (event, context, callback) {
    return {
        statusCode: 200,
        body: JSON.stringify({ "msg": "Hello Server II" })
    };
}