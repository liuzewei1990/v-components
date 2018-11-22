
import cityData from './citydata.json'

export default {
    getSheng() {
        return cityData;
    },
    getShi(shengCode) {
        return cityData.find(item => item.code == shengCode);
    },
    getQu(shiCode) {

    }
}