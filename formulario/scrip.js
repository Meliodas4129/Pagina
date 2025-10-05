  // Seleccionar elementos
        const formulario = document.getElementById('miFormulario');
        const cajaResultado = document.getElementById('cajaResultado');
        const botonCerrar = document.getElementById('btnCerrar');

        // Evento para enviar el formulario
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();
            
            // Obtener valores de los campos
            const nombre = document.getElementById('txtNombre').value.trim();
            const apellidos = document.getElementById('txtApellidos').value.trim();
            const edad = document.getElementById('txtEdad').value.trim();

            // Limpiar errores anteriores
            quitarErrores();

            // Variable para saber si el formulario es válido
            let formularioValido = true;

            // Validar nombre
            if (nombre === '') {
                mostrarError('txtNombre', 'errorNom');
                formularioValido = false;
            }

            // Validar apellidos
            if (apellidos === '') {
                mostrarError('txtApellidos', 'errorApe');
                formularioValido = false;
            }

            // Validar edad
            const numEdad = parseFloat(edad);
            if (edad === '' || isNaN(numEdad) || numEdad <= 0) {
                mostrarError('txtEdad', 'errorEdad');
                formularioValido = false;
            }

            // Si todo es válido, mostrar los datos
            if (formularioValido) {
                document.getElementById('mostrarNombre').textContent = nombre;
                document.getElementById('mostrarApellidos').textContent = apellidos;
                document.getElementById('mostrarEdad').textContent = numEdad + ' años';
                cajaResultado.classList.add('visible');
            }
        });

        // Función para mostrar error en un campo
        function mostrarError(idCampo, idError) {
            document.getElementById(idCampo).classList.add('invalido');
            document.getElementById(idError).classList.add('visible');
        }

        // Función para quitar todos los errores
        function quitarErrores() {
            const campos = document.querySelectorAll('input');
            const errores = document.querySelectorAll('.mensaje-error');
            
            campos.forEach(function(campo) {
                campo.classList.remove('invalido');
            });
            
            errores.forEach(function(error) {
                error.classList.remove('visible');
            });
        }

        // Evento del botón cerrar
        botonCerrar.addEventListener('click', function() {
            // Ocultar caja de resultado
            cajaResultado.classList.remove('visible');
            
            // Limpiar formulario
            formulario.reset();
            
            // Quitar errores
            quitarErrores();
            
            // Poner foco en el primer campo
            document.getElementById('txtNombre').focus();
        });

        // Poner foco inicial
        document.getElementById('txtNombre').focus();