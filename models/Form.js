// import { Schema, model } from "mongoose";
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const formSchema = new Schema({
    apellidoP: String,
    apellidoM: String,
    nombres: String,
    cargo: String,
    fecha: Date,
    desempeño: {
        cumplimiento: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        sentido_comun: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        orientacion_de_resultados: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        responsabilidad: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        }
    },
    factor_humano: {
        actitud_organizacion: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        actitud_equipo: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        actitud_colaboradores: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        predisposicion: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        puntualidad: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        }
    },
    habilidades: {
        respuesta: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        organizacion: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        potencial: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        iniciativa: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        }
    },
    calidad: {
        exactitud: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        grado_de_conocimiento: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        precision: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        relaciones_interpersonales: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        presentacion_personal: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        }
    },
    liderazgo: {
        coordinacion: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        cooperacion: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        capacidad: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        trabajo: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        },
        creatividad: {
            colaborador: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            encargado: {
                type: Number,
                min: 0,
                max: 5, required: true
            },
            director: {
                type: Number,
                min: 0,
                max: 5, required: true
            }
        }
    },
    promedios: {
        eval_colaborador: {
            type: Number,
            min: 0,
            max: 5, required: true
        },
        eval_jefe: {
            type: Number,
            min: 0,
            max: 5, required: true
        },
        eval_gerente: {
            type: Number,
            min: 0,
            max: 5, required: true
        },
        promedio_general: {
            type: Number,
            min: 0,
            max: 5, required: true
        }
    },
    observaciones: {
        type: String,
        maxLength: 500
    },
    dni: {
        type: String, required: true
    },
    id: {
        type: String, required: true
    }
})

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
