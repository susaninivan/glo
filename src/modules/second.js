import getData from "./getData";
import postData from "./postData";

const second = function () {

    // const test = ("Hello, World! Нет войне!")
    // console.log(test);

    // console.log('Hello, World!');



    const cartBTN = document.getElementById("cart")

    getData().then((data) => {
        console.log(data);
    })

    // cartBTN.addEventListener("click", () => {
    //     postData().then((data) => {
    //         console.log(data);



    //     })
    // })
}

export default second