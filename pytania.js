const questions = [
    {
        "pytanie": "Do jakich układów należy przerzutnik?",
        "index": 1,
        "answers": [
            {
                "text": "A) Pamięciowych",
                "correct": 1
            },
            {
                "text": "B) Operacyjnych",
                "correct": 0
            },
            {
                "text": "C) Sekwencyjnych",
                "correct": 1
            },
            {
                "text": "D) Elektronicznych",
                "correct": 0
            }
        ]
    },
    {
        "pytanie": "Podaj szerokość magistralii danych, obecnie produkowanych procesorów.",
        "index": 2,
        "answers": [
            {
                "text": "A) 32 - 512 bitów ",
                "correct": 0
            },
            {
                "text": "B) 64 - 512 bitów",
                "correct": 1
            },
            {
                "text": "C) 20 - 380 bajtów",
                "correct": 0
            },
            {
                "text": "D) 20 - 380 bitów",
                "correct": 0
            },
        ]
    },
    {
        "pytanie": "Jaką przestrzeń adresową posiada mikroprocesor z 32 bitową magistralą adresową?",
        "index": 3,
        "answers": [
            {
                "text": "A) 2^32",
                "correct": 1
            },
            {
                "text": "B) 3^66",
                "correct": 0
            },
            {
                "text": "C) 2^64",
                "correct": 0
            },
            {
                "text": "D) 4^20",
                "correct": 0
            }
        ]
    },
{
    "pytanie": "Częstotliwość przebiegu zegarowego wynosi 200MHz. Okres tego przebiegu wynosi: ",
    "index": 4,
    "answers": [
        {
            "text": "A) 10 nanosekund",
            "correct": 0
        },
        {
            "text": "B) 15 nanosekund",
            "correct": 0
        },
        {
            "text": "C) 5 nanosekund",
            "correct": 1
        },
        {
            "text": "D) 20 nanosekund",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Co oznacza znajdujący się w dokumentacji technicznej płyty głównej parametr LGA 1366 albo AM3?",
    "index": 5,
    "answers": [
        {
            "text": "A) Gniazdo procesora",
            "correct": 1
        },
        {
            "text": "B) Zasilanie procesora",
            "correct": 0
        },
        {
            "text": "C) Gniazdo RAM",
            "correct": 0
        },
        {
            "text": "D) Gniazdo ATX",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Rejestr mikroprocesora zwany licznikiem rozkazów zawiera: ",
    "index": 6,
    "answers": [
        {
            "text": "A) Status aktualnie wykonanej operacji",
            "correct": 0
        },
        {
            "text": "B) Adres kolejnego rozkazu",
            "correct": 1
        },
        {
            "text": "C) Adres stosu utworzonego w pamięci",
            "correct": 0
        },
        {
            "text": "D) Adres wcześniej wykonywanego rozkazu",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Pojedyncze złącze PCI Express 1.0 posiada przepustowość: ",
    "index": 7,
    "answers": [
        {
            "text": "A) 210Mb\s",
            "correct": 0
        },
        {
            "text": "B) 180Mb\s",
            "correct": 0
        },
        {
            "text": "C) 120Mb\s",
            "correct": 0
        },
        {
            "text": "D) 250Mb\s",
            "correct": 1
        }
    ]
},
{
    "pytanie": "Do porównywania liczb binarnych służą?",
    "index": 8,
    "answers": [
        {
            "text": "A) Komparatory",
            "correct": 1
        },
        {
            "text": "B) Kondensatory",
            "correct": 0
        },
        {
            "text": "C) Tranzystory",
            "correct": 0
        },
        {
            "text": "D) Rezystory",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak nazywa się najmniejsza planeta w Układzie Słonecznym?",
    "index": 9,
    "answers": [
        {
            "text": "A) Merkury",
            "correct": 1
        },
        {
            "text": "B) Pluton",
            "correct": 0
        },
        {
            "text": "C) Ziemia",
            "correct": 0
        },
        {
            "text": "D) Saturn",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Czy można pić wodę z kranu w Polsce?",
    "index": 10,
    "answers": [
        {
            "text": "A) Tak, ale tylko po przegotowaniu",
            "correct": 0
        },
        {
            "text": "B) Nie, bo jest skażona",
            "correct": 0
        },
        {
            "text": "C) Tak, ale tylko w niektórych miastach",
            "correct": 0
        },
        {
            "text": "D) Nie, bo to niezdrowe",
            "correct": 1
        }
    ]
},
{
    "pytanie": "Jak nazywa się najwyższa góra w Polsce?",
    "index": 11,
    "answers": [
        {
            "text": "A) Rysy",
            "correct": 1
        },
        {
            "text": "B) Śnieżka",
            "correct": 0
        },
        {
            "text": "C) Babia Góra",
            "correct": 0
        },
        {
            "text": "D) Kasprowy Wierch",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Czy można jeździć na rowerze bez kasku?",
    "index": 12,
    "answers": [
        {
            "text": "A) Tak, ale tylko na chodniku",
            "correct": 0
        },
        {
            "text": "B) Nie, bo to nielegalne",
            "correct": 0
        },
        {
            "text": "C) Tak, ale tylko w dzień",
            "correct": 0
        },
        {
            "text": "D) Nie, bo to niebezpieczne",
            "correct": 1
        }
    ]
},
{
    "pytanie": "Czy można zrobić tort z ogórków?",
    "index": 13,
    "answers": [
        {
            "text": "A) Tak, ale tylko z kiszonych",
            "correct": 0
        },
        {
            "text": "B) Nie, bo to niemożliwe",
            "correct": 0
        },
        {
            "text": "C) Tak, ale tylko z cukrem",
            "correct": 0
        },
        {
            "text": "D) Nie, bo to obrzydliwe",
            "correct": 1
        }
    ]
},
{
    "pytanie": "Czy można pływać w Wiśle?",
    "index": 14,
    "answers": [
        {
            "text": "A) Tak, ale tylko w kajaku",
            "correct": 0
        },
        {
            "text": "B) Nie, bo jest zanieczyszczona",
            "correct": 1
        },
        {
            "text": "C) Tak, ale tylko w zimie",
            "correct": 0
        },
        {
            "text": "D) Nie, bo jest za głęboka",
            "correct": 0
        }
    ]
},

]
