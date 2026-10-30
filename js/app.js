document.addEventListener('DOMContentLoaded', () => {
    const elemsSidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elemsSidenav);

    const elemsScrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elemsScrollspy);

    const articulos = [
        {
            titulo: "Mi Primer Proyecto Web",
            fecha: "10 de Octubre de 2026",
            descripcion: "Mi primer proyecto web fue una gran experiencia. Siempre me ha atraído cómo funciona la programación y todo lo que se ve en computadoras; aprendí y sigo aprendiendo la verdadera magia y lógica detrás de cada pantalla. Empecé con lo básico: un simple documento con un título y un párrafo. Recuerdo la emoción y curiosidad de abrir el archivo en el navegador y ver un 'Hola mundo' o mi nombre en grande. A partir de ahí, el proceso fue adictivo. Aprendí a estructurar contenido con etiquetas, a darle color y estilo con CSS y a hacerlo más dinámico con un lenguaje de programación. Este proyecto no solo me enseñó a programar, sino también a resolver problemas, a buscar en la documentación y a ser paciente. Fue el primer paso y me demostró que con dedicación, constancia y curiosidad, cualquier idea puede convertirse en una realidad digital.",
            imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            titulo: "La Importancia de la Responsividad en el Diseño Actual",
            fecha: "15 de Octubre de 2026",
            descripcion: "En la era actual, donde los usuarios navegan desde una variedad infinita de dispositivos, el diseño responsivo es una necesidad, no un lujo. Cuando comencé a estudiar Ing. Software, solía pensar en las páginas como algo estático que se veía en una pantalla de computadora. Sin embargo, la realidad es muy diferente. Aprender a usar frameworks me enseñó un mundo de posibilidades; entendí que el contenido debe adaptarse a distintos dispositivos. Un diseño responsivo no solo mejora la experiencia del usuario, sino que también es crucial para el SEO y la accesibilidad. Este proceso me ha enseñado que el diseño moderno debe ser flexible, accesible y, sobre todo, centrado en el usuario, garantizando que el mensaje llegue sin importar cómo se consuma.",
            imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            titulo: "Descubriendo Material Design y su Impacto Visual",
            fecha: "20 de Octubre de 2026",
            descripcion: "Cuando escuché por primera vez sobre Material Design, me causó curiosidad por su enfoque en la simplicidad y la profundidad. Este lenguaje visual busca crear interfaces intuitivas y agradables. Al empezar a usar Materialize CSS, pude comprobar que los principios de Material Design se traducen en código. Las sombras, transiciones y elementos como los 'chips' o 'cards' no solo son adornos, sino que ayudan a guiar la atención del usuario y a jerarquizar la información. Implementar un sistema de componentes predefinidos como los botones con efecto 'ripple' o los menús laterales (Sidenav) ahorra mucho tiempo de desarrollo. Además, la paleta de colores y los iconos aportan un toque profesional que eleva la calidad percibida del sitio. En mi caso, aplicar estas herramientas me hizo entender que no necesito ser una diseñadora experta para lograr una interfaz limpia; simplemente debo seguir las guías de estilo y aprovechar los componentes que el framework ya tiene probados.",
            imagen: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            titulo: "JavaScript desde Cero",
            fecha: "25 de Octubre de 2026",
            descripcion: "Aprender JavaScript ha sido emocionante como ingeniera en software. Al principio, la sintaxis y los conceptos como funciones, variables y eventos son parecidos a otros lenguajes de programación. Empecé manipulando el DOM, cambiando textos y colores de elementos, y poco a poco fui entendiendo cómo funcionaba la lógica detrás de una página web dinámica. En este blog, por ejemplo, utilicé JavaScript para inyectar dinámicamente las publicaciones y para validar el formulario de contacto. Aunque todavía me queda mucho por aprender, como frameworks modernos (React, Vue, Angular), siento que he construido una base sólida. Cada error en la consola es una oportunidad de aprendizaje. Mi consejo para quienes empiezan es que no se rindan, que construyan pequeños proyectos y que experimenten constantemente. La programación es un arte que se perfecciona con paciencia y curiosidad.",
            imagen: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
    ];

    const contenedor = document.getElementById('lista-articulos');
    
    articulos.forEach(articulo => {
        // SOLUCIÓN CUADROS: La clase 'h-100' y los estilos en línea de flexbox aseguran que 
        // todas las tarjetas midan lo mismo y el botón de abajo siempre quede alineado.
        const cardHTML = `
            <div class="col s12 m6 l6" style="display: flex; margin-bottom: 20px;">
                <div class="card" style="width: 100%; display: flex; flex-direction: column;">
                    <div class="card-image">
                        <img src="${articulo.imagen}" alt="${articulo.titulo}">
                        <span class="card-title">${articulo.titulo}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light teal darken-2" href="#sobre-mi">
                            <i class="material-icons">add</i>
                        </a>
                    </div>
                    <div class="card-content" style="flex-grow: 1;">
                        <small class="grey-text text-darken-1"><i class="material-icons tiny">date_range</i> ${articulo.fecha}</small>
                        <p class="grey-text text-darken-3 mt-4">${articulo.descripcion}</p>
                    </div>
                    <div class="card-action">
                        <a href="#sobre-mi" class="teal-text text-darken-2">Leer más <i class="material-icons tiny">arrow_forward</i></a>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += cardHTML;
    });

    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); 
        if (formulario.checkValidity()) {
            M.toast({html: '<i class="material-icons tiny">check_circle</i> ¡Formulario validado y enviado con éxito!', classes: 'teal rounded'});
            formulario.reset();
            M.updateTextFields(); 
        } else {
            M.toast({html: 'Por favor, completa todos los campos correctamente.', classes: 'red rounded'});
        }
    });
});