//Clases abstractas

abstract class ControllerObserver{
    abstract onAlumnosObtenidos(alumnos : Alumno[])
}

// POJO - Plain old java object -- El singular
class Alumno{
    codigo : string
    nombre : string

    constructor(codigo : string , nombre : string){
        this.codigo = codigo
        this.nombre = nombre
    }
}

//Model --
class AlumnosModel{
    observer : ControllerObserver
    setObserver(observer : ControllerObserver){
        this.observer = observer
    }
    obtenerAlumnos(){
        let alumnos = []
        alumnos.push(new Alumno("20152334","Pepito"))
        alumnos.push(new Alumno("20157152","Nadal"))
        alumnos.push(new Alumno("20158452","Federer"))
        alumnos.push(new Alumno("20157481","Djokovic"))
        alumnos.push(new Alumno("20155845","Berretini"))
        alumnos.push(new Alumno("20151823","Bautista"))
        alumnos.push(new Alumno("20158452","Kyrgios"))
        alumnos.push(new Alumno("20151589","Thiem"))
        alumnos.push(new Alumno("20152181","Bryant"))
        alumnos.push(new Alumno("20152193","Tsitsipas"))
        alumnos.push(new Alumno("20151531","Zverev"))
        alumnos.push(new Alumno("20158462","Shapovalov"))

        setTimeout(() => {
            this.observer.onAlumnosObtenidos(alumnos)
        }, 3000)
        return alumnos
    }
}



// View

class ListaAlumnosView{
    alumnos : Alumno[] //Instanciando la variable

    pinta(){
        console.log("/*------------------------------------------------*/")
        if (this.alumnos.length == 0){
            console.log("No hay alumnos en el arreglo para mostrar")
        }else{
            for(let i = 0; i<this.alumnos.length; i++){
                let alumno = this.alumnos[i] //Asignando la varaible
                console.log(`(${i + 1}) ${alumno.codigo} ${alumno.nombre}`)
            }
        }
        
    }
}
// Controllers -- Efectivamente es como una classe que agrupa las funciones de todas
class AlumnosController extends ControllerObserver{

    lista : ListaAlumnosView
    constructor(){
        super()
        this.lista = new ListaAlumnosView
    }
    onAlumnosObtenidos(alumnos: Alumno[]) {
        this.lista.alumnos = alumnos
        this.lista.pinta()
    }
    start(){

        let alumnosModel = new AlumnosModel()
        let lista = new ListaAlumnosView()

        alumnosModel.setObserver(this)

        alumnosModel.obtenerAlumnos()
        
    }
}

let mainMVC = () => {
    let controller = new AlumnosController()
    controller.start()
}

mainMVC()