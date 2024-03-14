const container = document.getElementById("jsoneditor")
const options = {
    mode: 'tree',
    modes: ['code', 'text', 'tree', 'view']
}
const editor = new JSONEditor(container, options);

load()

function load() {

}
