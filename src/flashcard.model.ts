export interface Verb {
    infinitve: string;
    translation: string;
    moods: {
        mood: string;
        tenses: {
            tense: string;
            forms: {
                pronoun: string;
                spanish: string;
                engligh: string;
            }[];
        }[];
    }[];
}

export const verbs = [
    {
        infinitve: "ser",
        translation: "to be (quality)",
        moods: [
            {
                mood: "indicativo",
                tenses: [
                    {
                        tense: "presente",
                        forms: [
                            {
                                pronoun: "yo",
                                spanish: "soy",
                                engligh: "i am",
                            },
                            {
                                pronoun: "tú",
                                spanish: "eres",
                                engligh: "you are",
                            },
                            {
                                pronoun: "él/ella/Ud.",
                                spanish: "es",
                                engligh: "he/she/it is / you (formal) are",
                            },
                        ]
                    },
                    {
                        tense: "pretérito inefinido",
                        forms: [
                            {
                                pronoun: "yo",
                                spanish: "fui",
                                engligh: "i was",
                            },
                            {
                                pronoun: "tú",
                                spanish: "fuiste",
                                engligh: "you were",
                            },
                            {
                                pronoun: "él/ella/Ud.",
                                spanish: "fue",
                                engligh: "he/she/it was / you (formal) were",
                            },
                        ]
                    }
                ],  
            },
            {
                mood: "subjuntivo",
                tenses: [
                    {
                        tense: "presente",
                        forms: [
                            {
                                pronoun: "yo",
                                spanish: "sea",
                                engligh: "i am",
                            },
                            {
                                pronoun: "tú",
                                spanish: "seas",
                                engligh: "you are",
                            },
                            {
                                pronoun: "él/ella/Ud.",
                                spanish: "sea",
                                engligh: "he/she/it is / you (formal) are",
                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        infinitve: "estar",
        translation: "to be (state)",
        moods: [
            {
                mood: "indicativo",
                tenses: [
                    {
                        tense: "presente",
                        forms: [
                            {
                                pronoun: "yo",
                                spanish: "estoy",
                                engligh: "i am",
                            },
                            {
                                pronoun: "tú",
                                spanish: "estás",
                                engligh: "you are",
                            },
                            {
                                pronoun: "él/ella/Ud.",
                                spanish: "está",
                                engligh: "he/she/it is / you (formal) are",
                            },
                        ]
                    },
                    {
                        tense: "pretérito inefinido",
                        forms: [
                            {
                                pronoun: "yo",
                                spanish: "estuve",
                                engligh: "i was",
                            },
                            {
                                pronoun: "tú",
                                spanish: "estuviste",
                                engligh: "you were",
                            },
                            {
                                pronoun: "él/ella/Ud.",
                                spanish: "estuvo",
                                engligh: "he/she/it was / you (formal) were",
                            },
                        ]
                    }
                ]
            },
            {
                mood: "subjuntivo",
                tenses: [
                    {
                        tense: "presente",
                        forms: [
                            {
                                pronoun: "yo",
                                spanish: "esté",
                                engligh: "i am",
                            },
                            {
                                pronoun: "tú",
                                spanish: "estés",
                                engligh: "you are",
                            },
                            {
                                pronoun: "él/ella/Ud.",
                                spanish: "esté",
                                engligh: "he/she/it is / you (formal) are",
                            },
                        ]
                    }
                ]
            },
        ]
    }
]
