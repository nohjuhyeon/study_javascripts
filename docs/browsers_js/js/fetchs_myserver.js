// https://github.com/yojulab/learn_fastapis/blob/main/routes/events_api.py
let rate_list = document.querySelector("#retrieve_all_events");
rate_list.addEventListener('click', async (event) => {
    let url = `http://127.0.0.1:8000/events_api/` ;
    let options = {}; // python dict 유사
    try {
        let response = await fetch(url, options);   // send
        let result = await response.json(); // 응답
        console.log(`response result : ${result}`)
        let contents = document.querySelector("#retrieve_all_events_contents");
        // let innercontent = ``;
        // for (content of contents){
        // }
        contents.innerHTML = result['header']['resultMsg'];
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});
// update_event_withjson
let shopping_insite = document.querySelector("#update_event_withjson");
shopping_insite.addEventListener('click', async (event) => {
    let _id = event.target.value; // textContent
    _id = `65ae041150aa3937dfcf11e6`;
    let url = `http://127.0.0.1:8000/events_api/${_id}` ;
    let data = {
        "creator": "Alice",
        "title": "파리 여행",
        "image": "europe_travel.jpg",
        "description": "유럽 여행에서의 추억을 담은 사진입니다.",
        "tags": [
            "유럽",
            "여행",
            "사진"
        ],
        "location": "파리"
    }
    let options = {
        method : "PUT"
        // , mode: "no-cors" // no-cors, *cors, same-origin
        , headers : {
            "Content-Type" : "application/json"
        }
        , body : JSON.stringify(data)
    }; // python dict 유사
    try {
        let response = await fetch(url, options);   // send
        let result = await response.json(); // 응답
        console.log(`response result : ${result}`)
        // let contents = document.querySelector("#update_event_withjson_contents");
        // contents.innerHTML = result;
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});