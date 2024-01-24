// fetch() 기본 문법
// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     } catch (error) {
//         console.log(`Error Message : ${error.message}`)
//     }
// }

// from data.go.kr with loan rate
async function event(pagenum) {
    let url = `https://apis.data.go.kr/B551014/SRVC_API_SFMS_FACI/TODZ_API_SFMS_FACI?serviceKey=ow0djIIbtYKcXjahX81pjlVfuA8kUj6DBQkALWCEeCXNuir3R0%2BLMOTTuhmW9Ms7R%2FAVfqb7cGIAazhHFttnPw%3D%3D&pageNo=${pagenum}&numOfRows=10&resultType=JSON&faci_gb_nm=&fcob_nm=체력단련장업&ftype_nm=체력단련장&cp_nm=서울특별시&cpb_nm=중구`;
    let options = {};
    try {
        let response = await fetch(url, options);   // send

        let result = await response.json();       // response(응답)
        let facility_list = "";
        let facility_array = result['response']['body']['items']['item'];
        for (let facility_element of facility_array) {
            facility_list = `${facility_list}<tr><td class='p-2'>${facility_element["faci_nm"]}</td><td class='p-2'>${facility_element["ftype_nm"]}</td>
            <td class='p-2'>${facility_element["faci_road_addr"]}</td><td class='p-2'>${facility_element["faci_tel_no"]}</td><td class='p-2'>${facility_element["faci_stat_nm"]}</td></tr>`
        }
        let facility_array_id = document.querySelector("#facility_array_id");
        facility_array_id.innerHTML = facility_list
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
};

// pagenum의 기본 값을 1로 설정
let pagenum = 1;
//list upload 함수 실행
event(pagenum)

// 이전 버튼을 눌렀을 때
let before_btn = document.querySelector('#before_btn');                     
before_btn.addEventListener('click', async (event) => {
    if (pagenum == 1) {
        pagenum = 1;
    } else {
        pagenum = pagenum - 1;
    }
    console.log(`pagenum : ${pagenum}`)
    let url = `https://apis.data.go.kr/B551014/SRVC_API_SFMS_FACI/TODZ_API_SFMS_FACI?serviceKey=ow0djIIbtYKcXjahX81pjlVfuA8kUj6DBQkALWCEeCXNuir3R0%2BLMOTTuhmW9Ms7R%2FAVfqb7cGIAazhHFttnPw%3D%3D&pageNo=${pagenum}&numOfRows=10&resultType=JSON&faci_gb_nm=&fcob_nm=체력단련장업&ftype_nm=체력단련장&cp_nm=서울특별시&cpb_nm=중구`;
    let options = {};
    try {
        let response = await fetch(url, options);   // send

        let result = await response.json();       // response(응답)
        let facility_list = "";
        let facility_array = result['response']['body']['items']['item'];
        for (let facility_element of facility_array) {
            facility_list = `${facility_list}<tr><td class='p-2'>${facility_element["faci_nm"]}</td><td class='p-2'>${facility_element["ftype_nm"]}</td>
            <td class='p-2'>${facility_element["faci_road_addr"]}</td><td class='p-2'>${facility_element["faci_tel_no"]}</td><td class='p-2'>${facility_element["faci_stat_nm"]}</td></tr>`
        }
        let facility_array_id = document.querySelector("#facility_array_id");
        facility_array_id.innerHTML = facility_list
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});

// 다음 버튼을 눌렀을 때
let next_btn = document.querySelector('#next_btn')
next_btn.addEventListener('click', async (event) => {
    pagenum = pagenum + 1
    console.log(`pagenum : ${pagenum}`)
    let url = `https://apis.data.go.kr/B551014/SRVC_API_SFMS_FACI/TODZ_API_SFMS_FACI?serviceKey=ow0djIIbtYKcXjahX81pjlVfuA8kUj6DBQkALWCEeCXNuir3R0%2BLMOTTuhmW9Ms7R%2FAVfqb7cGIAazhHFttnPw%3D%3D&pageNo=${pagenum}&numOfRows=10&resultType=JSON&faci_gb_nm=&fcob_nm=체력단련장업&ftype_nm=체력단련장&cp_nm=서울특별시&cpb_nm=중구`;
    let options = {};
    try {
        let response = await fetch(url, options);   // send

        let result = await response.json();       // response(응답)
        let facility_list = "";
        let facility_array = result['response']['body']['items']['item'];
        for (let facility_element of facility_array) {
            facility_list = `${facility_list}<tr><td class='p-2'>${facility_element["faci_nm"]}</td><td class='p-2'>${facility_element["ftype_nm"]}</td>
            <td class='p-2'>${facility_element["faci_road_addr"]}</td><td class='p-2'>${facility_element["faci_tel_no"]}</td><td class='p-2'>${facility_element["faci_stat_nm"]}</td></tr>`
        }
        let facility_array_id = document.querySelector("#facility_array_id");
        facility_array_id.innerHTML = facility_list
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});
