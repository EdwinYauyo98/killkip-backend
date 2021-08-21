# Envio de formulario
Requerimientos :
- Mongo Compass
- Postman
- Visual Studio Code
- NodeJS

Importar el archivo './Postman/Backend Formulario.postman_collection.json' en Postman para poder acceder a las consultas facilmente.

## Setup

Comando de instalacion de librerias

```bash
npm install
```

## Conexion Mongo Atlas

Abrir el programa Mongo Compass e ingresar el link de conexion:

```text
mongodb+srv://edwin:uysDzkCAtA8u0TQ0@cluster0.9awkq.mongodb.net/test
```

## Rutas

### /

-GET : Devuelve los datos del proyecto

```json

    "name": "Tarea1-backend",
    "author": "",
    "description": "",
    "version": "1.0.0"

```
### /api/form

- POST : Se envian los datos del formulario
  
  ```JSON
  {
    "apellidoP": "Anchi",
    "apellidoM": "dueñas",
    "nombres": "Hairton",
    "fecha": "2002-12-09",
    "desempeño": {
        "cumplimiento": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "sentido_comun": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "orientacion_de_resultados": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "responsabilidad": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        }
    },
    "factor_humano": {
        "actitud_organizacion": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "actitud_equipo": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "actitud_colaboradores": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "predisposicion": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "puntualidad": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        }
    },
    "habilidades": {
        "respuesta": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "organizacion": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "potencial": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "iniciativa": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        }
    },
    "calidad": {
        "exactitud": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "grado_de_conocimiento": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "precision": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "relaciones_interpersonales": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "presentacion_personal": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        }
    },
    "liderazgo": {
        "coordinacion": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "cooperacion": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "capacidad": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "trabajo": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        },
        "creatividad": {
            "colaborador": 5,
            "encargado": 5,
            "director": 5
        }
    },
    "promedios": {
        "eval_colaborador": 5,
        "eval_jefe": 5,
        "eval_gerente": 5,
        "promedio_general": 5
    },
    "observaciones": "sin observaciones",
    "firma": "firma123"}
```