//Clases abstractas
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ControllerObserver = /** @class */ (function () {
    function ControllerObserver() {
    }
    return ControllerObserver;
}());
// POJO - Plain old java object -- El singular
var Alumno = /** @class */ (function () {
    function Alumno(codigo, nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }
    return Alumno;
}());
//Model --
var AlumnosModel = /** @class */ (function () {
    function AlumnosModel() {
    }
    AlumnosModel.prototype.setObserver = function (observer) {
        this.observer = observer;
    };
    AlumnosModel.prototype.obtenerAlumnos = function () {
        var _this = this;
        var alumnos = [];
        alumnos.push(new Alumno("20152334", "Pepito"));
        alumnos.push(new Alumno("20157152", "Nadal"));
        alumnos.push(new Alumno("20158452", "Federer"));
        alumnos.push(new Alumno("20157481", "Djokovic"));
        alumnos.push(new Alumno("20155845", "Berretini"));
        alumnos.push(new Alumno("20151823", "Bautista"));
        alumnos.push(new Alumno("20158452", "Kyrgios"));
        alumnos.push(new Alumno("20151589", "Thiem"));
        alumnos.push(new Alumno("20152181", "Bryant"));
        alumnos.push(new Alumno("20152193", "Tsitsipas"));
        alumnos.push(new Alumno("20151531", "Zverev"));
        alumnos.push(new Alumno("20158462", "Shapovalov"));
        setTimeout(function () {
            _this.observer.onAlumnosObtenidos(alumnos);
        }, 3000);
        return alumnos;
    };
    return AlumnosModel;
}());
// View
var ListaAlumnosView = /** @class */ (function () {
    function ListaAlumnosView() {
    }
    ListaAlumnosView.prototype.pinta = function () {
        console.log("/*------------------------------------------------*/");
        if (this.alumnos.length == 0) {
            console.log("No hay alumnos en el arreglo para mostrar");
        }
        else {
            for (var i = 0; i < this.alumnos.length; i++) {
                var alumno = this.alumnos[i]; //Asignando la varaible
                console.log("(" + (i + 1) + ") " + alumno.codigo + " " + alumno.nombre);
            }
        }
    };
    return ListaAlumnosView;
}());
// Controllers -- Efectivamente es como una classe que agrupa las funciones de todas
var AlumnosController = /** @class */ (function (_super) {
    __extends(AlumnosController, _super);
    function AlumnosController() {
        var _this = _super.call(this) || this;
        _this.lista = new ListaAlumnosView;
        return _this;
    }
    AlumnosController.prototype.onAlumnosObtenidos = function (alumnos) {
        this.lista.alumnos = alumnos;
        this.lista.pinta();
    };
    AlumnosController.prototype.start = function () {
        var alumnosModel = new AlumnosModel();
        var lista = new ListaAlumnosView();
        alumnosModel.setObserver(this);
        alumnosModel.obtenerAlumnos();
    };
    return AlumnosController;
}(ControllerObserver));
var mainMVC = function () {
    var controller = new AlumnosController();
    controller.start();
};
mainMVC();
