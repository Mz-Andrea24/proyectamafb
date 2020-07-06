function fileSeleccionado(file) {
    return file.files && file.files[0];
}

function procesaError(e) {
    console.log(e);
    alert(e.message);
}

const codMap = Object.freeze(new Map([['&', '&amp'], ['<', '&lt;'],
['>', '&gt;'], ['"', '&quot;'], ["'", '&#039;']]));

function cod(texto) {
    return (texto || "").replace(/[&<>"']/g, letra => codMap.get(letra));
}