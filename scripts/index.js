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

  createActivity(titulo, descripción, url) {
    let id =
      this.actividades.length > 0
        ? this.actividades[this.actividades.length - 1].id + 1
        : 1;

    const actividad = new Actividad(id, titulo, descripción, url);
    this.actividades.push(actividad);
  }
  deleteActivity(id) {
    this.actividades = this.actividades.filter((actividad) => {
      return actividad.id !== id;
    });
    return this.actividades;
  }
}

//Pruebas de que si funciona el codigo correctamente
const repositorio = new Repository();

// actividades.createActivity(
//   "Yoga",
//   "El yoga es una disciplina que se basa en la meditación y la respiración.",
//   "https://albadanatural.es/wp-content/uploads/2018/06/yoga-e1545341611900.jpg"
// );

function toHTML(actividad) {
  const { id, titulo, descripción, url } = actividad;
  const cardAct = document.createElement("div");
  const title = document.createElement("h3");
  const imgAct = document.createElement("img");
  const desc = document.createElement("p");
  const borrar = document.createElement("button");
  cardAct.classList.add("card");
  title.textContent = titulo;
  desc.textContent = descripción;
  imgAct.src = url;
  borrar.textContent = "X";

  borrar.dataset.id = id;

  borrar.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    repositorio.deleteActivity(parseInt(id));
    todoHTML();
  });

  cardAct.append(borrar, title, imgAct, desc);

  const espacioActividades = document.getElementById("espacioActividades");
  espacioActividades.appendChild(cardAct);

  return cardAct;
}

function todoHTML() {
  const espacioActividades = document.getElementById("espacioActividades");
  document.getElementById("espacioActividades").innerHTML = "";
  const actividades = repositorio.getAllActivities();
  const htmls = actividades.map((actividades) => {
    return toHTML(actividades);
  });
  htmls.forEach((htmls) => {
    espacioActividades.appendChild(htmls);
  });
}

function handler(event) {
  event.preventDefault();
  const titulo = document.getElementById("inputAct").value;
  const url = document.getElementById("inputImg").value;
  const descripción = document.getElementById("inputDesc").value;
  if (titulo == "" || url == "" || descripción == "") {
    return alert("Hay datos incompletos.");
  }
  repositorio.createActivity(titulo, descripción, url);
  todoHTML();
  document.getElementById("myForm").reset();
}

const boton = document.getElementById("inputButton");

boton.addEventListener("click", handler);

// actividades.createActivity(
//   "Gym",
//   "el gym es una disciplina que se basa en la meditación y la respiración.",
//   "https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
// );
