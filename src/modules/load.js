import getData from "./getData";
import renderGoods from "./renderGoods"

const load = function () {


    getData().then((data) => {
        renderGoods(data);
    })
}

export default load