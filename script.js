document.addEventListener("DOMContentLoaded", function() {
    const comentarios = [
        "Las playas son hermosas y el clima es perfecto.",
       
        "Estuvo chido el viaje, loco! La barrera de coral es una locura, de esas que te dejan sin palabras",
        "Las playas están bien perronas y el clima, uff, perfecto para andar relax.",
        "La banda local tiene una onda bien interesante, las tradiciones y todo ese rollo.",
        "Te recomiendo caerle a la Isla de San Pedro, es un paraíso, neta.",
        "La comida está para chuparse los dedos, los mariscos frescos están de otro nivel.",
        "Las excursiones en la selva son emocionantes y educativas.",
        "Hacer snorkel en el Gran Agujero Azul fue una experiencia que no se olvida, la neta.",
        "La banda en los hoteles se portó a toda madre, bien buena onda y siempre al tiro."
    ];

    const nombres = [
        "Brandon Gomez",
        "Luisa Rodriguez",
        "Marcos Swith",
        "Abrahn lincon",
        "Luis Guerra",
        "Mario Bros",
        "Luigui Santos",
        "Luis Gevara",
        "Marco barrientos",
        "Madiel Lara"
    ];

    const cambiarComentariosBtn = document.getElementById("cambiarComentarios");

    function mostrarComentarios() {
        const comentariosList = document.getElementById("comentariosList");
        comentariosList.innerHTML = ""; // Limpiar comentarios existentes

        const comentariosAleatorios = obtenerAleatorio(comentarios, 5);
        const nombresAleatorios = obtenerAleatorio(nombres, 5);

        comentariosAleatorios.forEach((comentario, index) => {
            const comentarioCard = document.createElement("div");
            comentarioCard.className = "comment-card";

            comentarioCard.innerHTML = `
                <div class="comment-author">${nombresAleatorios[index]}</div>
                <div class="comment-text">${comentario}</div>
            `;

            comentariosList.appendChild(comentarioCard);
        });
    }

    function obtenerAleatorio(arr, num) {
        const resultado = [];
        const copia = [...arr];
        while (resultado.length < num && copia.length > 0) {
            const index = Math.floor(Math.random() * copia.length);
            resultado.push(copia.splice(index, 1)[0]);
        }
        return resultado;
    }

    cambiarComentariosBtn.addEventListener("click", mostrarComentarios);

    // Inicializar con comentarios aleatorios al cargar
    mostrarComentarios();

    // Manejar el envío del formulario
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Mostrar el modal de confirmación
        $('#confirmationModal').modal('show');
    });
});
