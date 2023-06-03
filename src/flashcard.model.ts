export interface Verb {
    pronoun: string;
    spanish: string;
    english: string;
    mood: string;
    tense: string;
}

export const verbList = [
    {
        infinitive: "ser",
        translation: "to be (quality)",
        conjugations: [
            {
                pronoun: "yo",
                spanish: "soy",
                english: "I am",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "tú",
                spanish: "eres",
                english: "you are",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "él/ella/usted",
                spanish: "es",
                english: "he/she/you (formal) is",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "nosotros/nosotras",
                spanish: "somos",
                english: "we are",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "vosotros/vosotras",
                spanish: "sois",
                english: "you all are",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "ellos/ellas/ustedes",
                spanish: "son",
                english: "they/you all are",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "yo",
                spanish: "era",
                english: "I was",
                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "tú",
                spanish: "eras",
                english: "you were",
                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "él/ella/usted",
                spanish: "era",
                english: "he/she/you (formal) was",
                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "nosotros/nosotras",
                spanish: "éramos",
                english: "we were",

                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "vosotros/vosotras",
                spanish: "erais",
                english: "you all were",

                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "ellos/ellas/ustedes",
                spanish: "eran",
                english: "they/you all were",

                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "tú",
                spanish: "sé",
                english: "be",

                mood: "imperativo",
                tense: "afirmativo",
            },
            {
                pronoun: "usted",
                spanish: "sea",
                english: "be",

                mood: "imperativo",
                tense: "afirmativo",
            },
            {
                pronoun: "nosotros/nosotras",
                spanish: "seamos",
                english: "let's be",
 
                mood: "imperativo",
                tense: "afirmativo",
            },
            {
                pronoun: "ustedes",
                spanish: "sean",
                english: "be",

                mood: "imperativo",
                tense: "afirmativo",
            },
            {
                pronoun: "yo",
                spanish: "sea",
                english: "be",

                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "tú",
                spanish: "seas",
                english: "be",
                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "él/ella/usted",
                spanish: "sea",
                english: "be",
                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "nosotros/nosotras",
                spanish: "seamos",
                english: "let's be",
                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "vosotros/vosotras",
                spanish: "seáis",
                english: "be",
                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "ellos/ellas/ustedes",
                spanish: "sean",
                english: "be",
                mood: "subjuntivo",
                tense: "presente",
            },
        ]
    },
    {
        infinitive: "estar",
        translation: "to be (location/state)",
        conjugations: [
            {
                pronoun: "yo",
                spanish: "estoy",
                english: "I am",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "tú",
                spanish: "estás",
                english: "you are",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "él/ella/usted",
                spanish: "está",
                english: "he/she/you (formal) is",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "nosotros/nosotras",
                spanish: "estamos",
                english: "we are",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "vosotros/vosotras",
                spanish: "estáis",
                english: "you all are",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "ellos/ellas/ustedes",
                spanish: "están",
                english: "they/you all are",
                mood: "indicativo",
                tense: "presente",
            },
            {
                pronoun: "yo",
                spanish: "estaba",
                english: "I was",
                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "tú",
                spanish: "estabas",
                english: "you were",
                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "él/ella/usted",
                spanish: "estaba",
                english: "he/she/you (formal) was",
                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "nosotros/nosotras",
                spanish: "estábamos",
                english: "we were",
                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "vosotros/vosotras",
                spanish: "estabais",
                english: "you all were",
                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "ellos/ellas/ustedes",
                spanish: "estaban",
                english: "they/you all were",
                mood: "indicativo",
                tense: "pretérito imperfecto",
            },
            {
                pronoun: "tú",
                spanish: "está",
                english: "be",
                mood: "imperativo",
                tense: "afirmativo",
            },
            {
                pronoun: "usted",
                spanish: "esté",
                english: "be",
                mood: "imperativo",
                tense: "afirmativo",
            },
            {
                pronoun: "nosotros/nosotras",
                spanish: "estemos",
                english: "let's be",
                mood: "imperativo",
                tense: "afirmativo",
            },
            {
                pronoun: "ustedes",
                spanish: "estén",
                english: "be",
                mood: "imperativo",
                tense: "afirmativo",
            },
            {
                pronoun: "yo",
                spanish: "esté",
                english: "be",
                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "tú",
                spanish: "estés",
                english: "be",
                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "él/ella/usted",
                spanish: "esté",
                english: "be",
                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "nosotros/nosotras",
                spanish: "estemos",
                english: "let's be",
                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "vosotros/vosotras",
                spanish: "estéis",
                english: "be",
                mood: "subjuntivo",
                tense: "presente",
            },
            {
                pronoun: "ellos/ellas/ustedes",
                spanish: "estén",
                english: "be",
                mood: "subjuntivo",
                tense: "presente",
            },
        ]
    }
];



// export const verbs = [
//     {
//         infinitve: "ser",
//         translation: "to be (quality)",
//         moods: [
//             {
//                 mood: "indicativo",
//                 tenses: [
//                     {
//                         tense: "presente",
//                         forms: [
//                             {
//                                 pronoun: "yo",
//                                 spanish: "soy",
//                                 engligh: "i am",
//                             },
//                             {
//                                 pronoun: "tú",
//                                 spanish: "eres",
//                                 engligh: "you are",
//                             },
//                             {
//                                 pronoun: "él/ella/Ud.",
//                                 spanish: "es",
//                                 engligh: "he/she/it is / you (formal) are",
//                             },
//                         ]
//                     },
//                     {
//                         tense: "pretérito inefinido",
//                         forms: [
//                             {
//                                 pronoun: "yo",
//                                 spanish: "fui",
//                                 engligh: "i was",
//                             },
//                             {
//                                 pronoun: "tú",
//                                 spanish: "fuiste",
//                                 engligh: "you were",
//                             },
//                             {
//                                 pronoun: "él/ella/Ud.",
//                                 spanish: "fue",
//                                 engligh: "he/she/it was / you (formal) were",
//                             },
//                         ]
//                     }
//                 ],  
//             },
//             {
//                 mood: "subjuntivo",
//                 tenses: [
//                     {
//                         tense: "presente",
//                         forms: [
//                             {
//                                 pronoun: "yo",
//                                 spanish: "sea",
//                                 engligh: "i am",
//                             },
//                             {
//                                 pronoun: "tú",
//                                 spanish: "seas",
//                                 engligh: "you are",
//                             },
//                             {
//                                 pronoun: "él/ella/Ud.",
//                                 spanish: "sea",
//                                 engligh: "he/she/it is / you (formal) are",
//                             },
//                         ]
//                     }
//                 ]
//             },
//         ]
//     },
//     {
//         infinitve: "estar",
//         translation: "to be (state)",
//         moods: [
//             {
//                 mood: "indicativo",
//                 tenses: [
//                     {
//                         tense: "presente",
//                         forms: [
//                             {
//                                 pronoun: "yo",
//                                 spanish: "estoy",
//                                 engligh: "i am",
//                             },
//                             {
//                                 pronoun: "tú",
//                                 spanish: "estás",
//                                 engligh: "you are",
//                             },
//                             {
//                                 pronoun: "él/ella/Ud.",
//                                 spanish: "está",
//                                 engligh: "he/she/it is / you (formal) are",
//                             },
//                         ]
//                     },
//                     {
//                         tense: "pretérito inefinido",
//                         forms: [
//                             {
//                                 pronoun: "yo",
//                                 spanish: "estuve",
//                                 engligh: "i was",
//                             },
//                             {
//                                 pronoun: "tú",
//                                 spanish: "estuviste",
//                                 engligh: "you were",
//                             },
//                             {
//                                 pronoun: "él/ella/Ud.",
//                                 spanish: "estuvo",
//                                 engligh: "he/she/it was / you (formal) were",
//                             },
//                         ]
//                     }
//                 ]
//             },
//             {
//                 mood: "subjuntivo",
//                 tenses: [
//                     {
//                         tense: "presente",
//                         forms: [
//                             {
//                                 pronoun: "yo",
//                                 spanish: "esté",
//                                 engligh: "i am",
//                             },
//                             {
//                                 pronoun: "tú",
//                                 spanish: "estés",
//                                 engligh: "you are",
//                             },
//                             {
//                                 pronoun: "él/ella/Ud.",
//                                 spanish: "esté",
//                                 engligh: "he/she/it is / you (formal) are",
//                             },
//                         ]
//                     }
//                 ]
//             },
//         ]
//     }
// ]
