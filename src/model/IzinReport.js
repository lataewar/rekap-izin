import Axios from 'axios'

export default class IzinReport {
    constructor(tgl_awal, tgl_akhir) {
        this.tgl_awal = tgl_awal;
        this.tgl_akhir = tgl_akhir;
    }

    async getResult(url) {
        try {
            const res = await Axios(`${url}tgl_awal=${this.tgl_awal}&&tgl_akhir=${this.tgl_akhir}`);
            this.result = res.data.data.coba;
        } catch (error) {
            console.log(error);
        }
    }

    isExist() {
        return this.result ? this.result.length > 0 : false;
    }

    exportData(dataTable, type = "csv") {
        dataTable.export({
            type: type,
            filename: `Rekap Izin ${this.tgl_awal} sampai ${this.tgl_akhir}`
        });
    }
}