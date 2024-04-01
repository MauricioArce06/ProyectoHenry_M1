class Actividad {
  constructor(id, titulo, descripción, url) {
    this.id = id;
    this.titulo = titulo;
    this.descripción = descripción;
    this.url = url;
  }
}

class Repository {
  constructor() {
    this.actividades = [];
  }

  getAllActivities() {
    return [...this.actividades];
  }

  createActivity(id, titulo, descripción, url) {
    const actividad = new Actividad(id, titulo, descripción, url);
    this.actividades.push(actividad);
    //mejora dada por ChatGPT: "Mejora: Validación de entrada en createActivity()
    // // Es posible que desees agregar validaciones para garantizar que los parámetros proporcionados sean válidos antes de crear una nueva actividad."
    //   if (!id || !titulo || !descripción || !url) {
    //     throw new Error("Todos los campos son obligatorios");
    //   }
    //   const actividad = new Actividad(id, titulo, descripción, url);
    //   this.actividades.push(actividad);

    //----------------------------------------------------//

    //otra mejora dada por ChatGPT: "En lugar de mutar directamente la propiedad actividades en createActivity() y deleteActivity(), podrías proporcionar métodos adicionales para manejar estas operaciones."
    // this.actividades.push(actividad)
  }

  deleteActivity(id) {
    this.actividades = this.actividades.filter((actividad) => {
      return actividad.id !== id;
    });
  }
}
// Alternativa dada por ChatGPT
// class Repository {
//   constructor() {
//     this.actividades = new Map();
//   }

//   getAllActivities() {
//     return [...this.actividades.values()];
//   }

//   createActivity(id, titulo, descripción, url) {
//     const actividad = new Actividad(id, titulo, descripción, url);
//     this.actividades.set(id, actividad);
//   }

//   deleteActivity(id) {
//     this.actividades.delete(id);
//   }
// }

//Pruebas de que si funciona el codigo correctamente

const actividades = new Repository();

actividades.createActivity(
  1,
  "Yoga",
  "El yoga es una disciplina que se basa en la meditación y la respiración.",
  "https://albadanatural.es/wp-content/uploads/2018/06/yoga-e1545341611900.jpg"
);

actividades.createActivity(
  2,
  "Gym",
  "el gym es una disciplina que se basa en la meditación y la respiración.",
  "https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
);

actividades.deleteActivity(1);
console.log(actividades.getAllActivities());
