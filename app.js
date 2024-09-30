window.onload = function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        mode: "xml",
        theme: "default",
        lineNumbers: true
    });

    var outputFrame = document.getElementById("output");

    // Función para actualizar el iframe con el contenido del editor
    function updateOutput() {
        var htmlCode = editor.getValue();
        outputFrame.srcdoc = htmlCode;
    }

    // Escuchar cambios en el editor
    editor.on("change", function () {
        updateOutput();
    });

    // Cargar un HTML inicial en el editor
    editor.setValue("<!DOCTYPE html>\n<html>\n<head>\n<title>Mi Página</title>\n</head>\n<body>\n<h1>¡Hola, mundo!</h1>\n</body>\n</html>");

    // Inicializar el iframe
    updateOutput();
};
