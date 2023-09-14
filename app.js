// Crea una instancia de Vue
new Vue({
    el: '.libreta', // El elemento en el que se montará la aplicación Vue
    data: {
        nuevaTarea: '', // Para almacenar la nueva tarea ingresada
        tareas: [] // Para almacenar la lista de tareas
    },
    methods: {
        agregarTarea: function () {
            if (this.nuevaTarea.trim() !== '') {
                this.tareas.push(this.nuevaTarea);
                this.nuevaTarea = ''; // Limpia el campo de entrada
            }
        },
        eliminarTarea: function (index) {
            this.tareas.splice(index, 1);
        }
    }
});
