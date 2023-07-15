
const parts = {
    context: [
        "Si vieras a un caballo peinando su melena",
        "Cuando un oso decide tomar un baño de sol",
        "Si contemplas al pulpo jugando al ajedrez",
        "Cuando el gallo pinta acuarelas al amanecer",
        "Si ves a la abuela echando carreras en moto",
        "Cuando un burro entona un aria de ópera",
        "Si sorprendes al gato escribiendo una novela",
        "Cuando la araña practica ballet en la telaraña"
    ],
    verb: [
        "escupe",
        "engulle",
        "mancha",
        "olvida",
        "esconde",
        "incomoda",
        "despierta"
    ],
    advice: [
        "una colilla en la fuente de los deseos",
        "los secretos de un perro mojado",
        "una orquesta de sartenes",
        "los calzoncillos pegados por el sudor",
        "el aroma de un queso solitario",
        "la melodía de un cepillo de dientes",
        "las sombras en un calcetín viejo",
        "la nostalgia en una fregona"
    ],
}




function generateHaiku(parts) {

    // GET TODAY'S DATE AND EXTRACT VARIABLES
    const today = new Date();
    const ms8 = today.getMilliseconds() % 8;
    const weekDay = today.getDay();
    const sec8 = today.getSeconds() % 8;

    // MAP VALUES TO THE PRESET MESSAGE PARTS and COMBINE THE PARTS INTO A SINGLE MESSAGE
    const proverb = parts.context[ms8] + ' ' + parts.verb[weekDay] + ' ' + parts.advice[sec8];
    console.log(proverb);

    // OUTPUT THE SINGLE MESSAGE

}

generateHaiku(parts)