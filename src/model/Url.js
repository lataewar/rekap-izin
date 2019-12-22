export default class Url {
    constructor() {
        this.url = {};
    }

    async getUrl() {
        try {
            const res = await fetch('./src/assets/json/setting.json');
            const data = await res.json();
    
            this.url = data.active;
            
        } catch (error) {
            console.log(error);
        }

    }
}