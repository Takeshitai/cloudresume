// GET API Request
async function get_visitors() {
    // call post api request function
    // await post_visitors();
    try {
        let response = await fetch('https://jtumnnn1zh.execute-api.us-east-1.amazonaws.com/default/VisitorCounter', {
            method: 'GET',
        });
        let data = await response.json()
        document.getElementById("visitors").innerHTML = data['count'];
        console.log(data);
        return data;
    }  catch (err) {
        console.error(err);
    }
}

get_visitors;