const skj_questions = [
    {
      "pytanie": "Jakie są główne elementy warstwowego modelu protokołów sieciowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Aplikacje",
          "correct": 1
        },
        {
          "text": "Transportu",
          "correct": 1
        },
        {
          "text": "Sieci",
          "correct": 1
        },
        {
          "text": "Łącza",
          "correct": 1
        },
        {
          "text": "Fizyczna",
          "correct": 1
        },
        {
          "text": "Prezentacji",
          "correct": 0
        },
        {
          "text": "Sesji",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są funkcje protokołu TCP według RFC 793?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Niezawodny, uporządkowany strumień danych.",
          "correct": 1
        },
        {
          "text": "Kontrola przepływu: nadawca nie przeciąży odbiorcy.",
          "correct": 1
        },
        {
          "text": "Kontrola przeciążenia: nadawca \"zwalnia\" gdy w sieci wystąpi przeciążenie.",
          "correct": 1
        },
        {
          "text": "Szyfrowanie danych przesyłanych przez sieć.",
          "correct": 0
        },
        {
          "text": "Automatyczne odnawianie połączeń po ich zerwaniu.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie aplikacje korzystają z protokołu UDP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Audio/wideo (strumieniowe)",
          "correct": 1
        },
        {
          "text": "Telekonferencje",
          "correct": 1
        },
        {
          "text": "DNS",
          "correct": 1
        },
        {
          "text": "Telefonia Internetowa",
          "correct": 1
        },
        {
          "text": "FTP",
          "correct": 0
        },
        {
          "text": "SMTP",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne różnice między komutacją kanałów a komutacją pakietów?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Komutacja kanałów rezerwuje kanał na całą rozmowę, gwarantując przepustowość, ale nie wykorzystuje zasobów efektywnie.",
          "correct": 1
        },
        {
          "text": "Komutacja pakietów dzieli informacje na pakiety, które współdzielą zasoby sieci w miarę potrzeb, co zwiększa efektywność, ale może powodować opóźnienia i straty pakietów.",
          "correct": 1
        },
        {
          "text": "Komutacja kanałów jest bardziej odporna na błędy niż komutacja pakietów.",
          "correct": 0
        },
        {
          "text": "Komutacja pakietów wymaga stałego połączenia między nadawcą a odbiorcą.",
          "correct": 0
        },
        {
          "text": "Komutacja kanałów jest odpowiednia dla transmisji danych cyfrowych, a pakietów dla analogowych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są cztery źródła opóźnień w sieciach z komutacją pakietów?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Przetwarzanie w węzłach",
          "correct": 1
        },
        {
          "text": "Oczekiwanie w kolejce",
          "correct": 1
        },
        {
          "text": "Opóźnienie transmisji",
          "correct": 1
        },
        {
          "text": "Opóźnienie propagacji",
          "correct": 1
        },
        {
          "text": "Opóźnienie kodowania",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest sieć datagramowa?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Sieć datagramowa to sieć, w której adres odbiorcy w pakiecie określa następny krok, a ścieżki mogą się zmieniać w trakcie sesji. Przykładem jest Internet.",
          "correct": 1
        },
        {
          "text": "Sieć datagramowa wymaga stałego połączenia między nadawcą a odbiorcą.",
          "correct": 0
        },
        {
          "text": "Sieć datagramowa używa dedykowanych ścieżek dla każdego połączenia.",
          "correct": 0
        },
        {
          "text": "Sieć datagramowa jest mniej elastyczna niż sieć z wirtualnymi kanałami.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są warstwy stosu protokołów TCP/IP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Warstwa aplikacji (HTTP, FTP, SMTP)",
          "correct": 1
        },
        {
          "text": "Warstwa transportu (TCP, UDP)",
          "correct": 1
        },
        {
          "text": "Warstwa sieci (IP, protokoły rutingu)",
          "correct": 1
        },
        {
          "text": "Warstwa łącza (PPP, Ethernet)",
          "correct": 1
        },
        {
          "text": "Warstwa fizyczna",
          "correct": 1
        },
        {
          "text": "Warstwa prezentacji",
          "correct": 0
        },
        {
          "text": "Warstwa sesji",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne zalety warstwowego modelu protokołów?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Wyraźna struktura pozwala na identyfikację i ustalenie zależności składników systemu.",
          "correct": 1
        },
        {
          "text": "Modularyzacja ułatwia utrzymanie i aktualizację systemu.",
          "correct": 1
        },
        {
          "text": "Zmiana implementacji usług warstwy jest przezroczysta dla reszty systemu.",
          "correct": 1
        },
        {
          "text": "Umożliwia lepszą ochronę przed atakami sieciowymi.",
          "correct": 0
        },
        {
          "text": "Redukuje koszty sprzętu sieciowego.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są podstawowe media przewodowe używane w sieciach komputerowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Miedź",
          "correct": 1
        },
        {
          "text": "Światłowód",
          "correct": 1
        },
        {
          "text": "Koncentryczny kabel",
          "correct": 1
        },
        {
          "text": "Skrętka ekranowana",
          "correct": 0
        },
        {
          "text": "Przewody HDMI",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są rodzaje multipleksacji stosowane w komutacji kanałów?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "FDM (Frequency-Division Multiplexing)",
          "correct": 1
        },
        {
          "text": "TDM (Time-Division Multiplexing)",
          "correct": 1
        },
        {
          "text": "CDM (Code-Division Multiplexing)",
          "correct": 0
        },
        {
          "text": "WDM (Wavelength-Division Multiplexing)",
          "correct": 0
        },
        {
          "text": "SDM (Space-Division Multiplexing)",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Czym jest opóźnienie propagacji i jak jest obliczane?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Opóźnienie propagacji to czas, jaki sygnał potrzebuje, aby przebyć fizyczne łącze. Oblicza się je jako d/s, gdzie d to długość łącza, a s to prędkość propagacji w medium.",
          "correct": 1
        },
        {
          "text": "Opóźnienie propagacji to czas potrzebny na przetworzenie pakietu przez router.",
          "correct": 0
        },
        {
          "text": "Opóźnienie propagacji to czas oczekiwania pakietu w kolejce.",
          "correct": 0
        },
        {
          "text": "Opóźnienie propagacji to czas potrzebny na wysłanie wszystkich bitów pakietu.",
          "correct": 0
        },
        {
          "text": "Opóźnienie propagacji to czas, który upływa między wysłaniem a odbiorem potwierdzenia pakietu.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne elementy domowej sieci dostępowej?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Modem ADSL (lub optyczny)",
          "correct": 1
        },
        {
          "text": "Ruter/ściana ogniowa/translacja adresów (NAT)",
          "correct": 1
        },
        {
          "text": "Ethernet",
          "correct": 1
        },
        {
          "text": "Bezprzewodowa stacja bazowa",
          "correct": 1
        },
        {
          "text": "Serwer DHCP",
          "correct": 0
        },
        {
          "text": "Serwer DNS",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne rodzaje bezprzewodowych sieci dostępowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Sieci lokalne (802.11b, 802.11g)",
          "correct": 1
        },
        {
          "text": "Dostęp bezprzewodowy o większym zasięgu przez operatorów telekomunikacyjnych (WAP/GPRS, UMTS)",
          "correct": 1
        },
        {
          "text": "Sieci satelitarne",
          "correct": 0
        },
        {
          "text": "Sieci Zigbee",
          "correct": 0
        },
        {
          "text": "Sieci Bluetooth",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest NAT i gdzie jest stosowane?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "NAT (Network Address Translation) to metoda translacji adresów sieciowych używana w ruterach/ścianach ogniowych do udostępniania jednego publicznego adresu IP wielu urządzeniom w sieci lokalnej.",
          "correct": 1
        },
        {
          "text": "NAT umożliwia dynamiczne przydzielanie adresów IP w sieci lokalnej.",
          "correct": 0
        },
        {
          "text": "NAT jest używany do szyfrowania danych w sieci.",
          "correct": 0
        },
        {
          "text": "NAT jest protokołem warstwy transportowej.",
          "correct": 0
        },
        {
          "text": "NAT zwiększa prędkość transmisji danych w sieci lokalnej.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne funkcje protokołu HTTP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "HTTP (HyperText Transfer Protocol) jest protokołem aplikacyjnym używanym do przesyłania dokumentów hipertekstowych (stron WWW) pomiędzy klientem a serwerem.",
          "correct": 1
        },
        {
          "text": "HTTP jest odpowiedzialny za szyfrowanie danych przesyłanych przez Internet.",
          "correct": 0
        },
        {
          "text": "HTTP zarządza sesjami użytkowników na serwerze.",
          "correct": 0
        },
        {
          "text": "HTTP jest używany do przesyłania plików bezpośrednio między klientami.",
          "correct": 0
        },
        {
          "text": "HTTP kontroluje dostęp do zasobów sieciowych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Kiedy został wdrożony protokół TCP/IP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Protokół TCP/IP został wdrożony w 1983 roku.",
          "correct": 1
        },
        {
          "text": "Protokół TCP/IP został wdrożony w 1970 roku.",
          "correct": 0
        },
        {
          "text": "Protokół TCP/IP został wdrożony w 1990 roku.",
          "correct": 0
        },
        {
          "text": "Protokół TCP/IP został wdrożony w 1969 roku.",
          "correct": 0
        },
        {
          "text": "Protokół TCP/IP został wdrożony w 2000 roku.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie były kluczowe wydarzenia w historii Internetu w latach 1990-2000?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "ARPAnet wychodzi z użytku.",
          "correct": 1
        },
        {
          "text": "NSF znosi ograniczenia na komercyjne wykorzystanie NSFnet (wychodzi z użytku w 1995).",
          "correct": 1
        },
        {
          "text": "Powstanie WWW (World Wide Web) przez Berners-Lee.",
          "correct": 1
        },
        {
          "text": "Wprowadzenie przeglądarek takich jak Mosaic i Netscape.",
          "correct": 1
        },
        {
          "text": "Komercjalizacja WWW.",
          "correct": 1
        },
        {
          "text": "Pojawienie się nowych aplikacji jak instant messaging, partnerskie dzielenie plików (np. Napster).",
          "correct": 1
        },
        {
          "text": "Zwiększenie znaczenia bezpieczeństwa sieci.",
          "correct": 1
        },
        {
          "text": "Wprowadzenie protokołu HTTPS.",
          "correct": 0
        },
        {
          "text": "Rozwój technologii szerokopasmowego dostępu do Internetu.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jak działa model klient-serwer w kontekście brzegów sieci?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "W modelu klient-serwer klient żąda i otrzymuje usługi od zawsze dostępnego serwera, na przykład przeglądarka (klient) i serwer WWW.",
          "correct": 1
        },
        {
          "text": "Model klient-serwer wymaga stałego połączenia między klientem a serwerem.",
          "correct": 0
        },
        {
          "text": "Model klient-serwer jest wykorzystywany tylko w sieciach lokalnych.",
          "correct": 0
        },
        {
          "text": "W modelu klient-serwer serwer inicjuje komunikację z klientem.",
          "correct": 0
        },
        {
          "text": "Model klient-serwer nie obsługuje wielu klientów jednocześnie.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są różnice między siecią datagramową a siecią z wirtualnymi kanałami?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Sieć datagramowa umożliwia zmianę ścieżki pakietów w trakcie sesji, natomiast sieć z wirtualnymi kanałami ustala stałą ścieżkę przy tworzeniu kanału.",
          "correct": 1
        },
        {
          "text": "W sieci z wirtualnymi kanałami rutery utrzymują stan dla każdego wirtualnego kanału.",
          "correct": 1
        },
        {
          "text": "Sieć datagramowa zapewnia lepszą jakość usług niż sieć z wirtualnymi kanałami.",
          "correct": 0
        },
        {
          "text": "Sieć z wirtualnymi kanałami jest bardziej elastyczna niż sieć datagramowa.",
          "correct": 0
        },
        {
          "text": "Sieć datagramowa wymaga stałego połączenia między nadawcą a odbiorcą.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest ALOHAnet i kiedy została stworzona?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "ALOHAnet to satelitarna sieć stworzona na Hawajach w 1970 roku, będąca jednym z wcześniejszych przykładów sieci opartych na komutacji pakietów.",
          "correct": 1
        },
        {
          "text": "ALOHAnet to pierwsza sieć komórkowa wprowadzona w 1980 roku.",
          "correct": 0
        },
        {
          "text": "ALOHAnet jest protokołem warstwy aplikacji używanym w sieciach bezprzewodowych.",
          "correct": 0
        },
        {
          "text": "ALOHAnet to sieć kablowa używana do przesyłania danych w latach 60-tych.",
          "correct": 0
        },
        {
          "text": "ALOHAnet to system operacyjny dla routerów sieciowych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne protokoły używane w warstwie łącza w stosie TCP/IP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "PPP (Point-to-Point Protocol)",
          "correct": 1
        },
        {
          "text": "Ethernet",
          "correct": 1
        },
        {
          "text": "IPX/SPX",
          "correct": 0
        },
        {
          "text": "Token Ring",
          "correct": 0
        },
        {
          "text": "Wi-Fi",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest RFC i jaka jest jego rola w standardach internetowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "RFC (Request for Comments) to dokumenty publikowane przez IETF (Internet Engineering Task Force), które określają standardy i protokoły internetowe, takie jak HTTP (RFC 2616) czy TCP (RFC 793).",
          "correct": 1
        },
        {
          "text": "RFC to skrót od Remote Function Call, używany w protokołach sieciowych.",
          "correct": 0
        },
        {
          "text": "RFC to rodzaj szyfrowania używanego w protokołach internetowych.",
          "correct": 0
        },
        {
          "text": "RFC to narzędzie do monitorowania ruchu sieciowego.",
          "correct": 0
        },
        {
          "text": "RFC to standard dla połączeń bezprzewodowych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jak działa multipleksacja asynchroniczna w komutacji pakietów?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "W multipleksacji asynchronicznej pakiety od różnych użytkowników dzielą łącze bez ustalonego wzorca czasowego, co pozwala na dynamiczne wykorzystanie przepustowości w zależności od potrzeb.",
          "correct": 1
        },
        {
          "text": "Multipleksacja asynchroniczna wymaga stałego podziału czasu między użytkowników.",
          "correct": 0
        },
        {
          "text": "Multipleksacja asynchroniczna jest mniej efektywna niż multipleksacja synchroniczna.",
          "correct": 0
        },
        {
          "text": "Multipleksacja asynchroniczna jest stosowana tylko w sieciach przewodowych.",
          "correct": 0
        },
        {
          "text": "Multipleksacja asynchroniczna zapewnia gwarantowaną przepustowość dla każdego użytkownika.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne rodzaje kabli miedzianych używanych w sieciach lokalnych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Skrętka kategorii 3 (Kategoria 3): tradycyjne druty telefoniczne, Ethernet 10 Mb/s.",
          "correct": 1
        },
        {
          "text": "Skrętka kategorii 5 (Kategoria 5 TP): Ethernet 100 Mb/s.",
          "correct": 1
        },
        {
          "text": "Skrętka kategorii 6 (Kategoria 6): Gigabit Ethernet.",
          "correct": 0
        },
        {
          "text": "Różne rodzaje kabli: UTP, FTP, S-FTP, STP.",
          "correct": 1
        },
        {
          "text": "Kabel koncentryczny RG-6.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne zalety używania światłowodu w sieciach komputerowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Wysoka szybkość transmisji (np. 5 Gb/s).",
          "correct": 1
        },
        {
          "text": "Mała stopa błędów.",
          "correct": 1
        },
        {
          "text": "Odporność na zakłócenia.",
          "correct": 1
        },
        {
          "text": "Możliwość stosowania wzmacniaczy daleko od siebie.",
          "correct": 1
        },
        {
          "text": "Niska cena instalacji.",
          "correct": 0
        },
        {
          "text": "Łatwość w instalacji w porównaniu do kabli miedzianych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest traceroute i do czego służy?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Traceroute to program służący do mierzenia opóźnień pakietów na ścieżce od źródła do celu przez Internet, pokazujący kolejne rutery i czas odpowiedzi dla każdego z nich.",
          "correct": 1
        },
        {
          "text": "Traceroute jest używany do monitorowania ruchu sieciowego w czasie rzeczywistym.",
          "correct": 0
        },
        {
          "text": "Traceroute służy do szyfrowania danych przesyłanych przez sieć.",
          "correct": 0
        },
        {
          "text": "Traceroute automatycznie naprawia uszkodzone połączenia sieciowe.",
          "correct": 0
        },
        {
          "text": "Traceroute jest protokołem warstwy aplikacji używanym w sieciach bezprzewodowych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne cele komunikacji bezpołączeniowej w sieciach komputerowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Komunikacja hostów bez ustanawiania stałego połączenia, co pozwala na szybsze przesyłanie danych, ale bez gwarancji niezawodności.",
          "correct": 1
        },
        {
          "text": "Zapewnienie gwarantowanej przepustowości dla każdego połączenia.",
          "correct": 0
        },
        {
          "text": "Umożliwienie transmisji danych w czasie rzeczywistym.",
          "correct": 0
        },
        {
          "text": "Redukcja opóźnień w transmisji danych.",
          "correct": 0
        },
        {
          "text": "Zwiększenie bezpieczeństwa przesyłanych danych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne elementy sieci szkieletowej dostawców poziomu 1?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Dostawcy poziomu 1 (np. TP S.A., Sprint, AT&T) łączą się ze sobą prywatnie lub poprzez publiczne punkty dostępu do sieci (NAPs).",
          "correct": 1
        },
        {
          "text": "Sieć szkieletowa jest zgrubnie hierarchiczna, z dostawcami poziomu 1 w centrum.",
          "correct": 1
        },
        {
          "text": "Dostawcy poziomu 1 są odpowiedzialni za dostarczanie usług końcowym użytkownikom.",
          "correct": 0
        },
        {
          "text": "Sieć szkieletowa dostawców poziomu 1 korzysta głównie z technologii bezprzewodowych.",
          "correct": 0
        },
        {
          "text": "Dostawcy poziomu 1 nie współpracują z dostawcami poziomu 2.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są funkcje warstwy prezentacji w modelu OSI?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Obsługuje konwersje danych dla aplikacji, takie jak szyfrowanie, adaptacja zawartości, tłumaczenie, zmiana kodowania.",
          "correct": 1
        },
        {
          "text": "Zarządza sesjami komunikacyjnymi między aplikacjami.",
          "correct": 0
        },
        {
          "text": "Odpowiada za adresowanie i routing pakietów.",
          "correct": 0
        },
        {
          "text": "Kontroluje przepływ danych między warstwami.",
          "correct": 0
        },
        {
          "text": "Zapewnia fizyczne połączenie między urządzeniami.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Czym jest Erlang i jak jest stosowany w kontekście oczekiwania w kolejce?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Erlang to jednostka intensywności ruchu w sieciach, obliczana jako La/R (gdzie L to długość pakietu, a a to średnia szybkość przybywania pakietów). Używana do oceny średniego oczekiwania w kolejce.",
          "correct": 1
        },
        {
          "text": "Erlang to język programowania używany do tworzenia aplikacji sieciowych.",
          "correct": 0
        },
        {
          "text": "Erlang to protokół warstwy transportu używany w sieciach telefonicznych.",
          "correct": 0
        },
        {
          "text": "Erlang to narzędzie do monitorowania ruchu sieciowego.",
          "correct": 0
        },
        {
          "text": "Erlang jest metodą szyfrowania danych w sieciach komputerowych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne aplikacje korzystające z protokołu TCP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "HTTP (WWW)",
          "correct": 1
        },
        {
          "text": "FTP (transfer plików)",
          "correct": 1
        },
        {
          "text": "Telnet (zdalny login)",
          "correct": 1
        },
        {
          "text": "SMTP (poczta elektroniczna)",
          "correct": 1
        },
        {
          "text": "DNS",
          "correct": 0
        },
        {
          "text": "DHCP",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne typy sieci dostępowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Domowe sieci dostępowe",
          "correct": 1
        },
        {
          "text": "Instytucjonalne sieci dostępowe (szkoła, firma)",
          "correct": 1
        },
        {
          "text": "Mobilne sieci dostępowe",
          "correct": 1
        },
        {
          "text": "Sieci bezprzewodowe satelitarne",
          "correct": 0
        },
        {
          "text": "Sieci peer-to-peer",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne elementy sieci lokalnej (LAN) w instytucjach?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Systemy końcowe połączone z ruterem.",
          "correct": 1
        },
        {
          "text": "Ethernet jako główna technologia łącza.",
          "correct": 1
        },
        {
          "text": "Możliwość stosowania dedykowanych lub współdzielonych łączy.",
          "correct": 1
        },
        {
          "text": "Użycie protokołu IPv6 zamiast IPv4.",
          "correct": 0
        },
        {
          "text": "Stosowanie bezprzewodowych punktów dostępowych jako jedynego medium.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne rodzaje łącz radiowych stosowanych w sieciach bezprzewodowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Mikrofale (np. do 45 Mb/s)",
          "correct": 1
        },
        {
          "text": "Sieci lokalne LAN (np. 2 Mb/s, 11 Mb/s, 54 Mb/s)",
          "correct": 1
        },
        {
          "text": "Sieci rozległe (komórkowe, np. 3G: około 100 kb/s)",
          "correct": 1
        },
        {
          "text": "Satelitarne (kanały do 50 Mb/s, opóźnienie około 270 ms)",
          "correct": 1
        },
        {
          "text": "Sieci Bluetooth",
          "correct": 0
        },
        {
          "text": "Sieci Zigbee",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest HFC w kontekście modemu optycznego?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "HFC (Hybrid Fiber Coax) to połączenie sieci miedzianej i światłowodowej, które łączy domy z ruterem DI, umożliwiając asymetryczne prędkości transmisji danych.",
          "correct": 1
        },
        {
          "text": "HFC to protokół używany do zarządzania sieciami bezprzewodowymi.",
          "correct": 0
        },
        {
          "text": "HFC to standard dla połączeń satelitarnych w sieciach komputerowych.",
          "correct": 0
        },
        {
          "text": "HFC to technologia używana wyłącznie w sieciach lokalnych.",
          "correct": 0
        },
        {
          "text": "HFC to narzędzie do monitorowania przepustowości sieci.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne warstwy modelu OSI, które nie występują w stosie protokołów TCP/IP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Warstwa prezentacji",
          "correct": 1
        },
        {
          "text": "Warstwa sesji",
          "correct": 1
        },
        {
          "text": "Warstwa aplikacji",
          "correct": 0
        },
        {
          "text": "Warstwa transportu",
          "correct": 0
        },
        {
          "text": "Warstwa fizyczna",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne funkcje protokołu DNS?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Protokół DNS (Domain Name System) służy do tłumaczenia nazw domenowych na adresy IP.",
          "correct": 1
        },
        {
          "text": "DNS zarządza sesjami komunikacyjnymi między serwerami.",
          "correct": 0
        },
        {
          "text": "DNS jest używany do szyfrowania danych przesyłanych przez Internet.",
          "correct": 0
        },
        {
          "text": "DNS kontroluje przepływ danych między warstwami sieci.",
          "correct": 0
        },
        {
          "text": "DNS jest protokołem warstwy transportu.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie były kluczowe zasady intersieci Cerfa i Kahna?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Minimalizm i autonomia: wewnętrzne zmiany nie są potrzebne, żeby łączyć sieci.",
          "correct": 1
        },
        {
          "text": "Model usług best-effort.",
          "correct": 1
        },
        {
          "text": "Rutery bezstanowe.",
          "correct": 1
        },
        {
          "text": "Rozproszone sterowanie.",
          "correct": 1
        },
        {
          "text": "Centralne zarządzanie ruchem sieciowym.",
          "correct": 0
        },
        {
          "text": "Użycie wirtualnych kanałów do transmisji danych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne źródła strat pakietów w sieciach komputerowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Straty pakietów występują, gdy pakiet przybywa do pełnego bufora w ruterze i jest wyrzucany.",
          "correct": 1
        },
        {
          "text": "Straty pakietów są wynikiem błędów w kodowaniu danych.",
          "correct": 0
        },
        {
          "text": "Straty pakietów są spowodowane zakłóceniami elektromagnetycznymi.",
          "correct": 0
        },
        {
          "text": "Straty pakietów wynikają z niewłaściwej konfiguracji adresów IP.",
          "correct": 0
        },
        {
          "text": "Straty pakietów są efektem opóźnień propagacji.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są zalety komutacji pakietów?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Współdzielenie zasobów.",
          "correct": 1
        },
        {
          "text": "Prostsza architektura bez konieczności tworzenia kanałów.",
          "correct": 1
        },
        {
          "text": "Zwiększenie liczby użytkowników sieci.",
          "correct": 1
        },
        {
          "text": "Gwarantowana przepustowość dla każdego użytkownika.",
          "correct": 0
        },
        {
          "text": "Lepsza jakość usług w porównaniu do komutacji kanałów.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne wyzwania związane z komutacją pakietów?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Opóźnienia i straty pakietów przy dużym przeciążeniu sieci.",
          "correct": 1
        },
        {
          "text": "Potrzeba protokołów do zapewnienia niezawodnej komunikacji danych.",
          "correct": 1
        },
        {
          "text": "Wysokie koszty infrastruktury sieciowej.",
          "correct": 0
        },
        {
          "text": "Trudność w zarządzaniu adresacją IP.",
          "correct": 0
        },
        {
          "text": "Ograniczona skalowalność sieci.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest model klient-serwer i jakie ma zastosowania w sieciach komputerowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Model klient-serwer to architektura, w której klient (np. przeglądarka) żąda usług od serwera (np. serwera WWW), który je dostarcza. Stosowany jest w aplikacjach takich jak WWW, email.",
          "correct": 1
        },
        {
          "text": "Model klient-serwer wymaga, aby każdy klient mógł pełnić rolę serwera.",
          "correct": 0
        },
        {
          "text": "Model klient-serwer jest używany wyłącznie w sieciach lokalnych.",
          "correct": 0
        },
        {
          "text": "Model klient-serwer nie obsługuje wielu klientów jednocześnie.",
          "correct": 0
        },
        {
          "text": "Model klient-serwer nie jest stosowany w aplikacjach internetowych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne elementy infrastruktury komunikacyjnej w sieciach komputerowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Aplikacje i hosty (brzeg sieci)",
          "correct": 1
        },
        {
          "text": "Rutery i sieć szkieletowa",
          "correct": 1
        },
        {
          "text": "Sieci dostępowe i media fizyczne",
          "correct": 1
        },
        {
          "text": "Firewall i systemy IDS",
          "correct": 0
        },
        {
          "text": "Serwery baz danych",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne zadania ruterów w sieci Internet?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Rutery pośredniczą w przesyłaniu pakietów między różnymi sieciami, określając najkrótsze lub najbardziej optymalne ścieżki dla pakietów danych.",
          "correct": 1
        },
        {
          "text": "Rutery zarządzają adresacją IP w sieci lokalnej.",
          "correct": 0
        },
        {
          "text": "Rutery szyfrują dane przesyłane przez sieć.",
          "correct": 0
        },
        {
          "text": "Rutery kontrolują dostęp użytkowników do sieci.",
          "correct": 0
        },
        {
          "text": "Rutery monitorują ruch sieciowy w czasie rzeczywistym.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne typy protokołów transportowych w sieciach komputerowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "TCP (Transmission Control Protocol)",
          "correct": 1
        },
        {
          "text": "UDP (User Datagram Protocol)",
          "correct": 1
        },
        {
          "text": "ICMP (Internet Control Message Protocol)",
          "correct": 0
        },
        {
          "text": "IGMP (Internet Group Management Protocol)",
          "correct": 0
        },
        {
          "text": "SCTP (Stream Control Transmission Protocol)",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne różnice między Ethernet a WiFi?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Ethernet jest przewodowym standardem sieci lokalnej (LAN), oferującym wyższą przepustowość i stabilność.",
          "correct": 1
        },
        {
          "text": "WiFi jest bezprzewodowym standardem sieci lokalnej, zapewniającym większą mobilność, ale niższą przepustowość i podatność na zakłócenia.",
          "correct": 1
        },
        {
          "text": "Ethernet nie wspiera protokołów TCP/IP.",
          "correct": 0
        },
        {
          "text": "WiFi oferuje lepszą jakość usług niż Ethernet.",
          "correct": 0
        },
        {
          "text": "Ethernet jest używany tylko w sieciach rozległych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest przełącznik (switch) w sieciach Ethernet?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Przełącznik (switch) to urządzenie sieciowe, które łączy urządzenia w sieci lokalnej, przesyłając pakiety tylko do docelowego urządzenia na podstawie adresów MAC.",
          "correct": 1
        },
        {
          "text": "Przełącznik (switch) działa na warstwie sieciowej modelu OSI.",
          "correct": 0
        },
        {
          "text": "Przełącznik (switch) jest używany do zarządzania adresacją IP w sieci lokalnej.",
          "correct": 0
        },
        {
          "text": "Przełącznik (switch) zapewnia bezprzewodową łączność między urządzeniami.",
          "correct": 0
        },
        {
          "text": "Przełącznik (switch) jest używany do szyfrowania danych w sieci Ethernet.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne zalety używania światłowodu w porównaniu do kabli miedzianych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Światłowód oferuje wyższą szybkość transmisji, mniejszą stopę błędów, większą odporność na zakłócenia oraz możliwość przesyłania danych na większe odległości bez utraty jakości sygnału.",
          "correct": 1
        },
        {
          "text": "Światłowód jest tańszy w instalacji niż kable miedziane.",
          "correct": 0
        },
        {
          "text": "Światłowód jest bardziej elastyczny i łatwiejszy do zainstalowania w porównaniu do kabli miedzianych.",
          "correct": 0
        },
        {
          "text": "Światłowód zużywa mniej energii niż kable miedziane.",
          "correct": 0
        },
        {
          "text": "Światłowód nie wymaga wzmacniaczy na długich dystansach.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest ADSL i jakie są jego główne cechy?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "ADSL (Asymmetric Digital Subscriber Line) to technologia szerokopasmowego dostępu do Internetu, oferująca asymetryczną przepustowość – wyższe prędkości pobierania danych (z sieci) niż wysyłania.",
          "correct": 1
        },
        {
          "text": "ADSL jest technologią bezprzewodowego dostępu do Internetu.",
          "correct": 0
        },
        {
          "text": "ADSL oferuje symetryczne prędkości pobierania i wysyłania danych.",
          "correct": 0
        },
        {
          "text": "ADSL jest używany głównie w sieciach satelitarnych.",
          "correct": 0
        },
        {
          "text": "ADSL nie wymaga użycia modemu.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne elementy struktury Internetu na poziomie dostawców?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Dostawcy poziomu 1: globalni dostawcy sieci szkieletowej.",
          "correct": 1
        },
        {
          "text": "Dostawcy poziomu 2: regionalni dostawcy, klienci dostawców poziomu 1.",
          "correct": 1
        },
        {
          "text": "Dostawcy poziomu 3 i lokalni DI: sieci dostępowe, klienci wyższych poziomów.",
          "correct": 1
        },
        {
          "text": "Dostawcy poziomu 4: dostawcy usług aplikacyjnych.",
          "correct": 0
        },
        {
          "text": "Dostawcy poziomu 5: dostawcy usług chmurowych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne funkcje protokołu IP w stosie TCP/IP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Protokół IP (Internet Protocol) odpowiada za ruting pakietów od nadawcy do odbiorcy w sieci, umożliwiając komunikację między różnymi sieciami.",
          "correct": 1
        },
        {
          "text": "Protokół IP zapewnia niezawodną transmisję danych między hostami.",
          "correct": 0
        },
        {
          "text": "Protokół IP zarządza sesjami komunikacyjnymi między aplikacjami.",
          "correct": 0
        },
        {
          "text": "Protokół IP jest używany do szyfrowania danych przesyłanych przez Internet.",
          "correct": 0
        },
        {
          "text": "Protokół IP kontroluje przepływ danych między warstwami sieci.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest HFC i gdzie jest stosowane?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "HFC (Hybrid Fiber Coax) to rodzaj sieci optycznej łączącej włókno światłowodowe z przewodami koncentrycznymi miedzi, stosowany głównie w sieciach kablowych do dostarczania usług internetowych i telewizyjnych.",
          "correct": 1
        },
        {
          "text": "HFC to protokół używany w sieciach bezprzewodowych do zarządzania ruchem.",
          "correct": 0
        },
        {
          "text": "HFC to standard dla połączeń satelitarnych w sieciach komputerowych.",
          "correct": 0
        },
        {
          "text": "HFC jest używany wyłącznie w sieciach lokalnych.",
          "correct": 0
        },
        {
          "text": "HFC to narzędzie do monitorowania przepustowości sieci.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne typy sygnałów propagowanych w mediach bezprzewodowych?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Sygnały radiowe",
          "correct": 1
        },
        {
          "text": "Mikrofalowe",
          "correct": 1
        },
        {
          "text": "Optyczne (w przypadku sieci satelitarnych)",
          "correct": 1
        },
        {
          "text": "Sygnały podczerwone",
          "correct": 0
        },
        {
          "text": "Sygnały ultradźwiękowe",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest RTT (Round-Trip Time) i jak wpływa na komunikację w sieci?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "RTT to czas potrzebny na wysłanie pakietu z jednego punktu do drugiego i otrzymanie odpowiedzi. Wpływa na opóźnienia w komunikacji, szczególnie w protokołach wymagających potwierdzeń.",
          "correct": 1
        },
        {
          "text": "RTT to czas potrzebny na przetworzenie pakietu przez router.",
          "correct": 0
        },
        {
          "text": "RTT to czas oczekiwania pakietu w kolejce.",
          "correct": 0
        },
        {
          "text": "RTT to czas potrzebny na wysłanie wszystkich bitów pakietu.",
          "correct": 0
        },
        {
          "text": "RTT to czas, który upływa między wysłaniem a odbiorem potwierdzenia pakietu.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne cechy protokołu SMTP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "SMTP (Simple Mail Transfer Protocol) jest protokołem używanym do przesyłania wiadomości e-mail pomiędzy serwerami pocztowymi.",
          "correct": 1
        },
        {
          "text": "SMTP jest protokołem używanym do przesyłania plików w sieci.",
          "correct": 0
        },
        {
          "text": "SMTP zapewnia szyfrowanie wiadomości e-mail.",
          "correct": 0
        },
        {
          "text": "SMTP zarządza sesjami komunikacyjnymi między klientami a serwerami.",
          "correct": 0
        },
        {
          "text": "SMTP jest protokołem warstwy transportu.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne różnice między IPv4 a IPv6?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "IPv4 używa 32-bitowych adresów, co pozwala na około 4,3 miliarda unikalnych adresów.",
          "correct": 1
        },
        {
          "text": "IPv6 używa 128-bitowych adresów, umożliwiając znacznie większą liczbę unikalnych adresów.",
          "correct": 1
        },
        {
          "text": "IPv6 wprowadza ulepszenia w zakresie routingu, autokonfiguracji i bezpieczeństwa.",
          "correct": 1
        },
        {
          "text": "IPv4 oferuje lepsze wsparcie dla mobilności niż IPv6.",
          "correct": 0
        },
        {
          "text": "IPv6 jest kompatybilny wstecz z IPv4 bez żadnych dodatkowych mechanizmów.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne funkcje protokołu PPP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "PPP (Point-to-Point Protocol) umożliwia transmisję danych pomiędzy dwoma punktami, oferuje autoryzację użytkowników, kompresję danych i wielokrotne protokoły warstwy wyższej.",
          "correct": 1
        },
        {
          "text": "PPP jest używany wyłącznie w sieciach bezprzewodowych.",
          "correct": 0
        },
        {
          "text": "PPP zapewnia szyfrowanie danych przesyłanych przez Internet.",
          "correct": 0
        },
        {
          "text": "PPP jest protokołem warstwy aplikacji.",
          "correct": 0
        },
        {
          "text": "PPP kontroluje routing pakietów w sieci lokalnej.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest DHCP i jakie ma zastosowanie?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "DHCP (Dynamic Host Configuration Protocol) automatycznie przypisuje adresy IP oraz inne parametry konfiguracyjne urządzeniom w sieci lokalnej, ułatwiając zarządzanie adresacją.",
          "correct": 1
        },
        {
          "text": "DHCP jest protokołem używanym do tłumaczenia nazw domenowych na adresy IP.",
          "correct": 0
        },
        {
          "text": "DHCP zapewnia szyfrowanie danych przesyłanych w sieci.",
          "correct": 0
        },
        {
          "text": "DHCP kontroluje przepływ danych między warstwami sieci.",
          "correct": 0
        },
        {
          "text": "DHCP jest protokołem warstwy transportu.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne zadania protokołu ARP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "ARP (Address Resolution Protocol) tłumaczy adresy IP na odpowiadające im adresy MAC w sieci lokalnej.",
          "correct": 1
        },
        {
          "text": "ARP jest używany do przydzielania dynamicznych adresów IP w sieci lokalnej.",
          "correct": 0
        },
        {
          "text": "ARP zapewnia szyfrowanie danych przesyłanych w sieci.",
          "correct": 0
        },
        {
          "text": "ARP kontroluje przepływ danych między warstwami sieci.",
          "correct": 0
        },
        {
          "text": "ARP jest protokołem warstwy aplikacji.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Co to jest VLAN i jakie są jego zalety?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "VLAN (Virtual Local Area Network) pozwala na segmentację sieci fizycznej na logiczne sieci, zwiększając bezpieczeństwo, efektywność zarządzania oraz redukując ruch rozgłoszeniowy.",
          "correct": 1
        },
        {
          "text": "VLAN umożliwia bezprzewodowe połączenie urządzeń w sieci lokalnej.",
          "correct": 0
        },
        {
          "text": "VLAN jest protokołem warstwy transportu używanym w sieciach komputerowych.",
          "correct": 0
        },
        {
          "text": "VLAN zapewnia szyfrowanie danych przesyłanych w sieci lokalnej.",
          "correct": 0
        },
        {
          "text": "VLAN jest używany do dynamicznego przydzielania adresów IP w sieci lokalnej.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne zalety stosowania IPv6?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Znacznie większa pula adresów.",
          "correct": 1
        },
        {
          "text": "Uproszczony nagłówek pakietu.",
          "correct": 1
        },
        {
          "text": "Wbudowane mechanizmy bezpieczeństwa.",
          "correct": 1
        },
        {
          "text": "Ulepszone wsparcie dla mobilności i autokonfiguracji.",
          "correct": 1
        },
        {
          "text": "Lepsza kompatybilność z IPv4.",
          "correct": 0
        },
        {
          "text": "Niższe koszty implementacji w sieciach lokalnych.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne cele komunikacji w warstwie aplikacji?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Obsługa protokołów aplikacyjnych.",
          "correct": 1
        },
        {
          "text": "Udostępnianie usług sieciowych aplikacjom użytkowników.",
          "correct": 1
        },
        {
          "text": "Zapewnienie interfejsu dla aplikacji do korzystania z usług sieciowych.",
          "correct": 1
        },
        {
          "text": "Kontrola przepływu danych między aplikacjami.",
          "correct": 0
        },
        {
          "text": "Szyfrowanie danych przesyłanych przez aplikacje.",
          "correct": 0
        }
      ]
    },
    {
      "pytanie": "Jakie są główne funkcje warstwy transportu w modelu TCP/IP?",
      "alreadyGenerated": false,
      "answers": [
        {
          "text": "Zapewnienie niezawodnej transmisji danych (TCP).",
          "correct": 1
        },
        {
          "text": "Umożliwienie szybkiej transmisji danych bez gwarancji niezawodności (UDP).",
          "correct": 1
        },
        {
          "text": "Kontrola przepływu i przeciążenia.",
          "correct": 1
        },
        {
          "text": "Routing pakietów między różnymi sieciami.",
          "correct": 0
        },
        {
          "text": "Szyfrowanie danych przesyłanych przez sieć.",
          "correct": 0
        }
      ]
    },
    {
        "pytanie": "Jakie są cele warstwy aplikacji w modelu OSI?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Koncepcyjne i implementacyjne zagadnienia protokołów warstwy aplikacji",
            "correct": 1
          },
          {
            "text": "Modele usług warstwy transportu",
            "correct": 1
          },
          {
            "text": "Model klient-serwer",
            "correct": 1
          },
          {
            "text": "Model partnerski (peer-to-peer)",
            "correct": 1
          },
          {
            "text": "Poznawanie popularnych protokołów warstwy aplikacji (HTTP, FTP, SMTP/POP3/IMAP, DNS)",
            "correct": 1
          },
          {
            "text": "Programowanie aplikacji sieciowych, w tym API gniazd",
            "correct": 1
          },
          {
            "text": "Zarządzanie fizycznymi połączeniami kablowymi",
            "correct": 0
          },
          {
            "text": "Konfiguracja sprzętowa routerów",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne zagadnienia poruszane w mapie wykładu dotyczącej warstwy aplikacji?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Zasady budowy protokołów warstwy aplikacji",
            "correct": 1
          },
          {
            "text": "WWW i HTTP",
            "correct": 1
          },
          {
            "text": "DNS",
            "correct": 1
          },
          {
            "text": "Programowanie przy użyciu gniazd TCP",
            "correct": 1
          },
          {
            "text": "Programowanie przy użyciu gniazd UDP",
            "correct": 1
          },
          {
            "text": "Poczta elektroniczna (SMTP, POP3, IMAP)",
            "correct": 1
          },
          {
            "text": "FTP",
            "correct": 1
          },
          {
            "text": "Dystrybucja zawartości (schowki internetowe, sieci dystrybucji zawartości)",
            "correct": 1
          },
          {
            "text": "Dzielenie plików P2P",
            "correct": 1
          },
          {
            "text": "Zarządzanie fizycznymi połączeniami sieciowymi",
            "correct": 0
          },
          {
            "text": "Konfiguracja sprzętu sieciowego",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są podstawowe składniki procesu komunikującego się przez sieć?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Program działający na hoście",
            "correct": 1
          },
          {
            "text": "Komunikacja międzyprocesowa na jednym hoście",
            "correct": 1
          },
          {
            "text": "Procesy na różnych hostach komunikujące się protokołem warstwy aplikacji",
            "correct": 1
          },
          {
            "text": "Agent (user agent) komunikujący się z użytkownikiem i siecią (np. przeglądarka WWW, program pocztowy, odtwarzacz multimediów)",
            "correct": 1
          },
          {
            "text": "Zarządzanie sprzętem sieciowym",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Czym są protokoły warstwy aplikacji i jakie mają funkcje?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "\"Kawałek\" aplikacji",
            "correct": 1
          },
          {
            "text": "Definiują komunikaty i akcje aplikacji",
            "correct": 1
          },
          {
            "text": "Używają usług komunikacyjnych niższej warstwy (TCP, UDP)",
            "correct": 1
          },
          {
            "text": "Zarządzają fizycznymi połączeniami kablowymi",
            "correct": 0
          },
          {
            "text": "Optymalizują przepustowość sieci",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są różnice między protokołami publicznymi a prywatnymi?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Protokoły publiczne są definiowane w dokumentach Request for Comments (RFC) i umożliwiają współpracę różnych systemów (np. HTTP, SMTP)",
            "correct": 1
          },
          {
            "text": "Protokoły prywatne są stosowane w określonych aplikacjach, często o charakterze zamkniętym (np. KaZaA)",
            "correct": 1
          },
          {
            "text": "Protokoły publiczne są szyfrowane, a prywatne nie",
            "correct": 0
          },
          {
            "text": "Protokoły prywatne są bardziej skalowalne niż publiczne",
            "correct": 0
          },
          {
            "text": "Protokoły publiczne działają tylko w środowiskach otwartych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak działa model klient-serwer w kontekście aplikacji sieciowych?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Klient rozpoczyna komunikację z serwerem, zwykle prosząc o usługę serwera",
            "correct": 1
          },
          {
            "text": "Typowa aplikacja sieciowa ma dwie części: klienta i serwera",
            "correct": 1
          },
          {
            "text": "Serwer udostępnia żądaną usługę klientowi (np. serwer WWW wysyła żądaną stronę, serwer poczty dostarcza pocztę)",
            "correct": 1
          },
          {
            "text": "Serwer inicjuje komunikację z klientem bez żądania",
            "correct": 0
          },
          {
            "text": "Klient i serwer działają na tym samym urządzeniu fizycznym",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są rozwinięcia modelu klient-serwer?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Dodatkowe etapy pośrednie: płaszczyzny (multi-tier architecture), gdzie aplikacja jest podzielona na kilka warstw, takich jak serwer aplikacyjny, serwer bazy danych, serwer pośrednik",
            "correct": 1
          },
          {
            "text": "Integracja z sieciami bezprzewodowymi",
            "correct": 0
          },
          {
            "text": "Zastosowanie protokołów peer-to-peer zamiast tradycyjnego klient-serwer",
            "correct": 0
          },
          {
            "text": "Eliminacja serwera w celu zwiększenia wydajności",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne funkcje gniazd w programowaniu aplikacji sieciowych?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Gniazdo jest interfejsem, przez który proces aplikacji może wysyłać i odbierać komunikaty od/do innego procesu aplikacji",
            "correct": 1
          },
          {
            "text": "Gniazda są tworzone, używane i zwalniane przez aplikacje",
            "correct": 1
          },
          {
            "text": "W modelu klient-serwer, gniazda umożliwiają komunikację przez protokoły transportowe, takie jak TCP czy UDP",
            "correct": 1
          },
          {
            "text": "Gniazda zarządzają fizycznym połączeniem kablowym",
            "correct": 0
          },
          {
            "text": "Gniazda służą do przechowywania danych tymczasowych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie elementy składają się na adresowanie procesów w sieciach komputerowych?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Każdy host ma unikatowy 32-bitowy adres IP",
            "correct": 1
          },
          {
            "text": "Adres IP hosta nie wystarcza do identyfikacji procesu, ponieważ wiele procesów może działać na jednym hoście",
            "correct": 1
          },
          {
            "text": "Identyfikator procesu zawiera adres IP oraz numer portu związany z procesem na hoście",
            "correct": 1
          },
          {
            "text": "Adres MAC jest wystarczający do identyfikacji procesu",
            "correct": 0
          },
          {
            "text": "Procesy są identyfikowane tylko przez nazwy hostów",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są wymagania aplikacji dotyczące transportu danych w sieciach komputerowych?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Straty: niektóre aplikacje tolerują pewną ilość strat (np. audio), inne wymagają 100% niezawodności (np. transfer plików, telnet)",
            "correct": 1
          },
          {
            "text": "Opóźnienie: niektóre aplikacje wymagają niskich opóźnień (np. telefonia internetowa, gry interaktywne)",
            "correct": 1
          },
          {
            "text": "Przepustowość: niektóre aplikacje (np. audio/wideo) wymagają minimalnej przepustowości, inne mogą korzystać z elastycznej przepustowości",
            "correct": 1
          },
          {
            "text": "Zarządzanie adresami MAC",
            "correct": 0
          },
          {
            "text": "Optymalizacja tras pakietów",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy usługi TCP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Połączeniowa: wymaga inicjalizacji połączenia pomiędzy procesami",
            "correct": 1
          },
          {
            "text": "Niezawodna komunikacja pomiędzy procesami",
            "correct": 1
          },
          {
            "text": "Kontrola przepływu: nadawca nie przeciąży odbiorcy",
            "correct": 1
          },
          {
            "text": "Kontrola przeciążenia: nadawca zwolni, jeśli sieć zostanie przeciążona",
            "correct": 1
          },
          {
            "text": "Nie udostępnia informacji o czasie ani gwarancji minimalnej przepustowości",
            "correct": 1
          },
          {
            "text": "Brak kontroli błędów w transmisji danych",
            "correct": 0
          },
          {
            "text": "Działa tylko w trybie bezpołączeniowym",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są cechy usługi UDP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Zawodna komunikacja pomiędzy procesami",
            "correct": 1
          },
          {
            "text": "Nie udostępnia: tworzenia połączenia, niezawodności, kontroli przepływu, kontroli przeciążenia, informacji o czasie ani gwarancji przepustowości",
            "correct": 1
          },
          {
            "text": "Działa w trybie połączeniowym",
            "correct": 0
          },
          {
            "text": "Zapewnia automatyczne retransmisje utraconych pakietów",
            "correct": 0
          },
          {
            "text": "Optymalizuje przepustowość poprzez kontrolę przeciążenia",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Dlaczego istnieje usługa UDP mimo jej zawodności?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "UDP jest użyteczne dla aplikacji, które tolerują pewne straty pakietów i wymagają szybkiej transmisji danych bez dodatkowych opóźnień związanych z nawiązywaniem połączenia i kontrolą przepływu, np. dla aplikacji audio/wideo, telekonferencji",
            "correct": 1
          },
          {
            "text": "UDP zapewnia lepszą kontrolę błędów niż TCP",
            "correct": 0
          },
          {
            "text": "UDP jest bardziej bezpieczne niż TCP",
            "correct": 0
          },
          {
            "text": "UDP umożliwia tworzenie trwałych połączeń",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie aplikacje internetowe korzystają z protokołów warstw aplikacji i transportu?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "E-mail (SMTP, POP3, IMAP)",
            "correct": 1
          },
          {
            "text": "WWW (HTTP)",
            "correct": 1
          },
          {
            "text": "Dzielenie plików P2P",
            "correct": 1
          },
          {
            "text": "Komunikatory",
            "correct": 1
          },
          {
            "text": "Streaming audio/wideo",
            "correct": 1
          },
          {
            "text": "Telefonia internetowa",
            "correct": 1
          },
          {
            "text": "Zarządzanie urządzeniami IoT",
            "correct": 0
          },
          {
            "text": "Kontrola fizycznych połączeń sieciowych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne elementy struktury WWW i HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Strona WWW składa się z bazowego pliku HTML oraz obiektów (pliki HTML, obrazy JPEG, aplety Java, pliki audio)",
            "correct": 1
          },
          {
            "text": "Każdy obiekt posiada adres URL (Uniform Resource Locator)",
            "correct": 1
          },
          {
            "text": "HTTP jest protokołem warstwy aplikacji używanym w modelu klient-serwer do przesyłania obiektów między klientem a serwerem",
            "correct": 1
          },
          {
            "text": "HTTP zarządza fizycznym połączeniem kablowym",
            "correct": 0
          },
          {
            "text": "HTTP zapewnia bezpieczeństwo danych poprzez szyfrowanie",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne różnice między HTTP 1.0 a HTTP 1.1?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "HTTP 1.0 używa nietrwałego połączenia TCP, gdzie każde żądanie wymaga nowego połączenia",
            "correct": 1
          },
          {
            "text": "HTTP 1.1 domyślnie używa trwałego połączenia TCP, umożliwiając przesyłanie wielu obiektów przez jedno połączenie, co zmniejsza liczbę RTT potrzebnych do pobrania strony",
            "correct": 1
          },
          {
            "text": "HTTP 1.1 wprowadza obsługę protokołu HTTPS",
            "correct": 0
          },
          {
            "text": "HTTP 1.0 nie obsługuje metod POST i GET",
            "correct": 0
          },
          {
            "text": "HTTP 1.1 eliminuje konieczność używania nagłówków HTTP",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Co to jest RTT i jak wpływa na czas obsługi w komunikacji HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "RTT (Round-Trip Time) to czas potrzebny na przesłanie małego pakietu od nadawcy do odbiorcy i z powrotem",
            "correct": 1
          },
          {
            "text": "Czas obsługi w komunikacji HTTP jest zdefiniowany jako 2 RTT plus czas transmisji pliku (2 RTT + czas transmisji)",
            "correct": 1
          },
          {
            "text": "RTT nie ma wpływu na czas obsługi w HTTP",
            "correct": 0
          },
          {
            "text": "RTT odnosi się do czasu potrzebnego na zbudowanie połączenia TCP",
            "correct": 0
          },
          {
            "text": "RTT zwiększa przepustowość sieci",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne metody HTTP/1.0 i HTTP/1.1?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "HTTP/1.0: GET, POST, HEAD",
            "correct": 1
          },
          {
            "text": "HTTP/1.1: GET, POST, HEAD, PUT, DELETE",
            "correct": 1
          },
          {
            "text": "HTTP/1.0: CONNECT, TRACE",
            "correct": 0
          },
          {
            "text": "HTTP/1.1: OPTIONS, PATCH",
            "correct": 0
          },
          {
            "text": "HTTP/1.0 i HTTP/1.1 mają identyczne metody",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak wygląda ogólny format komunikatu żądania HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Metoda sp URL sp wersja CR LF",
            "correct": 1
          },
          {
            "text": "Nazwa nagłówka : wartość CR LF",
            "correct": 1
          },
          {
            "text": "Nazwa nagłówka : wartość CR LF",
            "correct": 1
          },
          {
            "text": "CR LF",
            "correct": 1
          },
          {
            "text": "Dane żądania",
            "correct": 1
          },
          {
            "text": "Dodanie nagłówka Content-Length na początku komunikatu",
            "correct": 0
          },
          {
            "text": "Użycie kodowania base64 dla danych żądania",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak działa interfejs CGI w kontekście WWW?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Strony WWW często zawierają formularze",
            "correct": 1
          },
          {
            "text": "Dane z formularzy są przekazywane przez serwer WWW do skryptów",
            "correct": 1
          },
          {
            "text": "Metoda POST przesyła zawartość formularza w danych żądania",
            "correct": 1
          },
          {
            "text": "Kodowanie w URL używa metody GET, gdzie zawartość formularza jest kodowana w adresie URL żądania",
            "correct": 1
          },
          {
            "text": "CGI zapewnia szyfrowanie danych przesyłanych z formularzy",
            "correct": 0
          },
          {
            "text": "Interfejs CGI działa tylko z protokołem HTTPS",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są najczęściej używane metody HTTP/1.0?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "GET: prosi serwer o posłanie odpowiedzi bez żądanego obiektu (danych)",
            "correct": 1
          },
          {
            "text": "POST: wysyła plik w danych żądania, który zostanie umieszczony pod adresem URL (ścieżką)",
            "correct": 1
          },
          {
            "text": "HEAD: prosi serwer o posłanie odpowiedzi bez żądanego obiektu (danych)",
            "correct": 1
          },
          {
            "text": "PUT: aktualizuje istniejący zasób na serwerze",
            "correct": 0
          },
          {
            "text": "DELETE: usuwa zasób z serwera",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne różnice między metodami GET a POST w HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "GET przesyła dane w adresie URL żądania, co jest mniej bezpieczne i ma ograniczenia długości danych",
            "correct": 1
          },
          {
            "text": "POST przesyła dane w ciele żądania, co jest bardziej bezpieczne i umożliwia przesyłanie większych ilości danych",
            "correct": 1
          },
          {
            "text": "GET może być używany tylko do pobierania danych, a POST tylko do wysyłania",
            "correct": 0
          },
          {
            "text": "POST jest szybszy niż GET",
            "correct": 0
          },
          {
            "text": "GET wymaga autoryzacji, a POST nie",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy komunikatu odpowiedzi HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Pierwsza linia zawiera linię statusu (kod statusu i opis)",
            "correct": 1
          },
          {
            "text": "Linie nagłówków zawierają informacje takie jak Connection, Date, Server, Content-Length, Content-Type",
            "correct": 1
          },
          {
            "text": "Dane odpowiedzi zawierają żądany obiekt (np. plik HTML)",
            "correct": 1
          },
          {
            "text": "Komunikat odpowiedzi zawsze zawiera dane w formacie JSON",
            "correct": 0
          },
          {
            "text": "Linie nagłówków są opcjonalne i nie zawsze obecne",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są kody statusu odpowiedzi HTTP i co oznaczają?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "200 OK: żądanie pomyślnie obsłużone, żądany obiekt jest w danych odpowiedzi",
            "correct": 1
          },
          {
            "text": "301 Moved Permanently: żądany obiekt przeniesiony, nowy adres w nagłówku (Location:)",
            "correct": 1
          },
          {
            "text": "400 Bad Request: komunikat żądania nie został zrozumiany przez serwer (błąd składni)",
            "correct": 1
          },
          {
            "text": "404 Not Found: żądanego obiektu nie ma na serwerze",
            "correct": 1
          },
          {
            "text": "505 HTTP Version Not Supported: wersja HTTP nie jest obsługiwana przez serwer",
            "correct": 1
          },
          {
            "text": "302 Found: tymczasowe przekierowanie, nowe miejsce podawane w nagłówku (Location:)",
            "correct": 0
          },
          {
            "text": "503 Service Unavailable: serwer jest tymczasowo niedostępny",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne składniki procesu wysyłania poczty elektronicznej przez SMTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Agenci użytkownika (np. programy pocztowe: Eudora, Outlook, etc.)",
            "correct": 1
          },
          {
            "text": "Serwery poczty",
            "correct": 1
          },
          {
            "text": "Protokół SMTP do wysyłania poczty między serwerami pocztowymi",
            "correct": 1
          },
          {
            "text": "Protokół POP3 do odbierania poczty",
            "correct": 0
          },
          {
            "text": "Interakcja typu \"polecenie/odpowiedź\", komunikaty muszą być kodowane w 7-bitowym ASCII",
            "correct": 0
          },
          {
            "text": "Przykładowa interakcja: klient SMTP wysyła komunikaty HELO, MAIL FROM, RCPT TO, DATA, QUIT do serwera SMTP",
            "correct": 1
          }
        ]
      },
      {
        "pytanie": "Jakie są główne funkcje serwerów poczty w systemie poczty elektronicznej?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Skrzynka zawiera wiadomości przychodzące od użytkowników",
            "correct": 1
          },
          {
            "text": "Kolejka wiadomości zawiera wiadomości do wysłania",
            "correct": 1
          },
          {
            "text": "Protokół SMTP wysyła pocztę między serwerami poczty w modelu partnerskim (peer-to-peer)",
            "correct": 1
          },
          {
            "text": "Serwery poczty przechowują dane użytkowników w bazach SQL",
            "correct": 0
          },
          {
            "text": "Serwery poczty zarządzają fizycznym przechowywaniem plików na dyskach twardych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak działa protokół POP3 i jakie są jego główne funkcje?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "POP3 umożliwia pobieranie poczty z serwera poczty",
            "correct": 1
          },
          {
            "text": "Etapy: uwierzytelnienie (polecenia USER i PASS), transakcja (polecenia LIST, RETR, DELE, QUIT)",
            "correct": 1
          },
          {
            "text": "Tryby: \"pobierz i usuń\", \"pobierz i zostaw\"",
            "correct": 1
          },
          {
            "text": "POP3 jest bezstanowy pomiędzy sesjami",
            "correct": 1
          },
          {
            "text": "POP3 umożliwia zarządzanie folderami na serwerze",
            "correct": 0
          },
          {
            "text": "POP3 zapewnia synchronizację poczty pomiędzy wieloma urządzeniami",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak działa protokół IMAP i jakie ma zalety w porównaniu do POP3?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "IMAP pozwala na synchronizację lokalnej skrzynki pocztowej z serwerem",
            "correct": 1
          },
          {
            "text": "Umożliwia organizowanie poczty w foldery",
            "correct": 1
          },
          {
            "text": "IMAP zachowuje stan użytkownika pomiędzy sesjami (np. nazwy folderów i przyporządkowanie listów do folderów)",
            "correct": 1
          },
          {
            "text": "IMAP usuwa wiadomości z serwera po ich pobraniu",
            "correct": 0
          },
          {
            "text": "IMAP nie obsługuje załączników multimedialnych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne elementy protokołu SMTP według RFC 2821?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Używa TCP do niezawodnej komunikacji poczty między serwerami na porcie 25",
            "correct": 1
          },
          {
            "text": "Komunikacja odbywa się w trzech etapach: inicjalizacja (powitanie), wymiana komunikatów (polecenia i odpowiedzi), zakończenie",
            "correct": 1
          },
          {
            "text": "Interakcja typu \"polecenie/odpowiedź\", komunikaty muszą być kodowane w 7-bitowym ASCII",
            "correct": 1
          },
          {
            "text": "SMTP używa protokołu UDP do przesyłania danych",
            "correct": 0
          },
          {
            "text": "SMTP nie obsługuje uwierzytelniania użytkowników",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne składniki wiadomości e-mail zgodnie ze standardem RFC 822?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Linie nagłówków (np. To:, From:, Subject:)",
            "correct": 1
          },
          {
            "text": "Dane wiadomości (tekst, tylko znaki ASCII)",
            "correct": 1
          },
          {
            "text": "Załączniki multimedialne bez dodatkowych nagłówków",
            "correct": 0
          },
          {
            "text": "Brak rozdzielenia między nagłówkami a danymi wiadomości",
            "correct": 0
          },
          {
            "text": "Pusta linia oddziela nagłówki od danych",
            "correct": 1
          }
        ]
      },
      {
        "pytanie": "Co to jest MIME i jakie rozszerzenia wprowadza dla wiadomości e-mail?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "MIME (Multipurpose Internet Mail Extensions) rozszerza standard RFC 822 o obsługę multimediów",
            "correct": 1
          },
          {
            "text": "Dodaje dodatkowe linie nagłówka określające typ MIME, sposób kodowania danych (np. base64)",
            "correct": 1
          },
          {
            "text": "Pozwala na przesyłanie różnych typów danych multimedialnych, takich jak obrazy, dźwięk, wideo oraz dane aplikacji",
            "correct": 1
          },
          {
            "text": "MIME eliminuje konieczność używania nagłówków w wiadomościach e-mail",
            "correct": 0
          },
          {
            "text": "MIME jest protokołem transportowym zastępującym SMTP",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne typy danych obsługiwanych przez MIME?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Tekst (np. plain, html)",
            "correct": 1
          },
          {
            "text": "Obraz (np. jpeg, gif)",
            "correct": 1
          },
          {
            "text": "Dźwięk (np. basic, 32kadpcm)",
            "correct": 1
          },
          {
            "text": "Wideo (np. mpeg, quicktime)",
            "correct": 1
          },
          {
            "text": "Dane aplikacji (np. msword, octet-stream)",
            "correct": 1
          },
          {
            "text": "Zarządzanie fizycznymi połączeniami sieciowymi",
            "correct": 0
          },
          {
            "text": "Kontrola przepływu danych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy typu multipart w MIME?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Pozwalają na załączanie wielu obiektów w jednej wiadomości e-mail",
            "correct": 1
          },
          {
            "text": "Każdy załącznik jest oddzielony boundary określonym w nagłówku Content-Type",
            "correct": 1
          },
          {
            "text": "Umożliwia przesyłanie tekstu oraz multimediów w jednej wiadomości",
            "correct": 1
          },
          {
            "text": "Multipart wymaga oddzielnego serwera do obsługi załączników",
            "correct": 0
          },
          {
            "text": "Typ multipart automatycznie kompresuje wszystkie załączniki",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne składniki poczty elektronicznej?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Agenci użytkownika (np. programy pocztowe)",
            "correct": 1
          },
          {
            "text": "Serwery poczty",
            "correct": 1
          },
          {
            "text": "Protokół SMTP do przesyłania poczty między serwerami pocztowymi",
            "correct": 1
          },
          {
            "text": "Protokół HTTP do przesyłania wiadomości e-mail",
            "correct": 0
          },
          {
            "text": "Bazy danych do przechowywania wiadomości",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy trwałego HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Serwer zostawia otwarte połączenie po wysłaniu odpowiedzi",
            "correct": 1
          },
          {
            "text": "Kolejne komunikaty HTTP między tym samym klientem i serwerem są przesyłane na tym samym połączeniu TCP",
            "correct": 1
          },
          {
            "text": "W przypadku grupowych żądań w HTTP/1.1, tylko jeden RTT jest potrzebny dla wszystkich żądanych obiektów",
            "correct": 1
          },
          {
            "text": "Trwałe HTTP wymaga każdorazowego nawiązywania nowego połączenia",
            "correct": 0
          },
          {
            "text": "Trwałe HTTP automatycznie kompresuje wszystkie dane",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy trwałego HTTP w wersji 1.1?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Pozwala na przesyłanie wielu obiektów przez jedno połączenie TCP",
            "correct": 1
          },
          {
            "text": "Domyślnie używa trwałych połączeń, co zmniejsza liczbę RTT potrzebnych do pobrania strony",
            "correct": 1
          },
          {
            "text": "HTTP/1.1 automatycznie szyfruje wszystkie dane przesyłane przez połączenie",
            "correct": 0
          },
          {
            "text": "Trwałe HTTP w wersji 1.1 eliminuje potrzebę używania nagłówków",
            "correct": 0
          },
          {
            "text": "HTTP/1.1 nie wspiera metod POST",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy interfejsu CGI?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Umożliwia przekazywanie danych z formularzy WWW do skryptów serwera",
            "correct": 1
          },
          {
            "text": "Obsługuje metody GET i POST do przesyłania danych",
            "correct": 1
          },
          {
            "text": "Pozwala na dynamiczne generowanie treści na podstawie danych użytkownika",
            "correct": 1
          },
          {
            "text": "Interfejs CGI automatycznie szyfruje dane przesyłane z formularzy",
            "correct": 0
          },
          {
            "text": "CGI wymaga użycia protokołu FTP do przesyłania danych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne zalety używania ciasteczek w HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Umożliwiają uwierzytelnienie użytkownika",
            "correct": 1
          },
          {
            "text": "Pozwalają na zarządzanie wózkami zakupów",
            "correct": 1
          },
          {
            "text": "Umożliwiają personalizację treści i rekomendacje",
            "correct": 1
          },
          {
            "text": "Utrzymują stan sesji użytkownika",
            "correct": 1
          },
          {
            "text": "Pomagają w śledzeniu aktywności użytkownika, co ma jednak wpływ na prywatność",
            "correct": 1
          },
          {
            "text": "Ciasteczka eliminują potrzebę używania sesji po stronie serwera",
            "correct": 0
          },
          {
            "text": "Ciasteczka są wykorzystywane do szyfrowania danych przesyłanych przez HTTP",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak działa warunkowy GET w HTTP i jakie ma korzyści?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Klient wysyła żądanie HTTP z nagłówkiem If-Modified-Since z datą kopii obiektu",
            "correct": 1
          },
          {
            "text": "Serwer odpowiada HTTP/1.0 304 Not Modified, jeśli obiekt nie został zmieniony, co pozwala zaoszczędzić przepustowość",
            "correct": 1
          },
          {
            "text": "Jeśli obiekt został zmieniony, serwer wysyła HTTP/1.0 200 OK wraz z nowymi danymi",
            "correct": 1
          },
          {
            "text": "Warunkowy GET automatycznie kompresuje dane przesyłane przez serwer",
            "correct": 0
          },
          {
            "text": "Warunkowy GET wymaga nawiązywania nowego połączenia TCP dla każdego żądania",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne składniki architektury sieci kablowej HFC?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Połączenie miedziane i światłowodowe",
            "correct": 1
          },
          {
            "text": "Serwery dystrybucyjne",
            "correct": 1
          },
          {
            "text": "Dostęp współdzielony przez domy",
            "correct": 1
          },
          {
            "text": "Instalacja udostępniana przez operatorów telewizji kablowej",
            "correct": 1
          },
          {
            "text": "Bezpośrednie połączenie każdego domu z serwerem głównym",
            "correct": 0
          },
          {
            "text": "Użycie tylko technologii bezprzewodowych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne metody protokołu POP3 i jak działają?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Uwierzytelnienie: polecenia USER i PASS",
            "correct": 1
          },
          {
            "text": "Transakcja: polecenia LIST (lista wiadomości), RETR (pobierz wiadomość), DELE (usuń wiadomość), QUIT (zakończ sesję)",
            "correct": 1
          },
          {
            "text": "POP3 nie obsługuje usuwania wiadomości z serwera",
            "correct": 0
          },
          {
            "text": "POP3 umożliwia tworzenie folderów na serwerze",
            "correct": 0
          },
          {
            "text": "POP3 pozwala na synchronizację stanu wiadomości pomiędzy klientem a serwerem",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu FTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "FTP (File Transfer Protocol) umożliwia przesyłanie plików między klientem a serwerem",
            "correct": 1
          },
          {
            "text": "Obsługuje transfer plików w obu kierunkach (upload i download)",
            "correct": 1
          },
          {
            "text": "Umożliwia zarządzanie plikami na serwerze (np. tworzenie katalogów, usuwanie plików)",
            "correct": 1
          },
          {
            "text": "FTP zapewnia szyfrowanie wszystkich przesyłanych danych",
            "correct": 0
          },
          {
            "text": "FTP działa tylko w trybie bezpołączeniowym",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak działa uwierzytelnianie w HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Klient musi przedstawić informacje uwierzytelniające w każdym żądaniu poprzez nagłówek Authorization",
            "correct": 1
          },
          {
            "text": "Jeśli nagłówek Authorization nie jest obecny, serwer odmawia dostępu i wysyła nagłówek WWW-Authenticate",
            "correct": 1
          },
          {
            "text": "Uwierzytelnianie w HTTP odbywa się tylko podczas pierwszego żądania",
            "correct": 0
          },
          {
            "text": "HTTP używa protokołu SSL do uwierzytelniania użytkowników",
            "correct": 0
          },
          {
            "text": "Uwierzytelnianie w HTTP jest automatycznie zarządzane przez przeglądarkę",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu DNS?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "DNS (Domain Name System) tłumaczy nazwy domenowe na adresy IP, umożliwiając lokalizację serwerów w sieci",
            "correct": 1
          },
          {
            "text": "DNS działa na porcie 53 zarówno dla TCP, jak i UDP",
            "correct": 1
          },
          {
            "text": "DNS przechowuje dane w formacie binarnym dla szybszego dostępu",
            "correct": 0
          },
          {
            "text": "DNS obsługuje tylko zapytania typu A",
            "correct": 0
          },
          {
            "text": "DNS jest odpowiedzialny za routing pakietów w sieci",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne zalety stosowania gniazd w programowaniu aplikacji sieciowych?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Umożliwiają komunikację między procesami aplikacji przez protokoły transportowe",
            "correct": 1
          },
          {
            "text": "Pozwalają na implementację modeli klient-serwer oraz peer-to-peer",
            "correct": 1
          },
          {
            "text": "Umożliwiają użycie różnych protokołów transportowych, takich jak TCP i UDP",
            "correct": 1
          },
          {
            "text": "Gniazda zarządzają fizycznym połączeniem kablowym",
            "correct": 0
          },
          {
            "text": "Gniazda są wykorzystywane do przechowywania danych aplikacji",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak działa modelowanie czasu obsługi w komunikacji HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Definicja RTT (Round Trip Time): czas potrzebny na przesłanie małego pakietu od nadawcy do odbiorcy i z powrotem",
            "correct": 1
          },
          {
            "text": "Czas obsługi = 2 RTT + czas transmisji pliku",
            "correct": 1
          },
          {
            "text": "Modelowanie czasu obsługi nie uwzględnia RTT",
            "correct": 0
          },
          {
            "text": "Czas obsługi jest równy tylko czasowi transmisji pliku",
            "correct": 0
          },
          {
            "text": "RTT jest używany tylko w protokole TCP, a nie w HTTP",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu IMAP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Pozwala na synchronizację lokalnej skrzynki pocztowej z serwerem",
            "correct": 1
          },
          {
            "text": "Umożliwia organizowanie poczty w foldery",
            "correct": 1
          },
          {
            "text": "Zachowuje stan użytkownika pomiędzy sesjami (np. nazwy folderów i przyporządkowanie listów do folderów)",
            "correct": 1
          },
          {
            "text": "IMAP usuwa wiadomości z serwera po ich pobraniu",
            "correct": 0
          },
          {
            "text": "IMAP nie obsługuje zarządzania folderami na serwerze",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak wygląda format komunikatu poczty zgodnie ze standardem RFC 822?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Linie nagłówków (np. To:, From:, Subject:)",
            "correct": 1
          },
          {
            "text": "Dane wiadomości (tekst, tylko znaki ASCII)",
            "correct": 1
          },
          {
            "text": "Pusta linia oddziela nagłówki od danych",
            "correct": 1
          },
          {
            "text": "Wszystkie dane są kodowane w formacie JSON",
            "correct": 0
          },
          {
            "text": "Nagłówki są opcjonalne w komunikacie poczty",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy rozszerzeń MIME dla wiadomości e-mail?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "MIME rozszerza RFC 822 o obsługę multimediów",
            "correct": 1
          },
          {
            "text": "Dodaje nagłówki określające typ MIME, sposób kodowania danych (np. base64)",
            "correct": 1
          },
          {
            "text": "Umożliwia przesyłanie różnych typów danych multimedialnych, takich jak obrazy, dźwięk, wideo oraz dane aplikacji",
            "correct": 1
          },
          {
            "text": "MIME usuwa potrzebę używania nagłówków w wiadomościach e-mail",
            "correct": 0
          },
          {
            "text": "MIME jest używany do szyfrowania danych w wiadomościach e-mail",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne typy danych obsługiwanych przez MIME?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Tekst (np. plain, html)",
            "correct": 1
          },
          {
            "text": "Obraz (np. jpeg, gif)",
            "correct": 1
          },
          {
            "text": "Dźwięk (np. basic, 32kadpcm)",
            "correct": 1
          },
          {
            "text": "Wideo (np. mpeg, quicktime)",
            "correct": 1
          },
          {
            "text": "Dane aplikacji (np. msword, octet-stream)",
            "correct": 1
          },
          {
            "text": "Zarządzanie fizycznymi połączeniami sieciowymi",
            "correct": 0
          },
          {
            "text": "Kontrola przepływu danych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy typu multipart w MIME?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Pozwalają na załączanie wielu obiektów w jednej wiadomości e-mail",
            "correct": 1
          },
          {
            "text": "Każdy załącznik jest oddzielony boundary określonym w nagłówku Content-Type",
            "correct": 1
          },
          {
            "text": "Umożliwia przesyłanie tekstu oraz multimediów w jednej wiadomości",
            "correct": 1
          },
          {
            "text": "Multipart wymaga oddzielnego serwera do obsługi załączników",
            "correct": 0
          },
          {
            "text": "Typ multipart automatycznie kompresuje wszystkie załączniki",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu POP3?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Uwierzytelnienie: polecenia USER i PASS",
            "correct": 1
          },
          {
            "text": "Transakcja: polecenia LIST (lista wiadomości), RETR (pobierz wiadomość), DELE (usuń wiadomość), QUIT (zakończ sesję)",
            "correct": 1
          },
          {
            "text": "Tryby: \"pobierz i usuń\", \"pobierz i zostaw\"",
            "correct": 1
          },
          {
            "text": "POP3 jest bezstanowy pomiędzy sesjami",
            "correct": 1
          },
          {
            "text": "POP3 umożliwia zarządzanie folderami na serwerze",
            "correct": 0
          },
          {
            "text": "POP3 zapewnia synchronizację poczty pomiędzy wieloma urządzeniami",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu SMTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "SMTP używa trwałych połączeń",
            "correct": 1
          },
          {
            "text": "Wymaga, żeby komunikat (nagłówek i dane) były kodowane w 7-bitowym ASCII",
            "correct": 1
          },
          {
            "text": "Serwer SMTP używa CRLF.CRLF do rozpoznania końca danych",
            "correct": 1
          },
          {
            "text": "SMTP jest protokołem typu push, podczas gdy HTTP jest protokołem typu pull",
            "correct": 1
          },
          {
            "text": "Oba mają komunikaty żądań/odpowiedzi w ASCII, kody wynikowe",
            "correct": 1
          },
          {
            "text": "HTTP przesyła każdy obiekt w swoim własnym komunikacie odpowiedzi, SMTP może wysyłać wiele obiektów w wieloczęściowym komunikacie",
            "correct": 1
          },
          {
            "text": "SMTP automatycznie szyfruje wszystkie wiadomości e-mail",
            "correct": 0
          },
          {
            "text": "SMTP działa tylko w trybie bezpołączeniowym",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu DNS?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "DNS (Domain Name System) tłumaczy nazwy domenowe na adresy IP, umożliwiając lokalizację serwerów w sieci",
            "correct": 1
          },
          {
            "text": "DNS działa na porcie 53 zarówno dla TCP, jak i UDP",
            "correct": 1
          },
          {
            "text": "DNS przechowuje dane w formacie binarnym dla szybszego dostępu",
            "correct": 0
          },
          {
            "text": "DNS obsługuje tylko zapytania typu A",
            "correct": 0
          },
          {
            "text": "DNS jest odpowiedzialny za routing pakietów w sieci",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne zalety stosowania gniazd w programowaniu aplikacji sieciowych?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Umożliwiają komunikację między procesami aplikacji przez protokoły transportowe",
            "correct": 1
          },
          {
            "text": "Pozwalają na implementację modeli klient-serwer oraz peer-to-peer",
            "correct": 1
          },
          {
            "text": "Umożliwiają użycie różnych protokołów transportowych, takich jak TCP i UDP",
            "correct": 1
          },
          {
            "text": "Gniazda zarządzają fizycznym połączeniem kablowym",
            "correct": 0
          },
          {
            "text": "Gniazda są wykorzystywane do przechowywania danych aplikacji",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy interfejsu CGI?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Umożliwia przekazywanie danych z formularzy WWW do skryptów serwera",
            "correct": 1
          },
          {
            "text": "Obsługuje metody GET i POST do przesyłania danych",
            "correct": 1
          },
          {
            "text": "Pozwala na dynamiczne generowanie treści na podstawie danych użytkownika",
            "correct": 1
          },
          {
            "text": "Interfejs CGI automatycznie szyfruje dane przesyłane z formularzy",
            "correct": 0
          },
          {
            "text": "CGI wymaga użycia protokołu FTP do przesyłania danych",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu FTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "FTP (File Transfer Protocol) umożliwia przesyłanie plików między klientem a serwerem",
            "correct": 1
          },
          {
            "text": "Obsługuje transfer plików w obu kierunkach (upload i download)",
            "correct": 1
          },
          {
            "text": "Umożliwia zarządzanie plikami na serwerze (np. tworzenie katalogów, usuwanie plików)",
            "correct": 1
          },
          {
            "text": "FTP zapewnia szyfrowanie wszystkich przesyłanych danych",
            "correct": 0
          },
          {
            "text": "FTP działa tylko w trybie bezpołączeniowym",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu SMTP według RFC 2821?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Używa TCP do niezawodnej komunikacji poczty między serwerami na porcie 25",
            "correct": 1
          },
          {
            "text": "Komunikacja odbywa się w trzech etapach: inicjalizacja (powitanie), wymiana komunikatów (polecenia i odpowiedzi), zakończenie",
            "correct": 1
          },
          {
            "text": "Interakcja typu \"polecenie/odpowiedź\", komunikaty muszą być kodowane w 7-bitowym ASCII",
            "correct": 1
          },
          {
            "text": "SMTP używa protokołu UDP do przesyłania danych",
            "correct": 0
          },
          {
            "text": "SMTP nie obsługuje uwierzytelniania użytkowników",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu SMTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "SMTP używa trwałych połączeń",
            "correct": 1
          },
          {
            "text": "Wymaga, żeby komunikat (nagłówek i dane) były kodowane w 7-bitowym ASCII",
            "correct": 1
          },
          {
            "text": "Serwer SMTP używa CRLF.CRLF do rozpoznania końca danych",
            "correct": 1
          },
          {
            "text": "SMTP jest protokołem typu push, podczas gdy HTTP jest protokołem typu pull",
            "correct": 1
          },
          {
            "text": "Oba mają komunikaty żądań/odpowiedzi w ASCII, kody wynikowe",
            "correct": 1
          },
          {
            "text": "HTTP przesyła każdy obiekt w swoim własnym komunikacie odpowiedzi, SMTP może wysyłać wiele obiektów w wieloczęściowym komunikacie",
            "correct": 1
          },
          {
            "text": "SMTP automatycznie szyfruje wszystkie wiadomości e-mail",
            "correct": 0
          },
          {
            "text": "SMTP działa tylko w trybie bezpołączeniowym",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu SMTP według RFC 2821?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Używa TCP do niezawodnej komunikacji poczty między serwerami na porcie 25",
            "correct": 1
          },
          {
            "text": "Komunikacja odbywa się w trzech etapach: inicjalizacja (powitanie), wymiana komunikatów (polecenia i odpowiedzi), zakończenie",
            "correct": 1
          },
          {
            "text": "Interakcja typu \"polecenie/odpowiedź\", komunikaty muszą być kodowane w 7-bitowym ASCII",
            "correct": 1
          },
          {
            "text": "SMTP używa protokołu UDP do przesyłania danych",
            "correct": 0
          },
          {
            "text": "SMTP nie obsługuje uwierzytelniania użytkowników",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy trwałego HTTP w wersji 1.1?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Pozwala na przesyłanie wielu obiektów przez jedno połączenie TCP",
            "correct": 1
          },
          {
            "text": "Domyślnie używa trwałych połączeń, co zmniejsza liczbę RTT potrzebnych do pobrania strony",
            "correct": 1
          },
          {
            "text": "HTTP/1.1 automatycznie szyfruje wszystkie dane przesyłane przez połączenie",
            "correct": 0
          },
          {
            "text": "Trwałe HTTP w wersji 1.1 eliminuje potrzebę używania nagłówków",
            "correct": 0
          },
          {
            "text": "HTTP/1.1 nie wspiera metod POST",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy trwałego HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Serwer zostawia otwarte połączenie po wysłaniu odpowiedzi",
            "correct": 1
          },
          {
            "text": "Kolejne komunikaty HTTP między tym samym klientem i serwerem są przesyłane na tym samym połączeniu TCP",
            "correct": 1
          },
          {
            "text": "W przypadku grupowych żądań w HTTP/1.1, tylko jeden RTT jest potrzebny dla wszystkich żądanych obiektów",
            "correct": 1
          },
          {
            "text": "Trwałe HTTP wymaga każdorazowego nawiązywania nowego połączenia",
            "correct": 0
          },
          {
            "text": "Trwałe HTTP automatycznie kompresuje wszystkie dane",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jak działa interakcja klienta SMTP z serwerem SMTP w scenariuszu wysyłania poczty?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Klient SMTP (agent użytkownika) wysyła komunikaty HELO, MAIL FROM, RCPT TO, DATA, QUIT do serwera SMTP",
            "correct": 1
          },
          {
            "text": "Serwer SMTP odpowiada odpowiednimi kodami statusu",
            "correct": 1
          },
          {
            "text": "Serwer SMTP odbiera wiadomość, umieszcza ją w skrzynce pocztowej odbiorcy",
            "correct": 1
          },
          {
            "text": "Serwer SMTP automatycznie szyfruje wszystkie otrzymane wiadomości",
            "correct": 0
          },
          {
            "text": "Klient SMTP nie potrzebuje nawiązywać połączenia z serwerem",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne zalety używania ciasteczek w HTTP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Umożliwiają uwierzytelnienie użytkownika",
            "correct": 1
          },
          {
            "text": "Pozwalają na zarządzanie wózkami zakupów",
            "correct": 1
          },
          {
            "text": "Umożliwiają personalizację treści i rekomendacje",
            "correct": 1
          },
          {
            "text": "Utrzymują stan sesji użytkownika",
            "correct": 1
          },
          {
            "text": "Pomagają w śledzeniu aktywności użytkownika, co ma jednak wpływ na prywatność",
            "correct": 1
          },
          {
            "text": "Ciasteczka eliminują potrzebę używania sesji po stronie serwera",
            "correct": 0
          },
          {
            "text": "Ciasteczka są wykorzystywane do szyfrowania danych przesyłanych przez HTTP",
            "correct": 0
          }
        ]
      },
      {
        "pytanie": "Jakie są główne cechy protokołu IMAP?",
        "alreadyGenerated": false,
        "answers": [
          {
            "text": "Pozwala na synchronizację lokalnej skrzynki pocztowej z serwerem",
            "correct": 1
          },
          {
            "text": "Umożliwia organizowanie poczty w foldery",
            "correct": 1
          },
          {
            "text": "Zachowuje stan użytkownika pomiędzy sesjami (np. nazwy folderów i przyporządkowanie listów do folderów)",
            "correct": 1
          },
          {
            "text": "IMAP usuwa wiadomości z serwera po ich pobraniu",
            "correct": 0
          },
          {
            "text": "IMAP nie obsługuje zarządzania folderami na serwerze",
            "correct": 0
          }
        ]
      },
      
  {
    "pytanie": "Jakie są trzy główne składniki poczty elektronicznej?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Agenci użytkownika (np. Eudora, Outlook, elm, Netscape Messenger)",
        "correct": 1
      },
      {
        "text": "Serwery poczty",
        "correct": 1
      },
      {
        "text": "Simple Mail Transfer Protocol (SMTP)",
        "correct": 1
      },
      {
        "text": "Protokół POP3 używany do pobierania poczty",
        "correct": 0
      },
      {
        "text": "Bazy danych przechowujące wiadomości e-mail",
        "correct": 0
      },
      {
        "text": "Oprogramowanie antywirusowe skanujące wiadomości",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie funkcje pełni agent użytkownika (AU) w systemie poczty elektronicznej?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Przeglądanie poczty",
        "correct": 1
      },
      {
        "text": "Kompozycja, edycja i czytanie wiadomości",
        "correct": 1
      },
      {
        "text": "Wychodzące i przychodzące wiadomości są przechowywane na serwerze",
        "correct": 1
      },
      {
        "text": "Zarządzanie kontaktami i książką adresową",
        "correct": 0
      },
      {
        "text": "Filtrowanie spamu i wirusów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy serwerów poczty?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Skrzynka pocztowa zawiera wiadomości przychodzące od użytkowników",
        "correct": 1
      },
      {
        "text": "Kolejka wiadomości zawiera wiadomości do wysłania",
        "correct": 1
      },
      {
        "text": "Protokół SMTP wysyła pocztę pomiędzy serwerami poczty w modelu partnerskim (peer-to-peer)",
        "correct": 1
      },
      {
        "text": "Serwer poczty automatycznie tworzy kopie zapasowe wiadomości",
        "correct": 0
      },
      {
        "text": "Serwer poczty używa protokołu FTP do transferu wiadomości",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół SMTP według RFC 2821?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Używa TCP do niezawodnej komunikacji poczty między serwerami na porcie 25",
        "correct": 1
      },
      {
        "text": "Bezpośrednia komunikacja między serwerem nadawcy a serwerem odbiorcy",
        "correct": 1
      },
      {
        "text": "Trzy etapy komunikacji: inicjalizacja (powitanie), wymiana komunikatów, zakończenie",
        "correct": 1
      },
      {
        "text": "Interakcja typu 'polecenie/odpowiedź' z komunikatami kodowanymi w 7-bitowym ASCII",
        "correct": 1
      },
      {
        "text": "Używa UDP do szybkiego przesyłania wiadomości",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Opisz scenariusz wysyłania poczty elektronicznej przez SMTP.",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Alicja używa agenta użytkownika (AU) do skomponowania listu i wysyła go na adres bob@szkola.edu.pl",
        "correct": 1
      },
      {
        "text": "AU Alicji wysyła komunikat do jej serwera poczty, który umieszcza go w kolejce",
        "correct": 1
      },
      {
        "text": "Serwer SMTP Alicji otwiera połączenie TCP z serwerem poczty Boba",
        "correct": 1
      },
      {
        "text": "Serwer SMTP Alicji wysyła komunikat przez połączenie TCP",
        "correct": 1
      },
      {
        "text": "Serwer SMTP Boba umieszcza list w skrzynce Boba",
        "correct": 1
      },
      {
        "text": "Bob używa AU do przeczytania wiadomości",
        "correct": 1
      },
      {
        "text": "List jest szyfrowany end-to-end przed wysłaniem",
        "correct": 0
      },
      {
        "text": "Alicja musi ręcznie zatwierdzić wysłanie listu na serwerze",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak wygląda przykładowa interakcja SMTP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "S: 220 hamburger.edu",
        "correct": 1
      },
      {
        "text": "C: HELO nalesnik.pl",
        "correct": 1
      },
      {
        "text": "S: 250 Hello nalesnik.pl, pleased to meet you",
        "correct": 1
      },
      {
        "text": "C: MAIL FROM: <alice@nalesnik.pl>",
        "correct": 1
      },
      {
        "text": "S: 250 alice@nalesnik.pl... Sender ok",
        "correct": 1
      },
      {
        "text": "C: RCPT TO: <bob@hamburger.edu>",
        "correct": 1
      },
      {
        "text": "S: 250 bob@hamburger.edu ... Recipient ok",
        "correct": 1
      },
      {
        "text": "C: DATA",
        "correct": 1
      },
      {
        "text": "S: 354 Enter mail, end with \".\" on a line by itself",
        "correct": 1
      },
      {
        "text": "C: Czy lubisz ketchup?",
        "correct": 1
      },
      {
        "text": "C: A może ogóreczka?",
        "correct": 1
      },
      {
        "text": "C: .",
        "correct": 1
      },
      {
        "text": "S: 250 Message accepted for delivery",
        "correct": 1
      },
      {
        "text": "C: QUIT",
        "correct": 1
      },
      {
        "text": "S: 221 hamburger.edu closing connection",
        "correct": 1
      },
      {
        "text": "C: HELO Again",
        "correct": 0
      },
      {
        "text": "S: 250 Connection established",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak można samodzielnie wysyłać pocztę za pomocą SMTP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Użyj narzędzia telnet do nawiązania połączenia z serwerem SMTP:\ntelnet nazwaserwera 25",
        "correct": 1
      },
      {
        "text": "Wpisz polecenia SMTP, takie jak HELO, MAIL FROM, RCPT TO, DATA, QUIT",
        "correct": 1
      },
      {
        "text": "W ten sposób można wysyłać pocztę bez użycia przeglądarki poczty",
        "correct": 1
      },
      {
        "text": "Korzystaj z interfejsu graficznego do ręcznego wpisywania nagłówków wiadomości",
        "correct": 0
      },
      {
        "text": "Użyj protokołu FTP do przesyłania wiadomości na serwer poczty",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu SMTP w porównaniu z HTTP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "SMTP używa trwałych połączeń, podczas gdy HTTP używa zarówno trwałych, jak i nietrwałych połączeń",
        "correct": 1
      },
      {
        "text": "SMTP jest protokołem typu push (wypychanie danych), a HTTP jest protokołem typu pull (pobieranie danych)",
        "correct": 1
      },
      {
        "text": "Oba protokoły używają komunikatów żądań/odpowiedzi w formacie ASCII",
        "correct": 1
      },
      {
        "text": "SMTP może wysyłać wiele obiektów w wieloczęściowym komunikacie, podczas gdy HTTP przesyła każdy obiekt w osobnym komunikacie odpowiedzi",
        "correct": 1
      },
      {
        "text": "SMTP działa na porcie 80, podobnie jak HTTP",
        "correct": 0
      },
      {
        "text": "HTTP nie wspiera uwierzytelniania użytkowników, podczas gdy SMTP tak",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak wygląda format komunikatu poczty zgodnie ze standardem RFC 822?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Linie nagłówków (np. To:, From:, Subject:)",
        "correct": 1
      },
      {
        "text": "Dane wiadomości (tekst, tylko znaki ASCII)",
        "correct": 1
      },
      {
        "text": "Pusta linia oddziela nagłówki od danych",
        "correct": 1
      },
      {
        "text": "Cała wiadomość jest zakodowana w formacie Base64",
        "correct": 0
      },
      {
        "text": "Nagłówki i dane są rozdzielone przez znak tabulacji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Co to jest MIME i jakie rozszerzenia wprowadza dla wiadomości e-mail?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "MIME (Multipurpose Internet Mail Extensions) rozszerza standard RFC 822 o obsługę multimediów",
        "correct": 1
      },
      {
        "text": "Dodaje dodatkowe linie nagłówka określające typ MIME, sposób kodowania danych (np. base64)",
        "correct": 1
      },
      {
        "text": "Pozwala na przesyłanie różnych typów danych multimedialnych, takich jak obrazy, dźwięk, wideo oraz dane aplikacji",
        "correct": 1
      },
      {
        "text": "MIME jest używany tylko do przesyłania tekstu sformatowanego w HTML",
        "correct": 0
      },
      {
        "text": "MIME automatycznie kompresuje załączniki w wiadomościach e-mail",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne typy danych obsługiwanych przez MIME?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Tekst: np. plain, html",
        "correct": 1
      },
      {
        "text": "Obraz: np. jpeg, gif",
        "correct": 1
      },
      {
        "text": "Dźwięk: np. basic (kodowanie 8-bit mu-law), 32kadpcm (kodowanie 32 kbps)",
        "correct": 1
      },
      {
        "text": "Wideo: np. mpeg, quicktime",
        "correct": 1
      },
      {
        "text": "Dane aplikacji: np. msword, octet-stream",
        "correct": 1
      },
      {
        "text": "Pliki wykonywalne: np. exe, bin",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy typu multipart w MIME?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Pozwalają na załączanie wielu obiektów w jednej wiadomości e-mail",
        "correct": 1
      },
      {
        "text": "Każdy załącznik jest oddzielony boundary określonym w nagłówku Content-Type: multipart/mixed; boundary=Zalacznik",
        "correct": 1
      },
      {
        "text": "Umożliwia przesyłanie tekstu oraz multimediów w jednej wiadomości",
        "correct": 1
      },
      {
        "text": "Wymaga użycia specjalnego oprogramowania do odczytu załączników",
        "correct": 0
      },
      {
        "text": "Nie wspiera przesyłania plików większych niż 10MB",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie protokoły dostępu do poczty elektronicznej istnieją oprócz SMTP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "POP (Post Office Protocol) [RFC 1939]: Uwierzytelnienie i pobieranie poczty z serwera",
        "correct": 1
      },
      {
        "text": "IMAP (Internet Mail Access Protocol) [RFC 1730]: Synchronizacja lokalnej skrzynki z serwerem, organizowanie poczty w foldery",
        "correct": 1
      },
      {
        "text": "HTTP: Używany przez usługi takie jak Hotmail, Yahoo! Mail",
        "correct": 1
      },
      {
        "text": "FTP: Umożliwia przesyłanie wiadomości e-mail",
        "correct": 0
      },
      {
        "text": "SSH: Służy do bezpiecznego przesyłania poczty",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół POP3?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Etap uwierzytelnienia: Polecenia USER (login) i PASS (hasło)",
        "correct": 1
      },
      {
        "text": "Etap transakcji: Polecenia LIST (lista wiadomości), RETR (pobierz wiadomość), DELE (usuń wiadomość), QUIT (zakończ sesję)",
        "correct": 1
      },
      {
        "text": "Tryby działania: \"pobierz i usuń\" lub \"pobierz i zostaw\"",
        "correct": 1
      },
      {
        "text": "POP3 jest stanowy pomiędzy sesjami",
        "correct": 0
      },
      {
        "text": "POP3 umożliwia zarządzanie folderami na serwerze",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IMAP w porównaniu do POP3?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Wszystkie listy są przechowywane na serwerze",
        "correct": 1
      },
      {
        "text": "Umożliwia organizowanie poczty w foldery",
        "correct": 1
      },
      {
        "text": "Zachowuje stan użytkownika pomiędzy sesjami (np. nazwy folderów i przyporządkowanie listów do folderów)",
        "correct": 1
      },
      {
        "text": "IMAP pobiera wszystkie wiadomości na lokalny komputer",
        "correct": 0
      },
      {
        "text": "IMAP nie wspiera wysyłania załączników",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu DNS?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "DNS (Domain Name System) tłumaczy nazwy domenowe na adresy IP",
        "correct": 1
      },
      {
        "text": "Rozproszona baza danych implementowana przez hierarchię wielu serwerów nazw",
        "correct": 1
      },
      {
        "text": "Protokół warstwy aplikacji używany przez hosty, rutery i serwery nazw do tłumaczenia nazw",
        "correct": 1
      },
      {
        "text": "DNS używa protokołu FTP do transferu rekordów",
        "correct": 0
      },
      {
        "text": "DNS nie obsługuje zabezpieczeń dla zapytań",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa system serwerów nazw DNS?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Lokalne serwery nazw najpierw odpowiadają na zapytania",
        "correct": 1
      },
      {
        "text": "Jeśli nie znają odwzorowania, lokalny serwer pyta serwer u korzenia",
        "correct": 1
      },
      {
        "text": "Serwer u korzenia kontaktuje się z odpowiednim serwerem autorytatywnym",
        "correct": 1
      },
      {
        "text": "Serwer autorytatywny przechowuje wszystkie rekordy DNS globalnie",
        "correct": 0
      },
      {
        "text": "System serwerów DNS nie używa hierarchii serwerów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne rodzaje rekordów DNS?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Typ=NS: Nazwa domeny i adres IP autorytatywnego serwera nazw",
        "correct": 1
      },
      {
        "text": "Typ=A: Nazwa hosta i jego adres IP",
        "correct": 1
      },
      {
        "text": "Typ=CNAME: Alias dla kanonicznej nazwy hosta",
        "correct": 1
      },
      {
        "text": "Typ=MX: Nazwa serwera poczty związanego z domeną",
        "correct": 1
      },
      {
        "text": "Typ=TXT: Zawiera tekstowe informacje dla domeny",
        "correct": 1
      },
      {
        "text": "Typ=FTP: Przechowuje informacje o serwerach FTP",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa demultipleksacja w warstwie transportu?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Host odbiera pakiety IP zawierające adresy IP nadawcy i odbiorcy oraz numery portów",
        "correct": 1
      },
      {
        "text": "Używa adresu IP i portu odbiorcy do skierowania segmentu do odpowiedniego gniazda",
        "correct": 1
      },
      {
        "text": "Demultipleksacja bezpołączeniowa (UDP): Gniazda są identyfikowane przez parę (adres IP, port)",
        "correct": 1
      },
      {
        "text": "Demultipleksacja połączeniowa (TCP): Gniazdo jest określane przez cztery wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy",
        "correct": 1
      },
      {
        "text": "Demultipleksacja nie jest stosowana w protokołach transportowych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu FTP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "FTP (File Transfer Protocol) umożliwia przesyłanie plików między klientem a serwerem",
        "correct": 1
      },
      {
        "text": "Model klient-serwer, gdzie klient rozpoczyna transmisję, a serwer jest zdalnym hostem",
        "correct": 1
      },
      {
        "text": "Serwer FTP działa na porcie 21",
        "correct": 1
      },
      {
        "text": "Oddzielne połączenie kontrolne (port 21) i transferu danych (port 20)",
        "correct": 1
      },
      {
        "text": "Serwer FTP utrzymuje stan: aktualny katalog, wcześniejszą autoryzację",
        "correct": 1
      },
      {
        "text": "FTP używa protokołu HTTP do zabezpieczania transferu plików",
        "correct": 0
      },
      {
        "text": "FTP automatycznie kompresuje pliki przed przesłaniem",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne polecenia FTP i ich funkcje?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "USER: Podaje login użytkownika",
        "correct": 1
      },
      {
        "text": "PASS: Podaje hasło",
        "correct": 1
      },
      {
        "text": "LIST: Zwraca listę plików w aktualnym katalogu",
        "correct": 1
      },
      {
        "text": "RETR: Pobiera plik z serwera",
        "correct": 1
      },
      {
        "text": "STOR: Zapisuje plik na serwerze",
        "correct": 1
      },
      {
        "text": "DELETE: Usuwa plik z serwera",
        "correct": 0
      },
      {
        "text": "MKDIR: Tworzy nowy katalog na serwerze",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa demultipleksacja połączeniowa w TCP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Gniazdo TCP jest określane przez cztery wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy",
        "correct": 1
      },
      {
        "text": "Host odbiorczy używa tych wartości do skierowania segmentu do właściwego gniazda",
        "correct": 1
      },
      {
        "text": "Serwer może obsługiwać wiele gniazd TCP jednocześnie, każde z unikalnym zestawem wartości",
        "correct": 1
      },
      {
        "text": "Serwery WWW otwierają oddzielne gniazda dla każdego klienta, umożliwiając obsługę wielu żądań",
        "correct": 1
      },
      {
        "text": "Demultipleksacja połączeniowa nie wymaga użycia portów w TCP",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu UDP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "UDP (User Datagram Protocol) jest protokołem bezpołączeniowym i zawodnym",
        "correct": 1
      },
      {
        "text": "Segmenty UDP mogą być zgubione lub dostarczone w zmienionej kolejności",
        "correct": 1
      },
      {
        "text": "Brak inicjalizacji połączenia między nadawcą a odbiorcą",
        "correct": 1
      },
      {
        "text": "Mały nagłówek segmentu",
        "correct": 1
      },
      {
        "text": "Brak kontroli przeciążenia, co pozwala na szybkie wysyłanie danych",
        "correct": 1
      },
      {
        "text": "UDP zapewnia niezawodność poprzez retransmisje",
        "correct": 0
      },
      {
        "text": "UDP jest używany głównie do przesyłania plików",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa demultipleksacja w protokole UDP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Gniazda UDP są identyfikowane przez parę (adres IP odbiorcy, port odbiorcy)",
        "correct": 1
      },
      {
        "text": "Gdy host odbiera segment UDP, sprawdza port odbiorcy i kieruje segment do odpowiedniego gniazda",
        "correct": 1
      },
      {
        "text": "Datagramy z różnymi adresami IP lub portami nadawcy są kierowane do tego samego gniazda",
        "correct": 1
      },
      {
        "text": "UDP używa numerów sekwencyjnych do demultipleksacji",
        "correct": 0
      },
      {
        "text": "Demultipleksacja w UDP odbywa się na podstawie adresu MAC",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy demultipleksacji połączeniowej w TCP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Gniazdo TCP jest określane przez cztery wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy",
        "correct": 1
      },
      {
        "text": "Host odbierający używa wszystkich czterech wartości do skierowania segmentu do właściwego gniazda",
        "correct": 1
      },
      {
        "text": "Serwer może obsługiwać wiele gniazd TCP jednocześnie, każde z unikalnym zestawem wartości",
        "correct": 1
      },
      {
        "text": "Serwery WWW otwierają oddzielne gniazda dla każdego klienta, umożliwiając obsługę wielu żądań",
        "correct": 1
      },
      {
        "text": "TCP nie wymaga użycia portów do demultipleksacji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy działania protokołu POP3?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Etap uwierzytelnienia: Klient wysyła polecenia USER i PASS do serwera poczty",
        "correct": 1
      },
      {
        "text": "Etap transakcji: Klient używa poleceń LIST, RETR, DELE do zarządzania wiadomościami",
        "correct": 1
      },
      {
        "text": "Etap zakończenia: Klient wysyła polecenie QUIT, kończąc sesję",
        "correct": 1
      },
      {
        "text": "Etap szyfrowania: Klient i serwer negocjują szyfrowanie połączenia",
        "correct": 0
      },
      {
        "text": "Etap synchronizacji: Klient synchronizuje lokalne foldery z serwerem",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IMAP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Wszystkie listy są przechowywane na serwerze",
        "correct": 1
      },
      {
        "text": "Umożliwia organizowanie poczty w foldery",
        "correct": 1
      },
      {
        "text": "Zachowuje stan użytkownika pomiędzy sesjami, np. nazwy folderów i przyporządkowanie listów do folderów",
        "correct": 1
      },
      {
        "text": "IMAP automatycznie archiwizuje wiadomości na lokalnym dysku",
        "correct": 0
      },
      {
        "text": "IMAP nie wspiera wyszukiwania wiadomości na serwerze",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa demultipleksacja połączeniowa w TCP w kontekście serwera WWW?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Serwer WWW otwiera oddzielne gniazdo TCP dla każdego klienta",
        "correct": 1
      },
      {
        "text": "Każde gniazdo jest identyfikowane przez unikalny zestaw wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy",
        "correct": 1
      },
      {
        "text": "Umożliwia obsługę wielu połączeń jednocześnie, każde niezależne od innych",
        "correct": 1
      },
      {
        "text": "Serwer WWW używa jednego gniazda do obsługi wszystkich klientów",
        "correct": 0
      },
      {
        "text": "Demultipleksacja w serwerach WWW odbywa się na poziomie aplikacji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety używania ciasteczek w HTTP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Uwierzytelnienie użytkownika",
        "correct": 1
      },
      {
        "text": "Zarządzanie wózkami zakupów w sklepach internetowych",
        "correct": 1
      },
      {
        "text": "Personalizacja treści i rekomendacje",
        "correct": 1
      },
      {
        "text": "Utrzymanie stanu sesji użytkownika",
        "correct": 1
      },
      {
        "text": "Śledzenie aktywności użytkownika, co może wpływać na prywatność",
        "correct": 1
      },
      {
        "text": "Zabezpieczają dane przed atakami typu phishing",
        "correct": 0
      },
      {
        "text": "Szyfrują wszystkie przesyłane dane",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa mechanizm warunkowego GET w HTTP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Klient wysyła żądanie HTTP z nagłówkiem If-Modified-Since zawierającym datę kopii obiektu",
        "correct": 1
      },
      {
        "text": "Serwer odpowiada HTTP/1.0 304 Not Modified, jeśli obiekt nie został zmieniony, co pozwala zaoszczędzić przepustowość",
        "correct": 1
      },
      {
        "text": "Jeśli obiekt został zmieniony, serwer wysyła HTTP/1.0 200 OK wraz z nowymi danymi",
        "correct": 1
      },
      {
        "text": "Mechanizm warunkowego GET umożliwia klientowi pobranie pliku tylko w określonych godzinach",
        "correct": 0
      },
      {
        "text": "Warunkowy GET automatycznie kompresuje dane przed przesłaniem",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa suma kontrolna w protokole UDP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Nadawca traktuje zawartość segmentu jako ciąg 16-bitowych liczb całkowitych",
        "correct": 1
      },
      {
        "text": "Oblicza sumę kontrolną przez dodawanie zawartości segmentu i negację wyniku",
        "correct": 1
      },
      {
        "text": "Odbiorca oblicza sumę kontrolną odebranego segmentu i porównuje ją z wartością w nagłówku",
        "correct": 1
      },
      {
        "text": "Sumy kontrolne są używane tylko do szyfrowania danych",
        "correct": 0
      },
      {
        "text": "UDP nie używa sum kontrolnych do weryfikacji integralności danych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy niezawodnej komunikacji danych w sieciach komputerowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Ważne w warstwach aplikacji, transportu i łącza",
        "correct": 1
      },
      {
        "text": "Charakterystyka zawodnego kanału określa złożoność niezawodnego protokołu komunikacji",
        "correct": 1
      },
      {
        "text": "Używa mechanizmów takich jak sumy kontrolne, potwierdzenia (ACK), retransmisje",
        "correct": 1
      },
      {
        "text": "Implementowane jako niezawodne protokoły transportowe, np. TCP",
        "correct": 1
      },
      {
        "text": "Niezawodna komunikacja nie wymaga kontroli błędów",
        "correct": 0
      },
      {
        "text": "Używa wyłącznie protokołu UDP do zapewnienia niezawodności",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy działania niezawodnego protokołu komunikacji (npk2.0)?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Nadawca: Tworzy pakiet z danymi i sumą kontrolną, wysyła pakiet, oczekuje na potwierdzenie (ACK/NAK)",
        "correct": 1
      },
      {
        "text": "Odbiorca: Odbiera pakiet, sprawdza sumę kontrolną, przekazuje dane do wyższej warstwy i wysyła potwierdzenie (ACK lub NAK)",
        "correct": 1
      },
      {
        "text": "Nadawca: Jeśli otrzyma NAK lub nie otrzyma potwierdzenia w określonym czasie, retransmituje pakiet",
        "correct": 1
      },
      {
        "text": "Odbiorca automatycznie retransmituje potwierdzenia, jeśli nie otrzyma danych",
        "correct": 0
      },
      {
        "text": "Nadawca nie przechowuje wysłanych pakietów po ich wysłaniu",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne problemy w protokole npk2.0 i jak je rozwiązuje npk2.1?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Problem: ACK/NAK mogą być uszkodzone, co prowadzi do niepewności nadawcy",
        "correct": 1
      },
      {
        "text": "Rozwiązanie w npk2.1: Nadawca dodaje numery sekwencyjne (0,1) do pakietów",
        "correct": 1
      },
      {
        "text": "Odbiorca sprawdza numery sekwencyjne, odrzuca duplikaty",
        "correct": 1
      },
      {
        "text": "Nadawca retransmituje pakiety na podstawie numerów sekwencyjnych",
        "correct": 1
      },
      {
        "text": "Npk2.1 używa większych numerów sekwencyjnych dla lepszej identyfikacji",
        "correct": 0
      },
      {
        "text": "Rozwiązanie npk2.1 polega na wyłączeniu retransmisji pakietów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety używania numerów sekwencyjnych w protokołach niezawodnej komunikacji?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Pozwalają na rozróżnienie nowych pakietów od duplikatów",
        "correct": 1
      },
      {
        "text": "Umożliwiają kontrolę poprawności potwierdzeń (ACK)",
        "correct": 1
      },
      {
        "text": "Minimalizują konflikty związane z retransmisjami",
        "correct": 1
      },
      {
        "text": "Wystarczą tylko dwa numery sekwencyjne (0,1), co upraszcza implementację",
        "correct": 1
      },
      {
        "text": "Numeracja sekwencyjna eliminuje potrzebę potwierdzeń",
        "correct": 0
      },
      {
        "text": "Numery sekwencyjne zwiększają szybkość transmisji danych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu npk3.0?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Umożliwia niezawodną komunikację przez kanał z błędami i stratami",
        "correct": 1
      },
      {
        "text": "Nadawca czeka przez określony czas na potwierdzenie (ACK) i retransmituje pakiet, jeśli nie otrzyma potwierdzenia",
        "correct": 1
      },
      {
        "text": "Używa liczników czasu (timerów) do zarządzania retransmisjami",
        "correct": 1
      },
      {
        "text": "Obsługuje numery sekwencyjne do rozróżniania pakietów i duplikatów",
        "correct": 1
      },
      {
        "text": "Npk3.0 eliminuje potrzebę używania sum kontrolnych",
        "correct": 0
      },
      {
        "text": "Protokół npk3.0 jest bezstanowy",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa suma kontrolna w protokole UDP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Nadawca traktuje zawartość segmentu jako ciąg 16-bitowych liczb całkowitych",
        "correct": 1
      },
      {
        "text": "Oblicza sumę kontrolną przez dodawanie zawartości segmentu i negację wyniku",
        "correct": 1
      },
      {
        "text": "Odbiorca oblicza sumę kontrolną odebranego segmentu i porównuje ją z wartością w nagłówku",
        "correct": 1
      },
      {
        "text": "Sumy kontrolne są używane do szyfrowania danych w UDP",
        "correct": 0
      },
      {
        "text": "UDP nie wykorzystuje sum kontrolnych do weryfikacji danych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu DNS?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "DNS tłumaczy nazwy domenowe na adresy IP",
        "correct": 1
      },
      {
        "text": "Rozproszona baza danych implementowana przez hierarchię wielu serwerów nazw",
        "correct": 1
      },
      {
        "text": "Protokół warstwy aplikacji używany przez hosty, rutery i serwery nazw do tłumaczenia nazw",
        "correct": 1
      },
      {
        "text": "DNS używa protokołu SMTP do przesyłania rekordów",
        "correct": 0
      },
      {
        "text": "DNS nie wspiera dynamicznego aktualizowania rekordów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne rodzaje rekordów DNS?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Typ=NS: Nazwa domeny i adres IP autorytatywnego serwera nazw",
        "correct": 1
      },
      {
        "text": "Typ=A: Nazwa hosta i jego adres IP",
        "correct": 1
      },
      {
        "text": "Typ=CNAME: Alias dla kanonicznej nazwy hosta",
        "correct": 1
      },
      {
        "text": "Typ=MX: Nazwa serwera poczty związanego z domeną",
        "correct": 1
      },
      {
        "text": "Typ=TXT: Przechowuje dodatkowe informacje tekstowe",
        "correct": 1
      },
      {
        "text": "Typ=PTR: Przypisuje nazwę hosta do adresu IP",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół FTP w kontekście połączeń kontrolnych i transferowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Połączenie kontrolne: Klient kontaktuje się z serwerem na porcie 21 (TCP)",
        "correct": 1
      },
      {
        "text": "Autoryzacja: Klient uzyskuje autoryzację przez połączenie kontrolne",
        "correct": 1
      },
      {
        "text": "Transfer danych: Po otrzymaniu polecenia transferu pliku, serwer otwiera nowe połączenie TCP do klienta na porcie 20 (TCP)",
        "correct": 1
      },
      {
        "text": "Po przesłaniu pliku, serwer zamyka połączenie transferowe",
        "correct": 1
      },
      {
        "text": "FTP używa jednego połączenia do kontrolowania i transferu danych",
        "correct": 0
      },
      {
        "text": "Serwer FTP nie wymaga autoryzacji przed transferem plików",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne funkcje protokołu UDP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "UDP jest prostym, bezpołączeniowym protokołem transportowym",
        "correct": 1
      },
      {
        "text": "Segmenty UDP mogą być zgubione lub dostarczone w zmienionej kolejności",
        "correct": 1
      },
      {
        "text": "Brak inicjalizacji połączenia między nadawcą a odbiorcą",
        "correct": 1
      },
      {
        "text": "Mały nagłówek segmentu",
        "correct": 1
      },
      {
        "text": "Brak kontroli przeciążenia, co pozwala na szybkie wysyłanie danych",
        "correct": 1
      },
      {
        "text": "UDP zapewnia niezawodność poprzez retransmisje",
        "correct": 0
      },
      {
        "text": "UDP jest używany głównie do przesyłania plików",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy demultipleksacji bezpołączeniowej w UDP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Gniazda UDP są identyfikowane przez parę (adres IP odbiorcy, port odbiorcy)",
        "correct": 1
      },
      {
        "text": "Segment UDP jest kierowany do odpowiedniego gniazda na podstawie adresu IP i portu odbiorcy",
        "correct": 1
      },
      {
        "text": "Datagramy z różnymi adresami IP lub portami nadawcy są kierowane do tego samego gniazda",
        "correct": 1
      },
      {
        "text": "Demultipleksacja bezpołączeniowa wymaga użycia numerów sekwencyjnych",
        "correct": 0
      },
      {
        "text": "UDP używa tablicy hash do demultipleksacji bezpołączeniowej",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy transportu połączeniowego w TCP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "TCP zapewnia niezawodną, uporządkowaną komunikację bajtów",
        "correct": 1
      },
      {
        "text": "Kontrola przepływu: nadawca nie przeciąży odbiorcy",
        "correct": 1
      },
      {
        "text": "Kontrola przeciążenia: nadawca zwalnia, jeśli sieć jest przeciążona",
        "correct": 1
      },
      {
        "text": "Tworzenie i zarządzanie połączeniem",
        "correct": 1
      },
      {
        "text": "Struktura segmentu zawiera informacje niezbędne do zarządzania połączeniem",
        "correct": 1
      },
      {
        "text": "TCP nie wspiera retransmisji utraconych pakietów",
        "correct": 0
      },
      {
        "text": "Transport połączeniowy nie wymaga użycia portów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IMAP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Pozwala na synchronizację lokalnej skrzynki pocztowej z serwerem",
        "correct": 1
      },
      {
        "text": "Umożliwia organizowanie poczty w foldery",
        "correct": 1
      },
      {
        "text": "Zachowuje stan użytkownika pomiędzy sesjami, np. nazwy folderów i przyporządkowanie listów do folderów",
        "correct": 1
      },
      {
        "text": "IMAP pobiera wszystkie wiadomości na lokalny komputer",
        "correct": 0
      },
      {
        "text": "IMAP nie wspiera zarządzania folderami na serwerze",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa mechanizm kontroli przeciążenia w TCP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "TCP monitoruje obciążenie sieci i dostosowuje tempo wysyłania danych",
        "correct": 1
      },
      {
        "text": "Nadawca zmniejsza szybkość transmisji, jeśli wykryje przeciążenie",
        "correct": 1
      },
      {
        "text": "Mechanizmy takie jak Slow Start, Congestion Avoidance, Fast Retransmit i Fast Recovery są używane do zarządzania przeciążeniem",
        "correct": 1
      },
      {
        "text": "Kontrola przeciążenia w TCP polega na zwiększaniu liczby połączeń",
        "correct": 0
      },
      {
        "text": "TCP nie posiada mechanizmów kontroli przeciążenia",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne usługi warstwy transportu?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Multipleksacja i demultipleksacja",
            "correct": 1
        },
        {
            "text": "Transport bezpołączeniowy (UDP)",
            "correct": 1
        },
        {
            "text": "Zasady niezawodnej komunikacji danych",
            "correct": 1
        },
        {
            "text": "Transport połączeniowy (TCP)",
            "correct": 1
        },
        {
            "text": "Mechanizmy kontroli przeciążenia",
            "correct": 1
        },
        {
            "text": "Routing między sieciami",
            "correct": 0
        },
        {
            "text": "Kodowanie danych na poziomie fizycznym",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Co to jest multipleksacja i demultipleksacja w warstwie transportu?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Multipleksacja: Proces łączenia danych z wielu aplikacji do jednego kanału transportowego.",
            "correct": 1
        },
        {
            "text": "Demultipleksacja: Proces rozdzielania odebranych danych na odpowiednie aplikacje na podstawie numerów portów.",
            "correct": 1
        },
        {
            "text": "Multipleksacja: Proces szyfrowania danych przed wysłaniem.",
            "correct": 0
        },
        {
            "text": "Demultipleksacja: Proces kompresowania danych w celu oszczędności pasma.",
            "correct": 0
        },
        {
            "text": "Multipleksacja: Tworzenie kopii zapasowych danych przed transmisją.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Czym różni się transport bezpołączeniowy (UDP) od transportu połączeniowego (TCP)?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "UDP: Zawodny, nieuporządkowany, bez inicjalizacji połączenia, mały nagłówek, brak kontroli przepływu i przeciążenia.",
            "correct": 1
        },
        {
            "text": "TCP: Niezawodny, uporządkowany, wymaga nawiązania połączenia, posiada mechanizmy kontroli przepływu i przeciążenia, większy nagłówek.",
            "correct": 1
        },
        {
            "text": "UDP: Uporządkowany, z mechanizmami kontroli przepływu.",
            "correct": 0
        },
        {
            "text": "TCP: Zawodny i nieuporządkowany.",
            "correct": 0
        },
        {
            "text": "UDP: Wymaga trójstopniowego uścisku dłoni do nawiązania połączenia.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa demultipleksacja bezpołączeniowa w UDP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Gniazda UDP są identyfikowane przez parę (adres IP odbiorcy, port odbiorcy).",
            "correct": 1
        },
        {
            "text": "Odbierane segmenty UDP są kierowane do odpowiedniego gniazda na podstawie portu odbiorcy.",
            "correct": 1
        },
        {
            "text": "Datagramy z różnymi adresami IP lub portami nadawcy mogą być kierowane do tego samego gniazda.",
            "correct": 1
        },
        {
            "text": "UDP używa unikalnych identyfikatorów sesji do demultipleksacji danych.",
            "correct": 0
        },
        {
            "text": "Demultipleksacja w UDP wymaga utrzymania stanu połączenia.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cechy protokołu UDP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Bezpołączeniowy i zawodny",
            "correct": 1
        },
        {
            "text": "Obsługuje komunikację ciągów bajtów (datagramów)",
            "correct": 1
        },
        {
            "text": "Brak inicjalizacji połączenia",
            "correct": 1
        },
        {
            "text": "Możliwość zgubienia lub dostarczenia w innej kolejności pakietów",
            "correct": 1
        },
        {
            "text": "Mały nagłówek segmentu",
            "correct": 1
        },
        {
            "text": "Brak kontroli przepływu i przeciążenia",
            "correct": 1
        },
        {
            "text": "Niezawodny i uporządkowany",
            "correct": 0
        },
        {
            "text": "Wymaga trójstopniowego uścisku dłoni",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa suma kontrolna w protokole UDP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Nadawca traktuje zawartość segmentu jako ciąg 16-bitowych liczb całkowitych.",
            "correct": 1
        },
        {
            "text": "Oblicza sumę kontrolną przez dodawanie zawartości segmentu i negację wyniku.",
            "correct": 1
        },
        {
            "text": "Odbiorca oblicza sumę kontrolną odebranego segmentu i porównuje ją z wartością w nagłówku.",
            "correct": 1
        },
        {
            "text": "Jeśli sumy się zgadzają, segment jest poprawny; w przeciwnym razie wykryto błąd.",
            "correct": 1
        },
        {
            "text": "Suma kontrolna jest używana do szyfrowania danych.",
            "correct": 0
        },
        {
            "text": "Protokół UDP nie używa sum kontrolnych.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Co to jest NPK i jakie wersje zostały omówione?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "NPK (Niezawodny Protokół Komunikacji) to koncepcja niezawodnej komunikacji danych przez zawodny kanał.",
            "correct": 1
        },
        {
            "text": "Omówione wersje: npk1.0, npk2.0, npk2.1, npk2.2, npk3.0",
            "correct": 1
        },
        {
            "text": "NPK jest standardowym protokołem warstwy aplikacji.",
            "correct": 0
        },
        {
            "text": "Omówione wersje: npk1.0, npk1.1, npk1.2",
            "correct": 0
        },
        {
            "text": "NPK nie obsługuje retransmisji pakietów.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa npk2.1 i jak obsługuje błędne ACK/NAK?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Nadawca dodaje numery sekwencyjne (0,1) do pakietów.",
            "correct": 1
        },
        {
            "text": "Odbiorca sprawdza numery sekwencyjne, odrzuca duplikaty pakietów.",
            "correct": 1
        },
        {
            "text": "Nadawca retransmituje pakiety na podstawie numerów sekwencyjnych.",
            "correct": 1
        },
        {
            "text": "Umożliwia obsługę duplikatów i błędnych potwierdzeń.",
            "correct": 1
        },
        {
            "text": "npk2.1 używa trójstopniowego uścisku dłoni do inicjalizacji połączenia.",
            "correct": 0
        },
        {
            "text": "Wersja npk2.1 nie obsługuje błędnych ACK/NAK.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Co to jest mechanizm szybkich retransmisji w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Mechanizm, który retransmituje segmenty bez czekania na timeout, gdy nadawca otrzyma trzy zduplikowane ACK dla tego samego pakietu, co sugeruje utratę następnego segmentu.",
            "correct": 1
        },
        {
            "text": "Pozwala na szybsze odzyskiwanie z utraty pakietów i poprawia wydajność TCP.",
            "correct": 1
        },
        {
            "text": "Mechanizm ten wymusza ponowne ustanowienie połączenia TCP po każdej utracie pakietu.",
            "correct": 0
        },
        {
            "text": "Szybkie retransmisje są stosowane tylko w protokole UDP.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa kontrola przepływu w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "TCP używa okna odbiorcy, które określa ilość danych, jakie nadawca może wysłać bez potwierdzenia.",
            "correct": 1
        },
        {
            "text": "Zapobiega przeciążeniu odbiorcy przez kontrolowanie tempa wysyłania danych.",
            "correct": 1
        },
        {
            "text": "Odbiorca ogłasza wielkość swojego bufora, co nadawca uwzględnia przy wysyłaniu danych.",
            "correct": 1
        },
        {
            "text": "Kontrola przepływu w TCP jest realizowana przez monitorowanie adresów IP nadawców.",
            "correct": 0
        },
        {
            "text": "TCP nie implementuje mechanizmów kontroli przepływu.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne etapy zarządzania połączeniem w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Inicjalizacja połączenia: Trzykrotny uścisk dłoni (three-way handshake).",
            "correct": 1
        },
        {
            "text": "Krok 1: Klient wysyła SYN do serwera.",
            "correct": 1
        },
        {
            "text": "Krok 2: Serwer odpowiada SYN-ACK.",
            "correct": 1
        },
        {
            "text": "Krok 3: Klient wysyła ACK, połączenie nawiązane.",
            "correct": 1
        },
        {
            "text": "Zarządzanie połączeniem: Kontrola przepływu, kontrola przeciążenia, zarządzanie buforami.",
            "correct": 1
        },
        {
            "text": "Zamykanie połączenia: Proces zakończenia połączenia, który również wymaga wymiany FIN i ACK.",
            "correct": 1
        },
        {
            "text": "Ustalanie tras w sieci.",
            "correct": 0
        },
        {
            "text": "Kodowanie danych przed transmisją.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cechy połączeniowego transportu TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Niezawodna, uporządkowana komunikacja bajtów",
            "correct": 1
        },
        {
            "text": "Kontrola przepływu, aby nadawca nie przeciążył odbiorcy",
            "correct": 1
        },
        {
            "text": "Kontrola przeciążenia, aby zarządzać obciążeniem sieci",
            "correct": 1
        },
        {
            "text": "Tworzenie i zarządzanie połączeniem (three-way handshake)",
            "correct": 1
        },
        {
            "text": "Bufory u nadawcy i odbiorcy",
            "correct": 1
        },
        {
            "text": "Transport bezpołączeniowy i nieuporządkowany",
            "correct": 0
        },
        {
            "text": "Brak mechanizmów kontroli przepływu",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne elementy struktury segmentu TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Port nadawcy i port odbiorcy",
            "correct": 1
        },
        {
            "text": "Numer sekwencyjny",
            "correct": 1
        },
        {
            "text": "Numer potwierdzenia",
            "correct": 1
        },
        {
            "text": "Rozmiar okna odbiorcy",
            "correct": 1
        },
        {
            "text": "Suma kontrolna",
            "correct": 1
        },
        {
            "text": "Wskaźniki URG, ACK, PSH, RST, SYN, FIN",
            "correct": 1
        },
        {
            "text": "Opcje (zmienna długość)",
            "correct": 1
        },
        {
            "text": "Identyfikator sesji",
            "correct": 0
        },
        {
            "text": "Adres MAC nadawcy",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Czym jest slow start w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Mechanizm kontroli przeciążenia, który na początku połączenia szybko zwiększa rozmiar okna transmisyjnego w sposób wykładniczy, aż do wykrycia przeciążenia (straty pakietów).",
            "correct": 1
        },
        {
            "text": "Slow start jest fazą, w której TCP zmniejsza prędkość transmisji po wykryciu przeciążenia.",
            "correct": 0
        },
        {
            "text": "Slow start oznacza, że TCP zaczyna z dużym rozmiarem okna transmisyjnego.",
            "correct": 0
        },
        {
            "text": "Mechanizm szybkiego retransmitowania utraconych pakietów.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa mechanizm AIMD w kontroli przeciążenia TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "AIMD (Additive Increase Multiplicative Decrease):",
            "correct": 1
        },
        {
            "text": "Additive Increase: Stopniowe, liniowe zwiększanie rozmiaru okna transmisyjnego.",
            "correct": 1
        },
        {
            "text": "Multiplicative Decrease: Redukcja rozmiaru okna transmisyjnego przez dzielenie przez dwa w przypadku wykrycia przeciążenia.",
            "correct": 1
        },
        {
            "text": "AIMD oznacza, że TCP zwiększa rozmiar okna transmisyjnego wykładniczo.",
            "correct": 0
        },
        {
            "text": "AIMD to metoda szybkiego zamykania połączeń po wykryciu przeciążenia.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są różnice między kontrolą przeciążenia typu koniec-koniec a kontrolą z pomocą sieci?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Kontrola koniec-koniec: Brak bezpośredniej informacji zwrotnej od warstwy sieci. Przeciążenie jest wykrywane na podstawie strat i opóźnień. Używana przez TCP.",
            "correct": 1
        },
        {
            "text": "Kontrola z pomocą sieci: Rutery udostępniają informację zwrotną systemom końcowym o przeciążeniu, np. poprzez specjalne bity w nagłówkach (ECN).",
            "correct": 1
        },
        {
            "text": "Kontrola koniec-koniec używa sygnałów z warstwy fizycznej do monitorowania przeciążenia.",
            "correct": 0
        },
        {
            "text": "Kontrola z pomocą sieci nie wymaga żadnej informacji zwrotnej.",
            "correct": 0
        },
        {
            "text": "Oba typy kontroli przeciążenia działają na zasadzie wykrywania strat pakietów.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Co to jest kontrola przeciążenia w usłudze ABR w sieci ATM?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "ABR (Available Bit Rate) to usługa elastyczna, która pozwala nadawcy dostosować prędkość transmisji do dostępnej przepustowości.",
            "correct": 1
        },
        {
            "text": "Rutery sieci ATM wysyłają komórki RM (Resource Management) z informacją o dostępnej przepustowości, nadawca dostosowuje prędkość na podstawie tych informacji.",
            "correct": 1
        },
        {
            "text": "Kontrola przeciążenia w ABR polega na stałym przesyłaniu danych bez uwzględnienia dostępnej przepustowości.",
            "correct": 0
        },
        {
            "text": "ABR nie implementuje żadnych mechanizmów kontroli przeciążenia.",
            "correct": 0
        },
        {
            "text": "Kontrola przeciążenia w ABR jest realizowana przez użycie specjalnych adresów IP.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak TCP zapewnia sprawiedliwość między wieloma połączeniami?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Mechanizm AIMD pozwala na równomierne dzielenie przepustowości między konkurujące połączenia TCP.",
            "correct": 1
        },
        {
            "text": "TCP dąży do osiągnięcia sprawiedliwego podziału dostępnej przepustowości poprzez kontrolę wzrostu i zmniejszania okna transmisyjnego.",
            "correct": 1
        },
        {
            "text": "TCP przypisuje priorytety połączeniom na podstawie ich adresów IP.",
            "correct": 0
        },
        {
            "text": "Sprawiedliwość jest osiągana przez rotacyjne przydzielanie zasobów sieciowych.",
            "correct": 0
        },
        {
            "text": "TCP nie zapewnia mechanizmów do sprawiedliwego podziału przepustowości.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne scenariusze retransmisji w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Strata pakietu: Wykrywana poprzez timeout lub trzy zduplikowane ACK.",
            "correct": 1
        },
        {
            "text": "Strata ACK: Nadawca nie otrzymuje potwierdzenia i retransmituje pakiet.",
            "correct": 1
        },
        {
            "text": "Timeout: Nadawca retransmituje najstarszy niepotwierdzony pakiet i resetuje timer.",
            "correct": 1
        },
        {
            "text": "Retransmisja jest wywoływana tylko przez nadawcę bez sprawdzania ACK.",
            "correct": 0
        },
        {
            "text": "TCP nie implementuje retransmisji pakietów.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa powolny start w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "TCP zaczyna z małym rozmiarem okna transmisyjnego i zwiększa go wykładniczo poprzez podwajanie rozmiaru okna co RTT, aż do wykrycia przeciążenia poprzez stratę pakietu.",
            "correct": 1
        },
        {
            "text": "Powolny start oznacza, że TCP zaczyna z dużym rozmiarem okna transmisyjnego.",
            "correct": 0
        },
        {
            "text": "Powolny start jest fazą, w której TCP zmniejsza prędkość transmisji po wykryciu przeciążenia.",
            "correct": 0
        },
        {
            "text": "Powolny start jest stosowany tylko w protokole UDP.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cele mechanizmu kontroli przeciążenia w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Zapewnienie sprawiedliwego podziału przepustowości między połączenia TCP.",
            "correct": 1
        },
        {
            "text": "Zapobieganie przeciążeniu sieci poprzez dostosowanie prędkości transmisji w odpowiedzi na przeciążenie.",
            "correct": 1
        },
        {
            "text": "Optymalizacja wykorzystania zasobów sieciowych, minimalizacja opóźnień i strat pakietów.",
            "correct": 1
        },
        {
            "text": "Zwiększenie prędkości transmisji bez względu na stan sieci.",
            "correct": 0
        },
        {
            "text": "Kontrola przepływu danych tylko na poziomie aplikacji.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak TCP estymuje RTT?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "TCP mierzy czas od wysłania segmentu do otrzymania potwierdzenia ACK (SampleRTT).",
            "correct": 1
        },
        {
            "text": "EstymowaneRTT jest aktualizowane jako wykładnicza średnia ruchoma:",
            "correct": 1
        },
        {
            "text": "EstymowaneRTT = (1 - α) * EstymowaneRTT + α * SampleRTT gdzie α zwykle wynosi 0.125.",
            "correct": 1
        },
        {
            "text": "RTT jest estymowany przez monitorowanie wielkości okna transmisyjnego.",
            "correct": 0
        },
        {
            "text": "TCP nie estymuje RTT, korzysta z stałych wartości.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak ustalać timeout w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Timeout jest ustawiany jako: Timeout = EstymowaneRTT + 4 * BłądRTT",
            "correct": 1
        },
        {
            "text": "BłądRTT jest estymowany jako wykładnicza średnia ruchoma:",
            "correct": 1
        },
        {
            "text": "BłądRTT = (1 - β) * BłądRTT + β * |SampleRTT - EstymowaneRTT| gdzie β zwykle wynosi 0.25.",
            "correct": 1
        },
        {
            "text": "Timeout jest stały i wynosi zawsze 2 sekundy.",
            "correct": 0
        },
        {
            "text": "TCP nie stosuje timeoutów.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Co to jest \"window size\" w TCP i jak wpływa na przepustowość?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "\"Window size\" to rozmiar okna transmisyjnego określający ilość danych, które nadawca może wysłać bez potwierdzenia.",
            "correct": 1
        },
        {
            "text": "Przepustowość TCP jest proporcjonalna do rozmiaru okna i odwrotnie proporcjonalna do RTT: przepustowość = Window Size / RTT.",
            "correct": 1
        },
        {
            "text": "\"Window size\" określa maksymalny rozmiar pakietu, jaki może być przesłany w sieci.",
            "correct": 0
        },
        {
            "text": "Zwiększenie rozmiaru okna transmisyjnego zawsze prowadzi do mniejszej przepustowości.",
            "correct": 0
        },
        {
            "text": "Okno transmisyjne nie ma wpływu na przepustowość TCP.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne zalety korzystania z protokołu TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Zapewnia niezawodną, uporządkowaną transmisję danych.",
            "correct": 1
        },
        {
            "text": "Kontroluje przepływ i przeciążenie sieci.",
            "correct": 1
        },
        {
            "text": "Automatycznie retransmituje utracone pakiety.",
            "correct": 1
        },
        {
            "text": "Umożliwia pełnodupleksową komunikację.",
            "correct": 1
        },
        {
            "text": "Nie wymaga nawiązywania połączenia przed transmisją danych.",
            "correct": 0
        },
        {
            "text": "Mały nagłówek, co zmniejsza narzut sieciowy.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa trzyetapowy uścisk dłoni (three-way handshake) w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Krok 1: Klient wysyła segment SYN z początkowym numerem sekwencyjnym.",
            "correct": 1
        },
        {
            "text": "Krok 2: Serwer odpowiada segmentem SYN-ACK z własnym numerem sekwencyjnym i potwierdzeniem numeru klienta.",
            "correct": 1
        },
        {
            "text": "Krok 3: Klient wysyła segment ACK potwierdzający numer sekwencyjny serwera.",
            "correct": 1
        },
        {
            "text": "Po tym procesie połączenie jest nawiązane.",
            "correct": 1
        },
        {
            "text": "Trzyetapowy uścisk dłoni obejmuje tylko wysyłanie segmentów SYN.",
            "correct": 0
        },
        {
            "text": "Uścisk dłoni kończy się na drugim etapie.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cechy protokołu POP3?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "POP3 umożliwia pobieranie poczty z serwera poczty",
            "correct": 1
        },
        {
            "text": "Obsługuje polecenia USER, PASS, LIST, RETR, DELE, QUIT",
            "correct": 1
        },
        {
            "text": "Tryby działania: \"pobierz i usuń\" lub \"pobierz i zostaw\"",
            "correct": 1
        },
        {
            "text": "POP3 jest bezstanowy pomiędzy sesjami",
            "correct": 1
        },
        {
            "text": "POP3 pozwala na synchronizację folderów na serwerze",
            "correct": 0
        },
        {
            "text": "POP3 używa portu 110 do komunikacji",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cechy protokołu IMAP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Pozwala na synchronizację lokalnej skrzynki pocztowej z serwerem",
            "correct": 1
        },
        {
            "text": "Umożliwia organizowanie poczty w foldery",
            "correct": 1
        },
        {
            "text": "Zachowuje stan użytkownika pomiędzy sesjami, np. nazwy folderów i przyporządkowanie listów do folderów",
            "correct": 1
        },
        {
            "text": "Wszystkie listy są przechowywane na serwerze",
            "correct": 1
        },
        {
            "text": "IMAP jest bezstanowy pomiędzy sesjami",
            "correct": 0
        },
        {
            "text": "IMAP używa portu 25 do komunikacji",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa demultipleksacja połączeniowa w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Gniazdo TCP jest określane przez cztery wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy.",
            "correct": 1
        },
        {
            "text": "Host odbierający używa tych wartości do skierowania segmentu do właściwego gniazda.",
            "correct": 1
        },
        {
            "text": "Serwer może obsługiwać wiele gniazd TCP jednocześnie, każde z unikalnym zestawem wartości.",
            "correct": 1
        },
        {
            "text": "Serwery WWW otwierają oddzielne gniazda dla każdego klienta, umożliwiając obsługę wielu żądań.",
            "correct": 1
        },
        {
            "text": "Demultipleksacja połączeniowa nie wymaga numerów portów.",
            "correct": 0
        },
        {
            "text": "TCP używa tylko jednego portu dla wszystkich połączeń.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Co to jest MRS w kontekście TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "MRS (Maximum Receive Segment size) to maksymalny rozmiar segmentu, jaki odbiorca może przyjąć od nadawcy w danym połączeniu TCP.",
            "correct": 1
        },
        {
            "text": "MRS określa minimalny rozmiar segmentu akceptowanego przez odbiorcę.",
            "correct": 0
        },
        {
            "text": "MRS jest używany do zarządzania kolejką pakietów w TCP.",
            "correct": 0
        },
        {
            "text": "MRS nie ma wpływu na transmisję danych w TCP.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak TCP kontroluje przeciążenie typu koniec-koniec?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "TCP monitoruje przeciążenie poprzez obserwację strat pakietów (timeouty, duplikaty ACK).",
            "correct": 1
        },
        {
            "text": "Nadawca ogranicza prędkość transmisji, zmniejszając rozmiar okna transmisyjnego po wykryciu przeciążenia.",
            "correct": 1
        },
        {
            "text": "Używa mechanizmów AIMD, powolnego startu i konserwatywnych reakcji na timeouty.",
            "correct": 1
        },
        {
            "text": "Kontrola przeciążenia typu koniec-koniec w TCP wykorzystuje specjalne sygnały z warstwy fizycznej.",
            "correct": 0
        },
        {
            "text": "TCP nie implementuje kontroli przeciążenia typu koniec-koniec.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cechy kontrolowania przeciążenia z pomocą sieci?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Rutery udostępniają informacje zwrotne systemom końcowym o przeciążeniu, np. poprzez specjalne bity w nagłówkach (ECN).",
            "correct": 1
        },
        {
            "text": "Nadawca dostosowuje prędkość transmisji na podstawie otrzymanych informacji.",
            "correct": 1
        },
        {
            "text": "Kontrola przeciążenia z pomocą sieci wymaga dodatkowego protokołu aplikacji.",
            "correct": 0
        },
        {
            "text": "Informacje o przeciążeniu są przesyłane w treści danych.",
            "correct": 0
        },
        {
            "text": "Kontrola przeciążenia z pomocą sieci nie wpływa na prędkość transmisji.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne zalety używania UDP w komunikacji strumieniowej?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Niska latencja dzięki braku inicjalizacji połączenia",
            "correct": 1
        },
        {
            "text": "Brak kontroli przepływu i przeciążenia umożliwia szybką transmisję",
            "correct": 1
        },
        {
            "text": "Tolerancja na straty pakietów, co jest akceptowalne dla aplikacji strumieniowych (audio, wideo)",
            "correct": 1
        },
        {
            "text": "UDP zapewnia niezawodną transmisję danych.",
            "correct": 0
        },
        {
            "text": "UDP automatycznie retransmituje utracone pakiety.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Co to jest segment TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Segment TCP to jednostka danych przesyłana w protokole TCP, zawierająca dane aplikacji oraz nagłówki z informacjami takimi jak porty, numery sekwencyjne, potwierdzenia, okno odbiorcy, suma kontrolna i flagi zarządzające połączeniem.",
            "correct": 1
        },
        {
            "text": "Segment TCP to pojedynczy pakiet sieciowy używany w protokole UDP.",
            "correct": 0
        },
        {
            "text": "Segment TCP to mechanizm szybkiego retransmitowania pakietów.",
            "correct": 0
        },
        {
            "text": "TCP nie używa segmentów do przesyłania danych.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa algorytm szybkich retransmisji w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Jeśli nadawca otrzyma trzy zduplikowane ACK dla tego samego pakietu, zakłada, że następny pakiet został utracony i natychmiast retransmituje ten pakiet bez czekania na timeout.",
            "correct": 1
        },
        {
            "text": "Szybkie retransmisje są wywoływane tylko przez nadawcę na podstawie sygnałów z warstwy aplikacji.",
            "correct": 0
        },
        {
            "text": "Algorytm szybkich retransmisji wymaga czterech zduplikowanych ACK, aby zareagować na utratę pakietu.",
            "correct": 0
        },
        {
            "text": "Szybkie retransmisje są stosowane tylko w protokole UDP.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak TCP zarządza retransmisjami w obecności strat pakietów?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "TCP używa timeoutów i szybkich retransmisji na podstawie duplikatów ACK.",
            "correct": 1
        },
        {
            "text": "Po wykryciu straty, TCP zmniejsza rozmiar okna transmisyjnego i dostosowuje prędkość transmisji zgodnie z mechanizmem AIMD.",
            "correct": 1
        },
        {
            "text": "TCP ignoruje straty pakietów i kontynuuje transmisję.",
            "correct": 0
        },
        {
            "text": "Retransmisje w TCP są zarządzane przez aplikację, a nie przez protokół.",
            "correct": 0
        },
        {
            "text": "TCP nie obsługuje retransmisji pakietów.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cechy protokołu DNS?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "DNS (Domain Name System) tłumaczy nazwy domenowe na adresy IP.",
            "correct": 1
        },
        {
            "text": "Składa się z hierarchii serwerów nazw.",
            "correct": 1
        },
        {
            "text": "Używa różnych typów rekordów, takich jak A, NS, CNAME, MX.",
            "correct": 1
        },
        {
            "text": "Jest protokołem warstwy aplikacji używanym przez hosty, rutery i serwery nazw.",
            "correct": 1
        },
        {
            "text": "DNS działa na porcie 80.",
            "correct": 0
        },
        {
            "text": "DNS nie jest używany do tłumaczenia nazw domenowych.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cechy protokołu HTTP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "HTTP (HyperText Transfer Protocol) używa TCP do komunikacji między klientem a serwerem na porcie 80.",
            "correct": 1
        },
        {
            "text": "Protokół typu \"pull\", gdzie klient wysyła żądanie, a serwer odpowiada.",
            "correct": 1
        },
        {
            "text": "Obsługuje trwałe i nietrwałe połączenia.",
            "correct": 1
        },
        {
            "text": "Wykorzystuje metody GET, POST, PUT, DELETE itp.",
            "correct": 1
        },
        {
            "text": "HTTP działa na porcie 25.",
            "correct": 0
        },
        {
            "text": "HTTP jest protokołem bezstanowym, który nie obsługuje utrzymania połączeń.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jak działa kontrola przeciążenia typu AIMD w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Additive Increase: TCP zwiększa rozmiar okna transmisyjnego liniowo po każdym RTT bez strat.",
            "correct": 1
        },
        {
            "text": "Multiplicative Decrease: TCP zmniejsza rozmiar okna transmisyjnego proporcjonalnie po wykryciu straty pakietu, zwykle dzieląc okno przez dwa.",
            "correct": 1
        },
        {
            "text": "AIMD polega na wykładniczym zwiększaniu okna transmisyjnego.",
            "correct": 0
        },
        {
            "text": "Kontrola przeciążenia typu AIMD w TCP wymaga dodatkowych bitów w nagłówku.",
            "correct": 0
        },
        {
            "text": "AIMD jest stosowany tylko w protokole UDP.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne scenariusze retransmisji w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Strata pakietu: Wykrywana poprzez timeout lub trzy zduplikowane ACK.",
            "correct": 1
        },
        {
            "text": "Strata ACK: Nadawca nie otrzymuje potwierdzenia i retransmituje pakiet.",
            "correct": 1
        },
        {
            "text": "Timeout: Nadawca retransmituje najstarszy niepotwierdzony pakiet i resetuje timer.",
            "correct": 1
        },
        {
            "text": "Retransmisja jest wywoływana tylko przez nadawcę bez sprawdzania ACK.",
            "correct": 0
        },
        {
            "text": "TCP nie implementuje retransmisji pakietów.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cechy protokołu DNS?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "DNS (Domain Name System) tłumaczy nazwy domenowe na adresy IP.",
            "correct": 1
        },
        {
            "text": "Składa się z hierarchii serwerów nazw.",
            "correct": 1
        },
        {
            "text": "Używa różnych typów rekordów, takich jak A, NS, CNAME, MX.",
            "correct": 1
        },
        {
            "text": "Jest protokołem warstwy aplikacji używanym przez hosty, rutery i serwery nazw.",
            "correct": 1
        },
        {
            "text": "DNS działa na porcie 80.",
            "correct": 0
        },
        {
            "text": "DNS nie jest używany do tłumaczenia nazw domenowych.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne etapy zarządzania połączeniem w TCP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Nawiązywanie połączenia: Trzykrotny uścisk dłoni (SYN, SYN-ACK, ACK).",
            "correct": 1
        },
        {
            "text": "Zarządzanie połączeniem: Kontrola przepływu, kontrola przeciążenia, zarządzanie buforami.",
            "correct": 1
        },
        {
            "text": "Zamykanie połączenia: Wymiana segmentów FIN i ACK, zapewniająca poprawne zakończenie połączenia.",
            "correct": 1
        },
        {
            "text": "Zarządzanie połączeniem obejmuje tylko kontrolę przepływu.",
            "correct": 0
        },
        {
            "text": "TCP nie posiada etapów zarządzania połączeniem.",
            "correct": 0
        }
    ]
},
{
    "pytanie": "Jakie są główne cechy protokołu FTP?",
    "alreadyGenerated": false,
    "answers": [
        {
            "text": "Umożliwia przesyłanie plików między klientem a serwerem",
            "correct": 1
        },
        {
            "text": "Obsługuje transfer plików w obu kierunkach (upload i download)",
            "correct": 1
        },
        {
            "text": "Umożliwia zarządzanie plikami na serwerze (np. tworzenie katalogów, usuwanie plików)",
            "correct": 1
        },
        {
            "text": "Używa oddzielnych połączeń kontrolnych (port 21) i transferowych (port 20)",
            "correct": 1
        },
        {
            "text": "Serwer FTP utrzymuje stan: aktualny katalog, wcześniejszą autoryzację",
            "correct": 1
        },
        {
            "text": "FTP działa tylko na porcie 80.",
            "correct": 0
        },
        {
            "text": "FTP jest bezstanowy i nie utrzymuje żadnych informacji o połączeniu.",
            "correct": 0
        }
    ]
    },
    
  {
    "pytanie": "Jakie są główne cele warstwy sieci?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Zrozumienie zasad i problemów działania usług warstwy sieci, takich jak ruting (wybór tras), skalowalność sieci, działanie ruterów oraz zaawansowane tematy jak IPv6 i mobilność.",
        "correct": 1
      },
      {
        "text": "Zarządzanie fizycznym połączeniem kablowym między urządzeniami sieciowymi.",
        "correct": 0
      },
      {
        "text": "Kontrola dostępu do medium transmisyjnego.",
        "correct": 0
      },
      {
        "text": "Kompresja danych przed ich przesłaniem.",
        "correct": 0
      },
      {
        "text": "Zapewnienie bezpiecznego uwierzytelniania użytkowników.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są podstawowe funkcje warstwy sieci z komutacją pakietów?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Wybór ścieżki: Określenie ścieżki, którą pakiet przebyje od nadawcy do odbiorcy przy użyciu algorytmów rutingu.",
        "correct": 1
      },
      {
        "text": "Przekazywanie: Przesyłanie pakietu z wejścia rutera do odpowiedniego wyjścia rutera.",
        "correct": 1
      },
      {
        "text": "Zarządzanie adresami MAC w sieci lokalnej.",
        "correct": 0
      },
      {
        "text": "Kompresja danych w celu optymalizacji przepustowości.",
        "correct": 0
      },
      {
        "text": "Szyfrowanie danych przesyłanych przez sieć.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Co to są wirtualne kanały w sieciach komputerowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Inicjalizacja wirtualnego kanału przed rozpoczęciem komunikacji danych.",
        "correct": 1
      },
      {
        "text": "Każdy pakiet posiada identyfikator wirtualnego kanału.",
        "correct": 1
      },
      {
        "text": "Rutery na ścieżce nadawca-odbiorca utrzymują \"stan\" dla każdego wirtualnego kanału.",
        "correct": 1
      },
      {
        "text": "Umożliwiają przydzielanie zasobów łącz i ruterów do wirtualnych kanałów, zapewniając wydajność podobną do kanału telefonicznego.",
        "correct": 1
      },
      {
        "text": "Zapewniają automatyczne zarządzanie przepływem danych bez konieczności konfiguracji.",
        "correct": 0
      },
      {
        "text": "Eliminują potrzebę używania protokołów rutingu w sieci.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie protokoły sygnalizacyjne są używane w wirtualnych kanałach?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Używane w sieciach ATM, Frame-Relay, X.25.",
        "correct": 1
      },
      {
        "text": "Służą do inicjalizacji, zarządzania i zamykania wirtualnych kanałów.",
        "correct": 1
      },
      {
        "text": "Nie są powszechnie używane w dzisiejszym Internecie.",
        "correct": 1
      },
      {
        "text": "Zastępują protokoły TCP i UDP w komunikacji sieciowej.",
        "correct": 0
      },
      {
        "text": "Odpowiadają za szyfrowanie danych wirtualnych kanałów.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym charakteryzują się sieci datagramowe?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Nie tworzą połączeń w warstwie sieci.",
        "correct": 1
      },
      {
        "text": "Rutery nie przechowują stanu o połączeniach.",
        "correct": 1
      },
      {
        "text": "Pakiety są przekazywane przy użyciu adresu odbiorcy.",
        "correct": 1
      },
      {
        "text": "Pakiety między tymi samymi nadawcami i odbiorcami mogą korzystać z różnych ścieżek.",
        "correct": 1
      },
      {
        "text": "Wymagają ustalonego połączenia przed transmisją danych.",
        "correct": 0
      },
      {
        "text": "Zapewniają gwarantowaną kolejność dostarczania pakietów.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne modele usług warstwy sieci?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Best Effort: Brak gwarantowanej przepustowości, niezawodna komunikacja i uporządkowanie.",
        "correct": 1
      },
      {
        "text": "CBR (Constant Bit Rate): Stała przepustowość, brak strat, uporządkowana komunikacja.",
        "correct": 1
      },
      {
        "text": "VBR (Variable Bit Rate): Zmienna przepustowość, możliwość strat, uporządkowana komunikacja.",
        "correct": 1
      },
      {
        "text": "ABR (Available Bit Rate): Dostępna przepustowość, gwarantowane minimum, możliwość strat, uporządkowana komunikacja.",
        "correct": 1
      },
      {
        "text": "UBR (Unspecified Bit Rate): Brak gwarancji przepustowości, możliwość strat, uporządkowana komunikacja.",
        "correct": 1
      },
      {
        "text": "CBR (Continuous Bit Rate): Nieprzerwana transmisja danych bez żadnych strat.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są różnice między sieciami z wirtualnymi kanałami a sieciami datagramowymi?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Internet (Sieci Datagramowe): Komunikacja danych między komputerami bez nawiązywania połączeń.",
        "correct": 1
      },
      {
        "text": "Internet (Sieci Datagramowe): Usługi elastyczne, brak potrzeby synchronizacji.",
        "correct": 1
      },
      {
        "text": "Internet (Sieci Datagramowe): \"Sprytne\" systemy końcowe mogą się dostosować i naprawiać błędy.",
        "correct": 1
      },
      {
        "text": "Internet (Sieci Datagramowe): Różne typy łącz o różnych charakterystykach.",
        "correct": 1
      },
      {
        "text": "ATM (Wirtualne Kanały): Nawiązywanie połączeń przed komunikacją danych.",
        "correct": 1
      },
      {
        "text": "ATM (Wirtualne Kanały): Synchronizacja i gwarantowane usługi.",
        "correct": 1
      },
      {
        "text": "ATM (Wirtualne Kanały): \"Głupie\" systemy końcowe, złożoność w działaniu szkieletu sieci.",
        "correct": 1
      },
      {
        "text": "ATM (Wirtualne Kanały): Podział pakietów na komórki ustalonej wielkości i przełączanie przez kratę.",
        "correct": 1
      },
      {
        "text": "Sieci Datagramowe wymagają stałych połączeń między wszystkimi węzłami.",
        "correct": 0
      },
      {
        "text": "Wirtualne kanały nie umożliwiają równoczesnego przesyłania danych do wielu odbiorców.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy rutingu hierarchicznego?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Podział sieci na regiony zwane systemami autonomicznymi (AS).",
        "correct": 1
      },
      {
        "text": "Rutery w tym samym AS używają tego samego protokołu rutingu wewnętrznego.",
        "correct": 1
      },
      {
        "text": "Rutery w różnych AS mogą używać różnych protokołów rutingu wewnętrznego.",
        "correct": 1
      },
      {
        "text": "Specjalne rutery-bramy w AS obsługują ruting zasdewnętrzny do innych AS.",
        "correct": 1
      },
      {
        "text": "Implementacja sieci peer-to-peer bez centralnego zarządzania.",
        "correct": 0
      },
      {
        "text": "Używanie jednego globalnego protokołu rutingu dla całej sieci.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Co to jest autonomiczny system (AS) w kontekście rutingu hierarchicznego?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "AS to duży zbiór rutera działających pod wspólną administracją i korzystających z tego samego protokołu rutingu wewnętrznego.",
        "correct": 1
      },
      {
        "text": "AS są podstawowymi jednostkami w rutingu hierarchicznym, umożliwiając skalowalność i zarządzanie dużymi sieciami.",
        "correct": 1
      },
      {
        "text": "AS to małe, lokalne sieci bezpośrednio połączone z Internetem.",
        "correct": 0
      },
      {
        "text": "AS odpowiadają za fizyczne połączenia kablowe między różnymi sieciami.",
        "correct": 0
      },
      {
        "text": "AS to specjalne serwery zarządzające ruchem sieciowym w dużych korporacjach.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu Internetu (IP)?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "IP (Internet Protocol) jest podstawowym protokołem warstwy sieciowej w architekturze Internetu.",
        "correct": 1
      },
      {
        "text": "Umożliwia adresowanie i przekazywanie pakietów danych między hostami.",
        "correct": 1
      },
      {
        "text": "Obsługuje zarówno IPv4, jak i IPv6.",
        "correct": 1
      },
      {
        "text": "Działa na zasadzie best-effort, nie gwarantując niezawodności ani uporządkowania pakietów.",
        "correct": 1
      },
      {
        "text": "Zapewnia szyfrowanie danych przesyłanych przez sieć.",
        "correct": 0
      },
      {
        "text": "Kontroluje fizyczne połączenia między urządzeniami sieciowymi.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IPv6?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "IPv6 to nowa wersja protokołu Internetu, zaprojektowana w celu rozwiązania problemów związanych z ograniczoną przestrzenią adresową IPv4.",
        "correct": 1
      },
      {
        "text": "Używa 128-bitowych adresów, co pozwala na znacznie większą liczbę unikalnych adresów.",
        "correct": 1
      },
      {
        "text": "Zawiera ulepszenia takie jak prostszy nagłówek, lepsza obsługa mobilności i multicastu.",
        "correct": 1
      },
      {
        "text": "Zapewnia lepsze bezpieczeństwo i automatyczną konfigurację adresów.",
        "correct": 1
      },
      {
        "text": "IPv6 jest kompatybilny z protokołami IPv1-IPv5 bez konieczności modyfikacji.",
        "correct": 0
      },
      {
        "text": "IPv6 eliminuje potrzebę używania NAT (Network Address Translation).",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy działania rutera?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Odbiór pakietu: Ruter odbiera pakiet na jednym z portów wejściowych.",
        "correct": 1
      },
      {
        "text": "Dekapsulacja: Warstwa łącza dekapsuluje pakiet i przekazuje go do warstwy sieciowej.",
        "correct": 1
      },
      {
        "text": "Sprawdzenie adresu docelowego: Ruter sprawdza adres IP odbiorcy w nagłówku pakietu.",
        "correct": 1
      },
      {
        "text": "Wyszukanie w tablicy rutingu: Ruter odnajduje najlepszą ścieżkę do odbiorcy w swojej tablicy rutingu.",
        "correct": 1
      },
      {
        "text": "Przekazanie pakietu: Pakiet jest enkapsulowany i przesyłany na odpowiedni port wyjściowy.",
        "correct": 1
      },
      {
        "text": "Kolejkowanie: Jeśli port wyjściowy jest zajęty, pakiet jest umieszczany w kolejce.",
        "correct": 1
      },
      {
        "text": "Szyfrowanie pakietów przed ich wysłaniem na port wyjściowy.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne funkcje portu wyjściowego w ruterze?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kolejkowanie: Umieszczanie pakietów w kolejce, gdy pole komutacyjne jest wolniejsze niż przychodzący ruch.",
        "correct": 1
      },
      {
        "text": "Zarządzanie kolejnością: Wybieranie pakietów z kolejki do transmisji w odpowiedniej kolejności.",
        "correct": 1
      },
      {
        "text": "Enkapsulacja: Opakowanie pakietu w ramkę warstwy łącza przed wysłaniem na medium fizyczne.",
        "correct": 1
      },
      {
        "text": "Przekazywanie: Wysyłanie pakietów na odpowiedni port wyjściowy zgodnie z tablicą rutingu.",
        "correct": 1
      },
      {
        "text": "Zarządzanie adresami IP urządzeń końcowych.",
        "correct": 0
      },
      {
        "text": "Monitorowanie ruchu sieciowego w celu wykrywania anomalii.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne rodzaje przełączania w ruterach?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Przełączanie w pamięci (Memory-based Switching): Pakiet jest kopiowany przez procesor rutera, co może ograniczać prędkość przekazywania.",
        "correct": 1
      },
      {
        "text": "Przełączanie za pomocą szyny (Bus-based Switching): Pakiet przesyłany jest przez wspólną szynę do portu wyjściowego, co może prowadzić do konkurencji o pasmo szyny.",
        "correct": 1
      },
      {
        "text": "Przełączanie za pomocą kraty (Crossbar Switching): Pakiety przełączane są przez kratę, co umożliwia równoczesne przekazywanie wielu pakietów bez konkurencji o pasmo.",
        "correct": 1
      },
      {
        "text": "Przełączanie hybrydowe, które łączy cechy przełączania w pamięci i za pomocą szyny.",
        "correct": 0
      },
      {
        "text": "Przełączanie dynamiczne, które automatycznie dostosowuje się do obciążenia sieci.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są zalety i wady przełączania za pomocą kraty w ruterach?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Zalety:",
        "correct": 0
      },
      {
        "text": "Eliminacja konkurencji o pasmo szyny, co pozwala na szybkie przekazywanie wielu pakietów jednocześnie.",
        "correct": 1
      },
      {
        "text": "Wysoka przepustowość, odpowiednia dla dużych sieci i ruterów szkieletowych.",
        "correct": 1
      },
      {
        "text": "Wady:",
        "correct": 0
      },
      {
        "text": "Złożoność implementacji.",
        "correct": 1
      },
      {
        "text": "Wyższe koszty sprzętowe w porównaniu do innych metod przełączania.",
        "correct": 1
      },
      {
        "text": "Ograniczona skalowalność w bardzo dużych sieciach.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa algorytm rutingu stanu łącza (Link State)?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Rutery w sieci wymieniają informacje o stanie swoich łączy z innymi ruterami.",
        "correct": 1
      },
      {
        "text": "Każdy ruter buduje pełną mapę topologii sieci.",
        "correct": 1
      },
      {
        "text": "Używa algorytmu Dijkstry do obliczania najkrótszych ścieżek do wszystkich innych węzłów.",
        "correct": 1
      },
      {
        "text": "Każdy ruter utrzymuje tablicę rutingu na podstawie obliczonych ścieżek.",
        "correct": 1
      },
      {
        "text": "Rutery nie przechowują żadnych informacji o topologii sieci.",
        "correct": 0
      },
      {
        "text": "Algorytm opiera się na wymianie wektorów odległości między ruterami.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa algorytm Dijkstry w kontekście rutingu?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Oblicza najkrótsze ścieżki od źródła do wszystkich innych węzłów w grafie.",
        "correct": 1
      },
      {
        "text": "Inicjalizuje zestaw węzłów z najniższymi kosztami.",
        "correct": 1
      },
      {
        "text": "Iteracyjnie dodaje najniższy kosztowany węzeł do zbioru N i aktualizuje koszty do sąsiednich węzłów.",
        "correct": 1
      },
      {
        "text": "Kontynuuje, aż wszystkie węzły będą w zbiorze N.",
        "correct": 1
      },
      {
        "text": "Używa metody losowej do wyboru następnego węzła do przetworzenia.",
        "correct": 0
      },
      {
        "text": "Działa tylko w sieciach datagramowych bez złożonych topologii.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety i wady algorytmu rutingu wektora odległości (Distance Vector)?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Zalety:",
        "correct": 0
      },
      {
        "text": "Prostsza implementacja.",
        "correct": 1
      },
      {
        "text": "Mniejsza złożoność komunikacyjna, komunikacja tylko między sąsiadami.",
        "correct": 1
      },
      {
        "text": "Wady:",
        "correct": 0
      },
      {
        "text": "Zmienny czas zbieżności.",
        "correct": 1
      },
      {
        "text": "Możliwość wystąpienia pętli i problemu odliczania w nieskończoność.",
        "correct": 1
      },
      {
        "text": "Błędy mogą propagować się przez sieć.",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Jak działa algorytm rutingu wektora odległości?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Każdy węzeł utrzymuje wektor odległości, czyli tablicę kosztów do wszystkich innych węzłów.",
        "correct": 1
      },
      {
        "text": "Węzły wymieniają informacje ze swoimi sąsiadami iteracyjnie.",
        "correct": 1
      },
      {
        "text": "Po otrzymaniu informacji od sąsiada, węzeł aktualizuje swoją tablicę odległości, wybierając najniższy koszt do każdego celu.",
        "correct": 1
      },
      {
        "text": "Proces trwa, aż wszystkie węzły ustabilizują swoje wektory odległości.",
        "correct": 1
      },
      {
        "text": "Wykorzystuje pełną topologię sieci do obliczeń tras.",
        "correct": 0
      },
      {
        "text": "Nie wymaga regularnej wymiany informacji między węzłami.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy algorytmu rutingu wektora odległości?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Inicjalizacja: Ustawienie początkowych kosztów do sąsiadów i nieskończonych kosztów do pozostałych węzłów.",
        "correct": 1
      },
      {
        "text": "Wymiana informacji: Wysyłanie minimalnych kosztów do sąsiadów.",
        "correct": 1
      },
      {
        "text": "Aktualizacja: Aktualizacja tablicy odległości na podstawie otrzymanych informacji.",
        "correct": 1
      },
      {
        "text": "Powtarzanie: Kontynuowanie procesu, aż wektory odległości się nie zmienią.",
        "correct": 1
      },
      {
        "text": "Kompresja danych przed ich wymianą między węzłami.",
        "correct": 0
      },
      {
        "text": "Zamykanie połączeń po każdej wymianie informacji.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Co to jest ruting rozsiewczy (multicast) w sieciach komputerowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Ruting multicast umożliwia jednoczesne przesyłanie pakietów do wielu odbiorców.",
        "correct": 1
      },
      {
        "text": "Używa specjalnych grup adresowych, do których należą odbiorcy multicastu.",
        "correct": 1
      },
      {
        "text": "Efektywnie wykorzystuje zasoby sieci poprzez wspólne przesyłanie danych dla wszystkich odbiorców w grupie.",
        "correct": 1
      },
      {
        "text": "Wymaga dedykowanych połączeń między nadawcą a każdym odbiorcą.",
        "correct": 0
      },
      {
        "text": "Nie wspiera dynamicznego dodawania i usuwania odbiorców z grupy multicastowej.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety rutingu hierarchicznego?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Skalowalność: Umożliwia zarządzanie dużymi sieciami poprzez podział na mniejsze, autonomiczne systemy.",
        "correct": 1
      },
      {
        "text": "Redukcja złożoności: Rutery w ramach AS korzystają z jednego protokołu rutingu wewnętrznego, co upraszcza zarządzanie.",
        "correct": 1
      },
      {
        "text": "Efektywność: Pozwala na bardziej efektywne wykorzystanie zasobów sieciowych i redukcję obciążenia sieci.",
        "correct": 1
      },
      {
        "text": "Zwiększona redundancja poprzez wielokrotne połączenia między AS.",
        "correct": 0
      },
      {
        "text": "Eliminacja potrzeby używania protokołów rutingu zewnętrznego.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu BGP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "BGP (Border Gateway Protocol) jest protokołem rutingu zewnętrznego używanym między AS.",
        "correct": 1
      },
      {
        "text": "Umożliwia wymianę informacji rutingu między różnymi AS.",
        "correct": 1
      },
      {
        "text": "Opiera się na atrybutach tras, takich jak AS_PATH, NEXT_HOP, LOCAL_PREF.",
        "correct": 1
      },
      {
        "text": "Zapewnia polityki routingu i kontrolę nad wyborem tras na podstawie zasad administracyjnych.",
        "correct": 1
      },
      {
        "text": "Jest prostym protokołem wektora odległości bez zaawansowanych funkcji.",
        "correct": 0
      },
      {
        "text": "Nie obsługuje dynamicznego dodawania nowych AS do sieci.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołów rutingu wewnętrznego i zewnętrznego?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Protokoły rutingu wewnętrznego (Interior Gateway Protocols - IGP):",
        "correct": 0
      },
      {
        "text": "Działają wewnątrz pojedynczego AS.",
        "correct": 1
      },
      {
        "text": "Przykłady: RIP, OSPF, IS-IS.",
        "correct": 1
      },
      {
        "text": "Skupiają się na optymalnym wyborze tras wewnątrz AS.",
        "correct": 1
      },
      {
        "text": "Protokoły rutingu zewnętrznego (Exterior Gateway Protocols - EGP):",
        "correct": 0
      },
      {
        "text": "Działają pomiędzy różnymi AS.",
        "correct": 1
      },
      {
        "text": "Przykład: BGP.",
        "correct": 1
      },
      {
        "text": "Skupiają się na wymianie informacji rutingu między AS, uwzględniając polityki routingu.",
        "correct": 1
      },
      {
        "text": "IGP jest używany tylko w małych sieciach lokalnych.",
        "correct": 0
      },
      {
        "text": "EGP nie obsługuje zaawansowanych atrybutów tras.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy zamykania połączenia TCP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Krok 1: Klient wysyła segment FIN do serwera.",
        "correct": 1
      },
      {
        "text": "Krok 2: Serwer odbiera FIN, odpowiada segmentem ACK, a następnie wysyła własny segment FIN do klienta.",
        "correct": 1
      },
      {
        "text": "Krok 3: Klient odbiera FIN od serwera, odpowiada segmentem ACK.",
        "correct": 1
      },
      {
        "text": "Krok 4: Serwer odbiera ACK od klienta, po czym połączenie jest zamknięte.",
        "correct": 1
      },
      {
        "text": "Serwer zamyka połączenie natychmiast po otrzymaniu segmentu FIN.",
        "correct": 0
      },
      {
        "text": "Klient nie musi wysyłać segmentu ACK po otrzymaniu FIN od serwera.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Co to jest trzykrotny uścisk dłoni (three-way handshake) w TCP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Proces inicjalizacji połączenia TCP składający się z trzech kroków:",
        "correct": 0
      },
      {
        "text": "Krok 1: Klient wysyła segment SYN do serwera z początkowym numerem sekwencyjnym.",
        "correct": 1
      },
      {
        "text": "Krok 2: Serwer odpowiada segmentem SYN-ACK, potwierdzając otrzymanie SYN klienta i wysyłając własny SYN.",
        "correct": 1
      },
      {
        "text": "Krok 3: Klient wysyła segment ACK potwierdzający SYN serwera.",
        "correct": 1
      },
      {
        "text": "Po tym procesie połączenie jest nawiązane i można rozpocząć transmisję danych.",
        "correct": 1
      },
      {
        "text": "Trzykrotny uścisk dłoni obejmuje tylko dwa kroki, a trzeci krok jest opcjonalny.",
        "correct": 0
      },
      {
        "text": "Ten proces dotyczy tylko połączeń UDP.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne różnice między algorytmami rutingu stanu łącza a rutingu wektora odległości?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Ruting stanu łącza (Link State):",
        "correct": 0
      },
      {
        "text": "Wszystkie rutery mają pełną topologię sieci i koszty łącz.",
        "correct": 1
      },
      {
        "text": "Używa algorytmu Dijkstry do obliczania najkrótszych ścieżek.",
        "correct": 1
      },
      {
        "text": "Wysoka złożoność komunikacyjna (O(n²)).",
        "correct": 1
      },
      {
        "text": "Szybsza i bardziej stabilna zbieżność.",
        "correct": 1
      },
      {
        "text": "Ruting wektora odległości (Distance Vector):",
        "correct": 0
      },
      {
        "text": "Rutery wymieniają informacje tylko ze swoimi sąsiadami.",
        "correct": 1
      },
      {
        "text": "Używa wektorów odległości do obliczania tras.",
        "correct": 1
      },
      {
        "text": "Niższa złożoność komunikacyjna.",
        "correct": 1
      },
      {
        "text": "Możliwość wystąpienia pętli i problemów z odliczaniem w nieskończoność.",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety rutingu stanu łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Zalety:",
        "correct": 0
      },
      {
        "text": "Szybsza i bardziej stabilna zbieżność.",
        "correct": 1
      },
      {
        "text": "Dokładniejsze obliczanie najkrótszych tras.",
        "correct": 1
      },
      {
        "text": "Lepsza skalowalność w dużych sieciach.",
        "correct": 1
      },
      {
        "text": "Wady:",
        "correct": 0
      },
      {
        "text": "Wyższa złożoność komunikacyjna i obliczeniowa.",
        "correct": 1
      },
      {
        "text": "Wymaga większej ilości pamięci do przechowywania topologii sieci.",
        "correct": 1
      },
      {
        "text": "Większy nakład na aktualizacje topologii.",
        "correct": 1
      },
      {
        "text": "Brak wsparcia dla dynamicznych zmian w sieci.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne wyzwania związane z rutingiem wektora odległości?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Możliwość wystąpienia pętli routingu.",
        "correct": 1
      },
      {
        "text": "Problem odliczania w nieskończoność, gdzie złe wieści propagują się powoli.",
        "correct": 1
      },
      {
        "text": "Zmienny czas zbieżności.",
        "correct": 1
      },
      {
        "text": "Potrzeba mechanizmów zapobiegających błędnym aktualizacjom.",
        "correct": 1
      },
      {
        "text": "Wysoka złożoność obliczeniowa algorytmu.",
        "correct": 0
      },
      {
        "text": "Brak możliwości skalowania w dużych sieciach.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Co to jest ruting rozsiewczy (multicast) i jakie są jego zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Ruting multicast umożliwia jednoczesne przesyłanie pakietów do wielu odbiorców.",
        "correct": 1
      },
      {
        "text": "Używa specjalnych grup adresowych multicastowych.",
        "correct": 1
      },
      {
        "text": "Zastosowania obejmują transmisje wideo, konferencje online, dystrybucję oprogramowania i inne aplikacje wymagające jednoczesnego przesyłania danych do wielu odbiorców.",
        "correct": 1
      },
      {
        "text": "Wymaga dedykowanych połączeń dla każdego odbiorcy w grupie.",
        "correct": 0
      },
      {
        "text": "Nie wspiera dynamicznego dodawania nowych odbiorców do grupy multicastowej.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu RIP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "RIP (Routing Information Protocol) jest protokołem rutingu wektora odległości.",
        "correct": 1
      },
      {
        "text": "Używa liczby skoków (hops) jako metryki do wyboru tras.",
        "correct": 1
      },
      {
        "text": "Maksymalna liczba skoków to 15, co ogranicza skalowalność.",
        "correct": 1
      },
      {
        "text": "Aktualizacje rutingu są wysyłane co 30 sekund.",
        "correct": 1
      },
      {
        "text": "Jest trudny do skonfigurowania, ale oferuje wysoką wydajność.",
        "correct": 0
      },
      {
        "text": "RIP obsługuje zarówno routowanie statyczne, jak i dynamiczne.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół OSPF?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "OSPF (Open Shortest Path First) jest protokołem rutingu stanu łącza.",
        "correct": 1
      },
      {
        "text": "Działa wewnątrz AS.",
        "correct": 1
      },
      {
        "text": "Używa algorytmu Dijkstry do obliczania najkrótszych ścieżek.",
        "correct": 1
      },
      {
        "text": "Wymienia informacje o stanie łączy za pomocą LSAs (Link State Advertisements).",
        "correct": 1
      },
      {
        "text": "Zapewnia wolną zbieżność, ale niższą dokładność tras.",
        "correct": 0
      },
      {
        "text": "Nie jest skalowalny w dużych sieciach korporacyjnych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu multicast w IPv6?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "IPv6 wprowadza rozszerzoną obsługę multicastu.",
        "correct": 1
      },
      {
        "text": "Używa specjalnych zakresów adresów multicastowych.",
        "correct": 1
      },
      {
        "text": "Umożliwia bardziej efektywne przesyłanie danych do wielu odbiorców.",
        "correct": 1
      },
      {
        "text": "Integruje się z protokołami rutingu multicastowego, takimi jak PIM (Protocol Independent Multicast).",
        "correct": 1
      },
      {
        "text": "Wymaga używania dodatkowych protokołów do zarządzania grupami multicastowymi.",
        "correct": 0
      },
      {
        "text": "Nie wspiera dynamicznego dodawania nowych odbiorców do grupy multicastowej.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy mobilności w sieciach IPv6?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Mobilność w IPv6 umożliwia hostom zmianę sieci bez zmiany ich adresu IP.",
        "correct": 1
      },
      {
        "text": "Umożliwia utrzymanie połączeń nawet podczas przemieszczania się między różnymi sieciami.",
        "correct": 1
      },
      {
        "text": "Wykorzystuje mechanizmy takie jak Mobile IPv6, które zapewniają translację adresów i przekierowywanie pakietów.",
        "correct": 1
      },
      {
        "text": "Zapewnia bezproblemową mobilność i ciągłość komunikacji dla użytkowników mobilnych.",
        "correct": 1
      },
      {
        "text": "Mobilność w IPv6 wymaga dodatkowego sprzętu w urządzeniach końcowych.",
        "correct": 0
      },
      {
        "text": "Nie obsługuje translacji adresów, co ogranicza mobilność w praktyce.",
        "correct": 0
      }
    ],
    
  },
  {
    "pytanie": "Jakie są funkcje warstwy sieci hosta i rutera?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Protokół rutingu", "correct": 1 },
      { "text": "Wybór ścieżek", "correct": 1 },
      { "text": "Protokół RIP, OSPF, BGP", "correct": 1 },
      { "text": "Protokół TCP", "correct": 0 },
      { "text": "Zarządzanie sesjami użytkowników", "correct": 0 }
    ]
  },
  {
    "pytanie": "Czym jest adres IP i jak jest przypisany do interfejsów w sieci?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Adres IP to 32-bitowy identyfikator hosta lub interfejsu rutera.", "correct": 1 },
      { "text": "Każdy interfejs w urządzeniu ma przypisany unikalny adres IP.", "correct": 1 },
      { "text": "Rutery zazwyczaj posiadają wiele interfejsów, a hosty mogą mieć wiele interfejsów, z których każdy ma przypisany adres IP.", "correct": 1 },
      { "text": "Adres IP jest 64-bitowy i identyfikuje urządzenie w sieci.", "correct": 0 },
      { "text": "Adresy IP są dynamicznie przypisywane tylko przez DHCP.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są części składowe adresu IP?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Część sieciowa (bardziej znaczące bity)", "correct": 1 },
      { "text": "Część hosta (mniej znaczące bity)", "correct": 1 },
      { "text": "Adres sieci definiuje, które interfejsy mogą się bezpośrednio komunikować bez pośrednictwa rutera.", "correct": 1 },
      { "text": "Część broadcast", "correct": 0 },
      { "text": "Część multicast", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są klasy adresów IP i ich zakresy?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Klasa A: 1.0.0.0 do 127.255.255.255", "correct": 1 },
      { "text": "Klasa B: 128.0.0.0 do 191.255.255.255", "correct": 1 },
      { "text": "Klasa C: 192.0.0.0 do 223.255.255.255", "correct": 1 },
      { "text": "Klasa D (multicast): 224.0.0.0 do 239.255.255.255", "correct": 1 },
      { "text": "Klasa E: 240.0.0.0 do 254.255.255.255", "correct": 0 },
      { "text": "Klasa F: 255.0.0.0 do 255.255.255.255", "correct": 0 }
    ]
  },
  {
    "pytanie": "Co to jest CIDR i jakie są jego zalety w adresowaniu IP?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "CIDR (Classless Inter-Domain Routing) to metoda adresowania bez użycia klas.", "correct": 1 },
      { "text": "Pozwala na bardziej efektywne wykorzystanie przestrzeni adresowej poprzez dowolną długość części sieciowej adresu.", "correct": 1 },
      { "text": "Format adresu: a.b.c.d/x, gdzie x jest liczbą bitów w części sieciowej.", "correct": 1 },
      { "text": "CIDR zwiększa liczbę dostępnych adresów przez dodanie klas E i F.", "correct": 0 },
      { "text": "CIDR jest używany tylko w IPv6.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jak host otrzymuje adres IP w sieci?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Adres IP może być przypisany statycznie przez administratora lub dynamicznie za pomocą DHCP (Dynamic Host Configuration Protocol).", "correct": 1 },
      { "text": "DHCP umożliwia hostom automatyczne uzyskiwanie adresów IP oraz przedłużanie czasu korzystania z adresów.", "correct": 1 },
      { "text": "Hosty zawsze muszą mieć statycznie przypisany adres IP.", "correct": 0 },
      { "text": "Adresy IP są losowo generowane przez hosty bez potrzeby serwera.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jak działa DHCP i jakie są jego etapy?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Host wysyła komunikat DHCP Discover.", "correct": 1 },
      { "text": "Serwer DHCP odpowiada komunikatem DHCP Offer z proponowanym adresem IP.", "correct": 1 },
      { "text": "Host wysyła komunikat DHCP Request, żądając przydzielenia adresu.", "correct": 1 },
      { "text": "Serwer DHCP wysyła komunikat DHCP Ack, potwierdzający przydzielenie adresu.", "correct": 1 },
      { "text": "Host wysyła komunikat DHCP Release po zakończeniu sesji.", "correct": 0 },
      { "text": "Serwer DHCP inicjalizuje połączenie TCP z hostem.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Co to jest NAT i jakie są jego zalety?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "NAT (Network Address Translation) pozwala na tłumaczenie adresów IP wewnętrznych na jeden adres IP zewnętrzny.", "correct": 1 },
      { "text": "Oszczędność przestrzeni adresowej IP.", "correct": 1 },
      { "text": "Zwiększenie bezpieczeństwa poprzez ukrycie wewnętrznych adresów.", "correct": 1 },
      { "text": "Możliwość zmiany adresów wewnętrznych bez wpływu na adresy zewnętrzne.", "correct": 1 },
      { "text": "Zwiększenie liczby dostępnych portów dla aplikacji P2P.", "correct": 0 },
      { "text": "Umożliwia bezpośrednie połączenia między hostami z różnych sieci.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jak działa NAT w przypadku wychodzących i przychodzących pakietów?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Wychodzące pakiety: Adres IP źródła i numer portu są zastępowane przez adres IP NAT i nowy numer portu.", "correct": 1 },
      { "text": "Przychodzące pakiety: Adres IP NAT i numer portu są zastępowane przez oryginalny adres IP źródła i numer portu z tablicy translacji NAT.", "correct": 1 },
      { "text": "Wychodzące pakiety: NAT dodaje dodatkowy nagłówek do pakietu.", "correct": 0 },
      { "text": "Przychodzące pakiety: NAT blokuje pakiety z nieznanych adresów.", "correct": 0 },
      { "text": "NAT działa tylko w jednej stronę, nie obsługując przychodzących pakietów.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne protokoły rutingu wewnętrznego (IGP)?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "RIP (Routing Information Protocol)", "correct": 1 },
      { "text": "OSPF (Open Shortest Path First)", "correct": 1 },
      { "text": "IGRP (Interior Gateway Routing Protocol) – własny protokół firmy Cisco", "correct": 1 },
      { "text": "BGP (Border Gateway Protocol)", "correct": 0 },
      { "text": "EIGRP (Enhanced Interior Gateway Routing Protocol)", "correct": 0 }
    ]
  },
  {
    "pytanie": "Na czym polega algorytm rutingu RIP?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "RIP używa algorytmu wektora odległości.", "correct": 1 },
      { "text": "Miara odległości to liczba kroków (maksymalnie 15 kroków).", "correct": 1 },
      { "text": "Rutery wymieniają informacje o trasach ze swoimi sąsiadami co 30 sekund poprzez komunikaty UDP.", "correct": 1 },
      { "text": "RIP wykorzystuje algorytm Dijkstry do obliczania tras.", "correct": 0 },
      { "text": "RIP jest protokołem stanu łącza.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jak RIP radzi sobie z awarią łącza?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Jeśli nie ma ogłoszenia od sąsiada przez 180 sekund, uznaje się, że łącze jest niedostępne.", "correct": 1 },
      { "text": "Ścieżki przez tego sąsiada stają się nieważne, a informacja o awarii jest rozsyłana do innych ruterów.", "correct": 1 },
      { "text": "Używany jest mechanizm \"zatrutego powrotu\" (połączenia z odległością 16 kroków) aby uniknąć pętli routingu.", "correct": 1 },
      { "text": "RIP automatycznie przełącza się na protokół OSPF w przypadku awarii.", "correct": 0 },
      { "text": "RIP nie obsługuje awarii łączy.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Czym jest OSPF i jakie są jego główne cechy?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "OSPF (Open Shortest Path First) to protokół rutingu stanu łącza.", "correct": 1 },
      { "text": "Używa algorytmu Dijkstry do obliczania najkrótszych ścieżek.", "correct": 1 },
      { "text": "Rutery rozsyłają ogłoszenia stanu łącza (LSA) do całego AS.", "correct": 1 },
      { "text": "Wspiera hierarchiczny ruting w dużych sieciach poprzez podział na obszary.", "correct": 1 },
      { "text": "OSPF jest protokołem wektora odległości.", "correct": 0 },
      { "text": "OSPF nie wspiera skalowalności w dużych sieciach.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie zaawansowane cechy posiada OSPF?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Autentykacja komunikatów OSPF dla bezpieczeństwa.", "correct": 1 },
      { "text": "Obsługa wielu ścieżek o tym samym koszcie (multipath).", "correct": 1 },
      { "text": "Możliwość przypisania różnych kosztów dla różnych typów usług (QoS).", "correct": 1 },
      { "text": "Integracja rutingu unicast i multicast poprzez MOSPF.", "correct": 1 },
      { "text": "OSPF nie obsługuje autentykacji komunikatów.", "correct": 0 },
      { "text": "OSPF nie wspiera QoS.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Czym jest hierarchiczny OSPF?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Hierarchiczny OSPF dzieli sieć na obszary lokalne i szkieletowe.", "correct": 1 },
      { "text": "Rutery brzegowe obszarów podsumowują informacje o trasach w swoim obszarze i ogłaszają je do szkieletu.", "correct": 1 },
      { "text": "Rutery szkieletowe realizują ruting OSPF między obszarami i połączeniami zewnętrznymi.", "correct": 1 },
      { "text": "Hierarchiczny OSPF nie obsługuje wielu obszarów.", "correct": 0 },
      { "text": "Hierarchiczny OSPF jest przeznaczony tylko dla małych sieci.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Co to jest BGP i do czego służy?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "BGP (Border Gateway Protocol) to standardowy protokół rutingu zewnętrznego (EGP) używany między systemami autonomicznymi (AS) w Internecie.", "correct": 1 },
      { "text": "Używa algorytmu wektora ścieżek, gdzie każda ścieżka to ciąg AS prowadzący do celu.", "correct": 1 },
      { "text": "Pozwala na definiowanie polityk routingu i kontrolę nad trasami poprzez atrybuty tras.", "correct": 1 },
      { "text": "BGP jest protokołem rutingu wewnętrznego.", "correct": 0 },
      { "text": "BGP nie obsługuje polityk routingu.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne komunikaty w BGP?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "OPEN: Inicjalizuje połączenie TCP z sąsiadem BGP i uwierzytelnia nadawcę.", "correct": 1 },
      { "text": "UPDATE: Ogłasza nowe ścieżki lub usuwa istniejące.", "correct": 1 },
      { "text": "KEEPALIVE: Utrzymuje otwarte połączenie bez przesyłania aktualizacji.", "correct": 1 },
      { "text": "NOTIFICATION: Informuje o błędach i zamyka połączenie.", "correct": 1 },
      { "text": "HELLO: Służy do nawiązywania połączeń z sąsiadami BGP.", "correct": 0 },
      { "text": "ADVERTISE: Ogłasza nowe trasy do sąsiadów.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jak BGP kontroluje, kto może rutować przez daną sieć?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Rutery BGP filtrują ogłoszenia ścieżek na podstawie polityk routingu.", "correct": 1 },
      { "text": "Można określić, które ścieżki są akceptowane lub odrzucane, aby kontrolować przepływ ruchu.", "correct": 1 },
      { "text": "Przykładowo, ruter może nie ogłaszać tras do konkurencyjnych AS, aby zmusić ruch do przechodzenia przez preferowane AS.", "correct": 1 },
      { "text": "BGP automatycznie blokuje ruch z niezaufanych źródeł.", "correct": 0 },
      { "text": "BGP nie oferuje możliwości kontroli nad trasami.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne różnice między rutingiem wewnętrznym a zewnętrznym?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Polityka: Ruting zewnętrzny umożliwia kontrolę nad tym, kto kieruje ruch przez sieć.", "correct": 1 },
      { "text": "Ruting wewnętrzny jest zarządzany przez jednego administratora, więc polityka jest mniej istotna.", "correct": 1 },
      { "text": "Skalowalność: Ruting hierarchiczny zmniejsza rozmiar tablic routingu i ruch komunikacyjny.", "correct": 1 },
      { "text": "Wydajność: Ruting wewnętrzny może skupiać się na optymalnej wydajności.", "correct": 1 },
      { "text": "Ruting zewnętrzny jest zawsze bardziej wydajny niż wewnętrzny.", "correct": 0 },
      { "text": "Ruting wewnętrzny nie obsługuje rutingu hierarchicznego.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne zmiany w protokole IPv6 w porównaniu do IPv4?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Adresy IPv6 są 128-bitowe, co znacznie zwiększa przestrzeń adresową.", "correct": 1 },
      { "text": "Prostszy nagłówek pakietu, co usprawnia przetwarzanie.", "correct": 1 },
      { "text": "Obsługa autokonfiguracji adresów (stateless address autoconfiguration).", "correct": 1 },
      { "text": "Wbudowane mechanizmy bezpieczeństwa (IPSec).", "correct": 1 },
      { "text": "Nowy adres anycast.", "correct": 1 },
      { "text": "Eliminacja potrzeby stosowania NAT.", "correct": 1 },
      { "text": "IPv6 nie obsługuje multicastu.", "correct": 0 },
      { "text": "IPv6 korzysta z tego samego formatu adresów co IPv4.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne elementy nagłówka pakietu IPv6?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Priority: Określa priorytet pakietu w przepływie.", "correct": 1 },
      { "text": "Flow Label: Identyfikuje pakiety należące do jednego przepływu.", "correct": 1 },
      { "text": "Next Header: Określa następną część nagłówka IPv6 lub nagłówek protokołu wyższej warstwy.", "correct": 1 },
      { "text": "Adresy źródłowy i docelowy: 128-bitowe adresy IP.", "correct": 1 },
      { "text": "Payload Length: Długość danych (zmienna długość).", "correct": 1 },
      { "text": "Header Checksum: Służy do wykrywania błędów w nagłówku.", "correct": 0 },
      { "text": "Fragment Offset: Umożliwia fragmentację pakietów.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne metody przejścia z IPv4 na IPv6?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Dual Stack: Rutery mają podwójny stos protokołów IPv4 i IPv6, umożliwiając komunikację w obu formatach.", "correct": 1 },
      { "text": "Tunelowanie: Pakiety IPv6 są kapsułkowane w pakiety IPv4 i przesyłane przez sieci IPv4, umożliwiając komunikację między routerami IPv6.", "correct": 1 },
      { "text": "Tunneling: Pakiety IPv4 są kapsułkowane w pakiety IPv6.", "correct": 0 },
      { "text": "Translation: NAT64 automatycznie tłumaczy wszystkie pakiety IPv4 na IPv6.", "correct": 0 },
      { "text": "Proxying: Umożliwia tylko jednokierunkową komunikację IPv6 do IPv4.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jak działa traceroute?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Traceroute wysyła serię pakietów z rosnącym wartością TTL (Time To Live).", "correct": 1 },
      { "text": "Każdy ruter na trasie zmniejsza TTL i gdy TTL osiąga 0, ruter wysyła komunikat ICMP \"time exceeded\".", "correct": 1 },
      { "text": "Pozwala to na śledzenie trasy pakietu od źródła do celu, wyświetlając adresy IP ruterów na ścieżce.", "correct": 1 },
      { "text": "Traceroute używa protokołu TCP do monitorowania trasy.", "correct": 0 },
      { "text": "Traceroute nie działa z protokołem ICMP.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne funkcje protokołu ICMP?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Raportowanie błędów, takich jak niedostępny host, sieć, port czy protokół.", "correct": 1 },
      { "text": "Obsługa komunikatów żądania i odpowiedzi echo (używane przez polecenie ping).", "correct": 1 },
      { "text": "Przekazywanie informacji o problemach z trasą pakietów.", "correct": 1 },
      { "text": "Zarządzanie sesjami użytkowników.", "correct": 0 },
      { "text": "Kompresja danych w przesyłanych pakietach.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety rutingu hierarchicznego?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Skalowalność: Umożliwia zarządzanie dużymi sieciami poprzez podział na mniejsze, autonomiczne systemy.", "correct": 1 },
      { "text": "Redukcja złożoności: Ogranicza rozmiar tablic routingu i ruch komunikacyjny.", "correct": 1 },
      { "text": "Wydajność: Umożliwia optymalizację tras wewnątrz i między systemami autonomicznymi.", "correct": 1 },
      { "text": "Ruting hierarchiczny zwiększa złożoność konfiguracji sieci.", "correct": 0 },
      { "text": "Ruting hierarchiczny ogranicza skalowalność sieci.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Czym są systemy autonomiczne (AS) w kontekście rutingu w Internecie?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "AS to zbiór ruterów działających pod wspólną administracją i korzystających z tego samego protokołu rutingu wewnętrznego.", "correct": 1 },
      { "text": "AS są podstawowymi jednostkami w rutingu hierarchicznym i są połączone ze sobą poprzez bramy brzegowe (Border Gateways).", "correct": 1 },
      { "text": "AS mogą być małe (z jednym połączeniem) lub duże (z wieloma połączeniami).", "correct": 1 },
      { "text": "AS to pojedyncze urządzenia sieciowe używane w małych sieciach.", "correct": 0 },
      { "text": "AS są używane tylko w protokole RIP.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jak działa protokół BGP w rutingu między AS?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "BGP rutuje między AS, wymieniając informacje o ścieżkach do różnych sieci.", "correct": 1 },
      { "text": "Każda ścieżka to ciąg AS, przez które pakiet musi przejść, aby dotrzeć do celu.", "correct": 1 },
      { "text": "Rutery BGP wybierają najlepszą ścieżkę na podstawie atrybutów tras, takich jak AS_PATH, NEXT_HOP, LOCAL_PREF.", "correct": 1 },
      { "text": "BGP nie pozwala na definiowanie polityk routingu.", "correct": 0 },
      { "text": "BGP używa algorytmu Dijkstry do obliczania tras.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu RIP?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "RIP (Routing Information Protocol) to protokół rutingu wektora odległości.", "correct": 1 },
      { "text": "Używa liczby skoków (hops) jako metryki do wyboru tras.", "correct": 1 },
      { "text": "Maksymalna liczba skoków to 15, co ogranicza skalowalność.", "correct": 1 },
      { "text": "Aktualizacje routingu są wysyłane co 30 sekund poprzez pakiety UDP.", "correct": 1 },
      { "text": "RIP używa algorytmu stanu łącza.", "correct": 0 },
      { "text": "RIP nie ma ograniczeń dotyczących liczby skoków.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne różnice między RIP a OSPF?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "RIP: Algorytm wektora odległości.", "correct": 1 },
      { "text": "RIP: Maksymalnie 15 skoków.", "correct": 1 },
      { "text": "RIP: Aktualizacje co 30 sekund.", "correct": 1 },
      { "text": "RIP: Prosty, ale mniej skalowalny.", "correct": 1 },
      { "text": "OSPF: Algorytm stanu łącza.", "correct": 1 },
      { "text": "OSPF: Wykorzystuje algorytm Dijkstry do obliczania najkrótszych ścieżek.", "correct": 1 },
      { "text": "OSPF: Szybsza i bardziej stabilna zbieżność.", "correct": 1 },
      { "text": "OSPF: Lepsza skalowalność w dużych sieciach.", "correct": 1 },
      { "text": "RIP: Szybsza zbieżność niż OSPF.", "correct": 0 },
      { "text": "OSPF: Mniejsza złożoność konfiguracji niż RIP.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Co to jest fragmentacja IP i jak jest obsługiwana w IPv4?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Fragmentacja IP polega na dzieleniu dużych pakietów na mniejsze fragmenty, aby zmieściły się w MTU łącza.", "correct": 1 },
      { "text": "Każdy fragment ma ten sam identyfikator (ID), określoną pozycję w oryginalnym pakiecie oraz flagę fragmentacji.", "correct": 1 },
      { "text": "Defragmentacja odbywa się na końcu trasy, gdzie wszystkie fragmenty są łączone w oryginalny pakiet.", "correct": 1 },
      { "text": "Fragmentacja jest obsługiwana na poziomie aplikacji w IPv4.", "correct": 0 },
      { "text": "IPv4 nie obsługuje fragmentacji pakietów.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne zastosowania protokołu ICMP?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Ping: Sprawdzenie dostępności hosta poprzez wysyłanie komunikatów echo request i odbieranie echo reply.", "correct": 1 },
      { "text": "Traceroute: Śledzenie trasy pakietu przez zwiększanie wartości TTL i odbieranie komunikatów ICMP \"time exceeded\" od ruterów na trasie.", "correct": 1 },
      { "text": "Autentykacja użytkowników w sieci.", "correct": 0 },
      { "text": "Zarządzanie ruchem multicastowym.", "correct": 0 },
      { "text": "Kompresja danych w pakietach ICMP.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu BGP?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "BGP jest protokołem rutingu zewnętrznego (EGP) używanym między systemami autonomicznymi (AS) w Internecie.", "correct": 1 },
      { "text": "Używa algorytmu wektora ścieżek, gdzie każda ścieżka to ciąg AS prowadzący do celu.", "correct": 1 },
      { "text": "Rutery BGP wybierają najlepszą ścieżkę na podstawie atrybutów tras, takich jak AS_PATH, NEXT_HOP, LOCAL_PREF.", "correct": 1 },
      { "text": "BGP umożliwia definiowanie polityk routingu i kontrolę nad trasami.", "correct": 1 },
      { "text": "BGP jest protokołem wewnętrznego rutingu.", "correct": 0 },
      { "text": "BGP nie obsługuje atrybutów tras.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu OSPF?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "OSPF (Open Shortest Path First) to protokół rutingu stanu łącza.", "correct": 1 },
      { "text": "Używa algorytmu Dijkstry do obliczania najkrótszych ścieżek.", "correct": 1 },
      { "text": "Rutery rozsyłają ogłoszenia stanu łącza (LSA) do całego AS.", "correct": 1 },
      { "text": "Wspiera hierarchiczny ruting w dużych sieciach poprzez podział na obszary.", "correct": 1 },
      { "text": "OSPF nie wspiera rutingu hierarchicznego.", "correct": 0 },
      { "text": "OSPF używa algorytmu wektora odległości.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy przekazywania pakietu IP od źródła do celu?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Host źródłowy sprawdza tablicę routingu, aby znaleźć najbliższą trasę do celu.", "correct": 1 },
      { "text": "Jeśli cel jest w tej samej sieci, pakiet jest wysyłany bezpośrednio.", "correct": 1 },
      { "text": "Jeśli cel jest w innej sieci, pakiet jest wysyłany do następnego ruteru na trasie.", "correct": 1 },
      { "text": "Proces powtarza się na każdym ruterze aż do osiągnięcia celu.", "correct": 1 },
      { "text": "Pakiet jest fragmentowany na każdym ruterze na trasie.", "correct": 0 },
      { "text": "Host docelowy musi ręcznie odbierać fragmenty pakietu.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IPv6?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Adresy IPv6 są 128-bitowe, co znacznie zwiększa przestrzeń adresową.", "correct": 1 },
      { "text": "Prostszy i bardziej efektywny nagłówek pakietu.", "correct": 1 },
      { "text": "Obsługa autokonfiguracji adresów (stateless address autoconfiguration).", "correct": 1 },
      { "text": "Wbudowane mechanizmy bezpieczeństwa (IPSec).", "correct": 1 },
      { "text": "Nowy adres anycast umożliwiający najlepszą dostępność serwerów.", "correct": 1 },
      { "text": "Eliminacja potrzeby stosowania NAT dzięki dużej przestrzeni adresowej.", "correct": 1 },
      { "text": "IPv6 używa tego samego nagłówka co IPv4.", "correct": 0 },
      { "text": "IPv6 nie wspiera multicastu.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne metody przejścia z IPv4 na IPv6?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Dual Stack: Rutery mają podwójny stos protokołów IPv4 i IPv6, umożliwiając komunikację w obu formatach.", "correct": 1 },
      { "text": "Tunelowanie: Pakiety IPv6 są kapsułkowane w pakiety IPv4 i przesyłane przez sieci IPv4, umożliwiając komunikację między routerami IPv6.", "correct": 1 },
      { "text": "Tunneling: Pakiety IPv4 są kapsułkowane w pakiety IPv6.", "correct": 0 },
      { "text": "Translation: NAT64 automatycznie tłumaczy wszystkie pakiety IPv4 na IPv6.", "correct": 0 },
      { "text": "Proxying: Umożliwia tylko jednokierunkową komunikację IPv6 do IPv4.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jak działa protokół NAT i jakie są jego ograniczenia?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "NAT tłumaczy adresy IP wewnętrzne na jeden adres zewnętrzny, umożliwiając wielokrotne połączenia przez ten sam adres.", "correct": 1 },
      { "text": "Ograniczenia:", "correct": 1 },
      { "text": "Rozmiar tablicy translacji NAT.", "correct": 1 },
      { "text": "Kontrowersje związane z zasadą koniec-koniec rutingu.", "correct": 1 },
      { "text": "Problemy z aplikacjami P2P, które wymagają bezpośrednich połączeń.", "correct": 1 },
      { "text": "Potrzeba przejścia na IPv6 w celu rozwiązania problemów z NAT.", "correct": 1 },
      { "text": "NAT zwiększa prędkość transmisji danych.", "correct": 0 },
      { "text": "NAT eliminuje potrzebę stosowania firewalli.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety i wady stosowania NAT?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Zalety:", "correct": 1 },
      { "text": "Oszczędność przestrzeni adresowej IP.", "correct": 1 },
      { "text": "Zwiększenie bezpieczeństwa poprzez ukrycie wewnętrznych adresów.", "correct": 1 },
      { "text": "Możliwość zmiany adresów wewnętrznych bez wpływu na adresy zewnętrzne.", "correct": 1 },
      { "text": "Wady:", "correct": 1 },
      { "text": "Ograniczenie liczby jednoczesnych połączeń (maksymalnie 60,000 dla 16-bitowych portów).", "correct": 1 },
      { "text": "Złożoność konfiguracji i utrzymania tablic translacji.", "correct": 1 },
      { "text": "Problemy z aplikacjami wymagającymi bezpośrednich połączeń.", "correct": 1 },
      { "text": "Zwiększa skalowalność sieci.", "correct": 0 },
      { "text": "Ułatwia konfigurację urządzeń w sieci.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy działania protokołu OSPF?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Rutery rozsyłają ogłoszenia stanu łącza (LSA) do wszystkich ruterów w obszarze.", "correct": 1 },
      { "text": "Każdy ruter buduje mapę topologii sieci na podstawie otrzymanych LSA.", "correct": 1 },
      { "text": "Rutery używają algorytmu Dijkstry do obliczania najkrótszych tras do wszystkich sieci.", "correct": 1 },
      { "text": "Tablice routingu są aktualizowane na podstawie obliczonych tras.", "correct": 1 },
      { "text": "OSPF wymaga ręcznego wprowadzania tras przez administratora.", "correct": 0 },
      { "text": "OSPF nie obsługuje protokołów multicastowych.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne komunikaty protokołu BGP?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "OPEN: Inicjalizuje połączenie TCP z sąsiadem BGP i uwierzytelnia nadawcę.", "correct": 1 },
      { "text": "UPDATE: Ogłasza nowe ścieżki lub usuwa istniejące.", "correct": 1 },
      { "text": "KEEPALIVE: Utrzymuje otwarte połączenie bez przesyłania aktualizacji.", "correct": 1 },
      { "text": "NOTIFICATION: Informuje o błędach i zamyka połączenie.", "correct": 1 },
      { "text": "HELLO: Służy do nawiązywania połączeń z sąsiadami BGP.", "correct": 0 },
      { "text": "ADVERTISE: Ogłasza nowe trasy do sąsiadów.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu OSPF w kontekście bezpieczeństwa?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "OSPF obsługuje autentykację komunikatów, co zapobiega złośliwym zmianom routingu.", "correct": 1 },
      { "text": "Umożliwia stosowanie różnych metod autentykacji, takich jak hasła tekstowe czy kryptograficzne.", "correct": 1 },
      { "text": "OSPF nie oferuje żadnych mechanizmów bezpieczeństwa.", "correct": 0 },
      { "text": "OSPF używa tylko prostych haseł tekstowych do autentykacji.", "correct": 0 },
      { "text": "OSPF autentykacja jest opcjonalna i nie wpływa na bezpieczeństwo routingu.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne wyzwania związane z rutingiem multicast?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Tworzenie i zarządzanie drzewem multicastowym od nadawcy do wszystkich odbiorców.", "correct": 1 },
      { "text": "Efektywne zarządzanie grupami multicastowymi i adresami.", "correct": 1 },
      { "text": "Zapewnienie, że pakiety multicastowe są dostarczane tylko do zainteresowanych odbiorców.", "correct": 1 },
      { "text": "Integracja rutingu multicastowego z istniejącymi protokołami rutingu unicast.", "correct": 1 },
      { "text": "Multicast nie wymaga specjalnych protokołów rutingu.", "correct": 0 },
      { "text": "Ruting multicast jest prosty i nie wiąże się z żadnymi wyzwaniami.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu ICMPv6?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "ICMPv6 jest nową wersją ICMP dla IPv6.", "correct": 1 },
      { "text": "Obsługuje dodatkowe komunikaty, takie jak \"Packet Too Big\".", "correct": 1 },
      { "text": "Umożliwia zarządzanie grupami multicast.", "correct": 1 },
      { "text": "Integruje funkcje DHCP poprzez Neighbor Discovery.", "correct": 1 },
      { "text": "ICMPv6 nie wspiera komunikatów o błędach.", "correct": 0 },
      { "text": "ICMPv6 używa protokołu TCP zamiast UDP.", "correct": 0 }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety rutingu hierarchicznego w dużych sieciach?",
    "alreadyGenerated": false,
    "answers": [
      { "text": "Redukuje rozmiar tablic routingu i ruch komunikacyjny.", "correct": 1 },
      { "text": "Umożliwia skalowalność poprzez podział na mniejsze, autonomiczne systemy.", "correct": 1 },
      { "text": "Poprawia wydajność rutingu poprzez optymalizację tras wewnątrz i między systemami autonomicznymi.", "correct": 1 },
      { "text": "Ruting hierarchiczny zwiększa rozmiar tablic routingu.", "correct": 0 },
      { "text": "Ruting hierarchiczny wymaga większej ilości zasobów na każdym ruterze.", "correct": 0 }
    ]
  },
  
  {
    "pytanie": "Jakie są cele warstwy łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Rozpoznawanie i naprawa błędów",
        "correct": 1
      },
      {
        "text": "Współdzielenie kanału rozgłaszającego poprzez wielodostępowość",
        "correct": 1
      },
      {
        "text": "Adresowanie w warstwie łącza",
        "correct": 1
      },
      {
        "text": "Zapewnienie niezawodnej komunikacji i kontroli przepływu danych między sąsiednimi węzłami",
        "correct": 1
      },
      {
        "text": "Zarządzanie adresacją IP w sieci",
        "correct": 0
      },
      {
        "text": "Tworzenie routingu między różnymi sieciami",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest ramka w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Jednostka informacji w warstwie łącza, która enkapsuluje pakiet IP",
        "correct": 1
      },
      {
        "text": "Zawiera nagłówki i zakończenie, umożliwiające komunikację ramek między sąsiednimi węzłami przez łącze",
        "correct": 1
      },
      {
        "text": "Jednostka danych w warstwie fizycznej",
        "correct": 0
      },
      {
        "text": "Formatowanie danych dla aplikacji użytkownika",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są typy łączy w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Łącza stałe",
        "correct": 1
      },
      {
        "text": "Łącza bezprzewodowe",
        "correct": 1
      },
      {
        "text": "Sieci lokalne (LAN)",
        "correct": 1
      },
      {
        "text": "Sieci rozległe (WAN)",
        "correct": 0
      },
      {
        "text": "Sieci metropolitan (MAN)",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie usługi oferuje warstwa łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Tworzenie ramek i dostęp do łącza (MAC)",
        "correct": 1
      },
      {
        "text": "Niezawodna komunikacja między sąsiednimi węzłami",
        "correct": 1
      },
      {
        "text": "Kontrola przepływu",
        "correct": 1
      },
      {
        "text": "Rozpoznawanie i naprawa błędów",
        "correct": 1
      },
      {
        "text": "Routing między różnymi sieciami",
        "correct": 0
      },
      {
        "text": "Zarządzanie adresacją IP",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Co to jest MAC w kontekście warstwy łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "MAC (Medium Access Control) to mechanizm zarządzający dostępem do wspólnego medium transmisyjnego",
        "correct": 1
      },
      {
        "text": "Odpowiada za enkapsulację pakietów w ramki oraz za adresowanie fizyczne nadawcy i odbiorcy",
        "correct": 1
      },
      {
        "text": "MAC to protokół warstwy transportowej",
        "correct": 0
      },
      {
        "text": "MAC jest odpowiedzialny za routing pakietów między sieciami",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Dlaczego potrzebujemy niezawodnej komunikacji na poziomie warstwy łącza i warstwy transportu?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Niezawodność na poziomie warstwy łącza zapewnia poprawne dostarczenie ramek między sąsiednimi węzłami, co jest podstawą dla niezawodnej komunikacji końcowo-końcowej w warstwie transportu",
        "correct": 1
      },
      {
        "text": "Zapewnienie szybkiego transferu danych bez konieczności kontroli błędów",
        "correct": 0
      },
      {
        "text": "Umożliwienie routingu między różnymi sieciami",
        "correct": 0
      },
      {
        "text": "Zarządzanie adresacją IP w sieci",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa kontrola przepływu w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Dopasowanie prędkości nadawania i odbierania danych przez dwa sąsiednie węzły, aby uniknąć przepełnienia buforów",
        "correct": 1
      },
      {
        "text": "Zarządzanie adresacją IP w sieci LAN",
        "correct": 0
      },
      {
        "text": "Routing pakietów między różnymi sieciami",
        "correct": 0
      },
      {
        "text": "Tworzenie ramek na poziomie aplikacji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są metody rozpoznawania błędów w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Sygnalizacja nadawcy o konieczności retransmisji poprzez zgłaszanie błędów",
        "correct": 1
      },
      {
        "text": "Korekcja błędów przez kody nadmiarowe, umożliwiające odbiorcy naprawę błędów bitowych bez retransmisji",
        "correct": 1
      },
      {
        "text": "Używanie protokołu TCP do zarządzania błędami",
        "correct": 0
      },
      {
        "text": "Routing pakietów przez alternatywne ścieżki",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest komunikacja półdupleksowa i w pełni dupleksowa?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Półdupleksowa (half-duplex): Węzły mogą nadawać i odbierać dane, ale nie jednocześnie",
        "correct": 1
      },
      {
        "text": "W pełni dupleksowa (full-duplex): Węzły mogą nadawać i odbierać dane jednocześnie",
        "correct": 1
      },
      {
        "text": "Półdupleksowa umożliwia tylko nadawanie danych",
        "correct": 0
      },
      {
        "text": "Pełni dupleksowa umożliwia tylko odbieranie danych",
        "correct": 0
      },
      {
        "text": "Pełni dupleksowa nie jest stosowana w sieciach LAN",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak warstwa łącza jest implementowana w urządzeniach sieciowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Implementowana w \"adapterach\" (NIC - Network Interface Card), takich jak karta Ethernet, karta PCMCI, karta 802.11",
        "correct": 1
      },
      {
        "text": "Nadający adapter enkapsuluje pakiet w ramkę, dodaje bity sum kontrolnych, niezawodność, kontrolę przepływu",
        "correct": 1
      },
      {
        "text": "Odbierający adapter szuka błędów, realizuje niezawodność, kontrolę przepływu, dekapsuluje pakiet i przekazuje go do warstwy wyższej",
        "correct": 1
      },
      {
        "text": "Warstwa łącza jest implementowana wyłącznie w oprogramowaniu systemu operacyjnego",
        "correct": 0
      },
      {
        "text": "Warstwa łącza nie wymaga specjalistycznego sprzętu do implementacji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne protokoły wielodostępowe warstwy łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Ethernet",
        "correct": 1
      },
      {
        "text": "Token Ring",
        "correct": 1
      },
      {
        "text": "Wi-Fi (802.11)",
        "correct": 1
      },
      {
        "text": "PPP (Point-to-Point Protocol)",
        "correct": 1
      },
      {
        "text": "ATM (Asynchronous Transfer Mode)",
        "correct": 1
      },
      {
        "text": "Frame Relay",
        "correct": 1
      },
      {
        "text": "TCP/IP",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym są koncentratory, mosty i switche w kontekście warstwy łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Koncentratory (hub): Proste urządzenia powielające sygnał na wszystkie porty, działające na poziomie fizycznym",
        "correct": 1
      },
      {
        "text": "Mosty (bridge): Urządzenia łączące segmenty sieci, filtrujące ruch na podstawie adresów MAC",
        "correct": 1
      },
      {
        "text": "Switche: Zaawansowane mosty działające na poziomie warstwy łącza, umożliwiające inteligentne przekazywanie ramek tylko do odpowiednich portów",
        "correct": 1
      },
      {
        "text": "Koncentratory działają na poziomie warstwy sieciowej",
        "correct": 0
      },
      {
        "text": "Switche nie mogą obsługiwać pełnego dupleksu",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu ARP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "ARP (Address Resolution Protocol) służy do mapowania adresów IP na adresy MAC w sieciach LAN",
        "correct": 1
      },
      {
        "text": "Każdy węzeł IP w sieci LAN ma tablicę ARP, która przechowuje odwzorowania adresów IP na adresy MAC",
        "correct": 1
      },
      {
        "text": "ARP działa na zasadzie rozgłaszania zapytań o adres MAC dla danego adresu IP",
        "correct": 1
      },
      {
        "text": "ARP jest używany do szyfrowania danych w sieci LAN",
        "correct": 0
      },
      {
        "text": "ARP działa na warstwie aplikacji modelu OSI",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół ARP krok po kroku?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Host A chce wysłać pakiet do hosta B, zna adres IP B, ale nie zna adresu MAC",
        "correct": 1
      },
      {
        "text": "Host A sprawdza swoją tablicę ARP, nie znajduje wpisu dla B",
        "correct": 1
      },
      {
        "text": "Host A rozgłasza zapytanie ARP na adres MAC broadcast (ff:ff:ff:ff:ff:ff) z prośbą o adres MAC dla IP B",
        "correct": 1
      },
      {
        "text": "Host B odbiera zapytanie ARP i odpowiada hostowi A, podając swój adres MAC",
        "correct": 1
      },
      {
        "text": "Host A zapisuje odwzorowanie IP-B na MAC-B w swojej tablicy ARP i wysyła ramkę Ethernet bezpośrednio do B",
        "correct": 1
      },
      {
        "text": "Host A bezpośrednio przypisuje adres MAC do hosta B bez użycia ARP",
        "correct": 0
      },
      {
        "text": "Host B ignoruje zapytania ARP, jeśli nie jest skonfigurowany do odpowiedzi",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym są adresy LAN (MAC) i jak się je przydziela?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Adres MAC (Media Access Control) to 48-bitowy, unikalny adres fizyczny przypisany do każdego interfejsu sieciowego",
        "correct": 1
      },
      {
        "text": "Przydzielanie adresów MAC jest zarządzane przez IEEE, które przydziela producentom przedziały adresów, zapewniając ich unikalność",
        "correct": 1
      },
      {
        "text": "Adresy MAC są zapisane w pamięci ROM adaptera i są niezależne od adresów IP",
        "correct": 1
      },
      {
        "text": "Adresy MAC są dynamicznie przypisywane przez serwer DHCP",
        "correct": 0
      },
      {
        "text": "Adresy MAC mogą być zmieniane przez użytkownika w ustawieniach systemowych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są zalety stosowania adresów MAC w sieciach LAN?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Unikalność: Każdy adres MAC jest jedyny w swoim rodzaju",
        "correct": 1
      },
      {
        "text": "Przenośność: Można przenieść adapter sieciowy z jednej sieci LAN do innej bez zmiany adresu MAC",
        "correct": 1
      },
      {
        "text": "Hierarchiczne adresy IP nie są przenośne, co zwiększa elastyczność adresowania w sieciach LAN",
        "correct": 1
      },
      {
        "text": "Adresy MAC są krótsze niż adresy IP, co ułatwia ich zarządzanie",
        "correct": 0
      },
      {
        "text": "Adresy MAC pozwalają na lepsze szyfrowanie danych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety stosowania Ethernetu w sieciach LAN?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Wysoka prędkość transmisji danych",
        "correct": 1
      },
      {
        "text": "Powszechna dostępność i kompatybilność",
        "correct": 1
      },
      {
        "text": "Prosta konfiguracja i zarządzanie",
        "correct": 1
      },
      {
        "text": "Efektywne wykorzystanie pasma dzięki mechanizmom kontroli dostępu do medium (MAC)",
        "correct": 1
      },
      {
        "text": "Wymaga specjalistycznego sprzętu do implementacji",
        "correct": 0
      },
      {
        "text": "Nie obsługuje pełnego dupleksu",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest Frame Relay i gdzie jest stosowany?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Frame Relay to protokół warstwy łącza danych używany do szybkiego przesyłania danych przez sieci rozległe (WAN)",
        "correct": 1
      },
      {
        "text": "Umożliwia wielodostępowe połączenia poprzez wirtualne kanały (VC)",
        "correct": 1
      },
      {
        "text": "Stosowany głównie w sieciach korporacyjnych do łączenia oddziałów",
        "correct": 1
      },
      {
        "text": "Frame Relay jest protokołem warstwy aplikacji",
        "correct": 0
      },
      {
        "text": "Frame Relay nie obsługuje transmisji wielodanych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu PPP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "PPP (Point-to-Point Protocol) to protokół warstwy łącza danych używany do bezpośredniego połączenia dwóch węzłów sieciowych",
        "correct": 1
      },
      {
        "text": "Obsługuje uwierzytelnianie, kompresję i multipleksowanie różnych protokołów wyższych warstw",
        "correct": 1
      },
      {
        "text": "Stosowany głównie w połączeniach dial-up i VPN",
        "correct": 1
      },
      {
        "text": "PPP nie obsługuje uwierzytelniania użytkowników",
        "correct": 0
      },
      {
        "text": "PPP jest używany wyłącznie w sieciach bezprzewodowych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest ATM w kontekście warstwy łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "ATM (Asynchronous Transfer Mode) to technologia transmisji danych używana w sieciach WAN",
        "correct": 1
      },
      {
        "text": "Używa małych, stałej wielkości komórek (53 bajty) do przesyłania danych",
        "correct": 1
      },
      {
        "text": "Zapewnia wysoką jakość usług (QoS) i jest odpowiedni dla aplikacji wymagających niskich opóźnień, takich jak transmisje multimedialne",
        "correct": 1
      },
      {
        "text": "ATM jest protokołem warstwy fizycznej",
        "correct": 0
      },
      {
        "text": "ATM nie obsługuje transmisji głosowej",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne różnice między koncentratorami, mostami a switchami?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Koncentratory (hub): Proste urządzenia powielające sygnał na wszystkie porty, działające na poziomie fizycznym",
        "correct": 1
      },
      {
        "text": "Mosty (bridge): Łączą dwa segmenty sieci, filtrując ruch na podstawie adresów MAC, działają na poziomie warstwy łącza",
        "correct": 1
      },
      {
        "text": "Switche: Zaawansowane mosty działające na poziomie warstwy łącza, umożliwiające inteligentne przekazywanie ramek tylko do odpowiednich portów, co zwiększa efektywność sieci",
        "correct": 1
      },
      {
        "text": "Koncentratory mogą filtrować ruch na podstawie adresów MAC",
        "correct": 0
      },
      {
        "text": "Switche działają na poziomie warstwy aplikacji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy sieci bezprzewodowych w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Używają standardów takich jak IEEE 802.11",
        "correct": 1
      },
      {
        "text": "Oferują mobilność i elastyczność w połączeniach sieciowych",
        "correct": 1
      },
      {
        "text": "Zazwyczaj mają wyższe stopy błędów niż łącza przewodowe",
        "correct": 1
      },
      {
        "text": "Wymagają mechanizmów kontroli dostępu do medium, takich jak CSMA/CA",
        "correct": 1
      },
      {
        "text": "Sieci bezprzewodowe nie obsługują mechanizmów kontroli dostępu",
        "correct": 0
      },
      {
        "text": "Standard IEEE 802.11 jest używany tylko w sieciach przewodowych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa kontrola przepływu w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kontrola przepływu w warstwie łącza dopasowuje prędkość nadawania danych do możliwości odbiorczych sąsiednich węzłów",
        "correct": 1
      },
      {
        "text": "Zapobiega przepełnieniu buforów odbiorcy, co mogłoby prowadzić do utraty ramek",
        "correct": 1
      },
      {
        "text": "Kontrola przepływu zarządza adresacją IP w sieci",
        "correct": 0
      },
      {
        "text": "Kontrola przepływu umożliwia routing pakietów między różnymi sieciami",
        "correct": 0
      },
      {
        "text": "Kontrola przepływu odpowiada za enkapsulację danych w ramki",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są metody korekcji błędów w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kody nadmiarowe: Umożliwiają odbiorcy rozpoznanie i naprawę błędów bitowych bez retransmisji",
        "correct": 1
      },
      {
        "text": "Retransmisje: Odbiorca sygnalizuje nadawcy konieczność retransmisji uszkodzonych ramek",
        "correct": 1
      },
      {
        "text": "Używanie protokołu TCP do korekcji błędów",
        "correct": 0
      },
      {
        "text": "Korekcja błędów odbywa się tylko na poziomie aplikacji",
        "correct": 0
      },
      {
        "text": "Nie ma metod korekcji błędów w warstwie łącza",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest tablica ARP i jak jest używana w sieciach LAN?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Tablica ARP przechowuje odwzorowania adresów IP na adresy MAC dla niektórych węzłów w sieci LAN",
        "correct": 1
      },
      {
        "text": "Umożliwia szybkie odnalezienie adresu MAC odpowiadającego danemu adresowi IP bez konieczności rozgłaszania zapytań ARP za każdym razem",
        "correct": 1
      },
      {
        "text": "Tablica ARP jest używana do zarządzania routowaniem pakietów między sieciami",
        "correct": 0
      },
      {
        "text": "Tablica ARP przechowuje odwzorowania adresów MAC na adresy IP",
        "correct": 0
      },
      {
        "text": "Tablica ARP jest wykorzystywana do szyfrowania danych w sieci LAN",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy wysyłania pakietu IP od hosta A do hosta B przez ruter R?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Host A tworzy pakiet z adresem IP źródłowym A i adresem IP docelowym B",
        "correct": 1
      },
      {
        "text": "Host A używa ARP, aby poznać adres MAC interfejsu rutera R",
        "correct": 1
      },
      {
        "text": "Host A enkapsuluje pakiet IP w ramkę Ethernet z adresem MAC źródłowym A i adresem MAC docelowym rutera R",
        "correct": 1
      },
      {
        "text": "Ruter R odbiera ramkę, dekapsuluje pakiet IP i sprawdza tablicę routingu",
        "correct": 1
      },
      {
        "text": "Ruter R używa ARP, aby poznać adres MAC hosta B",
        "correct": 1
      },
      {
        "text": "Ruter R enkapsuluje pakiet IP w ramkę Ethernet z adresem MAC źródłowym R i adresem MAC docelowym B",
        "correct": 1
      },
      {
        "text": "Host B odbiera ramkę i dekapsuluje pakiet IP",
        "correct": 1
      },
      {
        "text": "Ruter R przesyła pakiet bez enkapsulacji w ramkę Ethernet",
        "correct": 0
      },
      {
        "text": "Host A bezpośrednio wysyła pakiet IP do hosta B bez użycia rutera",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa proces rozgłaszania ARP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kiedy host chce wysłać pakiet do innego hosta w tej samej sieci LAN, ale nie zna jego adresu MAC, rozgłasza zapytanie ARP",
        "correct": 1
      },
      {
        "text": "Wszystkie węzły w sieci LAN odbierają zapytanie, ale tylko host z odpowiadającym adresem IP B odpowiada, podając swój adres MAC",
        "correct": 1
      },
      {
        "text": "Host nadawczy zapisuje odwzorowanie w swojej tablicy ARP i wysyła ramkę do odbiorcy",
        "correct": 1
      },
      {
        "text": "Rozgłaszanie ARP odbywa się tylko przez serwer DHCP",
        "correct": 0
      },
      {
        "text": "Proces rozgłaszania ARP jest używany do szyfrowania danych w sieci LAN",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety stosowania switchy w sieciach LAN?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Zwiększenie efektywności sieci poprzez przekazywanie ramek tylko do odpowiednich portów",
        "correct": 1
      },
      {
        "text": "Redukcja kolizji w sieci dzięki segmentacji ruchu",
        "correct": 1
      },
      {
        "text": "Możliwość obsługi większej liczby urządzeń bez degradacji wydajności",
        "correct": 1
      },
      {
        "text": "Obsługa pełnego dupleksu, co pozwala na jednoczesne nadawanie i odbieranie danych",
        "correct": 1
      },
      {
        "text": "Switche nie mogą izolować ruchu między portami",
        "correct": 0
      },
      {
        "text": "Switche działają wyłącznie na poziomie fizycznym",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest kontrola dostępu do medium (MAC) w protokołach wielodostępowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Mechanizm zarządzający dostępem do wspólnego medium transmisyjnego, aby uniknąć kolizji",
        "correct": 1
      },
      {
        "text": "Przykłady metod MAC:",
        "correct": 1
      },
      {
        "text": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) w Ethernet",
        "correct": 1
      },
      {
        "text": "CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) w Wi-Fi",
        "correct": 1
      },
      {
        "text": "MAC zarządza routingiem pakietów między różnymi sieciami",
        "correct": 0
      },
      {
        "text": "MAC jest odpowiedzialny za szyfrowanie danych w sieci LAN",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu Ethernet?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Używa technologii CSMA/CD do zarządzania dostępem do medium",
        "correct": 1
      },
      {
        "text": "Standardowe szybkości transmisji: 10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps",
        "correct": 1
      },
      {
        "text": "Używa adresów MAC do identyfikacji urządzeń w sieci",
        "correct": 1
      },
      {
        "text": "Szeroko stosowany w sieciach LAN ze względu na niezawodność i wydajność",
        "correct": 1
      },
      {
        "text": "Ethernet nie obsługuje pełnego dupleksu",
        "correct": 0
      },
      {
        "text": "Ethernet jest używany wyłącznie w sieciach bezprzewodowych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół ARP w praktyce?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Host A chce wysłać pakiet do hosta B, zna adres IP B, ale nie zna adresu MAC",
        "correct": 1
      },
      {
        "text": "Host A sprawdza swoją tablicę ARP, nie znajduje wpisu dla B",
        "correct": 1
      },
      {
        "text": "Host A rozgłasza zapytanie ARP na adres MAC broadcast z prośbą o adres MAC dla IP B",
        "correct": 1
      },
      {
        "text": "Host B odbiera zapytanie ARP i odpowiada hostowi A, podając swój adres MAC",
        "correct": 1
      },
      {
        "text": "Host A zapisuje odwzorowanie IP-B na MAC-B w swojej tablicy ARP i wysyła ramkę Ethernet bezpośrednio do B",
        "correct": 1
      },
      {
        "text": "Protokół ARP jest używany do szyfrowania danych w sieci LAN",
        "correct": 0
      },
      {
        "text": "Host A może bezpośrednio przypisać adres MAC do hosta B bez użycia ARP",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest adres MAC i jak jest przypisany do urządzenia sieciowego?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Adres MAC (Media Access Control) to 48-bitowy, unikalny adres fizyczny przypisany do każdego interfejsu sieciowego",
        "correct": 1
      },
      {
        "text": "Przydzielany przez producenta i zapisany w pamięci ROM adaptera sieciowego",
        "correct": 1
      },
      {
        "text": "Umożliwia identyfikację urządzeń w sieci LAN na poziomie warstwy łącza",
        "correct": 1
      },
      {
        "text": "Adres MAC jest dynamicznie przypisywany przez serwer DHCP",
        "correct": 0
      },
      {
        "text": "Adres MAC może być zmieniany przez użytkownika w ustawieniach systemowych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety stosowania NAT w sieciach lokalnych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Oszczędność przestrzeni adresowej IP poprzez umożliwienie wielu urządzeniom w sieci lokalnej korzystania z jednego publicznego adresu IP",
        "correct": 1
      },
      {
        "text": "Zwiększenie bezpieczeństwa przez ukrycie wewnętrznych adresów IP przed światem zewnętrznym",
        "correct": 1
      },
      {
        "text": "Umożliwienie zmian adresów wewnętrznych bez konieczności aktualizacji konfiguracji zewnętrznej sieci",
        "correct": 1
      },
      {
        "text": "NAT eliminuje potrzebę używania adresów MAC w sieci LAN",
        "correct": 0
      },
      {
        "text": "NAT zwiększa przepustowość sieci lokalnej",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa NAT w przypadku wychodzących i przychodzących pakietów?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Wychodzące pakiety: Adres IP źródłowy i numer portu są zastępowane przez adres IP NAT i nowy numer portu. Router NAT zapisuje odwzorowanie w tablicy translacji NAT",
        "correct": 1
      },
      {
        "text": "Przychodzące pakiety: Router NAT używa tablicy translacji NAT, aby zastąpić adres IP docelowy i numer portu oryginalnym adresem IP i portem wewnętrznym urządzenia",
        "correct": 1
      },
      {
        "text": "NAT działa tylko na pakietach wychodzących z sieci lokalnej",
        "correct": 0
      },
      {
        "text": "NAT nie zmienia numerów portów w pakietach",
        "correct": 0
      },
      {
        "text": "Router NAT nie zapisuje żadnych odwzorowań podczas translacji pakietów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne ograniczenia NAT?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Limit liczby jednoczesnych połączeń ze względu na ograniczoną przestrzeń portów (16-bitowe numery portów)",
        "correct": 1
      },
      {
        "text": "Problemy z aplikacjami P2P, które wymagają bezpośrednich połączeń",
        "correct": 1
      },
      {
        "text": "Komplikacje w konfiguracji i zarządzaniu tablicą translacji NAT",
        "correct": 1
      },
      {
        "text": "Naruszenie zasady koniec-koniec rutingu, co może wpływać na projektowanie aplikacji",
        "correct": 1
      },
      {
        "text": "NAT zwiększa przestrzeń adresową publiczną",
        "correct": 0
      },
      {
        "text": "NAT eliminuje potrzebę używania firewalli w sieci",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety stosowania switchy w porównaniu do koncentratorów?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Switch umożliwia inteligentne przekazywanie ramek tylko do odpowiednich portów, zwiększając efektywność sieci",
        "correct": 1
      },
      {
        "text": "Redukuje kolizje poprzez segmentację ruchu",
        "correct": 1
      },
      {
        "text": "Obsługuje pełny dupleks, co pozwala na jednoczesne nadawanie i odbieranie danych",
        "correct": 1
      },
      {
        "text": "Zwiększa bezpieczeństwo sieci poprzez izolację ruchu między portami",
        "correct": 1
      },
      {
        "text": "Switche powielają sygnał na wszystkie porty, podobnie jak koncentratory",
        "correct": 0
      },
      {
        "text": "Switche działają wyłącznie na poziomie fizycznym",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest kontrola dostępu do medium (MAC) i jakie metody są najczęściej stosowane?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "MAC to mechanizm zarządzający dostępem do wspólnego medium transmisyjnego w sieci wielodostępowej",
        "correct": 1
      },
      {
        "text": "Najczęściej stosowane metody:",
        "correct": 1
      },
      {
        "text": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) w Ethernet",
        "correct": 1
      },
      {
        "text": "CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) w Wi-Fi",
        "correct": 1
      },
      {
        "text": "MAC jest odpowiedzialny za routing pakietów między różnymi sieciami",
        "correct": 0
      },
      {
        "text": "MAC nie zarządza dostępem do medium transmisyjnego",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu Ethernet?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Wysoka prędkość transmisji danych",
        "correct": 1
      },
      {
        "text": "Szeroka dostępność i kompatybilność z różnymi urządzeniami",
        "correct": 1
      },
      {
        "text": "Prosta konfiguracja i zarządzanie siecią",
        "correct": 1
      },
      {
        "text": "Efektywne wykorzystanie pasma dzięki mechanizmom kontroli dostępu do medium (MAC)",
        "correct": 1
      },
      {
        "text": "Ethernet nie obsługuje różnych prędkości transmisji",
        "correct": 0
      },
      {
        "text": "Ethernet jest używany wyłącznie w sieciach WAN",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa kontrola przepływu w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kontrola przepływu w warstwie łącza dopasowuje prędkość nadawania danych do możliwości odbiorczych sąsiednich węzłów",
        "correct": 1
      },
      {
        "text": "Zapobiega przepełnieniu buforów odbiorcy, co mogłoby prowadzić do utraty ramek",
        "correct": 1
      },
      {
        "text": "Kontrola przepływu zarządza adresacją IP w sieci",
        "correct": 0
      },
      {
        "text": "Kontrola przepływu umożliwia routing pakietów między różnymi sieciami",
        "correct": 0
      },
      {
        "text": "Kontrola przepływu odpowiada za enkapsulację danych w ramki",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest korekcja błędów przez kody nadmiarowe?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Metoda umożliwiająca odbiorcy rozpoznanie i naprawę błędów bitowych w ramce bez konieczności retransmisji",
        "correct": 1
      },
      {
        "text": "Wykorzystuje dodatkowe bity (kody CRC, Hamming, itp.) do wykrywania i naprawy błędów",
        "correct": 1
      },
      {
        "text": "Korekcja błędów odbywa się tylko na poziomie aplikacji",
        "correct": 0
      },
      {
        "text": "Korekcja błędów nie jest możliwa w warstwie łącza",
        "correct": 0
      },
      {
        "text": "Kody nadmiarowe są używane do szyfrowania danych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu ARP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "ARP (Address Resolution Protocol) mapuje adresy IP na adresy MAC w sieciach LAN",
        "correct": 1
      },
      {
        "text": "Umożliwia dynamiczne tworzenie tablic ARP bez interwencji administratora",
        "correct": 1
      },
      {
        "text": "Działa na zasadzie rozgłaszania zapytań ARP w sieci LAN",
        "correct": 1
      },
      {
        "text": "ARP jest używany do szyfrowania danych w sieci LAN",
        "correct": 0
      },
      {
        "text": "ARP działa na warstwie transportowej modelu OSI",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne funkcje switcha w sieci LAN?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Inteligentne przekazywanie ramek tylko do odpowiednich portów na podstawie adresów MAC",
        "correct": 1
      },
      {
        "text": "Redukcja kolizji poprzez segmentację ruchu",
        "correct": 1
      },
      {
        "text": "Obsługa pełnego dupleksu, umożliwiając jednoczesne nadawanie i odbieranie danych",
        "correct": 1
      },
      {
        "text": "Zwiększenie bezpieczeństwa sieci poprzez izolację ruchu między portami",
        "correct": 1
      },
      {
        "text": "Switche nie mogą przekazywać ramek na podstawie adresów MAC",
        "correct": 0
      },
      {
        "text": "Switche działają wyłącznie na poziomie aplikacji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest DHCP i jakie są jego główne funkcje?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "DHCP (Dynamic Host Configuration Protocol) dynamicznie przydziela adresy IP hostom dołączającym się do sieci",
        "correct": 1
      },
      {
        "text": "Umożliwia automatyczne przydzielanie i przedłużanie czasu korzystania z adresów IP",
        "correct": 1
      },
      {
        "text": "Ułatwia zarządzanie adresacją w sieciach dużych i zmiennych",
        "correct": 1
      },
      {
        "text": "DHCP jest używany do szyfrowania danych w sieci LAN",
        "correct": 0
      },
      {
        "text": "DHCP zarządza routingiem pakietów między różnymi sieciami",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne kroki działania protokołu DHCP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Host rozgłasza komunikat DHCP Discover",
        "correct": 1
      },
      {
        "text": "Serwer DHCP odpowiada komunikatem DHCP Offer z proponowanym adresem IP",
        "correct": 1
      },
      {
        "text": "Host wysyła komunikat DHCP Request, żądając przydzielenia adresu",
        "correct": 1
      },
      {
        "text": "Serwer DHCP wysyła komunikat DHCP Ack, potwierdzający przydzielenie adresu",
        "correct": 1
      },
      {
        "text": "Serwer DHCP bezpośrednio przypisuje adres IP do hosta bez komunikatów",
        "correct": 0
      },
      {
        "text": "Host sam wybiera adres IP bez udziału serwera DHCP",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy sieci bezprzewodowych 802.11 w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Umożliwiają komunikację bezprzewodową między urządzeniami w sieci LAN",
        "correct": 1
      },
      {
        "text": "Używają mechanizmów MAC, takich jak CSMA/CA, do zarządzania dostępem do medium",
        "correct": 1
      },
      {
        "text": "Obsługują różne standardy (802.11a/b/g/n/ac/ax) oferujące różne prędkości i zasięgi",
        "correct": 1
      },
      {
        "text": "Zapewniają mobilność użytkowników w sieci",
        "correct": 1
      },
      {
        "text": "Sieci 802.11 nie obsługują szyfrowania danych",
        "correct": 0
      },
      {
        "text": "Standard 802.11 jest używany tylko w sieciach przewodowych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest PPP i gdzie jest stosowany?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "PPP (Point-to-Point Protocol) to protokół warstwy łącza używany do bezpośredniego połączenia dwóch węzłów sieciowych",
        "correct": 1
      },
      {
        "text": "Stosowany w połączeniach dial-up, łączeniach szkieletowych oraz w VPN",
        "correct": 1
      },
      {
        "text": "Obsługuje uwierzytelnianie, kompresję i multipleksowanie różnych protokołów wyższych warstw",
        "correct": 1
      },
      {
        "text": "PPP jest używany wyłącznie w sieciach bezprzewodowych",
        "correct": 0
      },
      {
        "text": "PPP nie obsługuje uwierzytelniania użytkowników",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu ATM?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "ATM (Asynchronous Transfer Mode) to technologia transmisji danych używana w sieciach WAN",
        "correct": 1
      },
      {
        "text": "Używa małych, stałej wielkości komórek (53 bajty) do przesyłania danych",
        "correct": 1
      },
      {
        "text": "Zapewnia wysoką jakość usług (QoS) poprzez obsługę różnych klas usług",
        "correct": 1
      },
      {
        "text": "Umożliwia transmisję głosową, wideo i danych w jednym medium",
        "correct": 1
      },
      {
        "text": "ATM jest używany wyłącznie w sieciach lokalnych (LAN)",
        "correct": 0
      },
      {
        "text": "ATM nie obsługuje transmisji multimedialnej",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety stosowania protokołu Frame Relay?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Szybkie i efektywne przesyłanie danych przez sieci WAN",
        "correct": 1
      },
      {
        "text": "Umożliwia tworzenie wirtualnych kanałów (VC) dla różnych połączeń",
        "correct": 1
      },
      {
        "text": "Obsługuje różne prędkości transmisji i jest elastyczny w zarządzaniu ruchem",
        "correct": 1
      },
      {
        "text": "Jest prosty w konfiguracji i utrzymaniu, co czyni go popularnym wyborem w sieciach korporacyjnych",
        "correct": 1
      },
      {
        "text": "Frame Relay jest używany wyłącznie w sieciach bezprzewodowych",
        "correct": 0
      },
      {
        "text": "Frame Relay nie obsługuje transmisji danych przez sieci WAN",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są dwa rodzaje łączy współdzielonych i jakie przykłady je ilustrują?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Punkt-punkt",
        "correct": 1
      },
      {
        "text": "Punkt-wielopunkt, rozgłaszające",
        "correct": 1
      },
      {
        "text": "Token Ring",
        "correct": 0
      },
      {
        "text": "FDDI",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołów wielodostępowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Umożliwiają dwie lub więcej jednoczesnych transmisji na wspólnym łączu",
        "correct": 1
      },
      {
        "text": "Tylko jeden węzeł może poprawnie nadawać w danym momencie",
        "correct": 1
      },
      {
        "text": "Wykorzystują centralny serwer do zarządzania dostępem",
        "correct": 0
      },
      {
        "text": "Nie wymagają komunikacji sygnalizacyjnej",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są wymagania od idealnego protokołu wielodostępowego?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Jeśli jeden węzeł chce nadawać, może nadawać z szybkością R",
        "correct": 1
      },
      {
        "text": "Jeśli M węzłów chce nadawać, każdy może nadawać z średnią przepustowością R/M",
        "correct": 1
      },
      {
        "text": "Potrzebuje centralnego koordynatora do zarządzania dostępem",
        "correct": 0
      },
      {
        "text": "Wymaga synchronizacji zegarów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są trzy szerokie klasy protokołów Medium Access Control (MAC)?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Podział łącza",
        "correct": 1
      },
      {
        "text": "Dostęp bezpośredni",
        "correct": 1
      },
      {
        "text": "Zarządzanie pasmem dynamicznym",
        "correct": 0
      },
      {
        "text": "Kontrola przepływu danych",
        "correct": 0
      },
      {
        "text": "\"Z kolejnością\"",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Czym jest protokół TDMA i jak działa?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Dostęp do łącza odbywa się w \"turach\"",
        "correct": 1
      },
      {
        "text": "Każda stacja otrzymuje stałą szczelinę czasową o długości odpowiadającej czasowi transmisji jednej ramki",
        "correct": 1
      },
      {
        "text": "Pasmo jest dzielone na różne kanały częstotliwości",
        "correct": 0
      },
      {
        "text": "Używa unikalnych kodów dla każdej stacji",
        "correct": 0
      },
      {
        "text": "Szczeliny czasowe są dynamicznie przydzielane na żądanie",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest protokół FDMA i jak działa?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Pasmo łącza jest dzielone na mniejsze pasma częstotliwości",
        "correct": 1
      },
      {
        "text": "Każda stacja otrzymuje stałe pasmo częstotliwości",
        "correct": 1
      },
      {
        "text": "Przepustowość jest dzielona w sposób dynamiczny między stacjami",
        "correct": 0
      },
      {
        "text": "Używa zmiennych kodów do separacji sygnałów",
        "correct": 0
      },
      {
        "text": "Pasma są przydzielane na podstawie zapotrzebowania danych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół CDMA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Każdemu użytkownikowi przypisany jest unikalny kod",
        "correct": 1
      },
      {
        "text": "Użytkownicy nadawają na tej samej częstotliwości, ale z różnymi kodami",
        "correct": 1
      },
      {
        "text": "Przepustowość jest dzielona na różne pasma czasowe",
        "correct": 0
      },
      {
        "text": "Używa dynamicznego przydziału kanałów",
        "correct": 0
      },
      {
        "text": "Każdy użytkownik ma przypisane stałe pasmo częstotliwości",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołów dostępu bezpośredniego?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kiedy węzeł ma ramkę do wysłania, transmituje z pełną przepustowością R",
        "correct": 1
      },
      {
        "text": "Brak koordynacji a priori między węzłami",
        "correct": 1
      },
      {
        "text": "Gwarantowana transmisja bez kolizji",
        "correct": 0
      },
      {
        "text": "Wykorzystanie centralnego serwera do zarządzania dostępem",
        "correct": 0
      },
      {
        "text": "Wymagają synchronizacji zegarów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół szczelinowego ALOHA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Węzły transmitują tylko na początku szczelin",
        "correct": 1
      },
      {
        "text": "Czas jest podzielony na jednakowe szczeliny czasowe",
        "correct": 1
      },
      {
        "text": "Ramki mają różne rozmiary w zależności od węzła",
        "correct": 0
      },
      {
        "text": "Węzły mogą transmitować w dowolnym momencie",
        "correct": 0
      },
      {
        "text": "Kolizje są eliminowane dzięki synchronizacji zegarów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są zalety i wady protokołu szczelinowego ALOHA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Jeden aktywny węzeł może transmitować bez przerwy z pełną przepustowością kanału",
        "correct": 1
      },
      {
        "text": "Kolizje prowadzą do marnowania szczelin",
        "correct": 1
      },
      {
        "text": "Wysoka efektywność przy dużym obciążeniu",
        "correct": 0
      },
      {
        "text": "Niezależność od synchronizacji szczelin czasowych",
        "correct": 0
      },
      {
        "text": "Minimalne opóźnienia w transmisji danych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jaka jest maksymalna wydajność protokołu szczelinowego ALOHA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Około 37% (1/e)",
        "correct": 1
      },
      {
        "text": "Około 50%",
        "correct": 0
      },
      {
        "text": "Około 25%",
        "correct": 0
      },
      {
        "text": "Około 18% (1/(2e))",
        "correct": 0
      },
      {
        "text": "Około 60%",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest czyste ALOHA i jak się różni od szczelinowego ALOHA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Czyste ALOHA jest prostsze, bez synchronizacji czasowej",
        "correct": 1
      },
      {
        "text": "W czystym ALOHA węzły transmitują natychmiast po otrzymaniu ramki",
        "correct": 1
      },
      {
        "text": "Czyste ALOHA ma wyższą wydajność niż szczelinowe ALOHA",
        "correct": 0
      },
      {
        "text": "Czyste ALOHA wykorzystuje szczeliny czasowe",
        "correct": 0
      },
      {
        "text": "Czyste ALOHA eliminuje kolizje poprzez synchronizację zegarów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu CSMA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Brak synchronizacji przed transmisją",
        "correct": 1
      },
      {
        "text": "Węzeł nasłuchuje kanału przed nadaniem ramki",
        "correct": 1
      },
      {
        "text": "Węzeł zawsze czeka na odpowiedź ACK przed transmisją",
        "correct": 0
      },
      {
        "text": "Węzeł nie nasłuchuje kanału przed nadaniem",
        "correct": 0
      },
      {
        "text": "Transmisje są koordynowane centralnie przez serwer",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są przyczyny kolizji w protokole CSMA i jak wpływają na wydajność?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Opóźnienia propagacji powodują, że dwa węzły mogą nie wykryć transmisji innych węzłów na czas",
        "correct": 1
      },
      {
        "text": "Kolizje prowadzą do marnowania całej transmisji ramki",
        "correct": 1
      },
      {
        "text": "Kolizje są eliminowane dzięki centralnej koordynacji",
        "correct": 0
      },
      {
        "text": "Kolizje zwiększają przepustowość kanału",
        "correct": 0
      },
      {
        "text": "Brak kolizji wpływa negatywnie na wydajność",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół CSMA/CD?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Węzeł nasłuchuje kanału przed rozpoczęciem transmisji",
        "correct": 1
      },
      {
        "text": "W trakcie transmisji węzeł nasłuchuje sygnału i wykrywa kolizje",
        "correct": 1
      },
      {
        "text": "Jeśli kolizja jest wykryta, węzeł kontynuuje transmisję",
        "correct": 0
      },
      {
        "text": "CSMA/CD używa unikalnych kodów dla każdego węzła",
        "correct": 0
      },
      {
        "text": "Protokół nie obsługuje wykrywania kolizji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy działania algorytmu CSMA/CD w Ethernet?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Adapter otrzymuje pakiet i tworzy ramkę",
        "correct": 1
      },
      {
        "text": "Jeśli adapter nie słyszy transmisji na kanale, zaczyna transmitować ramkę",
        "correct": 1
      },
      {
        "text": "Jeśli ramka zostanie wysłana bez kolizji, proces kontynuuje się automatycznie",
        "correct": 0
      },
      {
        "text": "Jeśli kolizja zostanie wykryta, adapter czeka na określony czas przed retransmisją",
        "correct": 1
      },
      {
        "text": "Adapter nie korzysta z sygnału zakłócającego po kolizji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są zalety i wady protokołów MAC \"z kolejnością\"?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Efektywnie dzielą kanał przy dużym obciążeniu, zapewniając sprawiedliwy podział pasma",
        "correct": 1
      },
      {
        "text": "Niewydajne przy małym obciążeniu z powodu opóźnień w dostępie",
        "correct": 1
      },
      {
        "text": "Zapewniają niskie opóźnienia w każdej sytuacji",
        "correct": 0
      },
      {
        "text": "Są zawsze bardziej efektywne niż protokoły bez kolejkowania",
        "correct": 0
      },
      {
        "text": "Nie wpływają na przepustowość przy wysokim ruchu",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne metody protokołów MAC \"z kolejnością\"?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Odpytywanie",
        "correct": 1
      },
      {
        "text": "Przekazywanie żetonu",
        "correct": 1
      },
      {
        "text": "Dynamiczne przydział pasma",
        "correct": 0
      },
      {
        "text": "Kodowanie różnicowe",
        "correct": 0
      },
      {
        "text": "Wykorzystanie wielu pasm częstotliwości",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu Ethernet?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Dominująca technologia LAN, pierwsza powszechnie używana",
        "correct": 1
      },
      {
        "text": "Prostsza i tańsza niż sieci LAN z Token Ring lub ATM",
        "correct": 1
      },
      {
        "text": "Używa kodowania NRZ zamiast Manchester",
        "correct": 0
      },
      {
        "text": "Nie obsługuje różnych prędkości transmisji",
        "correct": 0
      },
      {
        "text": "Struktura ramki Ethernet nie zawiera sumy kontrolnej",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy ramki Ethernet?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Nagłówek zawiera 7 bajtów wzoru 10101010 i 1 bajt wzoru 10101011",
        "correct": 1
      },
      {
        "text": "Adresy MAC odbiorcy i nadawcy zajmują po 6 bajtów każdy",
        "correct": 1
      },
      {
        "text": "Typ określa długość ramki",
        "correct": 0
      },
      {
        "text": "CRC składa się z 4 bajtów sumy kontrolnej",
        "correct": 1
      },
      {
        "text": "Dane zawierają informacje o adresach IP",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest usługa Ethernet i jakie ma cechy?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Bezpołączeniowa: brak sygnalizacji pomiędzy nadającym a odbierającym adapterem",
        "correct": 1
      },
      {
        "text": "Zawodna: odbierający adapter nie wysyła potwierdzeń ACK ani NAK",
        "correct": 1
      },
      {
        "text": "Usługa Ethernet gwarantuje dostarczenie wszystkich ramek bez strat",
        "correct": 0
      },
      {
        "text": "Luki w ciągu pakietów są automatycznie wypełniane niezależnie od protokołu warstwy sieci",
        "correct": 0
      },
      {
        "text": "Luki są wypełniane, jeśli aplikacja używa TCP",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu 10Base2 Ethernet?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Przepustowość: 10 Mb/s",
        "correct": 1
      },
      {
        "text": "Maksymalna długość kabla: 200 metrów",
        "correct": 1
      },
      {
        "text": "Używa grubego kabla koncentrycznego w topologii gwiazdy",
        "correct": 0
      },
      {
        "text": "Ramki przesyłają się tylko w jednym kierunku na szynie",
        "correct": 0
      },
      {
        "text": "Wzmacniacze łączą interfejsy poprzez powtarzanie bitów słyszanych na jednym interfejsie na pozostałe",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołów 10BaseT oraz 100BaseT?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Przepustowość: 10 Mb/s i 100 Mb/s (\"Fast Ethernet\")",
        "correct": 1
      },
      {
        "text": "\"T\" oznacza \"Twisted Pair\" – używają skręconych par kabli",
        "correct": 1
      },
      {
        "text": "Topologia szyny: węzły połączone są w linii",
        "correct": 0
      },
      {
        "text": "Maksymalna odległość między węzłami a koncentratorem: 100 metrów",
        "correct": 1
      },
      {
        "text": "100BaseT stosuje starsze techniki kodowania",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy kodowania Manchester używanego w Ethernetie?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Każdy bit ma zmianę sygnału, co umożliwia synchronizację zegarów nadawcy i odbiorcy",
        "correct": 1
      },
      {
        "text": "Eliminacja potrzeby centralnego, globalnego zegara dla węzłów",
        "correct": 1
      },
      {
        "text": "Używany tylko w 100BaseT Ethernet",
        "correct": 0
      },
      {
        "text": "Pozwala na wykrywanie synchronizacji między nadawającym a odbierającym adapterem",
        "correct": 1
      },
      {
        "text": "Kodowanie Manchester nie umożliwia detekcji błędów",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy switchy w sieciach LAN?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Inteligentne przekazywanie ramek tylko do odpowiednich portów na podstawie adresów MAC",
        "correct": 1
      },
      {
        "text": "Redukcja kolizji poprzez segmentację ruchu",
        "correct": 1
      },
      {
        "text": "Nie obsługuje pełnego dupleksu",
        "correct": 0
      },
      {
        "text": "Zwiększenie bezpieczeństwa sieci poprzez izolację ruchu między portami",
        "correct": 1
      },
      {
        "text": "Switch nie posiada tabeli MAC",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest protokół Frame Relay i gdzie jest stosowany?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Frame Relay to protokół warstwy łącza danych używany do szybkiego przesyłania danych przez sieci rozległe (WAN)",
        "correct": 1
      },
      {
        "text": "Umożliwia tworzenie wirtualnych kanałów (VC) dla różnych połączeń",
        "correct": 1
      },
      {
        "text": "Jest stosowany głównie w sieciach lokalnych (LAN)",
        "correct": 0
      },
      {
        "text": "Frame Relay nie obsługuje różnych prędkości transmisji",
        "correct": 0
      },
      {
        "text": "Jest stosowany głównie w sieciach korporacyjnych do łączenia oddziałów",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Jak działa kontrola przepływu w warstwie łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Dopasowuje prędkość nadawania danych do możliwości odbioru przez sąsiednie węzły",
        "correct": 1
      },
      {
        "text": "Zapobiega przepełnieniu buforów odbiorcy, co może prowadzić do utraty ramek",
        "correct": 1
      },
      {
        "text": "Zwiększa szybkość transmisji bez wpływu na bufor odbiorcy",
        "correct": 0
      },
      {
        "text": "Kontrola przepływu jest zarządzana tylko przez warstwę aplikacji",
        "correct": 0
      },
      {
        "text": "Mechanizmy kontroli przepływu obejmują okna przesuwne lub sygnały gotowości do odbioru",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Czym jest korekcja błędów przez kody nadmiarowe?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Metoda umożliwiająca odbiorcy rozpoznanie i naprawę błędów bitowych w ramce bez konieczności retransmisji",
        "correct": 1
      },
      {
        "text": "Wykorzystuje dodatkowe bity (kody CRC, Hamming, itp.) do wykrywania i naprawy błędów",
        "correct": 1
      },
      {
        "text": "Zmniejsza niezawodność komunikacji na poziomie warstwy łącza",
        "correct": 0
      },
      {
        "text": "Wymaga retransmisji ramki w przypadku wykrycia błędów",
        "correct": 0
      },
      {
        "text": "Zwiększa niezawodność komunikacji na poziomie warstwy łącza",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu ARP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "ARP (Address Resolution Protocol) służy do mapowania adresów IP na adresy MAC w sieciach LAN",
        "correct": 1
      },
      {
        "text": "Umożliwia dynamiczne tworzenie tablic ARP bez interwencji administratora",
        "correct": 1
      },
      {
        "text": "Działa na warstwie sieciowej modelu OSI",
        "correct": 0
      },
      {
        "text": "Działa na zasadzie rozgłaszania zapytań ARP w sieci LAN",
        "correct": 1
      },
      {
        "text": "Odpowiadają tylko węzły z odpowiednim adresem MAC",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne funkcje switcha w sieci LAN?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Inteligentne przekazywanie ramek tylko do odpowiednich portów na podstawie adresów MAC",
        "correct": 1
      },
      {
        "text": "Redukcja kolizji poprzez segmentację ruchu",
        "correct": 1
      },
      {
        "text": "Obsługa pełnego dupleksu, umożliwiając jednoczesne nadawanie i odbieranie danych",
        "correct": 1
      },
      {
        "text": "Zwiększenie bezpieczeństwa sieci poprzez izolację ruchu między portami",
        "correct": 1
      },
      {
        "text": "Switch nie zarządza adresami MAC",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest protokół DHCP i jakie są jego główne funkcje?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "DHCP (Dynamic Host Configuration Protocol) dynamicznie przydziela adresy IP hostom dołączającym się do sieci",
        "correct": 1
      },
      {
        "text": "Umożliwia automatyczne przydzielanie i przedłużanie czasu korzystania z adresów IP",
        "correct": 1
      },
      {
        "text": "Wymaga ręcznego przypisywania adresów IP przez administratora",
        "correct": 0
      },
      {
        "text": "Ułatwia zarządzanie adresacją w sieciach dużych i zmiennych",
        "correct": 1
      },
      {
        "text": "Nie pozwala na przypisywanie dodatkowych informacji, takich jak maska podsieci",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy działania protokołu DHCP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Host rozgłasza komunikat DHCP Discover",
        "correct": 1
      },
      {
        "text": "Serwer DHCP odpowiada komunikatem DHCP Offer z proponowanym adresem IP",
        "correct": 1
      },
      {
        "text": "Host wysyła komunikat DHCP Request, żądając przydzielenia adresu",
        "correct": 1
      },
      {
        "text": "Serwer DHCP wysyła komunikat DHCP Ack, potwierdzający przydzielenie adresu",
        "correct": 1
      },
      {
        "text": "Host otrzymuje potwierdzenie z adresem IP bez konieczności komunikacji",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu PPP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "PPP (Point-to-Point Protocol) jest protokołem warstwy łącza danych używanym do bezpośredniego połączenia dwóch węzłów sieciowych",
        "correct": 1
      },
      {
        "text": "Obsługuje uwierzytelnianie, kompresję i multipleksowanie różnych protokołów wyższych warstw",
        "correct": 1
      },
      {
        "text": "Stosowany głównie w sieciach LAN",
        "correct": 0
      },
      {
        "text": "Stosowany głównie w połączeniach dial-up, VPN oraz łączach punkt-punkt",
        "correct": 1
      },
      {
        "text": "Nie obsługuje kompresji danych",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa protokół ATM w kontekście warstwy łącza?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "ATM (Asynchronous Transfer Mode) to technologia transmisji danych używana w sieciach WAN",
        "correct": 1
      },
      {
        "text": "Używa małych, stałej wielkości komórek (53 bajty) do przesyłania danych",
        "correct": 1
      },
      {
        "text": "Zapewnia wysoką jakość usług (QoS) poprzez obsługę różnych klas usług",
        "correct": 1
      },
      {
        "text": "Nie umożliwia transmisji głosowej",
        "correct": 0
      },
      {
        "text": "Umożliwia transmisję głosową, wideo i danych w jednym medium",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu Gbit Ethernet?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Używa standardowego formatu ramki Ethernet",
        "correct": 1
      },
      {
        "text": "Pozwala na łącza punkt-punkt oraz wielodostępowe",
        "correct": 1
      },
      {
        "text": "W trybie wielodostępowym używa CSMA/CD",
        "correct": 1
      },
      {
        "text": "Wymaga dużych odległości między węzłami dla zwiększenia wydajności",
        "correct": 0
      },
      {
        "text": "Używa koncentratorów zwanych “Buffered Distributors”",
        "correct": 1
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety stosowania NAT w sieciach lokalnych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Oszczędność przestrzeni adresowej IP poprzez umożliwienie wielu urządzeniom w sieci lokalnej korzystania z jednego publicznego adresu IP",
        "correct": 1
      },
      {
        "text": "Zwiększenie bezpieczeństwa przez ukrycie wewnętrznych adresów IP przed światem zewnętrznym",
        "correct": 1
      },
      {
        "text": "Umożliwienie zmian adresów wewnętrznych bez konieczności aktualizacji konfiguracji zewnętrznej sieci",
        "correct": 1
      },
      {
        "text": "NAT zwiększa prędkość transmisji w sieci lokalnej",
        "correct": 0
      },
      {
        "text": "Możliwość zmiany adresu IP publicznego bez wpływu na adresy wewnętrzne urządzeń",
        "correct": 1
      }
    ]
  },
  
  {
    "pytanie": "Jakie są trzy podstawowe zasady ochrony informacji?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Poufność: Tylko nadawca i zamierzony odbiorca powinni \"rozumieć\" zawartość wiadomości.",
        "correct": 1
      },
      {
        "text": "Uwierzytelnienie: Nadawca i odbiorca muszą wzajemnie potwierdzić swoją tożsamość.",
        "correct": 1
      },
      {
        "text": "Integralność: Zapewnienie, że wiadomość nie zostanie zmodyfikowana bez wykrycia.",
        "correct": 1
      },
      {
        "text": "Dostępność: Usługi muszą być dostępne dla uprawnionych użytkowników.",
        "correct": 1
      },
      {
        "text": "Anonimowość: Ukrywanie tożsamości użytkowników w systemie.",
        "correct": 0
      },
      {
        "text": "Non-repudiation: Zapewnienie, że nadawca nie może zaprzeczyć wysłaniu wiadomości.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest poufność w kontekście ochrony informacji?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Poufność oznacza, że tylko nadawca i zamierzony odbiorca mogą zrozumieć zawartość wiadomości.",
        "correct": 1
      },
      {
        "text": "Poufność osiąga się poprzez szyfrowanie wiadomości przez nadawcę.",
        "correct": 1
      },
      {
        "text": "Poufność osiąga się poprzez odszyfrowanie wiadomości przez odbiorcę.",
        "correct": 1
      },
      {
        "text": "Poufność polega na tym, że wszyscy użytkownicy mają dostęp do informacji.",
        "correct": 0
      },
      {
        "text": "Poufność oznacza, że informacje są przechowywane w bezpiecznym miejscu fizycznym.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest uwierzytelnienie w ochronie informacji?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Uwierzytelnienie to proces, w którym nadawca i odbiorca potwierdzają swoją tożsamość względem siebie.",
        "correct": 1
      },
      {
        "text": "Uwierzytelnienie zapewnia, że komunikują się z właściwymi stronami.",
        "correct": 1
      },
      {
        "text": "Uwierzytelnienie polega na szyfrowaniu wiadomości.",
        "correct": 0
      },
      {
        "text": "Uwierzytelnienie to metoda tworzenia kopii zapasowych danych.",
        "correct": 0
      },
      {
        "text": "Uwierzytelnienie jest procesem odzyskiwania usuniętych danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cele integralności informacji?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Integralność informacji zapewnia, że wiadomość nie zostanie zmodyfikowana podczas komunikacji lub później bez wykrycia.",
        "correct": 1
      },
      {
        "text": "Integralność osiąga się poprzez mechanizmy sprawdzania sum kontrolnych (CRC, hashe).",
        "correct": 1
      },
      {
        "text": "Integralność osiąga się poprzez cyfrowe podpisy.",
        "correct": 1
      },
      {
        "text": "Integralność oznacza, że wszyscy użytkownicy mogą modyfikować wiadomość.",
        "correct": 0
      },
      {
        "text": "Integralność to proces szyfrowania danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest dystrybucja kluczy w kryptografii?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Dystrybucja kluczy to proces udostępniania kluczy kryptograficznych między stronami komunikującymi się.",
        "correct": 1
      },
      {
        "text": "Dystrybucja kluczy umożliwia szyfrowanie i odszyfrowywanie wiadomości.",
        "correct": 1
      },
      {
        "text": "Dystrybucja kluczy może odbywać się za pomocą protokołów wymiany kluczy (np. Diffie-Hellman).",
        "correct": 1
      },
      {
        "text": "Dystrybucja kluczy polega na tworzeniu kopii zapasowych kluczy.",
        "correct": 0
      },
      {
        "text": "Dystrybucja kluczy to proces odzyskiwania kluczy po ich utracie.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne funkcje ścian ogniowych w ochronie informacji?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Ściany ogniowe (firewalle) kontrolują i monitorują ruch sieciowy między różnymi segmentami sieci.",
        "correct": 1
      },
      {
        "text": "Ściany ogniowe chronią przed nieautoryzowanym dostępem oraz atakami zewnętrznymi.",
        "correct": 1
      },
      {
        "text": "Główne funkcje ścian ogniowych to filtracja pakietów, kontrola dostępu na podstawie reguł, monitorowanie i logowanie ruchu oraz ochrona przed atakami typu DoS.",
        "correct": 1
      },
      {
        "text": "Ściany ogniowe służą do tworzenia kopii zapasowych danych.",
        "correct": 0
      },
      {
        "text": "Ściany ogniowe są używane do szyfrowania wiadomości.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zagrożenia ze strony \"złych ludzi\" w sieciach komputerowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Podsłuchiwanie: Przechwytywanie wiadomości.",
        "correct": 1
      },
      {
        "text": "Aktywne dodawanie wiadomości: Modyfikowanie komunikacji.",
        "correct": 1
      },
      {
        "text": "Podszywanie się (spoofing): Fałszowanie adresów nadawcy.",
        "correct": 1
      },
      {
        "text": "Przechwytywanie połączeń: Zastępowanie stron komunikacji.",
        "correct": 1
      },
      {
        "text": "Blokowanie usług (DoS): Uniemożliwienie dostępu do usług.",
        "correct": 1
      },
      {
        "text": "Tworzenie kopii zapasowych danych bez zgody użytkownika.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czy można w pełni zabezpieczyć się technologicznie przed atakami?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Nie można całkowicie zabezpieczyć się technologicznie przed atakami.",
        "correct": 1
      },
      {
        "text": "Najprostsze ataki wykorzystują słabości człowieka, takie jak karteczki z hasłami.",
        "correct": 1
      },
      {
        "text": "\"Pożyczanie\" konta jest jednym z najprostszych ataków.",
        "correct": 1
      },
      {
        "text": "Logowanie się na obcym komputerze może prowadzić do utraty bezpieczeństwa.",
        "correct": 1
      },
      {
        "text": "Socjotechnika połączona z atakami technologicznymi (np. instalacja konia trojańskiego) jest skuteczną metodą ataku.",
        "correct": 1
      },
      {
        "text": "Technologiczne zabezpieczenia są wystarczające, aby całkowicie uniknąć ataków.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest kryptologia?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kryptologia to nauka o zabezpieczaniu informacji przed niepowołanym dostępem.",
        "correct": 1
      },
      {
        "text": "Kryptologia składa się z dwóch głównych dziedzin: kryptografii i kryptoanalizy.",
        "correct": 1
      },
      {
        "text": "Kryptografia to sztuka utajniania wiadomości.",
        "correct": 1
      },
      {
        "text": "Kryptoanaliza to sztuka odszyfrowywania wiadomości bez znajomości klucza.",
        "correct": 1
      },
      {
        "text": "Kryptologia zajmuje się tylko tworzeniem nowych algorytmów szyfrowania.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są różnice między kryptografią symetryczną a asymetryczną?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kryptografia symetryczna używa tego samego klucza do szyfrowania i odszyfrowywania.",
        "correct": 1
      },
      {
        "text": "Kryptografia symetryczna wymaga bezpiecznej dystrybucji klucza.",
        "correct": 1
      },
      {
        "text": "Kryptografia asymetryczna używa pary kluczy: publicznego i prywatnego.",
        "correct": 1
      },
      {
        "text": "Klucz publiczny w kryptografii asymetrycznej jest dostępny publicznie, a prywatny jest tajny.",
        "correct": 1
      },
      {
        "text": "Kryptografia asymetryczna nie umożliwia uwierzytelniania.",
        "correct": 0
      },
      {
        "text": "Kryptografia symetryczna jest zawsze bezpieczniejsza niż asymetryczna.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest idealnie bezpieczny szyfr i dlaczego nie jest praktyczny?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Idealnie bezpieczny szyfr wykorzystuje klucz, który jest losowym ciągiem bitów o długości równoważnej długości wiadomości.",
        "correct": 1
      },
      {
        "text": "Idealnie bezpieczny szyfr używa prostego algorytmu szyfrującego, np. XOR.",
        "correct": 1
      },
      {
        "text": "Bezpieczeństwo idealnie bezpiecznego szyfru jest niemożliwe do złamania bez klucza.",
        "correct": 1
      },
      {
        "text": "Idealnie bezpieczny szyfr jest niezbyt praktyczny ze względu na konieczność udostępniania klucza o tej samej długości co wiadomość oraz trudności w zarządzaniu takimi kluczami.",
        "correct": 1
      },
      {
        "text": "Idealnie bezpieczny szyfr jest łatwy do implementacji w systemach o niskich zasobach.",
        "correct": 0
      },
      {
        "text": "Idealnie bezpieczny szyfr nie zapewnia integralności danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest DES i jakie ma wady?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "DES (Data Encryption Standard) to amerykański standard szyfrowania z 1993 roku.",
        "correct": 1
      },
      {
        "text": "DES używa 56-bitowego klucza symetrycznego i szyfruje dane w blokach 64-bitowych.",
        "correct": 1
      },
      {
        "text": "Wady DES to słaba odporność na ataki siłowe oraz krótki klucz (56 bitów), który jest podatny na ataki brute-force.",
        "correct": 1
      },
      {
        "text": "DES jest obecnie uważany za bezpieczny i szeroko stosowany w nowych systemach.",
        "correct": 0
      },
      {
        "text": "DES nie wymaga żadnej formy klucza do szyfrowania danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy AES?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "AES (Advanced Encryption Standard) to nowy standard kryptografii symetrycznej od listopada 2001 roku, zastępujący DES.",
        "correct": 1
      },
      {
        "text": "AES szyfruje dane w blokach 128-bitowych.",
        "correct": 1
      },
      {
        "text": "AES obsługuje klucze o długościach 128, 192 i 256 bitów.",
        "correct": 1
      },
      {
        "text": "AES ma bardzo wysoką odporność na ataki siłowe – odszyfrowanie trwałoby około 149 bilionów lat dla AES-256.",
        "correct": 1
      },
      {
        "text": "AES jest szybszy, ale mniej bezpieczny niż DES.",
        "correct": 0
      },
      {
        "text": "AES nie jest szeroko stosowany w aplikacjach bezpieczeństwa.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa kryptografia z kluczem publicznym?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kryptografia asymetryczna używa pary kluczy: publicznego i prywatnego.",
        "correct": 1
      },
      {
        "text": "Nadawca szyfruje wiadomość za pomocą klucza publicznego odbiorcy.",
        "correct": 1
      },
      {
        "text": "Odbiorca odszyfrowuje wiadomość za pomocą swojego klucza prywatnego.",
        "correct": 1
      },
      {
        "text": "Kryptografia asymetryczna wymaga bezpiecznej dystrybucji klucza prywatnego.",
        "correct": 0
      },
      {
        "text": "Kryptografia z kluczem publicznym nie umożliwia uwierzytelniania.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne kroki wyboru kluczy w algorytmie RSA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Wybierz dwie duże liczby pierwsze p i q (np. po 1024 bity każda).",
        "correct": 1
      },
      {
        "text": "Oblicz n = p * q oraz φ = (p−1)(q−1).",
        "correct": 1
      },
      {
        "text": "Wybierz e takie, że 1 < e < φ i gcd(e, φ) = 1.",
        "correct": 1
      },
      {
        "text": "Oblicz d takie, że e * d ≡ 1 mod φ.",
        "correct": 1
      },
      {
        "text": "Klucz publiczny to (n, e), a klucz prywatny to (n, d).",
        "correct": 1
      },
      {
        "text": "Wybierz e = 1, aby uprościć proces szyfrowania.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa szyfrowanie i odszyfrowywanie w RSA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Szyfrowanie: Mając wiadomość m, oblicz szyfrogram c = m^e mod n.",
        "correct": 1
      },
      {
        "text": "Odszyfrowywanie: Mając szyfrogram c, oblicz wiadomość m = c^d mod n.",
        "correct": 1
      },
      {
        "text": "RSA używa tego samego klucza do szyfrowania i odszyfrowywania.",
        "correct": 0
      },
      {
        "text": "Szyfrowanie w RSA odbywa się bez użycia klucza publicznego.",
        "correct": 0
      },
      {
        "text": "Odszyfrowywanie w RSA nie wymaga znajomości klucza prywatnego.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Dlaczego złamanie RSA jest trudne?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "RSA opiera się na trudności faktoryzacji dużych liczb złożonych z dwóch dużych liczb pierwszych.",
        "correct": 1
      },
      {
        "text": "Faktoryzacja jest problemem NP-trudnym, co oznacza, że nie jest znany efektywny algorytm do jej rozwiązania.",
        "correct": 1
      },
      {
        "text": "Jeśli P=NP, kryptografia klucza publicznego mogłaby przestać być skuteczna.",
        "correct": 1
      },
      {
        "text": "RSA jest łatwy do złamania przy użyciu nowoczesnych komputerów.",
        "correct": 0
      },
      {
        "text": "RSA nie jest oparty na żadnym trudnym problemie matematycznym.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest podpis cyfrowy i jakie ma zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Podpis cyfrowy to technika kryptograficzna analogiczna do podpisów odręcznych.",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy umożliwia nadawcy podpisanie dokumentu cyfrowo, potwierdzając swoją tożsamość.",
        "correct": 1
      },
      {
        "text": "Odbiorca może zweryfikować podpis, aby potwierdzić, że dokument pochodzi od nadawcy i nie został zmodyfikowany.",
        "correct": 1
      },
      {
        "text": "Zastosowania podpisów cyfrowych obejmują autentykację dokumentów elektronicznych, zapewnienie integralności danych oraz niezaprzeczalność w transakcjach cyfrowych.",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy jest używany tylko do szyfrowania danych.",
        "correct": 0
      },
      {
        "text": "Podpis cyfrowy umożliwia dowolnemu użytkownikowi modyfikację podpisanych dokumentów.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy weryfikacji podpisu cyfrowego?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Odbiorca otrzymuje wiadomość m oraz podpis cyfrowy KB(m).",
        "correct": 1
      },
      {
        "text": "Odbiorca używa klucza publicznego nadawcy KB do odszyfrowania podpisu KB(m), uzyskując skrót wiadomości H(m).",
        "correct": 1
      },
      {
        "text": "Odbiorca oblicza własny skrót wiadomości H(m) i porównuje go z odszyfrowanym skrótem.",
        "correct": 1
      },
      {
        "text": "Jeśli skróty się zgadzają, podpis jest prawidłowy, a wiadomość nie została zmodyfikowana.",
        "correct": 1
      },
      {
        "text": "Weryfikacja podpisu polega na ponownym szyfrowaniu całej wiadomości przez odbiorcę.",
        "correct": 0
      },
      {
        "text": "Odbiorca musi znać klucz prywatny nadawcy, aby zweryfikować podpis.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest funkcja haszująca i jakie ma właściwości?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Funkcja haszująca przekształca dowolnie długą wiadomość m w skrót H(m) o ustalonej długości.",
        "correct": 1
      },
      {
        "text": "Właściwości funkcji haszującej to jednokierunkowość, deterministyczność, odporność na kolizje oraz rozproszenie.",
        "correct": 1
      },
      {
        "text": "Jednokierunkowość oznacza, że trudne jest odtworzenie wiadomości z jej skrótu.",
        "correct": 1
      },
      {
        "text": "Deterministyczność oznacza, że ta sama wiadomość zawsze daje ten sam skrót.",
        "correct": 1
      },
      {
        "text": "Odporność na kolizje oznacza, że łatwo znaleźć dwie różne wiadomości z tym samym skrótem.",
        "correct": 0
      },
      {
        "text": "Rozproszenie oznacza, że niewielka zmiana w wiadomości nie wpływa na skrót.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne algorytmy funkcji haszujących używane w kryptografii?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "MD5 (Message Digest Algorithm 5) oblicza 128-bitowy skrót wiadomości.",
        "correct": 1
      },
      {
        "text": "SHA-1 (Secure Hash Algorithm 1) oblicza 160-bitowy skrót wiadomości.",
        "correct": 1
      },
      {
        "text": "SHA-256 i nowsze zapewniają wyższy poziom bezpieczeństwa i są zalecane do nowych implementacji.",
        "correct": 1
      },
      {
        "text": "MD5 jest obecnie uważany za bezpieczny i szeroko stosowany w nowych systemach.",
        "correct": 0
      },
      {
        "text": "SHA-1 jest bardziej bezpieczny niż SHA-256.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest PGP i jakie ma zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "PGP (Pretty Good Privacy) to mechanizm szyfrowania poczty elektronicznej, de facto standard.",
        "correct": 1
      },
      {
        "text": "PGP używa kryptografii symetrycznej, asymetrycznej, funkcji haszujących i podpisów cyfrowych.",
        "correct": 1
      },
      {
        "text": "PGP zapewnia poufność, uwierzytelnienie nadawcy oraz integralność wiadomości.",
        "correct": 1
      },
      {
        "text": "PGP został stworzony przez Phila Zimmermanna i był przedmiotem śledztwa w USA przez 3 lata.",
        "correct": 1
      },
      {
        "text": "PGP jest używany głównie do zarządzania bazami danych.",
        "correct": 0
      },
      {
        "text": "PGP nie wspiera podpisów cyfrowych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa bezpieczna poczta elektroniczna w PGP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Generowanie kluczy: Alicja generuje losowy symetryczny klucz prywatny K.",
        "correct": 1
      },
      {
        "text": "Szyfrowanie wiadomości: Alicja szyfruje wiadomość m za pomocą klucza K, tworząc szyfrogram KS(m).",
        "correct": 1
      },
      {
        "text": "Szyfrowanie klucza: Alicja szyfruje klucz K za pomocą klucza publicznego Boba KB, tworząc KB(K).",
        "correct": 1
      },
      {
        "text": "Wysyłanie: Alicja wysyła zarówno KS(m) jak i KB(K) do Boba.",
        "correct": 1
      },
      {
        "text": "Odszyfrowanie przez Boba: Bob używa swojego klucza prywatnego KB do odszyfrowania KB(K), odzyskując K, a następnie używa K do odszyfrowania KS(m), odzyskując wiadomość m.",
        "correct": 1
      },
      {
        "text": "Bezpieczna poczta w PGP nie używa kluczy asymetrycznych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety i wady stosowania protokołu CSMA/CD w Ethernet?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Zalety: Znacznie wyższa wydajność w porównaniu do ALOHA.",
        "correct": 1
      },
      {
        "text": "Zalety: Zdecentralizowany, prosty i tani w implementacji.",
        "correct": 1
      },
      {
        "text": "Zalety: Efektywne wykorzystanie kanału przy niskim i średnim obciążeniu.",
        "correct": 1
      },
      {
        "text": "Zalety: Mechanizm wykrywania i naprawiania kolizji zmniejsza marnowanie kanału.",
        "correct": 1
      },
      {
        "text": "Wady: Nieefektywny przy bardzo wysokim obciążeniu.",
        "correct": 1
      },
      {
        "text": "Wady: Wymaga, aby węzły były w bliskiej odległości, co ogranicza skalowalność.",
        "correct": 1
      },
      {
        "text": "Zalety: Wymaga centralnego serwera do zarządzania ruchem.",
        "correct": 0
      },
      {
        "text": "Wady: Bardzo kosztowny w implementacji.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest atak odtwarzający (Replay Attack) i jak można się przed nim zabezpieczyć?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Atak odtwarzający polega na nagrywaniu komunikatów między Alicją a Bobem i późniejszym ich odtwarzaniu.",
        "correct": 1
      },
      {
        "text": "Zabezpieczenia przed atakiem odtwarzającym obejmują używanie identyfikatorów jednorazowych (nonce).",
        "correct": 1
      },
      {
        "text": "Zabezpieczenia obejmują używanie czasu ważności komunikatów.",
        "correct": 1
      },
      {
        "text": "Zabezpieczenia obejmują implementację protokołów uwierzytelniania opartych na kryptografii klucza publicznego.",
        "correct": 1
      },
      {
        "text": "Atak odtwarzający można zabezpieczyć poprzez szyfrowanie komunikacji za pomocą DES.",
        "correct": 0
      },
      {
        "text": "Atak odtwarzający jest skuteczny tylko w sieciach przewodowych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest atak pośrednika (Man-in-the-Middle Attack) i jakie są jego konsekwencje?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Atak pośrednika polega na tym, że atakujący udaje Alicję wobec Boba i Boba wobec Alicji.",
        "correct": 1
      },
      {
        "text": "Atakujący może przechwytywać, modyfikować lub wstrzykiwać wiadomości między Alicją a Bobem.",
        "correct": 1
      },
      {
        "text": "Konsekwencje ataku pośrednika to utrata poufności, integralności i uwierzytelnienia komunikacji.",
        "correct": 1
      },
      {
        "text": "Atak pośrednika pozwala na bezpieczne przekazywanie wiadomości między stronami.",
        "correct": 0
      },
      {
        "text": "Atak pośrednika nie wpływa na integralność danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy podpisów cyfrowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Podpis cyfrowy jest analogiczny do podpisu odręcznego, ale w formie cyfrowej.",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy zapewnia uwierzytelnienie nadawcy i integralność wiadomości.",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy zapewnia niezaprzeczalność – nadawca nie może zaprzeczyć podpisaniu wiadomości.",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy jest tworzony poprzez szyfrowanie całej wiadomości kluczem prywatnym.",
        "correct": 0
      },
      {
        "text": "Weryfikacja podpisu cyfrowego nie wymaga klucza publicznego.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa podpis cyfrowy w praktyce?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Tworzenie podpisu: Bob oblicza skrót wiadomości H(m).",
        "correct": 1
      },
      {
        "text": "Tworzenie podpisu: Bob szyfruje skrót H(m) swoim kluczem prywatnym KB, tworząc podpis KB(H(m)).",
        "correct": 1
      },
      {
        "text": "Tworzenie podpisu: Bob wysyła wiadomość m oraz podpis KB(H(m)) do Alicji.",
        "correct": 1
      },
      {
        "text": "Weryfikacja podpisu: Alicja odszyfrowuje podpis za pomocą klucza publicznego Boba KB, uzyskując skrót H(m).",
        "correct": 1
      },
      {
        "text": "Weryfikacja podpisu: Alicja porównuje odszyfrowany skrót z lokalnie obliczonym skrótem H(m).",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy nie zapewnia integralności wiadomości.",
        "correct": 0
      },
      {
        "text": "Alicja nie musi posiadać klucza publicznego Boba, aby zweryfikować podpis.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest funkcja haszująca w kontekście podpisów cyfrowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Funkcja haszująca jest używana do obliczenia skrótu wiadomości H(m), który jest następnie podpisywany kluczem prywatnym.",
        "correct": 1
      },
      {
        "text": "Funkcja haszująca zapewnia integralność wiadomości.",
        "correct": 1
      },
      {
        "text": "Funkcja haszująca zapewnia niezaprzeczalność podpisu.",
        "correct": 1
      },
      {
        "text": "Funkcja haszująca umożliwia szyfrowanie całej wiadomości.",
        "correct": 0
      },
      {
        "text": "Funkcja haszująca jest używana tylko do tworzenia kopii zapasowych danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne etapy działania protokołu uwierzytelnienia uwierz4.0?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Bob wysyła Alicji jednorazowy identyfikator R.",
        "correct": 1
      },
      {
        "text": "Alicja szyfruje R za pomocą wspólnego klucza symetrycznego KS, tworząc KS(R).",
        "correct": 1
      },
      {
        "text": "Alicja wysyła zaszyfrowany identyfikator KS(R) do Boba.",
        "correct": 1
      },
      {
        "text": "Bob odszyfrowuje KS(R) za pomocą klucza KS, odzyskując R.",
        "correct": 1
      },
      {
        "text": "Jeśli odszyfrowanie się powiedzie, Bob potwierdza, że Alicja zna klucz KS, co uwierzytelnia jej tożsamość.",
        "correct": 1
      },
      {
        "text": "Protokół uwierzytelnienia uwierz4.0 nie wymaga wspólnego klucza symetrycznego.",
        "correct": 0
      },
      {
        "text": "Protokół uwierzytelnienia uwierz4.0 używa tylko kluczy asymetrycznych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest IPsec i jakie ma zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "IPsec (Internet Protocol Security) to zestaw protokołów do zabezpieczania komunikacji na poziomie IP.",
        "correct": 1
      },
      {
        "text": "IPsec umożliwia szyfrowanie i uwierzytelnianie pakietów IP.",
        "correct": 1
      },
      {
        "text": "IPsec jest stosowany w VPN (Virtual Private Networks) do tworzenia bezpiecznych połączeń między sieciami.",
        "correct": 1
      },
      {
        "text": "IPsec zapewnia poufność, integralność i uwierzytelnienie danych przesyłanych przez sieć.",
        "correct": 1
      },
      {
        "text": "IPsec jest używany głównie do tworzenia kopii zapasowych danych.",
        "correct": 0
      },
      {
        "text": "IPsec nie wspiera uwierzytelniania użytkowników.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest 802.11 WEP i jakie ma wady?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "802.11 WEP (Wired Equivalent Privacy) to standard bezpieczeństwa dla sieci bezprzewodowych.",
        "correct": 1
      },
      {
        "text": "WEP używa szyfrowania RC4 z kluczem o długości 40 lub 104 bitów.",
        "correct": 1
      },
      {
        "text": "Wady WEP to słaba odporność na ataki kryptoanalityczne oraz łatwość złamania WEP za pomocą dostępnych narzędzi.",
        "correct": 1
      },
      {
        "text": "WEP używa dynamicznej dystrybucji kluczy, co zwiększa jego bezpieczeństwo.",
        "correct": 0
      },
      {
        "text": "WEP jest obecnie uważany za bezpieczny i szeroko stosowany w nowych sieciach bezprzewodowych.",
        "correct": 0
      },
      {
        "text": "WEP nie wymaga żadnego klucza do szyfrowania danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest Digital Rights Management (DRM) i jakie ma zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "DRM (Digital Rights Management) to technologie i metody służące do zarządzania prawami dostępu do treści cyfrowych.",
        "correct": 1
      },
      {
        "text": "DRM zapewnia kontrolę nad tym, kto może korzystać z danej treści i w jaki sposób.",
        "correct": 1
      },
      {
        "text": "Zastosowania DRM obejmują ochronę treści multimedialnych, zarządzanie dostępem do oprogramowania oraz kontrolę kopiowania i dystrybucji treści cyfrowych.",
        "correct": 1
      },
      {
        "text": "DRM jest używany głównie do szyfrowania sieci bezprzewodowych.",
        "correct": 0
      },
      {
        "text": "DRM nie wpływa na dystrybucję oprogramowania.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest steganografia i jak różni się od kryptografii?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Steganografia to technika ukrywania faktu istnienia wiadomości poprzez wprowadzenie jej w nośnik (np. obrazy, dźwięki).",
        "correct": 1
      },
      {
        "text": "Celem steganografii jest, aby odbiorca nie wiedział o istnieniu ukrytej wiadomości.",
        "correct": 1
      },
      {
        "text": "Kryptografia to sztuka utajniania treści wiadomości, aby była ona niezrozumiała dla niepowołanych odbiorców.",
        "correct": 1
      },
      {
        "text": "Steganografia wymaga użycia klucza do odszyfrowania wiadomości.",
        "correct": 0
      },
      {
        "text": "Kryptografia ukrywa fakt istnienia wiadomości, podczas gdy steganografia ukrywa treść.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy funkcji haszującej w kontekście szyfrowania wiadomości?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Funkcje haszujące są używane do tworzenia skrótu wiadomości H(m), który jest następnie szyfrowany w podpisach cyfrowych.",
        "correct": 1
      },
      {
        "text": "Funkcje haszujące zapewniają integralność danych poprzez porównanie skrótów.",
        "correct": 1
      },
      {
        "text": "Funkcje haszujące umożliwiają efektywne zarządzanie danymi, ponieważ podpisuje się tylko skrót, a nie całą wiadomość.",
        "correct": 1
      },
      {
        "text": "Funkcje haszujące są używane do szyfrowania całej wiadomości.",
        "correct": 0
      },
      {
        "text": "Funkcje haszujące nie mają zastosowania w podpisach cyfrowych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest wykrywanie włamań (Intrusion Detection) i jakie ma zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Wykrywanie włamań (IDS - Intrusion Detection Systems) to systemy monitorujące sieć lub systemy komputerowe w celu wykrywania podejrzanej aktywności lub naruszeń bezpieczeństwa.",
        "correct": 1
      },
      {
        "text": "Zastosowania IDS obejmują monitorowanie ruchu sieciowego, wykrywanie ataków typu DoS, malware, próby nieautoryzowanego dostępu.",
        "correct": 1
      },
      {
        "text": "IDS informuje administratorów o potencjalnych zagrożeniach i pomaga w analizie incydentów bezpieczeństwa.",
        "correct": 1
      },
      {
        "text": "Wykrywanie włamań polega na automatycznym blokowaniu wszystkich nieznanych połączeń.",
        "correct": 0
      },
      {
        "text": "IDS nie ma zastosowania w monitorowaniu logów systemowych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest kontrola dostępu w ochronie informacji i jakie są jej główne metody?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Kontrola dostępu to mechanizmy zarządzające, które decydują, kto ma prawo do dostępu do zasobów sieciowych i informacji.",
        "correct": 1
      },
      {
        "text": "Główne metody kontroli dostępu to ściany ogniowe (firewalls), systemy wykrywania włamań (IDS), kontrola dostępu na poziomie aplikacji oraz kontrola dostępu na poziomie fizycznym.",
        "correct": 1
      },
      {
        "text": "Ściany ogniowe filtrują ruch sieciowy na podstawie reguł bezpieczeństwa.",
        "correct": 1
      },
      {
        "text": "Kontrola dostępu na poziomie fizycznym obejmuje ograniczenie fizycznego dostępu do urządzeń i infrastruktury sieciowej.",
        "correct": 1
      },
      {
        "text": "Kontrola dostępu nie obejmuje uwierzytelniania użytkowników.",
        "correct": 0
      },
      {
        "text": "Kontrola dostępu jest stosowana tylko w sieciach bezprzewodowych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest cyfrowa kryminalistyka?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Cyfrowa kryminalistyka to dziedzina zajmująca się badaniem i analizą danych cyfrowych w celu wykrywania, zbierania, analizowania i prezentowania dowodów w postępowaniach prawnych.",
        "correct": 1
      },
      {
        "text": "Główne aspekty cyfrowej kryminalistyki to analiza śladów cyfrowych po atakach, odzyskiwanie usuniętych danych, analiza logów systemowych i sieciowych oraz tworzenie raportów i prezentacja dowodów w sądzie.",
        "correct": 1
      },
      {
        "text": "Cyfrowa kryminalistyka obejmuje tylko analizę logów systemowych.",
        "correct": 0
      },
      {
        "text": "Cyfrowa kryminalistyka nie jest używana w postępowaniach prawnych.",
        "correct": 0
      },
      {
        "text": "Cyfrowa kryminalistyka zajmuje się tylko tworzeniem kopii zapasowych danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy funkcji haszującej MD5?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "MD5 (Message Digest Algorithm 5) oblicza 128-bitowy skrót wiadomości.",
        "correct": 1
      },
      {
        "text": "MD5 jest szeroko stosowany w różnych aplikacjach bezpieczeństwa.",
        "correct": 1
      },
      {
        "text": "MD5 jest obecnie uznawany za niebezpieczny ze względu na podatność na kolizje i ataki kryptoanalityczne.",
        "correct": 1
      },
      {
        "text": "MD5 jest zalecany do użycia w nowych implementacjach funkcji haszujących.",
        "correct": 0
      },
      {
        "text": "MD5 oblicza skrót wiadomości o zmiennej długości.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest SHA-1 i jakie ma zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "SHA-1 (Secure Hash Algorithm 1) oblicza 160-bitowy skrót wiadomości.",
        "correct": 1
      },
      {
        "text": "SHA-1 jest standardem amerykańskim (NIST, FIPS PUB 180-1).",
        "correct": 1
      },
      {
        "text": "SHA-1 jest używany w różnych protokołach bezpieczeństwa, takich jak SSL/TLS, S/MIME.",
        "correct": 1
      },
      {
        "text": "SHA-1 jest bardziej bezpieczny niż SHA-256.",
        "correct": 0
      },
      {
        "text": "SHA-1 nie wykazuje podatności na ataki kolizyjne.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne metody ochrony informacji w różnych warstwach modelu OSI?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Warstwa aplikacji: Szyfrowanie danych aplikacji, uwierzytelnianie użytkowników, kontrola dostępu.",
        "correct": 1
      },
      {
        "text": "Warstwa transportu: SSL/TLS do zabezpieczania połączeń, uwierzytelnianie końcowe.",
        "correct": 1
      },
      {
        "text": "Warstwa sieci: IPsec do szyfrowania i uwierzytelniania pakietów IP.",
        "correct": 1
      },
      {
        "text": "Warstwa łącza danych: Szyfrowanie na poziomie łącza, kontrola dostępu (MAC).",
        "correct": 1
      },
      {
        "text": "Warstwa fizyczna: Fizyczne zabezpieczenia infrastruktury, monitorowanie dostępu fizycznego.",
        "correct": 1
      },
      {
        "text": "Warstwa prezentacji: Używanie tylko otwartych protokołów bez zabezpieczeń.",
        "correct": 0
      },
      {
        "text": "Warstwa sesji nie wymaga żadnych zabezpieczeń.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest podpis cyfrowy w RSA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Tworzenie podpisu: Szyfrowanie skrótu wiadomości kluczem prywatnym d.",
        "correct": 1
      },
      {
        "text": "Weryfikacja podpisu: Odszyfrowanie podpisu kluczem publicznym e i porównanie z lokalnie obliczonym skrótem H(m).",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy zapewnia niezaprzeczalność nadawcy oraz integralność wiadomości.",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy w RSA nie wymaga użycia funkcji haszującej.",
        "correct": 0
      },
      {
        "text": "Podpis cyfrowy w RSA jest identyczny jak szyfrowanie wiadomości.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy algorytmu RSA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Bezpieczeństwo: Opiera się na trudności faktoryzacji dużych liczb złożonych z dwóch dużych liczb pierwszych.",
        "correct": 1
      },
      {
        "text": "Elastyczność: Umożliwia szyfrowanie, odszyfrowywanie, uwierzytelnianie i podpisy cyfrowe.",
        "correct": 1
      },
      {
        "text": "RSA używa klucza publicznego i prywatnego do bezpiecznej wymiany informacji bez konieczności wcześniejszej dystrybucji kluczy.",
        "correct": 1
      },
      {
        "text": "RSA jest odporny na ataki nawet przy krótkich kluczach (np. 512 bitów).",
        "correct": 0
      },
      {
        "text": "RSA nie jest używany w praktyce ze względu na swoje wady.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest AES i dlaczego jest bardziej bezpieczny niż DES?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "AES (Advanced Encryption Standard) zastępuje DES jako standard kryptografii symetrycznej.",
        "correct": 1
      },
      {
        "text": "AES używa dłuższych kluczy: 128, 192, lub 256 bitów.",
        "correct": 1
      },
      {
        "text": "AES szyfruje dane w blokach 128-bitowych.",
        "correct": 1
      },
      {
        "text": "AES jest znacznie bardziej odporny na ataki siłowe niż DES – odszyfrowanie trwałoby miliardy lat.",
        "correct": 1
      },
      {
        "text": "AES jest mniej bezpieczny niż DES, ale szybszy w implementacji.",
        "correct": 0
      },
      {
        "text": "AES nie jest szeroko stosowany w różnych aplikacjach bezpieczeństwa.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy podpisów cyfrowych w RSA?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Tworzenie podpisu: Szyfrowanie skrótu wiadomości kluczem prywatnym d.",
        "correct": 1
      },
      {
        "text": "Weryfikacja podpisu: Odszyfrowanie podpisu kluczem publicznym e i porównanie z lokalnie obliczonym skrótem H(m).",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy zapewnia niezaprzeczalność nadawcy oraz integralność wiadomości.",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy w RSA umożliwia szyfrowanie całej wiadomości.",
        "correct": 0
      },
      {
        "text": "Podpis cyfrowy w RSA nie zapewnia uwierzytelnienia nadawcy.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu uwierzytelnienia uwierz5.0?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Protokół uwierzytelnienia uwierz5.0 używa identyfikatora jednorazowego R.",
        "correct": 1
      },
      {
        "text": "Protokół wykorzystuje kryptografię klucza publicznego do zabezpieczenia identyfikatora.",
        "correct": 1
      },
      {
        "text": "Zabezpieczenia protokołu uwierzytelnienia uwierz5.0 umożliwiają potwierdzenie tożsamości bez wspólnego klucza symetrycznego.",
        "correct": 1
      },
      {
        "text": "Protokół chroni przed atakami pośrednika poprzez kryptografię asymetryczną.",
        "correct": 1
      },
      {
        "text": "Protokół uwierzytelnienia uwierz5.0 nie umożliwia weryfikacji autentyczności podpisu cyfrowego.",
        "correct": 0
      },
      {
        "text": "Protokół uwierzytelnienia uwierz5.0 nie używa identyfikatorów jednorazowych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest atak pośrednika (Man-in-the-Middle Attack) w protokole uwierzytelnienia?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Atak pośrednika polega na tym, że atakujący udaje Alicję wobec Boba i Boba wobec Alicji.",
        "correct": 1
      },
      {
        "text": "Atakujący przechwytuje, modyfikuje lub wstrzykuje wiadomości między Alicją a Bobem.",
        "correct": 1
      },
      {
        "text": "Atak pośrednika pozwala na podsłuchiwanie komunikacji.",
        "correct": 1
      },
      {
        "text": "Atak pośrednika umożliwia fałszowanie tożsamości stron komunikujących się.",
        "correct": 1
      },
      {
        "text": "Atak pośrednika nie wpływa na integralność komunikacji.",
        "correct": 0
      },
      {
        "text": "Atak pośrednika jest skuteczny tylko w sieciach przewodowych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu zabezpieczonej poczty elektronicznej (Secure Mail)?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Poufność: Szyfrowanie wiadomości za pomocą klucza symetrycznego.",
        "correct": 1
      },
      {
        "text": "Uwierzytelnienie: Podpisy cyfrowe potwierdzające tożsamość nadawcy.",
        "correct": 1
      },
      {
        "text": "Integralność: Funkcje haszujące zapewniające, że wiadomość nie została zmodyfikowana.",
        "correct": 1
      },
      {
        "text": "Efektywność: Szyfrowanie dużych wiadomości za pomocą szyfrów symetrycznych, a kluczy symetrycznych szyfrowanie za pomocą kluczy asymetrycznych.",
        "correct": 1
      },
      {
        "text": "Secure Mail nie używa podpisów cyfrowych.",
        "correct": 0
      },
      {
        "text": "Secure Mail nie zapewnia poufności wiadomości.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest Pretty Good Privacy (PGP) i jakie ma funkcje?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "PGP (Pretty Good Privacy) to mechanizm szyfrowania poczty elektronicznej.",
        "correct": 1
      },
      {
        "text": "PGP używa kryptografii symetrycznej, asymetrycznej, funkcji haszujących i podpisów cyfrowych.",
        "correct": 1
      },
      {
        "text": "PGP zapewnia poufność, uwierzytelnienie nadawcy oraz integralność wiadomości.",
        "correct": 1
      },
      {
        "text": "PGP jest stosowany do zabezpieczania komunikacji elektronicznej przed nieautoryzowanym dostępem.",
        "correct": 1
      },
      {
        "text": "PGP nie wspiera funkcji haszujących.",
        "correct": 0
      },
      {
        "text": "PGP jest używany tylko do szyfrowania plików na dysku lokalnym.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jak działa podpis cyfrowy w PGP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Tworzenie podpisu: Alicja generuje skrót wiadomości H(m) za pomocą funkcji haszującej.",
        "correct": 1
      },
      {
        "text": "Tworzenie podpisu: Alicja szyfruje skrót H(m) swoim kluczem prywatnym KB, tworząc podpis cyfrowy KB(H(m)).",
        "correct": 1
      },
      {
        "text": "Tworzenie podpisu: Alicja wysyła wiadomość m oraz podpis KB(H(m)) do Boba.",
        "correct": 1
      },
      {
        "text": "Weryfikacja podpisu: Bob odszyfrowuje podpis za pomocą klucza publicznego Alicji KA, uzyskując skrót H(m).",
        "correct": 1
      },
      {
        "text": "Weryfikacja podpisu: Bob oblicza własny skrót wiadomości H(m) i porównuje go z odszyfrowanym skrótem.",
        "correct": 1
      },
      {
        "text": "Podpis cyfrowy w PGP nie zapewnia integralności wiadomości.",
        "correct": 0
      },
      {
        "text": "Bob nie musi posiadać klucza publicznego Alicji, aby zweryfikować podpis.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zabezpieczenia przed atakiem pośrednika w PGP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Weryfikacja kluczy publicznych: Używanie certyfikatów cyfrowych wydanych przez zaufane urzędy certyfikacji (CA).",
        "correct": 1
      },
      {
        "text": "Web of Trust: Użytkownicy podpisują klucze innych użytkowników, budując zaufanie w sieci.",
        "correct": 1
      },
      {
        "text": "Bezpieczna dystrybucja kluczy publicznych: Używanie zaufanych kanałów do wymiany kluczy publicznych.",
        "correct": 1
      },
      {
        "text": "Zasady bezpieczeństwa użytkowników: Edukacja użytkowników na temat rozpoznawania i unikania fałszywych kluczy.",
        "correct": 1
      },
      {
        "text": "PGP nie oferuje żadnych zabezpieczeń przed atakami pośrednika.",
        "correct": 0
      },
      {
        "text": "PGP używa tylko kluczy symetrycznych do zabezpieczania komunikacji.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest wykrywanie włamań (Intrusion Detection) i jakie ma zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Wykrywanie włamań (IDS - Intrusion Detection Systems) to systemy monitorujące sieć lub systemy komputerowe w celu wykrywania podejrzanej aktywności lub naruszeń bezpieczeństwa.",
        "correct": 1
      },
      {
        "text": "Zastosowania IDS obejmują monitorowanie ruchu sieciowego, wykrywanie ataków typu DoS, malware oraz próby nieautoryzowanego dostępu.",
        "correct": 1
      },
      {
        "text": "IDS informuje administratorów o potencjalnych zagrożeniach i pomaga w analizie incydentów bezpieczeństwa.",
        "correct": 1
      },
      {
        "text": "Wykrywanie włamań polega na automatycznym blokowaniu wszystkich przychodzących połączeń.",
        "correct": 0
      },
      {
        "text": "IDS nie jest używany do monitorowania logów systemowych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne metody ochrony informacji w różnych warstwach modelu OSI?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Warstwa aplikacji: Szyfrowanie danych aplikacji, uwierzytelnianie użytkowników, kontrola dostępu.",
        "correct": 1
      },
      {
        "text": "Warstwa transportu: SSL/TLS do zabezpieczania połączeń, uwierzytelnianie końcowe.",
        "correct": 1
      },
      {
        "text": "Warstwa sieci: IPsec do szyfrowania i uwierzytelniania pakietów IP.",
        "correct": 1
      },
      {
        "text": "Warstwa łącza danych: Szyfrowanie na poziomie łącza, kontrola dostępu (MAC).",
        "correct": 1
      },
      {
        "text": "Warstwa fizyczna: Fizyczne zabezpieczenia infrastruktury, monitorowanie dostępu fizycznego.",
        "correct": 1
      },
      {
        "text": "Warstwa prezentacji: Używanie tylko otwartych protokołów bez zabezpieczeń.",
        "correct": 0
      },
      {
        "text": "Warstwa sesji nie wymaga żadnych zabezpieczeń.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest IPsec i jakie ma zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "IPsec (Internet Protocol Security) to zestaw protokołów do zabezpieczania komunikacji na poziomie IP.",
        "correct": 1
      },
      {
        "text": "IPsec umożliwia szyfrowanie i uwierzytelnianie pakietów IP.",
        "correct": 1
      },
      {
        "text": "IPsec jest stosowany w VPN (Virtual Private Networks) do tworzenia bezpiecznych połączeń między sieciami.",
        "correct": 1
      },
      {
        "text": "IPsec zapewnia poufność, integralność i uwierzytelnienie danych przesyłanych przez sieć.",
        "correct": 1
      },
      {
        "text": "IPsec jest używany głównie do tworzenia kopii zapasowych danych.",
        "correct": 0
      },
      {
        "text": "IPsec nie wspiera uwierzytelniania użytkowników.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest 802.11 WEP i jakie ma wady?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "802.11 WEP (Wired Equivalent Privacy) to standard bezpieczeństwa dla sieci bezprzewodowych.",
        "correct": 1
      },
      {
        "text": "WEP używa szyfrowania RC4 z kluczem o długości 40 lub 104 bitów.",
        "correct": 1
      },
      {
        "text": "Wady WEP to słaba odporność na ataki kryptoanalityczne oraz łatwość złamania WEP za pomocą dostępnych narzędzi.",
        "correct": 1
      },
      {
        "text": "WEP używa dynamicznej dystrybucji kluczy, co zwiększa jego bezpieczeństwo.",
        "correct": 0
      },
      {
        "text": "WEP jest obecnie uważany za bezpieczny i szeroko stosowany w nowych sieciach bezprzewodowych.",
        "correct": 0
      },
      {
        "text": "WEP nie wymaga żadnego klucza do szyfrowania danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest Digital Rights Management (DRM) i jakie ma zastosowania?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "DRM (Digital Rights Management) to technologie i metody służące do zarządzania prawami dostępu do treści cyfrowych.",
        "correct": 1
      },
      {
        "text": "DRM zapewnia kontrolę nad tym, kto może korzystać z danej treści i w jaki sposób.",
        "correct": 1
      },
      {
        "text": "Zastosowania DRM obejmują ochronę treści multimedialnych, zarządzanie dostępem do oprogramowania oraz kontrolę kopiowania i dystrybucji treści cyfrowych.",
        "correct": 1
      },
      {
        "text": "DRM jest używany głównie do szyfrowania sieci bezprzewodowych.",
        "correct": 0
      },
      {
        "text": "DRM nie wpływa na dystrybucję oprogramowania.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest steganografia i jak różni się od kryptografii?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Steganografia to technika ukrywania faktu istnienia wiadomości poprzez wprowadzenie jej w nośnik (np. obrazy, dźwięki).",
        "correct": 1
      },
      {
        "text": "Celem steganografii jest, aby odbiorca nie wiedział o istnieniu ukrytej wiadomości.",
        "correct": 1
      },
      {
        "text": "Kryptografia to sztuka utajniania treści wiadomości, aby była ona niezrozumiała dla niepowołanych odbiorców.",
        "correct": 1
      },
      {
        "text": "Steganografia wymaga użycia klucza do odszyfrowania wiadomości.",
        "correct": 0
      },
      {
        "text": "Kryptografia ukrywa fakt istnienia wiadomości, podczas gdy steganografia ukrywa treść.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest niezaprzeczalność w kontekście podpisów cyfrowych?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Niezaprzeczalność oznacza, że nadawca (np. Bob) nie może zaprzeczyć, że podpisał wiadomość.",
        "correct": 1
      },
      {
        "text": "Niezaprzeczalność jest ważna w transakcjach elektronicznych i dowodach w sądzie.",
        "correct": 1
      },
      {
        "text": "Niezaprzeczalność zapewnia wiarygodność i odpowiedzialność nadawcy za przesłane informacje.",
        "correct": 1
      },
      {
        "text": "Niezaprzeczalność umożliwia dowolnemu użytkownikowi modyfikację podpisanych dokumentów.",
        "correct": 0
      },
      {
        "text": "Niezaprzeczalność oznacza, że podpis cyfrowy można łatwo skopiować.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety stosowania funkcji haszujących w kryptografii?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Efektywność obliczeniowa – szybkie przetwarzanie danych.",
        "correct": 1
      },
      {
        "text": "Umożliwienie tworzenia podpisów cyfrowych.",
        "correct": 1
      },
      {
        "text": "Zapewnienie integralności danych poprzez porównanie skrótów.",
        "correct": 1
      },
      {
        "text": "Trudność w odtworzeniu oryginalnej wiadomości z jej skrótu.",
        "correct": 1
      },
      {
        "text": "Funkcje haszujące umożliwiają szyfrowanie całych wiadomości.",
        "correct": 0
      },
      {
        "text": "Funkcje haszujące są używane tylko do tworzenia kopii zapasowych danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zabezpieczenia przed atakami kryptograficznymi?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Używanie silnych, aktualnych algorytmów kryptograficznych (np. AES, RSA z odpowiednio długimi kluczami).",
        "correct": 1
      },
      {
        "text": "Regularna aktualizacja i zarządzanie kluczami kryptograficznymi.",
        "correct": 1
      },
      {
        "text": "Implementacja mechanizmów wykrywania i reagowania na ataki (IDS/IPS).",
        "correct": 1
      },
      {
        "text": "Edukacja użytkowników na temat najlepszych praktyk bezpieczeństwa.",
        "correct": 1
      },
      {
        "text": "Stosowanie jednowarstwowego podejścia do zabezpieczeń (single layer security).",
        "correct": 0
      },
      {
        "text": "Używanie tylko algorytmów symetrycznych do wszystkich zastosowań.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest \"Web of Trust\" w kontekście PGP?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Web of Trust to model zaufania używany w PGP, oparty na wzajemnym podpisywaniu kluczy publicznych przez użytkowników.",
        "correct": 1
      },
      {
        "text": "Web of Trust umożliwia tworzenie sieci zaufania bez centralnego urzędu certyfikacji.",
        "correct": 1
      },
      {
        "text": "Użytkownicy sami weryfikują tożsamość innych użytkowników i podpisują ich klucze publiczne.",
        "correct": 1
      },
      {
        "text": "Web of Trust nie pozwala na budowanie zaufania w społeczności użytkowników PGP.",
        "correct": 0
      },
      {
        "text": "Web of Trust jest zastępowany przez centralne urzędy certyfikacji w PGP.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy funkcji haszującej SHA-256?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "SHA-256 (Secure Hash Algorithm 256-bit) jest częścią rodziny SHA-2.",
        "correct": 1
      },
      {
        "text": "SHA-256 oblicza 256-bitowy skrót wiadomości.",
        "correct": 1
      },
      {
        "text": "SHA-256 jest uznawany za bezpieczny i odporny na ataki kolizyjne.",
        "correct": 1
      },
      {
        "text": "SHA-256 jest szeroko stosowany w różnych protokołach bezpieczeństwa, takich jak TLS, SSL, Bitcoin.",
        "correct": 1
      },
      {
        "text": "SHA-256 jest mniej bezpieczny niż SHA-1.",
        "correct": 0
      },
      {
        "text": "SHA-256 nie jest używany w żadnych nowoczesnych aplikacjach bezpieczeństwa.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Czym jest niezaprzeczalność w kontekście podpisów cyfrowych i dlaczego jest ważna?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Niezaprzeczalność gwarantuje, że nadawca nie może zaprzeczyć podpisaniu wiadomości.",
        "correct": 1
      },
      {
        "text": "Niezaprzeczalność jest kluczowa w transakcjach elektronicznych i dowodach w sądzie.",
        "correct": 1
      },
      {
        "text": "Niezaprzeczalność zapewnia wiarygodność i odpowiedzialność nadawcy za przesłane informacje.",
        "correct": 1
      },
      {
        "text": "Niezaprzeczalność umożliwia dowolnemu użytkownikowi modyfikację podpisanych dokumentów.",
        "correct": 0
      },
      {
        "text": "Niezaprzeczalność oznacza, że podpis cyfrowy można łatwo skopiować.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne zalety stosowania funkcji haszujących w kryptografii?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Efektywność obliczeniowa – szybkie przetwarzanie danych.",
        "correct": 1
      },
      {
        "text": "Umożliwienie tworzenia podpisów cyfrowych.",
        "correct": 1
      },
      {
        "text": "Zapewnienie integralności danych poprzez porównanie skrótów.",
        "correct": 1
      },
      {
        "text": "Trudność w odtworzeniu oryginalnej wiadomości z jej skrótu.",
        "correct": 1
      },
      {
        "text": "Funkcje haszujące umożliwiają szyfrowanie całych wiadomości.",
        "correct": 0
      },
      {
        "text": "Funkcje haszujące są używane tylko do tworzenia kopii zapasowych danych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu uwierzytelnienia uwierz5.0 i jakie ma zabezpieczenia?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "Protokół uwierzytelnienia uwierz5.0 używa identyfikatora jednorazowego R.",
        "correct": 1
      },
      {
        "text": "Protokół wykorzystuje kryptografię klucza publicznego do zabezpieczenia identyfikatora.",
        "correct": 1
      },
      {
        "text": "Zabezpieczenia protokołu uwierzytelnienia uwierz5.0 umożliwiają potwierdzenie tożsamości bez wspólnego klucza symetrycznego.",
        "correct": 1
      },
      {
        "text": "Protokół chroni przed atakami pośrednika poprzez kryptografię asymetryczną.",
        "correct": 1
      },
      {
        "text": "Protokół uwierzytelnienia uwierz5.0 nie umożliwia weryfikacji autentyczności podpisu cyfrowego.",
        "correct": 0
      },
      {
        "text": "Protokół uwierzytelnienia uwierz5.0 używa tylko kluczy symetrycznych.",
        "correct": 0
      }
    ]
  },
  {
    "pytanie": "Jakie są główne cechy protokołu SSL/TLS w kontekście ochrony informacji?",
    "alreadyGenerated": false,
    "answers": [
      {
        "text": "SSL/TLS (Secure Sockets Layer / Transport Layer Security) to protokół zabezpieczający komunikację w sieciach komputerowych.",
        "correct": 1
      },
      {
        "text": "SSL/TLS używa kryptografii asymetrycznej do wymiany kluczy i kryptografii symetrycznej do szyfrowania danych.",
        "correct": 1
      },
      {
        "text": "SSL/TLS zapewnia poufność, integralność i uwierzytelnienie komunikacji.",
        "correct": 1
      },
      {
        "text": "SSL/TLS jest stosowany w protokołach HTTP (HTTPS), SMTP, FTP i innych.",
        "correct": 1
      },
      {
        "text": "SSL/TLS nie chroni przed atakami typu man-in-the-middle.",
        "correct": 0
      },
      {
        "text": "SSL/TLS jest używany tylko do szyfrowania wiadomości e-mail.",
        "correct": 0
      }
    ]
  }
]
  