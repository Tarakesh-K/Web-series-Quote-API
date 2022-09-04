var quotes_link = fetch("https://web-series-quotes-api.deta.dev/all");
let quote_author = "";
let quote_number = "";
let quote_content = "";
let text_area = "";
let main_box = document.querySelector("#main-box");

// quotes_link.then((data) => data.json())
// .then((data1) => {
//     console.log(data1);
    // main_box.innerHTML =
    //         `
    // <div class="card text-right" style="width: 18rem;">
    //     <div class="card-body">
    //         <h5 class="card-title text-center">${data1[0].series}</h5>
    //         <p class="card-text">With supporting text below as a natural lead-in to additional
    //         content.</p>
    //         <p class="author">Go somewhere</p>
    //     </div>
    // </div>
    // `;
// });

let realData = "";

const getQuotes = async () => {
    const api = "https://web-series-quotes-api.deta.dev/all";
    let data = await fetch(api);
    realData = await data.json();
    let min = 1;
    let max = 542;
    let rnum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(rnum);
    main_box.innerHTML =
    `
    <div class="card text-right" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title text-center">${realData[rnum].series}</h5>
            <p class="card-text text-center">${realData[rnum].quote}</p>
            <p class="author">${realData[rnum].author}</p>
        </div>
    </div>`
};

getQuotes();