import { form } from './base'

export const renderDownloadBTN = isExist => {
    form.btn_dropdown.style.visibility = isExist ? 'visible' : 'hidden';
};