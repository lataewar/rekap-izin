import 'bootstrap/js/dist/dropdown'
import { form, renderLoader, clearLoader } from './view/base'
import DataTable from 'vanilla-datatables'
import IzinReport from './model/IzinReport'
import Url from './model/Url'
import * as reportView from './view/reportView'

/**
 * Global App State
 */
const state = {};
window.state = state;           // FOR DEV PURPOSES

state.dataTable = new DataTable(form.table);

const izin = async () => {
    const t_awal = form.inp_tgl_awal.value;
    const t_akhir = form.inp_tgl_akhir.value;

    if (t_awal && t_akhir) {
        renderLoader(form.table_body);

        state.izinreport = new IzinReport(t_awal, t_akhir);
        state.dataTable.destroy();
        state.dataTable.init();

        try {
            await state.izinreport.getResult(state.url.url);
            
            const data = {
                type: 'json', 
                data: JSON.stringify(state.izinreport.result).replace(/null/g, '""')
            };

            clearLoader();
            reportView.renderDownloadBTN(state.izinreport.isExist());

            state.dataTable.import(data);
    
        } catch (error) {
            clearLoader();
            reportView.renderDownloadBTN(false);
            console.log(error);
        }
    } else {
        alert('Masukkan Tanggal Awal dan Tanggal Akhir!');
    }
};

form.form_input.addEventListener('submit', e => {
    e.preventDefault();
    izin();
});

form.btn_download.addEventListener('click', e => {
    if (state.izinreport.isExist()) state.izinreport.exportData(state.dataTable);
});

window.addEventListener('load', async () => {
    state.url = new Url();
    await state.url.getUrl();
});