export const form = {
    form_input: document.querySelector('.form_input'),
    inp_tgl_awal: document.querySelector('#tgl_awal'),
    inp_tgl_akhir: document.querySelector('#tgl_akhir'),
    btn_download: document.querySelector('#btn_download'),
    btn_dropdown: document.querySelector('#btn_dropdown'),
    table_body: document.querySelector('.loader'),
    table: document.querySelector('.table')
};

export const elementStr = {
    loader: "loader"
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStr.loader}">
            <svg>
                <use href="src/images/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStr.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};