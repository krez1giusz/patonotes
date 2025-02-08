const flash_cards = [
  {
    "pytanie": "Jakie są główne elementy warstwowego modelu protokołów sieciowych?",
    "odpowiedz": "Aplikacje\nTransportu\nSieci\nŁącza\nFizyczna"
  },
  {
    "pytanie": "Jakie są funkcje protokołu TCP według RFC 793?",
    "odpowiedz": "Niezawodny, uporządkowany strumień danych.\nKontrola przepływu: nadawca nie przeciąży odbiorcy.\nKontrola przeciążenia: nadawca \"zwalnia\" gdy w sieci wystąpi przeciążenie."
  },
  {
    "pytanie": "Jakie aplikacje korzystają z protokołu UDP?",
    "odpowiedz": "Audio/wideo (strumieniowe)\nTelekonferencje\nDNS\nTelefonia Internetowa"
  },
  {
    "pytanie": "Jakie są główne różnice między komutacją kanałów a komutacją pakietów?",
    "odpowiedz": "Komutacja kanałów rezerwuje kanał na całą rozmowę, gwarantując przepustowość, ale nie wykorzystuje zasobów efektywnie.\nKomutacja pakietów dzieli informacje na pakiety, które współdzielą zasoby sieci w miarę potrzeb, co zwiększa efektywność, ale może powodować opóźnienia i straty pakietów."
  },
  {
    "pytanie": "Jakie są cztery źródła opóźnień w sieciach z komutacją pakietów?",
    "odpowiedz": "Przetwarzanie w węzłach\nOczekiwanie w kolejce\nOpóźnienie transmisji\nOpóźnienie propagacji"
  },
  {
    "pytanie": "Co to jest sieć datagramowa?",
    "odpowiedz": "Sieć datagramowa to sieć, w której adres odbiorcy w pakiecie określa następny krok, a ścieżki mogą się zmieniać w trakcie sesji. Przykładem jest Internet."
  },
  {
    "pytanie": "Jakie są warstwy stosu protokołów TCP/IP?",
    "odpowiedz": "Warstwa aplikacji (HTTP, FTP, SMTP)\nWarstwa transportu (TCP, UDP)\nWarstwa sieci (IP, protokoły rutingu)\nWarstwa łącza (PPP, Ethernet)\nWarstwa fizyczna"
  },
  {
    "pytanie": "Jakie są główne zalety warstwowego modelu protokołów?",
    "odpowiedz": "Wyraźna struktura pozwala na identyfikację i ustalenie zależności składników systemu.\nModularyzacja ułatwia utrzymanie i aktualizację systemu.\nZmiana implementacji usług warstwy jest przezroczysta dla reszty systemu."
  },
  {
    "pytanie": "Jakie są podstawowe media przewodowe używane w sieciach komputerowych?",
    "odpowiedz": "Miedź, światłowód, koncentryczny kabel."
  },
  {
    "pytanie": "Jakie są rodzaje multipleksacji stosowane w komutacji kanałów?",
    "odpowiedz": "FDM (Frequency-Division Multiplexing)\nTDM (Time-Division Multiplexing)"
  },
  {
    "pytanie": "Czym jest opóźnienie propagacji i jak jest obliczane?",
    "odpowiedz": "Opóźnienie propagacji to czas, jaki sygnał potrzebuje, aby przebyć fizyczne łącze. Oblicza się je jako d/s, gdzie d to długość łącza, a s to prędkość propagacji w medium."
  },
  {
    "pytanie": "Jakie są główne elementy domowej sieci dostępowej?",
    "odpowiedz": "Modem ADSL (lub optyczny)\nRuter/ściana ogniowa/translacja adresów (NAT)\nEthernet\nBezprzewodowa stacja bazowa"
  },
  {
    "pytanie": "Jakie są główne rodzaje bezprzewodowych sieci dostępowych?",
    "odpowiedz": "Sieci lokalne (802.11b, 802.11g)\nDostęp bezprzewodowy o większym zasięgu przez operatorów telekomunikacyjnych (WAP/GPRS, UMTS)"
  },
  {
    "pytanie": "Co to jest NAT i gdzie jest stosowane?",
    "odpowiedz": "NAT (Network Address Translation) to metoda translacji adresów sieciowych używana w ruterach/ścianach ogniowych do udostępniania jednego publicznego adresu IP wielu urządzeniom w sieci lokalnej."
  },
  {
    "pytanie": "Jakie są główne funkcje protokołu HTTP?",
    "odpowiedz": "HTTP (HyperText Transfer Protocol) jest protokołem aplikacyjnym używanym do przesyłania dokumentów hipertekstowych (stron WWW) pomiędzy klientem a serwerem."
  },
  {
    "pytanie": "Kiedy został wdrożony protokół TCP/IP?",
    "odpowiedz": "Protokół TCP/IP został wdrożony w 1983 roku."
  },
  {
    "pytanie": "Jakie były kluczowe wydarzenia w historii Internetu w latach 1990-2000?",
    "odpowiedz": "ARPAnet wychodzi z użytku.\nNSF znosi ograniczenia na komercyjne wykorzystanie NSFnet (wychodzi z użytku w 1995).\nPowstanie WWW (World Wide Web) przez Berners-Lee.\nWprowadzenie przeglądarek takich jak Mosaic i Netscape.\nKomercjalizacja WWW.\nPojawienie się nowych aplikacji jak instant messaging, partnerskie dzielenie plików (np. Napster).\nZwiększenie znaczenia bezpieczeństwa sieci."
  },
  {
    "pytanie": "Jak działa model klient-serwer w kontekście brzegów sieci?",
    "odpowiedz": "W modelu klient-serwer klient żąda i otrzymuje usługi od zawsze dostępnego serwera, na przykład przeglądarka (klient) i serwer WWW."
  },
  {
    "pytanie": "Jakie są różnice między siecią datagramową a siecią z wirtualnymi kanałami?",
    "odpowiedz": "Sieć datagramowa umożliwia zmianę ścieżki pakietów w trakcie sesji, natomiast sieć z wirtualnymi kanałami ustala stałą ścieżkę przy tworzeniu kanału.\nW sieci z wirtualnymi kanałami rutery utrzymują stan dla każdego wirtualnego kanału."
  },
  {
    "pytanie": "Co to jest ALOHAnet i kiedy została stworzona?",
    "odpowiedz": "ALOHAnet to satelitarna sieć stworzona na Hawajach w 1970 roku, będąca jednym z wcześniejszych przykładów sieci opartych na komutacji pakietów."
  },
  {
    "pytanie": "Jakie są główne protokoły używane w warstwie łącza w stosie TCP/IP?",
    "odpowiedz": "PPP (Point-to-Point Protocol) i Ethernet."
  },
  {
    "pytanie": "Co to jest RFC i jaka jest jego rola w standardach internetowych?",
    "odpowiedz": "RFC (Request for Comments) to dokumenty publikowane przez IETF (Internet Engineering Task Force), które określają standardy i protokoły internetowe, takie jak HTTP (RFC 2616) czy TCP (RFC 793)."
  },
  {
    "pytanie": "Jak działa multipleksacja asynchroniczna w komutacji pakietów?",
    "odpowiedz": "W multipleksacji asynchronicznej pakiety od różnych użytkowników dzielą łącze bez ustalonego wzorca czasowego, co pozwala na dynamiczne wykorzystanie przepustowości w zależności od potrzeb."
  },
  {
    "pytanie": "Jakie są główne rodzaje kabli miedzianych używanych w sieciach lokalnych?",
    "odpowiedz": "Skrętka kategorii 3 (Kategoria 3): tradycyjne druty telefoniczne, Ethernet 10 Mb/s.\nSkrętka kategorii 5 (Kategoria 5 TP): Ethernet 100 Mb/s.\nRóżne rodzaje kabli: UTP, FTP, S-FTP, STP."
  },
  {
    "pytanie": "Jakie są główne zalety używania światłowodu w sieciach komputerowych?",
    "odpowiedz": "Wysoka szybkość transmisji (np. 5 Gb/s).\nMała stopa błędów.\nOdporność na zakłócenia.\nMożliwość stosowania wzmacniaczy daleko od siebie."
  },
  {
    "pytanie": "Co to jest traceroute i do czego służy?",
    "odpowiedz": "Traceroute to program służący do mierzenia opóźnień pakietów na ścieżce od źródła do celu przez Internet, pokazujący kolejne rutery i czas odpowiedzi dla każdego z nich."
  },
  {
    "pytanie": "Jakie są główne cele komunikacji bezpołączeniowej w sieciach komputerowych?",
    "odpowiedz": "Komunikacja hostów bez ustanawiania stałego połączenia, co pozwala na szybsze przesyłanie danych, ale bez gwarancji niezawodności."
  },
  {
    "pytanie": "Jakie są główne elementy sieci szkieletowej dostawców poziomu 1?",
    "odpowiedz": "Dostawcy poziomu 1 (np. TP S.A., Sprint, AT&T) łączą się ze sobą prywatnie lub poprzez publiczne punkty dostępu do sieci (NAPs).\nSieć szkieletowa jest zgrubnie hierarchiczna, z dostawcami poziomu 1 w centrum."
  },
  {
    "pytanie": "Jakie są funkcje warstwy prezentacji w modelu OSI?",
    "odpowiedz": "Obsługuje konwersje danych dla aplikacji, takie jak szyfrowanie, adaptacja zawartości, tłumaczenie, zmiana kodowania."
  },
  {
    "pytanie": "Czym jest Erlang i jak jest stosowany w kontekście oczekiwania w kolejce?",
    "odpowiedz": "Erlang to jednostka intensywności ruchu w sieciach, obliczana jako La/R (gdzie L to długość pakietu, a a to średnia szybkość przybywania pakietów). Używana do oceny średniego oczekiwania w kolejce."
  },
  {
    "pytanie": "Jakie są główne aplikacje korzystające z protokołu TCP?",
    "odpowiedz": "HTTP (WWW)\nFTP (transfer plików)\nTelnet (zdalny login)\nSMTP (poczta elektroniczna)"
  },
  {
    "pytanie": "Jakie są główne typy sieci dostępowych?",
    "odpowiedz": "Domowe sieci dostępowe\nInstytucjonalne sieci dostępowe (szkoła, firma)\nMobilne sieci dostępowe"
  },
  {
    "pytanie": "Jakie są główne elementy sieci lokalnej (LAN) w instytucjach?",
    "odpowiedz": "Systemy końcowe połączone z ruterem.\nEthernet jako główna technologia łącza.\nMożliwość stosowania dedykowanych lub współdzielonych łączy."
  },
  {
    "pytanie": "Jakie są główne rodzaje łącz radiowych stosowanych w sieciach bezprzewodowych?",
    "odpowiedz": "Mikrofale (np. do 45 Mb/s)\nSieci lokalne LAN (np. 2 Mb/s, 11 Mb/s, 54 Mb/s)\nSieci rozległe (komórkowe, np. 3G: około 100 kb/s)\nSatelitarne (kanały do 50 Mb/s, opóźnienie około 270 ms)"
  },
  {
    "pytanie": "Co to jest HFC w kontekście modemu optycznego?",
    "odpowiedz": "HFC (Hybrid Fiber Coax) to połączenie sieci miedzianej i światłowodowej, które łączy domy z ruterem DI, umożliwiając asymetryczne prędkości transmisji danych."
  },
  {
    "pytanie": "Jakie są główne warstwy modelu OSI, które nie występują w stosie protokołów TCP/IP?",
    "odpowiedz": "Warstwa prezentacji\nWarstwa sesji"
  },
  {
    "pytanie": "Jakie są główne funkcje protokołu DNS?",
    "odpowiedz": "Protokół DNS (Domain Name System) służy do tłumaczenia nazw domenowych na adresy IP."
  },
  {
    "pytanie": "Jakie były kluczowe zasady intersieci Cerfa i Kahna?",
    "odpowiedz": "Minimalizm i autonomia: wewnętrzne zmiany nie są potrzebne, żeby łączyć sieci.\nModel usług best-effort.\nRutery bezstanowe.\nRozproszone sterowanie."
  },
  {
    "pytanie": "Jakie są główne źródła strat pakietów w sieciach komputerowych?",
    "odpowiedz": "Straty pakietów występują, gdy pakiet przybywa do pełnego bufora w ruterze i jest wyrzucany."
  },
  {
    "pytanie": "Jakie są zalety komutacji pakietów?",
    "odpowiedz": "Współdzielenie zasobów.\nProstsza architektura bez konieczności tworzenia kanałów.\nZwiększenie liczby użytkowników sieci."
  },
  {
    "pytanie": "Jakie są główne wyzwania związane z komutacją pakietów?",
    "odpowiedz": "Opóźnienia i straty pakietów przy dużym przeciążeniu sieci.\nPotrzeba protokołów do zapewnienia niezawodnej komunikacji danych."
  },
  {
    "pytanie": "Co to jest model klient-serwer i jakie ma zastosowania w sieciach komputerowych?",
    "odpowiedz": "Model klient-serwer to architektura, w której klient (np. przeglądarka) żąda usług od serwera (np. serwera WWW), który je dostarcza. Stosowany jest w aplikacjach takich jak WWW, email."
  },
  {
    "pytanie": "Jakie są główne elementy infrastruktury komunikacyjnej w sieciach komputerowych?",
    "odpowiedz": "Aplikacje i hosty (brzeg sieci)\nRutery i sieć szkieletowa\nSieci dostępowe i media fizyczne"
  },
  {
    "pytanie": "Jakie są główne zadania ruterów w sieci Internet?",
    "odpowiedz": "Rutery pośredniczą w przesyłaniu pakietów danych od nadawcy do odbiorcy poprzez wybór najefektywniejszych ścieżek w sieci, zarządzając ruchem i minimalizując opóźnienia."
  },
  {
    "pytanie": "Jakie są główne typy protokołów transportowych w sieciach komputerowych?",
    "odpowiedz": "TCP (Transmission Control Protocol)\nUDP (User Datagram Protocol)"
  },
  {
    "pytanie": "Jakie są główne różnice między Ethernet a WiFi?",
    "odpowiedz": "Ethernet jest przewodowym standardem sieci lokalnej (LAN), oferującym wyższą przepustowość i stabilność.\nWiFi jest bezprzewodowym standardem sieci lokalnej, zapewniającym większą mobilność, ale niższą przepustowość i podatność na zakłócenia."
  },
  {
    "pytanie": "Co to jest przełącznik (switch) w sieciach Ethernet?",
    "odpowiedz": "Przełącznik (switch) to urządzenie sieciowe, które łączy urządzenia w sieci lokalnej, przesyłając pakiety tylko do docelowego urządzenia na podstawie adresów MAC."
  },
  {
    "pytanie": "Jakie są główne zalety używania światłowodu w porównaniu do kabli miedzianych?",
    "odpowiedz": "Światłowód oferuje wyższą szybkość transmisji, mniejszą stopę błędów, większą odporność na zakłócenia oraz możliwość przesyłania danych na większe odległości bez utraty jakości sygnału."
  },
  {
    "pytanie": "Co to jest ADSL i jakie są jego główne cechy?",
    "odpowiedz": "ADSL (Asymmetric Digital Subscriber Line) to technologia szerokopasmowego dostępu do Internetu, oferująca asymetryczną przepustowość – wyższe prędkości pobierania danych (z sieci) niż wysyłania."
  },
  {
    "pytanie": "Jakie są główne elementy struktury Internetu na poziomie dostawców?",
    "odpowiedz": "Dostawcy poziomu 1: globalni dostawcy sieci szkieletowej.\nDostawcy poziomu 2: regionalni dostawcy, klienci dostawców poziomu 1.\nDostawcy poziomu 3 i lokalni DI: sieci dostępowe, klienci wyższych poziomów."
  },
  {
    "pytanie": "Jakie są główne funkcje protokołu IP w stosie TCP/IP?",
    "odpowiedz": "Protokół IP (Internet Protocol) odpowiada za ruting pakietów od nadawcy do odbiorcy w sieci, umożliwiając komunikację między różnymi sieciami."
  },
  {
    "pytanie": "Jakie są główne źródła opóźnień w sieciach z komutacją pakietów?",
    "odpowiedz": "Przetwarzanie w węzłach\nOczekiwanie w kolejce\nOpóźnienie transmisji\nOpóźnienie propagacji"
  },
  {
    "pytanie": "Co to jest HFC i gdzie jest stosowane?",
    "odpowiedz": "HFC (Hybrid Fiber Coax) to rodzaj sieci optycznej łączącej włókno światłowodowe z przewodami koncentrycznymi miedzi, stosowany głównie w sieciach kablowych do dostarczania usług internetowych i telewizyjnych."
  },
  {
    "pytanie": "Jakie są główne zalety komutacji pakietów?",
    "odpowiedz": "Efektywne wykorzystanie zasobów sieci poprzez współdzielenie przepustowości.\nMożliwość dynamicznego dostosowania się do zmieniającego się ruchu sieciowego.\nZwiększenie liczby użytkowników sieci."
  },
  {
    "pytanie": "Jak działa model klient-serwer w sieci komputerowej?",
    "odpowiedz": "Klient wysyła żądanie do serwera, który przetwarza żądanie i zwraca odpowiedź. Przykłady to przeglądarka internetowa (klient) i serwer WWW."
  },
  {
    "pytanie": "Jakie są główne funkcje warstwy transportu w modelu TCP/IP?",
    "odpowiedz": "Zapewnienie niezawodnej transmisji danych (TCP).\nUmożliwienie szybkiej transmisji danych bez gwarancji niezawodności (UDP).\nKontrola przepływu i przeciążenia."
  },
  {
    "pytanie": "Co to jest NAT i jakie problemy rozwiązuje?",
    "odpowiedz": "NAT (Network Address Translation) umożliwia wielu urządzeniom w sieci lokalnej korzystanie z jednego publicznego adresu IP, co pomaga w oszczędzaniu adresów IP i zwiększa bezpieczeństwo sieci."
  },
  {
    "pytanie": "Jakie były kluczowe wydarzenia w historii Internetu w latach 1960-1980?",
    "odpowiedz": "1961: Kleinrock – teoria kolejek.\n1964: Baran – komutacja pakietów w sieciach wojskowych.\n1967: Powstanie ARPAnet.\n1969: Rozpoczęcie działania pierwszego węzła ARPAnet.\n1972: Publiczna demonstracja ARPAnet, pierwszy protokół NCP, pierwszy program e-mail.\n1973: Metcalfe proponuje Ethernet.\n1974: Cerf i Kahn – architektura dla intersieci.\n1979: ARPAnet ma 200 węzłów."
  },
  {
    "pytanie": "Jakie są główne funkcje rutera w sieci Internet?",
    "odpowiedz": "Rutery przekazują pakiety danych od nadawcy do odbiorcy poprzez wybór najefektywniejszych ścieżek w sieci, zarządzając ruchem i minimalizując opóźnienia."
  },
  {
    "pytanie": "Jakie są główne typy mediów bezprzewodowych używanych w sieciach komputerowych?",
    "odpowiedz": "Radio\nMikrofale\nSieci komórkowe (3G, UMTS)\nSatelitarne"
  },
  {
    "pytanie": "Jakie są główne protokoły używane w warstwie aplikacji w stosie TCP/IP?",
    "odpowiedz": "HTTP, FTP, SMTP, Telnet."
  },
  {
    "pytanie": "Jakie są główne zalety stosowania warstwowego modelu sieciowego?",
    "odpowiedz": "Ułatwia zarządzanie i rozumienie złożonych systemów sieciowych.\nUmożliwia modularność, co ułatwia aktualizacje i utrzymanie.\nZapewnia standaryzację interfejsów między warstwami."
  },
  {
    "pytanie": "Co to jest opóźnienie transmisji i jak jest obliczane?",
    "odpowiedz": "Opóźnienie transmisji to czas potrzebny na wysłanie bitów pakietu na łączu, obliczany jako L/R, gdzie L to długość pakietu w bitach, a R to przepustowość łącza w bitach na sekundę."
  },
  {
    "pytanie": "Jakie są główne elementy sieci dostępowej w instytucjach (firma, uczelnia)?",
    "odpowiedz": "Sieć lokalna (LAN) łącząca systemy końcowe z ruterem.\nEthernet jako główna technologia łącza.\nMożliwość stosowania dedykowanych lub współdzielonych łączy."
  },
  {
    "pytanie": "Jakie są główne różnice między FDM a TDM?",
    "odpowiedz": "FDM (Frequency-Division Multiplexing) dzieli przepustowość łącza według częstotliwości.\nTDM (Time-Division Multiplexing) dzieli przepustowość łącza według czasu."
  },
  {
    "pytanie": "Jakie są główne cechy sieci Ethernet?",
    "odpowiedz": "Przewodowa technologia sieci lokalnej.\nObsługuje przepustowości 10 Mb/s, 100 Mb/s, Gigabit Ethernet.\nMoże korzystać z przełączników (switch) do zarządzania ruchem."
  },
  {
    "pytanie": "Co to jest ALG (Application Layer Gateway) i gdzie jest stosowane?",
    "odpowiedz": "ALG to urządzenie lub oprogramowanie działające na warstwie aplikacji, które pomaga w zarządzaniu i przetwarzaniu specyficznych protokołów aplikacyjnych w sieci, często używane w zaporach ogniowych."
  },
  {
    "pytanie": "Jakie są główne funkcje warstwy sieci w modelu TCP/IP?",
    "odpowiedz": "Warstwa sieci odpowiada za ruting pakietów od źródła do celu, zarządzanie adresami IP oraz kontrolę trasowania danych przez różne sieci."
  },
  {
    "pytanie": "Jakie są główne funkcje warstwy fizycznej w modelu TCP/IP?",
    "odpowiedz": "Warstwa fizyczna odpowiada za transmisję bitów \"w kablu\", definiuje fizyczne medium transmisyjne, takie jak kable miedziane, światłowody czy sygnały radiowe."
  },
  {
    "pytanie": "Jakie są główne typy sygnałów propagowanych w mediach bezprzewodowych?",
    "odpowiedz": "Sygnały radiowe, mikrofalowe, optyczne (w przypadku sieci satelitarnych)."
  },
  {
    "pytanie": "Co to jest RTT (Round-Trip Time) i jak wpływa na komunikację w sieci?",
    "odpowiedz": "RTT to czas potrzebny na wysłanie pakietu z jednego punktu do drugiego i otrzymanie odpowiedzi. Wpływa na opóźnienia w komunikacji, szczególnie w protokołach wymagających potwierdzeń."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu SMTP?",
    "odpowiedz": "SMTP (Simple Mail Transfer Protocol) jest protokołem używanym do przesyłania wiadomości e-mail pomiędzy serwerami pocztowymi."
  },
  {
    "pytanie": "Jakie są główne różnice między IPv4 a IPv6?",
    "odpowiedz": "IPv4 używa 32-bitowych adresów, co pozwala na około 4,3 miliarda unikalnych adresów.\nIPv6 używa 128-bitowych adresów, umożliwiając znacznie większą liczbę unikalnych adresów.\nIPv6 wprowadza ulepszenia w zakresie routingu, autokonfiguracji i bezpieczeństwa."
  },
  {
    "pytanie": "Jakie są główne funkcje protokołu PPP?",
    "odpowiedz": "PPP (Point-to-Point Protocol) umożliwia transmisję danych pomiędzy dwoma punktami, oferuje autoryzację użytkowników, kompresję danych i wielokrotne protokoły warstwy wyższej."
  },
  {
    "pytanie": "Co to jest DHCP i jakie ma zastosowanie?",
    "odpowiedz": "DHCP (Dynamic Host Configuration Protocol) automatycznie przypisuje adresy IP oraz inne parametry konfiguracyjne urządzeniom w sieci lokalnej, ułatwiając zarządzanie adresacją."
  },
  {
    "pytanie": "Jakie są główne zadania protokołu ARP?",
    "odpowiedz": "ARP (Address Resolution Protocol) tłumaczy adresy IP na odpowiadające im adresy MAC w sieci lokalnej."
  },
  {
    "pytanie": "Co to jest VLAN i jakie są jego zalety?",
    "odpowiedz": "VLAN (Virtual Local Area Network) pozwala na segmentację sieci fizycznej na logiczne sieci, zwiększając bezpieczeństwo, efektywność zarządzania oraz redukując ruch rozgłoszeniowy."
  },
  {
    "pytanie": "Jakie są główne zalety stosowania IPv6?",
    "odpowiedz": "Znacznie większa pula adresów.\nUproszczony nagłówek pakietu.\nWbudowane mechanizmy bezpieczeństwa.\nUlepszone wsparcie dla mobilności i autokonfiguracji."
  },
  {
    "pytanie": "Jakie są główne cele komunikacji w warstwie aplikacji?",
    "odpowiedz": "Obsługa protokołów aplikacyjnych.\nUdostępnianie usług sieciowych aplikacjom użytkowników.\nZapewnienie interfejsu dla aplikacji do korzystania z usług sieciowych."
  },
  {
    "pytanie": "Jakie są cele warstwy aplikacji w modelu OSI?",
    "odpowiedz": "Koncepcyjne i implementacyjne zagadnienia protokołów warstwy aplikacji\nModele usług warstwy transportu\nModel klient-serwer\nModel partnerski (peer-to-peer)\nPoznawanie popularnych protokołów warstwy aplikacji (HTTP, FTP, SMTP/POP3/IMAP, DNS)\nProgramowanie aplikacji sieciowych, w tym API gniazd"
  },
  {
    "pytanie": "Jakie są główne zagadnienia poruszane w mapie wykładu dotyczącej warstwy aplikacji?",
    "odpowiedz": "2.1 Zasady budowy protokołów warstwy aplikacji\n2.2 WWW i HTTP\n2.3 DNS\n2.4 Programowanie przy użyciu gniazd TCP\n2.5 Programowanie przy użyciu gniazd UDP\n2.6 Poczta elektroniczna (SMTP, POP3, IMAP)\n2.7 FTP\n2.8 Dystrybucja zawartości (schowki internetowe, sieci dystrybucji zawartości)\n2.9 Dzielenie plików P2P"
  },
  {
    "pytanie": "Jakie są podstawowe składniki procesu komunikującego się przez sieć?",
    "odpowiedz": "Program działający na hoście\nKomunikacja międzyprocesowa na jednym hoście\nProcesy na różnych hostach komunikujące się protokołem warstwy aplikacji\nAgent (user agent) komunikujący się z użytkownikiem i siecią (np. przeglądarka WWW, program pocztowy, odtwarzacz multimediów)"
  },
  {
    "pytanie": "Czym są protokoły warstwy aplikacji i jakie mają funkcje?",
    "odpowiedz": "\"Kawałek\" aplikacji\nDefiniują komunikaty i akcje aplikacji\nUżywają usług komunikacyjnych niższej warstwy (TCP, UDP)"
  },
  {
    "pytanie": "Jakie są różnice między protokołami publicznymi a prywatnymi?",
    "odpowiedz": "Protokoły publiczne są definiowane w dokumentach Request for Comments (RFC) i umożliwiają współpracę różnych systemów (np. HTTP, SMTP)\nProtokoły prywatne są stosowane w określonych aplikacjach, często o charakterze zamkniętym (np. KaZaA)"
  },
  {
    "pytanie": "Jak działa model klient-serwer w kontekście aplikacji sieciowych?",
    "odpowiedz": "Klient rozpoczyna komunikację z serwerem, zwykle prosząc o usługę serwera\nTypowa aplikacja sieciowa ma dwie części: klienta i serwera\nSerwer udostępnia żądaną usługę klientowi (np. serwer WWW wysyła żądaną stronę, serwer poczty dostarcza pocztę)"
  },
  {
    "pytanie": "Jakie są rozwinięcia modelu klient-serwer?",
    "odpowiedz": "Dodatkowe etapy pośrednie: płaszczyzny (multi-tier architecture), gdzie aplikacja jest podzielona na kilka warstw, takich jak serwer aplikacyjny, serwer bazy danych, serwer pośrednik"
  },
  {
    "pytanie": "Jakie są główne funkcje gniazd w programowaniu aplikacji sieciowych?",
    "odpowiedz": "Gniazdo jest interfejsem, przez który proces aplikacji może wysyłać i odbierać komunikaty od/do innego procesu aplikacji\nGniazda są tworzone, używane i zwalniane przez aplikacje\nW modelu klient-serwer, gniazda umożliwiają komunikację przez protokoły transportowe, takie jak TCP czy UDP"
  },
  {
    "pytanie": "Jakie elementy składają się na adresowanie procesów w sieciach komputerowych?",
    "odpowiedz": "Każdy host ma unikatowy 32-bitowy adres IP\nAdres IP hosta nie wystarcza do identyfikacji procesu, ponieważ wiele procesów może działać na jednym hoście\nIdentyfikator procesu zawiera adres IP oraz numer portu związany z procesem na hoście"
  },
  {
    "pytanie": "Jakie są wymagania aplikacji dotyczące transportu danych w sieciach komputerowych?",
    "odpowiedz": "Straty: niektóre aplikacje tolerują pewną ilość strat (np. audio), inne wymagają 100% niezawodności (np. transfer plików, telnet)\nOpóźnienie: niektóre aplikacje wymagają niskich opóźnień (np. telefonia internetowa, gry interaktywne)\nPrzepustowość: niektóre aplikacje (np. audio/wideo) wymagają minimalnej przepustowości, inne mogą korzystać z elastycznej przepustowości"
  },
  {
    "pytanie": "Jakie są główne cechy usługi TCP?",
    "odpowiedz": "Połączeniowa: wymaga inicjalizacji połączenia pomiędzy procesami\nNiezawodna komunikacja pomiędzy procesami\nKontrola przepływu: nadawca nie przeciąży odbiorcy\nKontrola przeciążenia: nadawca zwolni, jeśli sieć zostanie przeciążona\nNie udostępnia informacji o czasie ani gwarancji minimalnej przepustowości"
  },
  {
    "pytanie": "Jakie są cechy usługi UDP?",
    "odpowiedz": "Zawodna komunikacja pomiędzy procesami\nNie udostępnia: tworzenia połączenia, niezawodności, kontroli przepływu, kontroli przeciążenia, informacji o czasie ani gwarancji przepustowości"
  },
  {
    "pytanie": "Dlaczego istnieje usługa UDP mimo jej zawodności?",
    "odpowiedz": "UDP jest użyteczne dla aplikacji, które tolerują pewne straty pakietów i wymagają szybkiej transmisji danych bez dodatkowych opóźnień związanych z nawiązywaniem połączenia i kontrolą przepływu, np. dla aplikacji audio/wideo, telekonferencji"
  },
  {
    "pytanie": "Jakie aplikacje internetowe korzystają z protokołów warstw aplikacji i transportu?",
    "odpowiedz": "E-mail (SMTP, POP3, IMAP)\nWWW (HTTP)\nDzielenie plików P2P\nKomunikatory\nStreaming audio/wideo\nTelefonia internetowa"
  },
  {
    "pytanie": "Jakie są główne elementy struktury WWW i HTTP?",
    "odpowiedz": "Strona WWW składa się z bazowego pliku HTML oraz obiektów (pliki HTML, obrazy JPEG, aplety Java, pliki audio)\nKażdy obiekt posiada adres URL (Uniform Resource Locator)\nHTTP jest protokołem warstwy aplikacji używanym w modelu klient-serwer do przesyłania obiektów między klientem a serwerem"
  },
  {
    "pytanie": "Jakie są główne różnice między HTTP 1.0 a HTTP 1.1?",
    "odpowiedz": "HTTP 1.0 używa nietrwałego połączenia TCP, gdzie każde żądanie wymaga nowego połączenia\nHTTP 1.1 domyślnie używa trwałego połączenia TCP, umożliwiając przesyłanie wielu obiektów przez jedno połączenie, co zmniejsza liczbę RTT potrzebnych do pobrania strony"
  },
  {
    "pytanie": "Co to jest RTT i jak wpływa na czas obsługi w komunikacji HTTP?",
    "odpowiedz": "RTT (Round-Trip Time) to czas potrzebny na przesłanie małego pakietu od nadawcy do odbiorcy i z powrotem\nCzas obsługi w komunikacji HTTP jest zdefiniowany jako 2 RTT plus czas transmisji pliku (2 RTT + czas transmisji)"
  },
  {
    "pytanie": "Jakie są główne metody HTTP/1.0 i HTTP/1.1?",
    "odpowiedz": "HTTP/1.0: GET, POST, HEAD\nHTTP/1.1: GET, POST, HEAD, PUT, DELETE"
  },
  {
    "pytanie": "Jak wygląda ogólny format komunikatu żądania HTTP?",
    "odpowiedz": "Metoda sp URL sp wersja CR LF\nNazwa nagłówka : wartość CR LF\nNazwa nagłówka : wartość CR LF\n...\nCR LF\nDane żądania"
  },
  {
    "pytanie": "Jak działa interfejs CGI w kontekście WWW?",
    "odpowiedz": "Strony WWW często zawierają formularze\nDane z formularzy są przekazywane przez serwer WWW do skryptów\nMetoda POST przesyła zawartość formularza w danych żądania\nKodowanie w URL używa metody GET, gdzie zawartość formularza jest kodowana w adresie URL żądania"
  },
  {
    "pytanie": "Jakie są najczęściej używane metody HTTP/1.0?",
    "odpowiedz": "GET: prosi serwer o posłanie odpowiedzi bez żądanego obiektu (danych)\nPOST: wysyła plik w danych żądania, który zostanie umieszczony pod adresem URL (ścieżką)\nHEAD: prosi serwer o posłanie odpowiedzi bez żądanego obiektu (danych)"
  },
  {
    "pytanie": "Jakie są główne różnice między metodami GET a POST w HTTP?",
    "odpowiedz": "GET przesyła dane w adresie URL żądania, co jest mniej bezpieczne i ma ograniczenia długości danych\nPOST przesyła dane w ciele żądania, co jest bardziej bezpieczne i umożliwia przesyłanie większych ilości danych"
  },
  {
    "pytanie": "Jakie są główne cechy komunikatu odpowiedzi HTTP?",
    "odpowiedz": "Pierwsza linia zawiera linię statusu (kod statusu i opis)\nLinie nagłówków zawierają informacje takie jak Connection, Date, Server, Content-Length, Content-Type\nDane odpowiedzi zawierają żądany obiekt (np. plik HTML)"
  },
  {
    "pytanie": "Jakie są kody statusu odpowiedzi HTTP i co oznaczają?",
    "odpowiedz": "200 OK: żądanie pomyślnie obsłużone, żądany obiekt jest w danych odpowiedzi\n301 Moved Permanently: żądany obiekt przeniesiony, nowy adres w nagłówku (Location:)\n400 Bad Request: komunikat żądania nie został zrozumiany przez serwer (błąd składni)\n404 Not Found: żądanego obiektu nie ma na serwerze\n505 HTTP Version Not Supported: wersja HTTP nie jest obsługiwana przez serwer"
  },
  {
    "pytanie": "Jakie są główne składniki procesu wysyłania poczty elektronicznej przez SMTP?",
    "odpowiedz": "Agenci użytkownika (np. programy pocztowe: Eudora, Outlook, etc.)\nSerwery poczty\nProtokół SMTP do wysyłania poczty między serwerami pocztowymi\nPrzykładowa interakcja: klient SMTP wysyła komunikaty HELO, MAIL FROM, RCPT TO, DATA, QUIT do serwera SMTP"
  },
  {
    "pytanie": "Jakie są główne funkcje serwerów poczty w systemie poczty elektronicznej?",
    "odpowiedz": "Skrzynka zawiera wiadomości przychodzące od użytkowników\nKolejka wiadomości zawiera wiadomości do wysłania\nProtokół SMTP wysyła pocztę między serwerami pocztowymi w modelu partnerskim (peer-to-peer)"
  },
  {
    "pytanie": "Jak działa protokół POP3 i jakie są jego główne funkcje?",
    "odpowiedz": "POP3 umożliwia pobieranie poczty z serwera poczty\nEtapy: uwierzytelnienie (polecenia USER i PASS), transakcja (polecenia LIST, RETR, DELE, QUIT)\nTryby: \"pobierz i usuń\", \"pobierz i zostaw\"\nPOP3 jest bezstanowy pomiędzy sesjami"
  },
  {
    "pytanie": "Jak działa protokół IMAP i jakie ma zalety w porównaniu do POP3?",
    "odpowiedz": "IMAP pozwala na synchronizację lokalnej skrzynki pocztowej z serwerem\nUmożliwia organizowanie poczty w foldery\nIMAP zachowuje stan użytkownika pomiędzy sesjami (np. nazwy folderów i przyporządkowanie listów do folderów)"
  },
  {
    "pytanie": "Jakie są główne elementy protokołu SMTP według RFC 2821?",
    "odpowiedz": "Używa TCP do niezawodnej komunikacji poczty między serwerami na porcie 25\nKomunikacja odbywa się w trzech etapach: inicjalizacja (powitanie), wymiana komunikatów (polecenia i odpowiedzi), zakończenie\nInterakcja typu \"polecenie/odpowiedź\", komunikaty muszą być kodowane w 7-bitowym ASCII"
  },
  {
    "pytanie": "Jakie są główne składniki wiadomości e-mail zgodnie ze standardem RFC 822?",
    "odpowiedz": "Linie nagłówków (np. To:, From:, Subject:)\nDane wiadomości (tekst, tylko znaki ASCII)"
  },
  {
    "pytanie": "Co to jest MIME i jakie rozszerzenia wprowadza dla wiadomości e-mail?",
    "odpowiedz": "MIME (Multipurpose Internet Mail Extensions) rozszerza standard RFC 822 o obsługę multimediów\nDodaje dodatkowe linie nagłówka określające typ MIME, sposób kodowania danych (np. base64)\nPozwala na przesyłanie różnych typów danych multimedialnych, takich jak obrazy, dźwięk, wideo oraz dane aplikacji"
  },
  {
    "pytanie": "Jakie są główne typy danych obsługiwanych przez MIME?",
    "odpowiedz": "Tekst (np. plain, html)\nObraz (np. jpeg, gif)\nDźwięk (np. basic, 32kadpcm)\nWideo (np. mpeg, quicktime)\nDane aplikacji (np. msword, octet-stream)"
  },
  {
    "pytanie": "Jakie są główne cechy typów multipart w MIME?",
    "odpowiedz": "Pozwalają na załączanie wielu obiektów w jednej wiadomości e-mail\nKażdy załącznik jest oddzielony boundary, określonym w nagłówku Content-Type: multipart/mixed; boundary=Zalacznik\nUmożliwia przesyłanie tekstu oraz multimediów w jednej wiadomości"
  },
  {
    "pytanie": "Jakie są główne składniki poczty elektronicznej?",
    "odpowiedz": "Agenci użytkownika (np. programy pocztowe)\nSerwery poczty\nProtokół SMTP do przesyłania poczty między serwerami pocztowymi"
  },
  {
    "pytanie": "Jakie są główne cechy trwałego HTTP?",
    "odpowiedz": "Serwer zostawia otwarte połączenie po wysłaniu odpowiedzi\nKolejne komunikaty HTTP między tym samym klientem i serwerem są przesyłane na tym samym połączeniu TCP\nW przypadku grupowych żądań w HTTP/1.1, tylko jeden RTT jest potrzebny dla wszystkich żądanych obiektów"
  },
  {
    "pytanie": "Jak działa interakcja klienta SMTP z serwerem SMTP w scenariuszu wysyłania poczty?",
    "odpowiedz": "Klient SMTP (agent użytkownika) wysyła komunikaty HELO, MAIL FROM, RCPT TO, DATA, QUIT do serwera SMTP\nSerwer SMTP odpowiada odpowiednimi kodami statusu\nSerwer SMTP odbiera wiadomość, umieszcza ją w skrzynce pocztowej odbiorcy"
  },
  {
    "pytanie": "Jakie są główne cechy trwałego HTTP w wersji 1.1?",
    "odpowiedz": "Pozwala na przesyłanie wielu obiektów przez jedno połączenie TCP\nDomyślnie używa trwałych połączeń, co zmniejsza liczbę RTT potrzebnych do pobrania strony"
  },
  {
    "pytanie": "Jakie są główne zalety używania ciasteczek w HTTP?",
    "odpowiedz": "Umożliwiają uwierzytelnienie użytkownika\nPozwalają na zarządzanie wózkami zakupów\nUmożliwiają personalizację treści i rekomendacje\nUtrzymują stan sesji użytkownika\nPomagają w śledzeniu aktywności użytkownika, co ma jednak wpływ na prywatność"
  },
  {
    "pytanie": "Jak działa warunkowy GET w HTTP i jakie ma korzyści?",
    "odpowiedz": "Klient wysyła żądanie HTTP z nagłówkiem If-Modified-Since z datą kopii obiektu\nSerwer odpowiada HTTP/1.0 304 Not Modified, jeśli obiekt nie został zmieniony, co pozwala zaoszczędzić przepustowość\nJeśli obiekt został zmieniony, serwer wysyła HTTP/1.0 200 OK wraz z nowymi danymi"
  },
  {
    "pytanie": "Jakie są główne składniki architektury sieci kablowej HFC?",
    "odpowiedz": "Połączenie miedziane i światłowodowe\nSerwery dystrybucyjne\nDostęp współdzielony przez domy\nInstalacja udostępniana przez operatorów telewizji kablowej"
  },
  {
    "pytanie": "Jakie są główne metody protokołu POP3 i jak działają?",
    "odpowiedz": "Uwierzytelnienie: polecenia USER i PASS\nTransakcja: polecenia LIST (lista wiadomości), RETR (pobierz wiadomość), DELE (usuń wiadomość), QUIT (zakończ sesję)"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu SMTP według RFC 2821?",
    "odpowiedz": "Używa TCP do niezawodnej komunikacji poczty między serwerami na porcie 25\nKomunikacja odbywa się w trzech etapach: inicjalizacja (powitanie), wymiana komunikatów (polecenia i odpowiedzi), zakończenie\nInterakcja typu \"polecenie/odpowiedź\", komunikaty muszą być kodowane w 7-bitowym ASCII"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu FTP?",
    "odpowiedz": "FTP (File Transfer Protocol) umożliwia przesyłanie plików między klientem a serwerem\nObsługuje transfer plików w obu kierunkach (upload i download)\nUmożliwia zarządzanie plikami na serwerze (np. tworzenie katalogów, usuwanie plików)"
  },
  {
    "pytanie": "Jak działa uwierzytelnianie w HTTP?",
    "odpowiedz": "Klient musi przedstawić informacje uwierzytelniające w każdym żądaniu poprzez nagłówek Authorization\nJeśli nagłówek Authorization nie jest obecny, serwer odmawia dostępu i wysyła nagłówek WWW-Authenticate"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu DNS?",
    "odpowiedz": "DNS (Domain Name System) tłumaczy nazwy domenowe na adresy IP, umożliwiając lokalizację serwerów w sieci"
  },
  {
    "pytanie": "Jakie są główne zalety stosowania gniazd w programowaniu aplikacji sieciowych?",
    "odpowiedz": "Umożliwiają komunikację między procesami aplikacji przez protokoły transportowe\nPozwalają na implementację modeli klient-serwer oraz peer-to-peer\nUmożliwiają użycie różnych protokołów transportowych, takich jak TCP i UDP"
  },
  {
    "pytanie": "Jakie są główne cechy interfejsu CGI?",
    "odpowiedz": "Umożliwia przekazywanie danych z formularzy WWW do skryptów serwera\nObsługuje metody GET i POST do przesyłania danych\nPozwala na dynamiczne generowanie treści na podstawie danych użytkownika"
  },
  {
    "pytanie": "Jak działa modelowanie czasu obsługi w komunikacji HTTP?",
    "odpowiedz": "Definicja RTT (Round Trip Time): czas potrzebny na przesłanie małego pakietu od nadawcy do odbiorcy i z powrotem\nCzas obsługi = 2 RTT + czas transmisji pliku"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IMAP?",
    "odpowiedz": "Pozwala na synchronizację lokalnej skrzynki pocztowej z serwerem\nUmożliwia organizowanie poczty w foldery\nZachowuje stan użytkownika pomiędzy sesjami (np. nazwy folderów i przyporządkowanie listów do folderów)"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu SMTP?",
    "odpowiedz": "SMTP używa trwałych połączeń\nWymaga, żeby komunikat (nagłówek i dane) były kodowane w 7-bitowym ASCII\nSerwer SMTP używa CRLF.CRLF do rozpoznania końca danych\nSMTP jest protokołem typu push, podczas gdy HTTP jest protokołem typu pull\nOba mają komunikaty żądań/odpowiedzi w ASCII, kody wynikowe\nHTTP przesyła każdy obiekt w swoim własnym komunikacie odpowiedzi, SMTP może wysyłać wiele obiektów w wieloczęściowym komunikacie"
  },
  {
    "pytanie": "Jak wygląda format komunikatu poczty zgodnie ze standardem RFC 822?",
    "odpowiedz": "Linie nagłówków (np. To:, From:, Subject:)\nDane wiadomości (tekst, tylko znaki ASCII)\nPusta linia oddziela nagłówki od danych"
  },
  {
    "pytanie": "Jakie są główne cechy rozszerzeń MIME dla wiadomości e-mail?",
    "odpowiedz": "MIME rozszerza RFC 822 o obsługę multimediów\nDodaje nagłówki określające typ MIME, sposób kodowania danych (np. base64)\nUmożliwia przesyłanie różnych typów danych multimedialnych, takich jak obrazy, dźwięk, wideo oraz dane aplikacji"
  },
  {
    "pytanie": "Jakie są trzy główne składniki poczty elektronicznej?",
    "odpowiedz": "Agenci użytkownika (np. Eudora, Outlook, elm, Netscape Messenger)\nSerwery poczty\nSimple Mail Transfer Protocol (SMTP)"
  },
  {
    "pytanie": "Jakie funkcje pełni agent użytkownika (AU) w systemie poczty elektronicznej?",
    "odpowiedz": "Przeglądanie poczty\nKompozycja, edycja i czytanie wiadomości\nWychodzące i przychodzące wiadomości są przechowywane na serwerze"
  },
  {
    "pytanie": "Jakie są główne cechy serwerów poczty?",
    "odpowiedz": "Skrzynka pocztowa zawiera wiadomości przychodzące od użytkowników\nKolejka wiadomości zawiera wiadomości do wysłania\nProtokół SMTP wysyła pocztę pomiędzy serwerami poczty w modelu partnerskim (peer-to-peer)"
  },
  {
    "pytanie": "Jak działa protokół SMTP według RFC 2821?",
    "odpowiedz": "Używa TCP do niezawodnej komunikacji poczty między serwerami na porcie 25\nBezpośrednia komunikacja między serwerem nadawcy a serwerem odbiorcy\nTrzy etapy komunikacji: inicjalizacja (powitanie), wymiana komunikatów, zakończenie\nInterakcja typu \"polecenie/odpowiedź\" z komunikatami kodowanymi w 7-bitowym ASCII"
  },
  {
    "pytanie": "Opisz scenariusz wysyłania poczty elektronicznej przez SMTP.",
    "odpowiedz": "Alicja używa agenta użytkownika (AU) do skomponowania listu i wysyła go na adres bob@szkola.edu.pl\nAU Alicji wysyła komunikat do jej serwera poczty, który umieszcza go w kolejce\nSerwer SMTP Alicji otwiera połączenie TCP z serwerem poczty Boba\nSerwer SMTP Alicji wysyła komunikat przez połączenie TCP\nSerwer SMTP Boba umieszcza list w skrzynce Boba\nBob używa AU do przeczytania wiadomości"
  },
  {
    "pytanie": "Jak wygląda przykładowa interakcja SMTP?",
    "odpowiedz": "vbnet\nKopiuj\nS: 220 hamburger.edu\nC: HELO nalesnik.pl\nS: 250 Hello nalesnik.pl, pleased to meet you\nC: MAIL FROM: <alice@nalesnik.pl>\nS: 250 alice@nalesnik.pl... Sender ok\nC: RCPT TO: <bob@hamburger.edu>\nS: 250 bob@hamburger.edu ... Recipient ok\nC: DATA\nS: 354 Enter mail, end with \".\" on a line by itself\nC: Czy lubisz ketchup?\nC: A może ogóreczka?\nC: .\nS: 250 Message accepted for delivery\nC: QUIT\nS: 221 hamburger.edu closing connection"
  },
  {
    "pytanie": "Jak można samodzielnie wysyłać pocztę za pomocą SMTP?",
    "odpowiedz": "Użyj narzędzia telnet do nawiązania połączenia z serwerem SMTP:\ntelnet nazwaserwera 25\nWpisz polecenia SMTP, takie jak HELO, MAIL FROM, RCPT TO, DATA, QUIT\nW ten sposób można wysyłać pocztę bez użycia przeglądarki poczty"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu SMTP w porównaniu z HTTP?",
    "odpowiedz": "SMTP używa trwałych połączeń, podczas gdy HTTP używa zarówno trwałych, jak i nietrwałych połączeń\nSMTP jest protokołem typu push (wypychanie danych), a HTTP jest protokołem typu pull (pobieranie danych)\nOba protokoły używają komunikatów żądań/odpowiedzi w formacie ASCII\nSMTP może wysyłać wiele obiektów w wieloczęściowym komunikacie, podczas gdy HTTP przesyła każdy obiekt w osobnym komunikacie odpowiedzi"
  },
  {
    "pytanie": "Jak wygląda format komunikatu poczty zgodnie ze standardem RFC 822?",
    "odpowiedz": "Linie nagłówków (np. To:, From:, Subject:)\nDane wiadomości (tekst, tylko znaki ASCII)\nPusta linia oddziela nagłówki od danych"
  },
  {
    "pytanie": "Co to jest MIME i jakie rozszerzenia wprowadza dla wiadomości e-mail?",
    "odpowiedz": "MIME (Multipurpose Internet Mail Extensions) rozszerza standard RFC 822 o obsługę multimediów\nDodaje dodatkowe linie nagłówka określające typ MIME, sposób kodowania danych (np. base64)\nPozwala na przesyłanie różnych typów danych multimedialnych, takich jak obrazy, dźwięk, wideo oraz dane aplikacji"
  },
  {
    "pytanie": "Jakie są główne typy danych obsługiwanych przez MIME?",
    "odpowiedz": "Tekst: np. plain, html\nObraz: np. jpeg, gif\nDźwięk: np. basic (kodowanie 8-bit mu-law), 32kadpcm (kodowanie 32 kbps)\nWideo: np. mpeg, quicktime\nDane aplikacji: np. msword, octet-stream"
  },
  {
    "pytanie": "Jakie są główne cechy typu multipart w MIME?",
    "odpowiedz": "Pozwalają na załączanie wielu obiektów w jednej wiadomości e-mail\nKażdy załącznik jest oddzielony boundary określonym w nagłówku Content-Type: multipart/mixed; boundary=Zalacznik\nUmożliwia przesyłanie tekstu oraz multimediów w jednej wiadomości"
  },
  {
    "pytanie": "Jakie protokoły dostępu do poczty elektronicznej istnieją oprócz SMTP?",
    "odpowiedz": "POP (Post Office Protocol) [RFC 1939]: Uwierzytelnienie i pobieranie poczty z serwera\nIMAP (Internet Mail Access Protocol) [RFC 1730]: Synchronizacja lokalnej skrzynki z serwerem, organizowanie poczty w foldery\nHTTP: Używany przez usługi takie jak Hotmail, Yahoo! Mail"
  },
  {
    "pytanie": "Jak działa protokół POP3?",
    "odpowiedz": "Etap uwierzytelnienia: Polecenia USER (login) i PASS (hasło)\nEtap transakcji: Polecenia LIST (lista wiadomości), RETR (pobierz wiadomość), DELE (usuń wiadomość), QUIT (zakończ sesję)\nTryby działania: \"pobierz i usuń\" lub \"pobierz i zostaw\"\nPOP3 jest bezstanowy pomiędzy sesjami"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IMAP w porównaniu do POP3?",
    "odpowiedz": "Wszystkie listy są przechowywane na serwerze\nUmożliwia organizowanie poczty w foldery\nZachowuje stan użytkownika pomiędzy sesjami (np. nazwy folderów i przyporządkowanie listów do folderów)"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu DNS?",
    "odpowiedz": "DNS (Domain Name System) tłumaczy nazwy domenowe na adresy IP\nRozproszona baza danych implementowana przez hierarchię wielu serwerów nazw\nProtokół warstwy aplikacji używany przez hosty, rutery i serwery nazw do tłumaczenia nazw\nUmożliwia określanie usług realizowanych przez wiele serwerów oraz odróżnianie różnych usług na jednym serwerze"
  },
  {
    "pytanie": "Jak działa system serwerów nazw DNS?",
    "odpowiedz": "Lokalne serwery nazw najpierw odpowiadają na zapytania\nJeśli nie znają odwzorowania, lokalny serwer pyta serwer u korzenia\nSerwer u korzenia kontaktuje się z odpowiednim serwerem autorytatywnym\nSerwer autorytatywny dostarcza odwzorowanie nazwy na adres IP"
  },
  {
    "pytanie": "Jakie są główne rodzaje rekordów DNS?",
    "odpowiedz": "Typ=NS: Nazwa domeny i adres IP autorytatywnego serwera nazw\nTyp=A: Nazwa hosta i jego adres IP\nTyp=CNAME: Alias dla kanonicznej nazwy hosta\nTyp=MX: Nazwa serwera poczty związanego z domeną"
  },
  {
    "pytanie": "Jak działa demultipleksacja w warstwie transportu?",
    "odpowiedz": "Host odbiera pakiety IP zawierające adresy IP nadawcy i odbiorcy oraz numery portów\nUżywa adresu IP i portu odbiorcy do skierowania segmentu do odpowiedniego gniazda\nDemultipleksacja bezpołączeniowa (UDP): Gniazda są identyfikowane przez parę (adres IP, port)\nDemultipleksacja połączeniowa (TCP): Gniazdo jest określane przez cztery wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu FTP?",
    "odpowiedz": "FTP (File Transfer Protocol) umożliwia przesyłanie plików między klientem a serwerem\nModel klient-serwer, gdzie klient rozpoczyna transmisję, a serwer jest zdalnym hostem\nSerwer FTP działa na porcie 21\nOddzielne połączenie kontrolne (port 21) i transferu danych (port 20)\nSerwer FTP utrzymuje stan: aktualny katalog, wcześniejszą autoryzację"
  },
  {
    "pytanie": "Jakie są główne polecenia FTP i ich funkcje?",
    "odpowiedz": "USER: Podaje login użytkownika\nPASS: Podaje hasło\nLIST: Zwraca listę plików w aktualnym katalogu\nRETR: Pobiera plik z serwera\nSTOR: Zapisuje plik na serwerze"
  },
  {
    "pytanie": "Jak działa demultipleksacja połączeniowa w TCP?",
    "odpowiedz": "Gniazdo TCP jest określane przez cztery wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy\nHost odbiorczy używa tych wartości do skierowania segmentu do właściwego gniazda\nSerwer może obsługiwać wiele gniazd TCP jednocześnie, każde z unikalnym zestawem wartości\nSerwery WWW otwierają oddzielne gniazda dla każdego klienta, umożliwiając obsługę wielu żądań"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu UDP?",
    "odpowiedz": "UDP (User Datagram Protocol) jest protokołem bezpołączeniowym i zawodnym\nSegmenty UDP mogą być zgubione lub dostarczone w zmienionej kolejności\nBrak inicjalizacji połączenia między nadawcą a odbiorcą\nMały nagłówek segmentu\nBrak kontroli przeciążenia, co pozwala na szybkie wysyłanie danych"
  },
  {
    "pytanie": "Jak działa demultipleksacja w protokole UDP?",
    "odpowiedz": "Gniazda UDP są identyfikowane przez parę (adres IP odbiorcy, port odbiorcy)\nGdy host odbiera segment UDP, sprawdza port odbiorcy i kieruje segment do odpowiedniego gniazda\nDatagramy z różnymi adresami IP lub portami nadawcy są kierowane do tego samego gniazda"
  },
  {
    "pytanie": "Jakie są główne cechy demultipleksacji połączeniowej w TCP?",
    "odpowiedz": "Gniazdo TCP jest określane przez cztery wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy\nHost odbierający używa wszystkich czterech wartości do skierowania segmentu do właściwego gniazda\nSerwer może obsługiwać wiele gniazd TCP jednocześnie, każde z unikalnym zestawem wartości\nSerwery WWW otwierają oddzielne gniazda dla każdego klienta, umożliwiając obsługę wielu żądań"
  },
  {
    "pytanie": "Jakie są główne etapy działania protokołu POP3?",
    "odpowiedz": "Etap uwierzytelnienia: Klient wysyła polecenia USER i PASS do serwera poczty\nEtap transakcji: Klient używa poleceń LIST, RETR, DELE do zarządzania wiadomościami\nEtap zakończenia: Klient wysyła polecenie QUIT, kończąc sesję"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IMAP?",
    "odpowiedz": "Wszystkie listy są przechowywane na serwerze\nUmożliwia organizowanie poczty w foldery\nZachowuje stan użytkownika pomiędzy sesjami, np. nazwy folderów i przyporządkowanie listów do folderów"
  },
  {
    "pytanie": "Jak działa demultipleksacja połączeniowa w TCP w kontekście serwera WWW?",
    "odpowiedz": "Serwer WWW otwiera oddzielne gniazdo TCP dla każdego klienta\nKażde gniazdo jest identyfikowane przez unikalny zestaw wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy\nUmożliwia obsługę wielu połączeń jednocześnie, każde niezależne od innych"
  },
  {
    "pytanie": "Jakie są główne zalety używania ciasteczek w HTTP?",
    "odpowiedz": "Uwierzytelnienie użytkownika\nZarządzanie wózkami zakupów w sklepach internetowych\nPersonalizacja treści i rekomendacje\nUtrzymanie stanu sesji użytkownika\nŚledzenie aktywności użytkownika, co może wpływać na prywatność"
  },
  {
    "pytanie": "Jak działa mechanizm warunkowego GET w HTTP?",
    "odpowiedz": "Klient wysyła żądanie HTTP z nagłówkiem If-Modified-Since zawierającym datę kopii obiektu\nSerwer odpowiada HTTP/1.0 304 Not Modified, jeśli obiekt nie został zmieniony, co pozwala zaoszczędzić przepustowość\nJeśli obiekt został zmieniony, serwer wysyła HTTP/1.0 200 OK wraz z nowymi danymi"
  },
  {
    "pytanie": "Jak działa suma kontrolna w protokole UDP?",
    "odpowiedz": "Nadawca traktuje zawartość segmentu jako ciąg 16-bitowych liczb całkowitych\nOblicza sumę kontrolną przez dodawanie zawartości segmentu i negację wyniku\nOdbiorca oblicza sumę kontrolną odebranego segmentu i porównuje ją z wartością w nagłówku\nJeśli sumy się zgadzają, segment jest uważany za poprawny; w przeciwnym razie wykryto błąd"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu SMTP według RFC 2821?",
    "odpowiedz": "Używa TCP do niezawodnej komunikacji poczty między serwerami na porcie 25\nKomunikacja odbywa się w trzech etapach: inicjalizacja (powitanie), wymiana komunikatów (polecenia i odpowiedzi), zakończenie\nInterakcja typu \"polecenie/odpowiedź\", komunikaty muszą być kodowane w 7-bitowym ASCII"
  },
  {
    "pytanie": "Jakie są główne cechy niezawodnej komunikacji danych w sieciach komputerowych?",
    "odpowiedz": "Ważne w warstwach aplikacji, transportu i łącza\nCharakterystyka zawodnego kanału określa złożoność niezawodnego protokołu komunikacji\nUżywa mechanizmów takich jak sumy kontrolne, potwierdzenia (ACK), retransmisje\nImplementowane jako niezawodne protokoły transportowe, np. TCP"
  },
  {
    "pytanie": "Jakie są główne etapy działania niezawodnego protokołu komunikacji (npk2.0)?",
    "odpowiedz": "Nadawca: Tworzy pakiet z danymi i sumą kontrolną, wysyła pakiet, oczekuje na potwierdzenie (ACK/NAK)\nOdbiorca: Odbiera pakiet, sprawdza sumę kontrolną, przekazuje dane do wyższej warstwy i wysyła potwierdzenie (ACK lub NAK)\nNadawca: Jeśli otrzyma NAK lub nie otrzyma potwierdzenia w określonym czasie, retransmituje pakiet"
  },
  {
    "pytanie": "Jakie są główne problemy w protokole npk2.0 i jak je rozwiązuje npk2.1?",
    "odpowiedz": "Problem: ACK/NAK mogą być uszkodzone, co prowadzi do niepewności nadawcy\nRozwiązanie w npk2.1:\nNadawca dodaje numery sekwencyjne (0,1) do pakietów\nOdbiorca sprawdza numery sekwencyjne, odrzuca duplikaty\nNadawca retransmituje pakiety na podstawie numerów sekwencyjnych\nUmożliwia obsługę duplikatów i błędnych potwierdzeń"
  },
  {
    "pytanie": "Jakie są główne zalety używania numerów sekwencyjnych w protokołach niezawodnej komunikacji?",
    "odpowiedz": "Pozwalają na rozróżnienie nowych pakietów od duplikatów\nUmożliwiają kontrolę poprawności potwierdzeń (ACK)\nMinimalizują konflikty związane z retransmisjami\nWystarczą tylko dwa numery sekwencyjne (0,1), co upraszcza implementację"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu npk3.0?",
    "odpowiedz": "Umożliwia niezawodną komunikację przez kanał z błędami i stratami\nNadawca czeka przez określony czas na potwierdzenie (ACK) i retransmituje pakiet, jeśli nie otrzyma potwierdzenia\nUżywa liczników czasu (timerów) do zarządzania retransmisjami\nObsługuje numery sekwencyjne do rozróżniania pakietów i duplikatów"
  },
  {
    "pytanie": "Jak działa protokół FTP w kontekście połączeń kontrolnych i transferowych?",
    "odpowiedz": "Połączenie kontrolne: Klient kontaktuje się z serwerem na porcie 21 (TCP)\nAutoryzacja: Klient uzyskuje autoryzację przez połączenie kontrolne\nTransfer danych: Po otrzymaniu polecenia transferu pliku, serwer otwiera nowe połączenie TCP do klienta na porcie 20 (TCP)\nPo przesłaniu pliku, serwer zamyka połączenie transferowe"
  },
  {
    "pytanie": "Jakie są główne funkcje protokołu UDP?",
    "odpowiedz": "UDP jest prostym, bezpołączeniowym protokołem transportowym\nSegmenty UDP mogą być zgubione lub dostarczone w zmienionej kolejności\nBrak inicjalizacji połączenia między nadawcą a odbiorcą\nMały nagłówek segmentu\nBrak kontroli przeciążenia, co pozwala na szybkie wysyłanie danych"
  },
  {
    "pytanie": "Jakie są główne cechy demultipleksacji bezpołączeniowej w UDP?",
    "odpowiedz": "Gniazda UDP są identyfikowane przez parę (adres IP odbiorcy, port odbiorcy)\nSegment UDP jest kierowany do odpowiedniego gniazda na podstawie adresu IP i portu odbiorcy\nDatagramy z różnymi adresami IP lub portami nadawcy są kierowane do tego samego gniazda"
  },
  {
    "pytanie": "Jakie są główne cechy transportu połączeniowego w TCP?",
    "odpowiedz": "TCP zapewnia niezawodną, uporządkowaną komunikację bajtów\nKontrola przepływu: nadawca nie przeciąży odbiorcy\nKontrola przeciążenia: nadawca zwalnia, jeśli sieć jest przeciążona\nTworzenie i zarządzanie połączeniem\nStruktura segmentu zawiera informacje niezbędne do zarządzania połączeniem"
  },
  {
    "pytanie": "Jak działa mechanizm kontroli przeciążenia w TCP?",
    "odpowiedz": "TCP monitoruje obciążenie sieci i dostosowuje tempo wysyłania danych\nNadawca zmniejsza szybkość transmisji, jeśli wykryje przeciążenie\nMechanizmy takie jak Slow Start, Congestion Avoidance, Fast Retransmit i Fast Recovery są używane do zarządzania przeciążeniem"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu POP3?",
    "odpowiedz": "POP3 umożliwia pobieranie poczty z serwera poczty\nObsługuje polecenia USER, PASS, LIST, RETR, DELE, QUIT\nTryby działania: \"pobierz i usuń\" lub \"pobierz i zostaw\"\nPOP3 jest bezstanowy pomiędzy sesjami"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IMAP?",
    "odpowiedz": "Wszystkie listy są przechowywane na serwerze\nUmożliwia organizowanie poczty w foldery\nZachowuje stan użytkownika pomiędzy sesjami, np. nazwy folderów i przyporządkowanie listów do folderów"
  },
  {
    "pytanie": "Jakie są główne usługi warstwy transportu?",
    "odpowiedz": "Multipleksacja i demultipleksacja\nTransport bezpołączeniowy (UDP)\nZasady niezawodnej komunikacji danych\nTransport połączeniowy (TCP)\nMechanizmy kontroli przeciążenia"
  },
  {
    "pytanie": "Co to jest multipleksacja i demultipleksacja w warstwie transportu?",
    "odpowiedz": "Multipleksacja: Proces łączenia danych z wielu aplikacji do jednego kanału transportowego.\nDemultipleksacja: Proces rozdzielania odebranych danych na odpowiednie aplikacje na podstawie numerów portów."
  },
  {
    "pytanie": "Czym różni się transport bezpołączeniowy (UDP) od transportu połączeniowego (TCP)?",
    "odpowiedz": "UDP: Zawodny, nieuporządkowany, bez inicjalizacji połączenia, mały nagłówek, brak kontroli przepływu i przeciążenia.\nTCP: Niezawodny, uporządkowany, wymaga nawiązania połączenia, posiada mechanizmy kontroli przepływu i przeciążenia, większy nagłówek."
  },
  {
    "pytanie": "Jak działa demultipleksacja bezpołączeniowa w UDP?",
    "odpowiedz": "Gniazda UDP są identyfikowane przez parę (adres IP odbiorcy, port odbiorcy).\nOdbierane segmenty UDP są kierowane do odpowiedniego gniazda na podstawie portu odbiorcy.\nDatagramy z różnymi adresami IP lub portami nadawcy mogą być kierowane do tego samego gniazda."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu UDP?",
    "odpowiedz": "Bezpołączeniowy i zawodny\nObsługuje komunikację ciągów bajtów (datagramów)\nBrak inicjalizacji połączenia\nMożliwość zgubienia lub dostarczenia w innej kolejności pakietów\nMały nagłówek segmentu\nBrak kontroli przepływu i przeciążenia"
  },
  {
    "pytanie": "Jak działa suma kontrolna w protokole UDP?",
    "odpowiedz": "Nadawca traktuje zawartość segmentu jako ciąg 16-bitowych liczb całkowitych.\nOblicza sumę kontrolną przez dodawanie zawartości segmentu i negację wyniku.\nOdbiorca oblicza sumę kontrolną odebranego segmentu i porównuje ją z wartością w nagłówku.\nJeśli sumy się zgadzają, segment jest poprawny; w przeciwnym razie wykryto błąd."
  },
  {
    "pytanie": "Co to jest NPK i jakie wersje zostały omówione?",
    "odpowiedz": "NPK (Niezawodny Protokół Komunikacji) to koncepcja niezawodnej komunikacji danych przez zawodny kanał.\nOmówione wersje: npk1.0, npk2.0, npk2.1, npk2.2, npk3.0"
  },
  {
    "pytanie": "Jak działa npk2.1 i jak obsługuje błędne ACK/NAK?",
    "odpowiedz": "Nadawca dodaje numery sekwencyjne (0,1) do pakietów.\nOdbiorca sprawdza numery sekwencyjne, odrzuca duplikaty pakietów.\nNadawca retransmituje pakiety na podstawie numerów sekwencyjnych.\nUmożliwia obsługę duplikatów i błędnych potwierdzeń."
  },
  {
    "pytanie": "Co to jest mechanizm szybkich retransmisji w TCP?",
    "odpowiedz": "Mechanizm, który retransmituje segmenty bez czekania na timeout, gdy nadawca otrzyma trzy zduplikowane ACK dla tego samego pakietu, co sugeruje utratę następnego segmentu.\nPozwala na szybsze odzyskiwanie z utraty pakietów i poprawia wydajność TCP."
  },
  {
    "pytanie": "Jak działa kontrola przepływu w TCP?",
    "odpowiedz": "TCP używa okna odbiorcy, które określa ilość danych, jakie nadawca może wysłać bez potwierdzenia.\nZapobiega przeciążeniu odbiorcy przez kontrolowanie tempa wysyłania danych.\nOdbiorca ogłasza wielkość swojego bufora, co nadawca uwzględnia przy wysyłaniu danych."
  },
  {
    "pytanie": "Jakie są główne etapy zarządzania połączeniem w TCP?",
    "odpowiedz": "Inicjalizacja połączenia: Trzykrotny uścisk dłoni (three-way handshake).\nKrok 1: Klient wysyła SYN do serwera.\nKrok 2: Serwer odpowiada SYN-ACK.\nKrok 3: Klient wysyła ACK, połączenie nawiązane.\nZarządzanie połączeniem: Kontrola przepływu, kontrola przeciążenia, zarządzanie buforami.\nZamykanie połączenia: Proces zakończenia połączenia, który również wymaga wymiany FIN i ACK."
  },
  {
    "pytanie": "Jakie są główne cechy połączeniowego transportu TCP?",
    "odpowiedz": "Niezawodna, uporządkowana komunikacja bajtów\nKontrola przepływu, aby nadawca nie przeciążył odbiorcy\nKontrola przeciążenia, aby zarządzać obciążeniem sieci\nTworzenie i zarządzanie połączeniem (three-way handshake)\nBufory u nadawcy i odbiorcy"
  },
  {
    "pytanie": "Jakie są główne elementy struktury segmentu TCP?",
    "odpowiedz": "Port nadawcy i port odbiorcy\nNumer sekwencyjny\nNumer potwierdzenia\nRozmiar okna odbiorcy\nSuma kontrolna\nWskaźniki URG, ACK, PSH, RST, SYN, FIN\nOpcje (zmienna długość)"
  },
  {
    "pytanie": "Czym jest slow start w TCP?",
    "odpowiedz": "Mechanizm kontroli przeciążenia, który na początku połączenia szybko zwiększa rozmiar okna transmisyjnego w sposób wykładniczy, aż do wykrycia przeciążenia (straty pakietów)."
  },
  {
    "pytanie": "Jak działa mechanizm AIMD w kontroli przeciążenia TCP?",
    "odpowiedz": "AIMD (Additive Increase Multiplicative Decrease):\nAdditive Increase: Stopniowe, liniowe zwiększanie rozmiaru okna transmisyjnego.\nMultiplicative Decrease: Redukcja rozmiaru okna transmisyjnego przez dzielenie przez dwa w przypadku wykrycia przeciążenia."
  },
  {
    "pytanie": "Jakie są różnice między kontrolą przeciążenia typu koniec-koniec a kontrolą z pomocą sieci?",
    "odpowiedz": "Kontrola koniec-koniec: Brak bezpośredniej informacji zwrotnej od warstwy sieci. Przeciążenie jest wykrywane na podstawie strat i opóźnień. Używana przez TCP.\nKontrola z pomocą sieci: Rutery udostępniają informację zwrotną systemom końcowym o przeciążeniu, np. poprzez specjalne bity w nagłówkach (ECN)."
  },
  {
    "pytanie": "Co to jest kontrola przeciążenia w usłudze ABR w sieci ATM?",
    "odpowiedz": "ABR (Available Bit Rate) to usługa elastyczna, która pozwala nadawcy dostosować prędkość transmisji do dostępnej przepustowości.\nRutery sieci ATM wysyłają komórki RM (Resource Management) z informacją o dostępnej przepustowości, nadawca dostosowuje prędkość na podstawie tych informacji."
  },
  {
    "pytanie": "Jak TCP zapewnia sprawiedliwość między wieloma połączeniami?",
    "odpowiedz": "Mechanizm AIMD pozwala na równomierne dzielenie przepustowości między konkurujące połączenia TCP.\nTCP dąży do osiągnięcia sprawiedliwego podziału dostępnej przepustowości poprzez kontrolę wzrostu i zmniejszania okna transmisyjnego."
  },
  {
    "pytanie": "Jakie są główne scenariusze retransmisji w TCP?",
    "odpowiedz": "Strata pakietu: Wykrywana poprzez timeout lub trzy zduplikowane ACK.\nStrata ACK: Nadawca nie otrzymuje potwierdzenia i retransmituje pakiet.\nTimeout: Nadawca retransmituje najstarszy niepotwierdzony pakiet i resetuje timer."
  },
  {
    "pytanie": "Jak działa powolny start w TCP?",
    "odpowiedz": "TCP zaczyna z małym rozmiarem okna transmisyjnego (1 segment) i szybko zwiększa go wykładniczo poprzez podwajanie rozmiaru okna co RTT, aż do wykrycia przeciążenia poprzez stratę pakietu."
  },
  {
    "pytanie": "Jakie są główne cele mechanizmu kontroli przeciążenia w TCP?",
    "odpowiedz": "Zapewnienie sprawiedliwego podziału przepustowości między połączenia TCP.\nZapobieganie przeciążeniu sieci poprzez dostosowanie prędkości transmisji w odpowiedzi na przeciążenie.\nOptymalizacja wykorzystania zasobów sieciowych, minimalizacja opóźnień i strat pakietów."
  },
  {
    "pytanie": "Jak TCP estymuje RTT?",
    "odpowiedz": "TCP mierzy czas od wysłania segmentu do otrzymania potwierdzenia ACK (SampleRTT).\nEstymowaneRTT jest aktualizowane jako wykładnicza średnia ruchoma:\nEstymowaneRTT = (1 - α) * EstymowaneRTT + α * SampleRTT\ngdzie α zwykle wynosi 0.125."
  },
  {
    "pytanie": "Jak ustalać timeout w TCP?",
    "odpowiedz": "Timeout jest ustawiany jako: Timeout = EstymowaneRTT + 4 * BłądRTT\nBłądRTT jest estymowany jako wykładnicza średnia ruchoma:\nBłądRTT = (1 - β) * BłądRTT + β * |SampleRTT - EstymowaneRTT|\ngdzie β zwykle wynosi 0.25."
  },
  {
    "pytanie": "Co to jest \"window size\" w TCP i jak wpływa na przepustowość?",
    "odpowiedz": "\"Window size\" to rozmiar okna transmisyjnego określający ilość danych, które nadawca może wysłać bez potwierdzenia.\nPrzepustowość TCP jest proporcjonalna do rozmiaru okna i odwrotnie proporcjonalna do RTT: przepustowość = Window Size / RTT."
  },
  {
    "pytanie": "Jakie są główne zalety korzystania z protokołu TCP?",
    "odpowiedz": "Zapewnia niezawodną, uporządkowaną transmisję danych.\nKontroluje przepływ i przeciążenie sieci.\nAutomatycznie retransmituje utracone pakiety.\nUmożliwia pełnodupleksową komunikację."
  },
  {
    "pytanie": "Jak działa trzyetapowy uścisk dłoni (three-way handshake) w TCP?",
    "odpowiedz": "Krok 1: Klient wysyła segment SYN z początkowym numerem sekwencyjnym.\nKrok 2: Serwer odpowiada segmentem SYN-ACK z własnym numerem sekwencyjnym i potwierdzeniem numeru klienta.\nKrok 3: Klient wysyła segment ACK potwierdzający numer sekwencyjny serwera.\nPo tym procesie połączenie jest nawiązane."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu POP3?",
    "odpowiedz": "POP3 umożliwia pobieranie poczty z serwera poczty\nObsługuje polecenia USER, PASS, LIST, RETR, DELE, QUIT\nTryby działania: \"pobierz i usuń\" lub \"pobierz i zostaw\"\nPOP3 jest bezstanowy pomiędzy sesjami"
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IMAP?",
    "odpowiedz": "Pozwala na synchronizację lokalnej skrzynki pocztowej z serwerem\nUmożliwia organizowanie poczty w foldery\nZachowuje stan użytkownika pomiędzy sesjami, np. nazwy folderów i przyporządkowanie listów do folderów\nWszystkie listy są przechowywane na serwerze"
  },
  {
    "pytanie": "Jak działa demultipleksacja połączeniowa w TCP?",
    "odpowiedz": "Gniazdo TCP jest określane przez cztery wartości: adres IP nadawcy, port nadawcy, adres IP odbiorcy, port odbiorcy.\nHost odbierający używa tych wartości do skierowania segmentu do właściwego gniazda.\nSerwer może obsługiwać wiele gniazd TCP jednocześnie, każde z unikalnym zestawem wartości.\nSerwery WWW otwierają oddzielne gniazda dla każdego klienta, umożliwiając obsługę wielu żądań."
  },
  {
    "pytanie": "Co to jest MRS w kontekście TCP?",
    "odpowiedz": "MRS (Maximum Receive Segment size) to maksymalny rozmiar segmentu, jaki odbiorca może przyjąć od nadawcy w danym połączeniu TCP."
  },
  {
    "pytanie": "Jak TCP kontroluje przeciążenie typu koniec-koniec?",
    "odpowiedz": "TCP monitoruje przeciążenie poprzez obserwację strat pakietów (timeouty, duplikaty ACK).\nNadawca ogranicza prędkość transmisji, zmniejszając rozmiar okna transmisyjnego po wykryciu przeciążenia.\nUżywa mechanizmów AIMD, powolnego startu i konserwatywnych reakcji na timeouty."
  },
  {
    "pytanie": "Jakie są główne cechy kontrolowania przeciążenia z pomocą sieci?",
    "odpowiedz": "Rutery udostępniają informacje zwrotne systemom końcowym o przeciążeniu, np. poprzez specjalne bity w nagłówkach (ECN).\nNadawca dostosowuje prędkość transmisji na podstawie otrzymanych informacji."
  },
  {
    "pytanie": "Jakie są główne zalety używania UDP w komunikacji strumieniowej?",
    "odpowiedz": "Niska latencja dzięki braku inicjalizacji połączenia\nBrak kontroli przepływu i przeciążenia umożliwia szybką transmisję\nTolerancja na straty pakietów, co jest akceptowalne dla aplikacji strumieniowych (audio, wideo)"
  },
  {
    "pytanie": "Co to jest segment TCP?",
    "odpowiedz": "Segment TCP to jednostka danych przesyłana w protokole TCP, zawierająca dane aplikacji oraz nagłówki z informacjami takimi jak porty, numery sekwencyjne, potwierdzenia, okno odbiorcy, suma kontrolna i flagi zarządzające połączeniem."
  },
  {
    "pytanie": "Jak działa algorytm szybkich retransmisji w TCP?",
    "odpowiedz": "Jeśli nadawca otrzyma trzy zduplikowane ACK dla tego samego pakietu, zakłada, że następny pakiet został utracony i natychmiast retransmituje ten pakiet bez czekania na timeout."
  },
  {
    "pytanie": "Jak TCP zarządza retransmisjami w obecności strat pakietów?",
    "odpowiedz": "TCP używa timeoutów i szybkich retransmisji na podstawie duplikatów ACK.\nPo wykryciu straty, TCP zmniejsza rozmiar okna transmisyjnego i dostosowuje prędkość transmisji zgodnie z mechanizmem AIMD."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu DNS?",
    "odpowiedz": "DNS (Domain Name System) tłumaczy nazwy domenowe na adresy IP.\nSkłada się z hierarchii serwerów nazw.\nUżywa różnych typów rekordów, takich jak A, NS, CNAME, MX.\nJest protokołem warstwy aplikacji używanym przez hosty, rutery i serwery nazw."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu HTTP?",
    "odpowiedz": "HTTP (HyperText Transfer Protocol) używa TCP do komunikacji między klientem a serwerem na porcie 80.\nProtokół typu \"pull\", gdzie klient wysyła żądanie, a serwer odpowiada.\nObsługuje trwałe i nietrwałe połączenia.\nWykorzystuje metody GET, POST, PUT, DELETE itp."
  },
  {
    "pytanie": "Jak działa powolny start w TCP?",
    "odpowiedz": "TCP zaczyna z małym rozmiarem okna transmisyjnego i zwiększa go wykładniczo poprzez podwajanie rozmiaru okna co RTT, aż do wykrycia przeciążenia poprzez stratę pakietu."
  },
  {
    "pytanie": "Jakie są główne cele mechanizmu kontroli przeciążenia w TCP?",
    "odpowiedz": "Zapewnienie sprawiedliwego podziału przepustowości między połączenia TCP.\nZapobieganie przeciążeniu sieci poprzez dostosowanie prędkości transmisji w odpowiedzi na przeciążenie.\nOptymalizacja wykorzystania zasobów sieciowych, minimalizacja opóźnień i strat pakietów."
  },
  {
    "pytanie": "Co to jest \"slow start threshold\" (Próg powolnego startu) w TCP?",
    "odpowiedz": "Próg określający granicę, po przekroczeniu której TCP przechodzi z fazy powolnego startu do fazy unikania przeciążenia.\nPo stracie pakietu, próg jest ustawiany na połowę obecnego rozmiaru okna transmisyjnego."
  },
  {
    "pytanie": "Jakie są główne metody kontroli przeciążenia w TCP?",
    "odpowiedz": "AIMD (Additive Increase Multiplicative Decrease):\nAdditive Increase: liniowy wzrost rozmiaru okna transmisyjnego\nMultiplicative Decrease: zmniejszenie rozmiaru okna transmisyjnego po wykryciu przeciążenia\nSlow Start: szybki wzrost rozmiaru okna na początku połączenia\nFast Retransmit: szybkie retransmisje po wykryciu utraty pakietu"
  },
  {
    "pytanie": "Jakie są główne zalety korzystania z protokołu TCP?",
    "odpowiedz": "Zapewnia niezawodną, uporządkowaną transmisję danych.\nKontroluje przepływ i przeciążenie sieci.\nAutomatycznie retransmituje utracone pakiety.\nUmożliwia pełnodupleksową komunikację."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu SMTP?",
    "odpowiedz": "SMTP (Simple Mail Transfer Protocol) używa TCP do niezawodnej komunikacji na porcie 25.\nWymaga trzech etapów: inicjalizacja (powitanie), wymiana komunikatów, zakończenie.\nKomunikacja typu \"polecenie/odpowiedź\" z komunikatami w 7-bitowym ASCII."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu HTTP?",
    "odpowiedz": "HTTP (HyperText Transfer Protocol) używa TCP do komunikacji między klientem a serwerem na porcie 80.\nProtokół typu \"pull\", gdzie klient wysyła żądanie, a serwer odpowiada.\nObsługuje trwałe i nietrwałe połączenia.\nWykorzystuje metody GET, POST, PUT, DELETE itp."
  },
  {
    "pytanie": "Jak działa kontrola przeciążenia typu AIMD w TCP?",
    "odpowiedz": "Additive Increase: TCP zwiększa rozmiar okna transmisyjnego liniowo po każdym RTT bez strat.\nMultiplicative Decrease: TCP zmniejsza rozmiar okna transmisyjnego proporcjonalnie po wykryciu straty pakietu, zwykle dzieląc okno przez dwa."
  },
  {
    "pytanie": "Jakie są główne scenariusze retransmisji w TCP?",
    "odpowiedz": "Strata pakietu: Wykrywana poprzez timeout lub trzy zduplikowane ACK.\nStrata ACK: Nadawca nie otrzymuje potwierdzenia i retransmituje pakiet.\nTimeout: Nadawca retransmituje najstarszy niepotwierdzony pakiet i resetuje timer."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu DNS?",
    "odpowiedz": "DNS (Domain Name System) tłumaczy nazwy domenowe na adresy IP.\nSkłada się z hierarchii serwerów nazw.\nUżywa różnych typów rekordów, takich jak A, NS, CNAME, MX.\nJest protokołem warstwy aplikacji używanym przez hosty, rutery i serwery nazw."
  },
  {
    "pytanie": "Jakie są główne etapy zarządzania połączeniem w TCP?",
    "odpowiedz": "Nawiązywanie połączenia: Trzykrotny uścisk dłoni (SYN, SYN-ACK, ACK).\nZarządzanie połączeniem: Kontrola przepływu, kontrola przeciążenia, zarządzanie buforami.\nZamykanie połączenia: Wymiana segmentów FIN i ACK, zapewniająca poprawne zakończenie połączenia."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu FTP?",
    "odpowiedz": "Umożliwia przesyłanie plików między klientem a serwerem\nObsługuje transfer plików w obu kierunkach (upload i download)\nUmożliwia zarządzanie plikami na serwerze (np. tworzenie katalogów, usuwanie plików)\nUżywa oddzielnych połączeń kontrolnych (port 21) i transferowych (port 20)\nSerwer FTP utrzymuje stan: aktualny katalog, wcześniejszą autoryzację"
  },
  {
    "pytanie": "Jakie są główne cele warstwy sieci?",
    "odpowiedz": "Zrozumienie zasad i problemów działania usług warstwy sieci, takich jak ruting (wybór tras), skalowalność sieci, działanie ruterów oraz zaawansowane tematy jak IPv6 i mobilność.\nImplementacja tych zasad w Internecie."
  },
  {
    "pytanie": "Jakie są podstawowe funkcje warstwy sieci z komutacją pakietów?",
    "odpowiedz": "Wybór ścieżki: Określenie ścieżki, którą pakiet przebyje od nadawcy do odbiorcy przy użyciu algorytmów rutingu.\nPrzekazywanie: Przesyłanie pakietu z wejścia rutera do odpowiedniego wyjścia rutera."
  },
  {
    "pytanie": "Co to są wirtualne kanały w sieciach komputerowych?",
    "odpowiedz": "Inicjalizacja wirtualnego kanału przed rozpoczęciem komunikacji danych.\nKażdy pakiet posiada identyfikator wirtualnego kanału.\nRutery na ścieżce nadawca-odbiorca utrzymują \"stan\" dla każdego wirtualnego kanału.\nUmożliwiają przydzielanie zasobów łącz i ruterów do wirtualnych kanałów, zapewniając wydajność podobną do kanału telefonicznego."
  },
  {
    "pytanie": "Jakie protokoły sygnalizacyjne są używane w wirtualnych kanałach?",
    "odpowiedz": "Używane w sieciach ATM, Frame-Relay, X.25.\nSłużą do inicjalizacji, zarządzania i zamykania wirtualnych kanałów.\nNie są powszechnie używane w dzisiejszym Internecie."
  },
  {
    "pytanie": "Czym charakteryzują się sieci datagramowe?",
    "odpowiedz": "Nie tworzą połączeń w warstwie sieci.\nRutery nie przechowują stanu o połączeniach.\nPakiety są przekazywane przy użyciu adresu odbiorcy.\nPakiety między tymi samymi nadawcami i odbiorcami mogą korzystać z różnych ścieżek."
  },
  {
    "pytanie": "Jakie są główne modele usług warstwy sieci?",
    "odpowiedz": "Best Effort: Brak gwarantowanej przepustowości, niezawodna komunikacja i uporządkowanie.\nCBR (Constant Bit Rate): Stała przepustowość, brak strat, uporządkowana komunikacja.\nVBR (Variable Bit Rate): Zmienna przepustowość, możliwość strat, uporządkowana komunikacja.\nABR (Available Bit Rate): Dostępna przepustowość, gwarantowane minimum, możliwość strat, uporządkowana komunikacja.\nUBR (Unspecified Bit Rate): Brak gwarancji przepustowości, możliwość strat, uporządkowana komunikacja."
  },
  {
    "pytanie": "Jakie są różnice między sieciami z wirtualnymi kanałami a sieciami datagramowymi?",
    "odpowiedz": "Internet (Sieci Datagramowe):\nKomunikacja danych między komputerami bez nawiązywania połączeń.\nUsługi elastyczne, brak potrzeby synchronizacji.\n\"Sprytne\" systemy końcowe mogą się dostosować i naprawiać błędy.\nRóżne typy łącz o różnych charakterystykach.\nATM (Wirtualne Kanały):\nNawiązywanie połączeń przed komunikacją danych.\nSynchronizacja i gwarantowane usługi.\n\"Głupie\" systemy końcowe, złożoność w działaniu szkieletu sieci.\nPodział pakietów na komórki ustalonej wielkości i przełączanie przez kratę."
  },
  {
    "pytanie": "Jakie są główne etapy rutingu hierarchicznego?",
    "odpowiedz": "Podział sieci na regiony zwane systemami autonomicznymi (AS).\nRutery w tym samym AS używają tego samego protokołu rutingu wewnętrznego.\nRutery w różnych AS mogą używać różnych protokołów rutingu wewnętrznego.\nSpecjalne rutery-bramy w AS obsługują ruting zasdewnętrzny do innych AS."
  },
  {
    "pytanie": "Jakie są główne cechy algorytmu rutingu stanu łącza (Link State)?",
    "odpowiedz": "Wszystkie rutery mają pełną topologię sieci i koszty łącz.\nDziała poprzez rozgłaszanie stanu łącza, co pozwala wszystkim węzłom na obliczenie najkrótszych ścieżek za pomocą algorytmu Dijkstry.\nMa złożoność komunikacyjną O(n²) dla n węzłów, ale bardziej wydajne implementacje osiągają O(n log n)."
  },
  {
    "pytanie": "Jak działa algorytm Dijkstry w kontekście rutingu?",
    "odpowiedz": "Oblicza najkrótsze ścieżki od źródła do wszystkich innych węzłów w grafie.\nInicjalizuje zestaw węzłów z najniższymi kosztami.\nIteracyjnie dodaje najniższy kosztowany węzeł do zbioru N i aktualizuje koszty do sąsiednich węzłów.\nKontynuuje, aż wszystkie węzły będą w zbiorze N."
  },
  {
    "pytanie": "Jakie są główne zalety i wady algorytmu rutingu wektora odległości (Distance Vector)?",
    "odpowiedz": "Zalety:\nProstsza implementacja.\nMniejsza złożoność komunikacyjna, komunikacja tylko między sąsiadami.\nWady:\nZmienny czas zbieżności.\nMożliwość wystąpienia pętli i problemu odliczania w nieskończoność.\nBłędy mogą propagować się przez sieć."
  },
  {
    "pytanie": "Jak działa algorytm rutingu wektora odległości?",
    "odpowiedz": "Każdy węzeł utrzymuje wektor odległości, czyli tablicę kosztów do wszystkich innych węzłów.\nWęzły wymieniają informacje ze swoimi sąsiadami iteracyjnie.\nPo otrzymaniu informacji od sąsiada, węzeł aktualizuje swoją tablicę odległości, wybierając najniższy koszt do każdego celu.\nProces trwa, aż wszystkie węzły ustabilizują swoje wektory odległości."
  },
  {
    "pytanie": "Jakie są główne etapy algorytmu rutingu wektora odległości?",
    "odpowiedz": "Inicjalizacja: Ustawienie początkowych kosztów do sąsiadów i nieskończonych kosztów do pozostałych węzłów.\nWymiana informacji: Wysyłanie minimalnych kosztów do sąsiadów.\nAktualizacja: Aktualizacja tablicy odległości na podstawie otrzymanych informacji.\nPowtarzanie: Kontynuowanie procesu, aż wektory odległości się nie zmienią."
  },
  {
    "pytanie": "Co to jest ruting rozsiewczy (multicast) w sieciach komputerowych?",
    "odpowiedz": "Ruting multicast umożliwia jednoczesne przesyłanie pakietów do wielu odbiorców.\nUżywa specjalnych grup adresowych, do których należą odbiorcy multicastu.\nEfektywnie wykorzystuje zasoby sieci poprzez wspólne przesyłanie danych dla wszystkich odbiorców w grupie."
  },
  {
    "pytanie": "Jakie są główne zalety rutingu hierarchicznego?",
    "odpowiedz": "Skalowalność: Umożliwia zarządzanie dużymi sieciami poprzez podział na mniejsze, autonomiczne systemy.\nRedukcja złożoności: Rutery w ramach AS korzystają z jednego protokołu rutingu wewnętrznego, co upraszcza zarządzanie.\nEfektywność: Pozwala na bardziej efektywne wykorzystanie zasobów sieciowych i redukcję obciążenia sieci."
  },
  {
    "pytanie": "Co to jest autonomiczny system (AS) w kontekście rutingu hierarchicznego?",
    "odpowiedz": "AS to duży zbiór rutera działających pod wspólną administracją i korzystających z tego samego protokołu rutingu wewnętrznego.\nAS są podstawowymi jednostkami w rutingu hierarchicznym, umożliwiając skalowalność i zarządzanie dużymi sieciami."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu Internetu (IP)?",
    "odpowiedz": "IP (Internet Protocol) jest podstawowym protokołem warstwy sieciowej w architekturze Internetu.\nUmożliwia adresowanie i przekazywanie pakietów danych między hostami.\nObsługuje zarówno IPv4, jak i IPv6.\nDziała na zasadzie best-effort, nie gwarantując niezawodności ani uporządkowania pakietów."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IPv6?",
    "odpowiedz": "IPv6 to nowa wersja protokołu Internetu, zaprojektowana w celu rozwiązania problemów związanych z ograniczoną przestrzenią adresową IPv4.\nUżywa 128-bitowych adresów, co pozwala na znacznie większą liczbę unikalnych adresów.\nZawiera ulepszenia takie jak prostszy nagłówek, lepsza obsługa mobilności i multicastu.\nZapewnia lepsze bezpieczeństwo i automatyczną konfigurację adresów."
  },
  {
    "pytanie": "Jakie są główne etapy działania rutera?",
    "odpowiedz": "Odbiór pakietu: Ruter odbiera pakiet na jednym z portów wejściowych.\nDekapsulacja: Warstwa łącza dekapsuluje pakiet i przekazuje go do warstwy sieciowej.\nSprawdzenie adresu docelowego: Ruter sprawdza adres IP odbiorcy w nagłówku pakietu.\nWyszukanie w tablicy rutingu: Ruter odnajduje najlepszą ścieżkę do odbiorcy w swojej tablicy rutingu.\nPrzekazanie pakietu: Pakiet jest enkapsulowany i przesyłany na odpowiedni port wyjściowy.\nKolejkowanie: Jeśli port wyjściowy jest zajęty, pakiet jest umieszczany w kolejce."
  },
  {
    "pytanie": "Jakie są główne funkcje portu wyjściowego w ruterze?",
    "odpowiedz": "Kolejkowanie: Umieszczanie pakietów w kolejce, gdy pole komutacyjne jest wolniejsze niż przychodzący ruch.\nZarządzanie kolejnością: Wybieranie pakietów z kolejki do transmisji w odpowiedniej kolejności.\nEnkapsulacja: Opakowanie pakietu w ramkę warstwy łącza przed wysłaniem na medium fizyczne.\nPrzekazywanie: Wysyłanie pakietów na odpowiedni port wyjściowy zgodnie z tablicą rutingu."
  },
  {
    "pytanie": "Jakie są główne rodzaje przełączania w ruterach?",
    "odpowiedz": "Przełączanie w pamięci (Memory-based Switching): Pakiet jest kopiowany przez procesor rutera, co może ograniczać prędkość przekazywania.\nPrzełączanie za pomocą szyny (Bus-based Switching): Pakiet przesyłany jest przez wspólną szynę do portu wyjściowego, co może prowadzić do konkurencji o pasmo szyny.\nPrzełączanie za pomocą kraty (Crossbar Switching): Pakiety przełączane są przez kratę, co umożliwia równoczesne przekazywanie wielu pakietów bez konkurencji o pasmo."
  },
  {
    "pytanie": "Jakie są zalety i wady przełączania za pomocą kraty w ruterach?",
    "odpowiedz": "Zalety:\nEliminacja konkurencji o pasmo szyny, co pozwala na szybkie przekazywanie wielu pakietów jednocześnie.\nWysoka przepustowość, odpowiednia dla dużych sieci i ruterów szkieletowych.\nWady:\nZłożoność implementacji.\nWyższe koszty sprzętowe w porównaniu do innych metod przełączania."
  },
  {
    "pytanie": "Co to jest ruting rozsiewczy (multicast) i jak działa?",
    "odpowiedz": "Ruting multicast umożliwia jednoczesne przesyłanie pakietów do wielu odbiorców.\nUżywa specjalnych grup adresowych, do których należą odbiorcy multicastu.\nRutery tworzą drzewo rozgałęziające się od nadawcy do wszystkich odbiorców w grupie, co pozwala na efektywne wykorzystanie zasobów sieciowych."
  },
  {
    "pytanie": "Jakie są główne wyzwania związane z rutingiem w sieciach hierarchicznych?",
    "odpowiedz": "Skalowalność: Zarządzanie ogromnymi sieciami poprzez podział na mniejsze, autonomiczne systemy.\nZłożoność administracyjna: Różne AS mogą używać różnych protokołów rutingu wewnętrznego.\nUtrzymanie spójności tablic rutingu wewnętrznego i zewnętrznego.\nIntegracja różnych typów łącz i protokołów w ramach jednego AS."
  },
  {
    "pytanie": "Jakie są główne cechy protokołów rutingu wewnętrznego i zewnętrznego?",
    "odpowiedz": "Protokoły rutingu wewnętrznego (Interior Gateway Protocols - IGP):\nDziałają wewnątrz pojedynczego AS.\nPrzykłady: RIP, OSPF, IS-IS.\nSkupiają się na optymalnym wyborze tras wewnątrz AS.\nProtokoły rutingu zewnętrznego (Exterior Gateway Protocols - EGP):\nDziałają pomiędzy różnymi AS.\nPrzykład: BGP.\nSkupiają się na wymianie informacji rutingu między AS, uwzględniając polityki routingu."
  },
  {
    "pytanie": "Jakie są główne etapy zamykania połączenia TCP?",
    "odpowiedz": "Krok 1: Klient wysyła segment FIN do serwera.\nKrok 2: Serwer odbiera FIN, odpowiada segmentem ACK, a następnie wysyła własny segment FIN do klienta.\nKrok 3: Klient odbiera FIN od serwera, odpowiada segmentem ACK.\nKrok 4: Serwer odbiera ACK od klienta, po czym połączenie jest zamknięte."
  },
  {
    "pytanie": "Co to jest trzykrotny uścisk dłoni (three-way handshake) w TCP?",
    "odpowiedz": "Proces inicjalizacji połączenia TCP składający się z trzech kroków:\nKrok 1: Klient wysyła segment SYN do serwera z początkowym numerem sekwencyjnym.\nKrok 2: Serwer odpowiada segmentem SYN-ACK, potwierdzając otrzymanie SYN klienta i wysyłając własny SYN.\nKrok 3: Klient wysyła segment ACK potwierdzający SYN serwera.\nPo tym procesie połączenie jest nawiązane i można rozpocząć transmisję danych."
  },
  {
    "pytanie": "Jakie są główne zalety rutingu hierarchicznego?",
    "odpowiedz": "Skalowalność: Umożliwia zarządzanie dużymi sieciami poprzez podział na mniejsze, autonomiczne systemy.\nRedukcja złożoności: Rutery w ramach AS korzystają z jednego protokołu rutingu wewnętrznego, co upraszcza zarządzanie.\nEfektywność: Pozwala na bardziej efektywne wykorzystanie zasobów sieciowych i redukcję obciążenia sieci."
  },
  {
    "pytanie": "Jakie są główne różnice między algorytmami rutingu stanu łącza a rutingu wektora odległości?",
    "odpowiedz": "Ruting stanu łącza (Link State):\nWszystkie rutery mają pełną topologię sieci i koszty łącz.\nUżywa algorytmu Dijkstry do obliczania najkrótszych ścieżek.\nWysoka złożoność komunikacyjna (O(n²)).\nSzybsza i bardziej stabilna zbieżność.\nRuting wektora odległości (Distance Vector):\nRutery wymieniają informacje tylko ze swoimi sąsiadami.\nUżywa wektorów odległości do obliczania tras.\nNiższa złożoność komunikacyjna.\nMożliwość wystąpienia pętli i problemów z odliczaniem w nieskończoność."
  },
  {
    "pytanie": "Jakie są główne zalety i wady rutingu stanu łącza?",
    "odpowiedz": "Zalety:\nSzybsza i bardziej stabilna zbieżność.\nDokładniejsze obliczanie najkrótszych tras.\nLepsza skalowalność w dużych sieciach.\nWady:\nWyższa złożoność komunikacyjna i obliczeniowa.\nWymaga większej ilości pamięci do przechowywania topologii sieci.\nWiększy nakład na aktualizacje topologii."
  },
  {
    "pytanie": "Jakie są główne wyzwania związane z rutingiem wektora odległości?",
    "odpowiedz": "Możliwość wystąpienia pętli routingu.\nProblem odliczania w nieskończoność, gdzie złe wieści propagują się powoli.\nZmienny czas zbieżności.\nPotrzeba mechanizmów zapobiegających błędnym aktualizacjom."
  },
  {
    "pytanie": "Co to jest ruting rozsiewczy (multicast) i jakie są jego zastosowania?",
    "odpowiedz": "Ruting multicast umożliwia jednoczesne przesyłanie pakietów do wielu odbiorców.\nUżywa specjalnych grup adresowych multicastowych.\nZastosowania obejmują transmisje wideo, konferencje online, dystrybucję oprogramowania i inne aplikacje wymagające jednoczesnego przesyłania danych do wielu odbiorców."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IP?",
    "odpowiedz": "IP (Internet Protocol) jest podstawowym protokołem warstwy sieciowej.\nUmożliwia adresowanie i przekazywanie pakietów danych między hostami.\nObsługuje różne wersje, głównie IPv4 i IPv6.\nDziała na zasadzie best-effort, nie gwarantując niezawodności ani uporządkowania pakietów.\nKażdy pakiet zawiera nagłówek z informacjami takimi jak adresy źródłowy i docelowy, suma kontrolna, TTL, itp."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IPv6?",
    "odpowiedz": "IPv6 to nowa wersja protokołu Internetu, zaprojektowana w celu rozwiązania problemów związanych z ograniczoną przestrzenią adresową IPv4.\nUżywa 128-bitowych adresów, co pozwala na znacznie większą liczbę unikalnych adresów.\nZawiera ulepszenia takie jak prostszy nagłówek, lepsza obsługa mobilności i multicastu.\nZapewnia lepsze bezpieczeństwo i automatyczną konfigurację adresów."
  },
  {
    "pytanie": "Jakie są główne cechy protokołów rutingu wewnętrznego (IGP) i zewnętrznego (EGP)?",
    "odpowiedz": "Protokoły rutingu wewnętrznego (Interior Gateway Protocols - IGP):\nDziałają wewnątrz pojedynczego AS.\nPrzykłady: RIP, OSPF, IS-IS.\nSkupiają się na optymalnym wyborze tras wewnątrz AS.\nProtokoły rutingu zewnętrznego (Exterior Gateway Protocols - EGP):\nDziałają pomiędzy różnymi AS.\nPrzykład: BGP.\nSkupiają się na wymianie informacji rutingu między AS, uwzględniając polityki routingu."
  },
  {
    "pytanie": "Jakie są główne zalety rutingu hierarchicznego?",
    "odpowiedz": "Skalowalność: Umożliwia zarządzanie bardzo dużymi sieciami poprzez podział na mniejsze, autonomiczne systemy.\nEfektywność: Redukuje złożoność rutingu poprzez stosowanie różnych protokołów rutingu wewnętrznego i zewnętrznego.\nKontrola administracyjna: Pozwala na niezależne zarządzanie różnymi częściami sieci przez różne jednostki administracyjne."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu BGP?",
    "odpowiedz": "BGP (Border Gateway Protocol) jest protokołem rutingu zewnętrznego używanym między AS.\nUmożliwia wymianę informacji rutingu między różnymi AS.\nOpiera się na atrybutach tras, takich jak AS_PATH, NEXT_HOP, LOCAL_PREF.\nZapewnia polityki routingu i kontrolę nad wyborem tras na podstawie zasad administracyjnych.\nJest skalowalny i stabilny, ale ma złożoną konfigurację."
  },
  {
    "pytanie": "Jak działa algorytm rutingu stanu łącza (Link State)?",
    "odpowiedz": "Rutery w sieci wymieniają informacje o stanie swoich łączy z innymi ruterami.\nKażdy ruter buduje pełną mapę topologii sieci.\nUżywa algorytmu Dijkstry do obliczania najkrótszych ścieżek do wszystkich innych węzłów.\nKażdy ruter utrzymuje tablicę rutingu na podstawie obliczonych ścieżek."
  },
  {
    "pytanie": "Jakie są główne wyzwania związane z rutingiem multicast?",
    "odpowiedz": "Tworzenie i zarządzanie drzewem rozgałęziającym się od nadawcy do wszystkich odbiorców.\nEfektywne zarządzanie grupami multicastowymi i adresami.\nZapewnienie, że pakiety multicastowe są dostarczane tylko do zainteresowanych odbiorców.\nIntegracja rutingu multicast z istniejącymi protokołami rutingu unicast."
  },
  {
    "pytanie": "Jakie są główne zalety i wady rutingu wektora odległości?",
    "odpowiedz": "Zalety:\nProstsza implementacja.\nMniejsza złożoność komunikacyjna, komunikacja tylko między sąsiadami.\nWady:\nMożliwość wystąpienia pętli routingu.\nProblem odliczania w nieskończoność, gdzie złe wieści propagują się powoli.\nZmienny czas zbieżności."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu RIP?",
    "odpowiedz": "RIP (Routing Information Protocol) jest protokołem rutingu wektora odległości.\nUżywa liczby skoków (hops) jako metryki do wyboru tras.\nMaksymalna liczba skoków to 15, co ogranicza skalowalność.\nAktualizacje rutingu są wysyłane co 30 sekund.\nŁatwy do skonfigurowania, ale ma ograniczoną wydajność w dużych sieciach."
  },
  {
    "pytanie": "Jak działa protokół OSPF?",
    "odpowiedz": "OSPF (Open Shortest Path First) jest protokołem rutingu stanu łącza.\nDziała wewnątrz AS.\nUżywa algorytmu Dijkstry do obliczania najkrótszych ścieżek.\nWymienia informacje o stanie łączy za pomocą LSAs (Link State Advertisements).\nZapewnia szybką zbieżność i skalowalność w dużych sieciach."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu multicast w IPv6?",
    "odpowiedz": "IPv6 wprowadza rozszerzoną obsługę multicastu.\nUżywa specjalnych zakresów adresów multicastowych.\nUmożliwia bardziej efektywne przesyłanie danych do wielu odbiorców.\nIntegruje się z protokołami rutingu multicastowego, takimi jak PIM (Protocol Independent Multicast)."
  },
  {
    "pytanie": "Jakie są główne cechy mobilności w sieciach IPv6?",
    "odpowiedz": "Mobilność w IPv6 umożliwia hostom zmianę sieci bez zmiany ich adresu IP.\nUmożliwia utrzymanie połączeń nawet podczas przemieszczania się między różnymi sieciami.\nWykorzystuje mechanizmy takie jak Mobile IPv6, które zapewniają translację adresów i przekierowywanie pakietów.\nZapewnia bezproblemową mobilność i ciągłość komunikacji dla użytkowników mobilnych."
  },
  {
    "pytanie": "Jakie są główne usługi warstwy transportu?",
    "odpowiedz": "Multipleksacja i demultipleksacja\nTransport bezpołączeniowy: UDP\nZasady niezawodnej komunikacji danych\nTransport połączeniowy: TCP, obejmujący strukturę segmentu, niezawodną komunikację, kontrolę przepływu, zarządzanie połączeniem\nMechanizmy kontroli przeciążenia"
  },
  {
    "pytanie": "Jakie są główne komponenty transportu połączeniowego (TCP)?",
    "odpowiedz": "Struktura segmentu TCP\nNiezawodna komunikacja\nKontrola przepływu\nZarządzanie połączeniem"
  },
  {
    "pytanie": "Jakie dokumenty RFC dotyczą protokołu TCP?",
    "odpowiedz": "RFC 793, 1122, 1323, 2018, 2581"
  },
  {
    "pytanie": "Co oznacza komunikacja \"full duplex\" w TCP?",
    "odpowiedz": "Dwukierunkowy przepływ danych na tym samym połączeniu\nMożliwość wysyłania i odbierania danych jednocześnie\nMaksymalny rozmiar segmentu (MRS)"
  },
  {
    "pytanie": "Jakie są cechy transportu połączeniowego w TCP?",
    "odpowiedz": "Inicjalizacja połączenia poprzez wymianę komunikatów kontrolnych\nKontrola przepływu, aby nadawca nie przeciążył odbiorcy\nKomunikacja koniec-koniec (jeden nadawca, jeden odbiorca)\nNiezawodny, uporządkowany strumień bajtów bez granic komunikatów\nBufory u nadawcy i odbiorcy\nKontrola przeciążeń i przepływu poprzez rozmiar okna"
  },
  {
    "pytanie": "Jak wygląda struktura segmentu TCP?",
    "odpowiedz": "Port nadawcy i port odbiorcy\nNumer sekwencyjny\nNumer potwierdzenia\nOkno odbiorcy\nSuma kontrolna\nWskaźniki URG, ACK, PSH, RST, SYN, FIN\nOpcje (zmienna długość)"
  },
  {
    "pytanie": "Jakie flagi znajdują się w segmencie TCP i do czego służą?",
    "odpowiedz": "URG: pilne dane\nACK: potwierdzenie numeru ACK\nPSH: wypchnij dane\nRST, SYN, FIN: zarządzanie połączeniem (inicjalizacja i zamknięcie)"
  },
  {
    "pytanie": "Jak działają numery sekwencyjne i potwierdzenia w TCP?",
    "odpowiedz": "Numery sekwencyjne: numer pierwszego bajtu danych w segmencie\nPotwierdzenia: numer sekwencyjny następnego oczekiwanego bajtu, kumulatywne ACK\nSegmenty mogą być odbierane poza kolejnością, a sposób ich obsługi zależy od implementacji TCP"
  },
  {
    "pytanie": "Jak TCP estymuje czas powrotu (RTT)?",
    "odpowiedz": "MierzoneRTT: czas od wysłania segmentu do otrzymania ACK\nEstymowaneRTT = (1 - α) * EstymowaneRTT + α * MierzoneRTT\nGdzie α zwykle wynosi 0.125, stosując wykładniczą średnią ruchomą"
  },
  {
    "pytanie": "Jak ustala się timeout w TCP?",
    "odpowiedz": "Timeout = EstymowaneRTT + 4 * BłądRTT\nBłądRTT = (1 - β) * BłądRTT + β * |MierzoneRTT - EstymowaneRTT|\nGdzie β zwykle wynosi 0.25"
  },
  {
    "pytanie": "Jak TCP ustawia timeout?",
    "odpowiedz": "Dodaje margines błędu do Estymowanego RTT\nIm większa zmienność MierzoneRTT, tym większy margines błędu\nTimeout jest ustawiany na EstymowaneRTT + 4 * BłądRTT"
  },
  {
    "pytanie": "Jakie zdarzenia mogą powodować retransmisje w TCP?",
    "odpowiedz": "Timeout\nTrzy zduplikowane ACK"
  },
  {
    "pytanie": "Jak działa mechanizm AIMD w TCP?",
    "odpowiedz": "Additive Increase: liniowe zwiększanie rozmiaru okna transmisyjnego po każdym RTT bez straty\nMultiplicative Decrease: zmniejszanie rozmiaru okna transmisyjnego przez podzielenie przez dwa po wykryciu straty pakietu"
  },
  {
    "pytanie": "Jak działa faza powolnego startu (Slow Start) w TCP?",
    "odpowiedz": "Rozmiar okna transmisyjnego zaczyna się od 1 segmentu\nOkno jest zwiększane wykładniczo (podwajanie rozmiaru okna co RTT) po każdym potwierdzeniu ACK\nKontynuowane aż do wykrycia straty pakietu"
  },
  {
    "pytanie": "Co się dzieje po otrzymaniu trzech zduplikowanych ACK w TCP?",
    "odpowiedz": "Rozmiar okna transmisyjnego jest dzielony przez dwa (Multiplicative Decrease)\nPróg powolnego startu jest ustawiany na połowę rozmiaru okna przed stratą\nOkno jest zwiększane liniowo (Additive Increase)"
  },
  {
    "pytanie": "Jakie są główne scenariusze retransmisji w TCP?",
    "odpowiedz": "Strata pakietu: wykryta przez timeout lub trzy zduplikowane ACK\nStrata ACK: nadawca nie otrzymuje potwierdzenia i retransmituje pakiet\nTimeout: nadawca retransmituje najstarszy niepotwierdzony pakiet i resetuje timer"
  },
  {
    "pytanie": "Jakie są główne etapy zarządzania połączeniem w TCP?",
    "odpowiedz": "Inicjalizacja połączenia: trzykrotny uścisk dłoni (three-way handshake)\nZarządzanie połączeniem: kontrola przepływu, kontrola przeciążenia, zarządzanie buforami\nZamykanie połączenia: wymiana FIN i ACK, zakończenie połączenia"
  },
  {
    "pytanie": "Jak działa trzykrotny uścisk dłoni (three-way handshake) w TCP?",
    "odpowiedz": "Klient wysyła segment SYN z początkowym numerem sekwencyjnym\nSerwer odpowiada segmentem SYN-ACK, potwierdzając SYN klienta i wysyła własny SYN\nKlient wysyła segment ACK potwierdzający SYN serwera\nPo tym procesie połączenie jest nawiązane"
  },
  {
    "pytanie": "Jakie są główne etapy zamykania połączenia TCP?",
    "odpowiedz": "Klient wysyła segment FIN do serwera\nSerwer odbiera FIN, odpowiada ACK, a następnie wysyła własny FIN\nKlient odbiera FIN od serwera, odpowiada ACK\nSerwer odbiera ACK od klienta, po czym połączenie jest zamknięte"
  },
  {
    "pytanie": "Jak działa kontrola przepływu w TCP?",
    "odpowiedz": "Odbiorca TCP ma bufor odbiorcy\nUsługa dopasowania prędkości: nadawca dostosowuje tempo wysyłania do prędkości odbioru danych przez aplikację\nOdbiorca ogłasza wielkość wolnego miejsca w buforze w polu okna (window size)\nNadawca ogranicza rozmiar okna transmisyjnego do wielkości ogłoszonego okna odbiorcy"
  },
  {
    "pytanie": "Jak działa kontrola przepływu TCP w przypadku odbioru segmentów poza kolejnością?",
    "odpowiedz": "Odbiorca ogłasza wolne miejsce poprzez pole okna\nOgranicza rozmiar okna do wolnego miejsca\nGwarantuje, że bufor nie zostanie przepełniony"
  },
  {
    "pytanie": "Co to jest AIMD i jak jest stosowane w TCP?",
    "odpowiedz": "AIMD (Additive Increase Multiplicative Decrease)\nAdditive Increase: liniowe zwiększanie rozmiaru okna transmisyjnego po każdym RTT bez straty\nMultiplicative Decrease: zmniejszanie rozmiaru okna transmisyjnego przez podzielenie przez dwa po wykryciu straty pakietu"
  },
  {
    "pytanie": "Jak działa mechanizm szybkich retransmisji w TCP?",
    "odpowiedz": "Jeśli nadawca otrzyma trzy zduplikowane ACK dla tego samego pakietu, zakłada, że następny segment został utracony\nNatychmiast retransmituje utracony segment bez oczekiwania na timeout"
  },
  {
    "pytanie": "Jakie są główne problemy związane z kontrolą przeciążenia w TCP?",
    "odpowiedz": "Przeciążenie sieci może powodować utratę pakietów i zwiększone opóźnienia\nBrak kontroli przeciążenia prowadzi do przeciążenia sieci\nTCP używa mechanizmów AIMD, powolnego startu i szybkich retransmisji, aby kontrolować przeciążenie"
  },
  {
    "pytanie": "Jakie są główne cechy niezawodnej komunikacji danych w TCP?",
    "odpowiedz": "TCP zapewnia niezawodność poprzez retransmisję utraconych pakietów\nUporządkowany strumień bajtów\nBufory u nadawcy i odbiorcy\nKontrola przepływu i przeciążenia"
  },
  {
    "pytanie": "Jakie są główne elementy algorytmu szybkiej retransmisji?",
    "odpowiedz": "Zliczanie duplikatów ACK dla potwierdzenia tych samych danych\nWarunek uruchomienia szybkiej retransmisji po otrzymaniu trzech zduplikowanych ACK\nRetransmisja segmentu powodującego duplikaty ACK"
  },
  {
    "pytanie": "Jakie są konsekwencje długotrwałych połączeń TCP w kontekście przepustowości?",
    "odpowiedz": "Wysoka przepustowość wymaga dużych rozmiarów okna transmisyjnego\nDługie RTT powodują, że konieczne jest zwiększenie okna do bardzo dużych wartości\nPotrzeba nowych wersji TCP dla bardzo szybkich sieci"
  },
  {
    "pytanie": "Jak TCP osiąga sprawiedliwość w podziale przepustowości między wieloma połączeniami?",
    "odpowiedz": "Mechanizm AIMD pozwala na równomierne dzielenie przepustowości między konkurujące połączenia TCP\nTCP dąży do osiągnięcia sprawiedliwego podziału dostępnej przepustowości poprzez kontrolę wzrostu i zmniejszania okna transmisyjnego"
  },
  {
    "pytanie": "Dlaczego UDP jest mniej sprawiedliwy niż TCP?",
    "odpowiedz": "UDP nie stosuje kontroli przeciążenia i przepływu\nNie dostosowuje prędkości nadawania do dostępnej przepustowości sieci\nKomunikacja strumieniowa używa UDP, co może prowadzić do nierównego podziału zasobów sieciowych"
  },
  {
    "pytanie": "Jakie są główne cechy TCP w porównaniu do UDP?",
    "odpowiedz": "TCP: niezawodny, połączeniowy, uporządkowany, kontrola przepływu, kontrola przeciążenia\nUDP: bezpołączeniowy, nieużywający kontroli przepływu i przeciążenia, niezawodny tylko na poziomie warstwy aplikacji"
  },
  {
    "pytanie": "Jakie są główne cechy implementacji szybkich retransmisji?",
    "odpowiedz": "Szybkie wykrywanie utraty pakietów na podstawie trzech zduplikowanych ACK\nRedukcja czasu odzyskiwania z utraty pakietów\nPoprawa wydajności TCP w warunkach przeciążenia"
  },
  {
    "pytanie": "Jakie są główne wyzwania związane z kontrolą przeciążenia w TCP?",
    "odpowiedz": "Dynamika zmian w sieci, co powoduje zmienne RTT i koszty przesyłania\nBalansowanie między szybkim odzyskiwaniem z utraty pakietów a minimalizowaniem retransmisji\nZapobieganie oscylacjom rozmiaru okna transmisyjnego w warunkach zmiennych obciążeń sieci"
  },
  {
    "pytanie": "Jakie są główne etapy algorytmu szybkiej retransmisji w TCP?",
    "odpowiedz": "Nadawca otrzymuje trzy zduplikowane ACK dla tego samego segmentu\nZakłada, że segment następujący po potwierdzonym został utracony\nNatychmiast retransmituje utracony segment bez oczekiwania na timeout"
  },
  {
    "pytanie": "Jak TCP zarządza oknem transmisyjnym w fazie unikania przeciążenia?",
    "odpowiedz": "Gdy rozmiar okna transmisyjnego przekracza próg, TCP przechodzi w stan unikania przeciążenia\nOkno transmisyjne jest zwiększane liniowo (Additive Increase) po każdym RTT bez strat\nZapobiega dalszemu wykładniczemu wzrostowi okna"
  },
  {
    "pytanie": "Co to jest \"goodput\" w kontekście przepustowości TCP?",
    "odpowiedz": "Goodput to rzeczywista przepustowość użyteczna, czyli ilość danych aplikacji przesyłanych w jednostce czasu\nIgnoruje dane związane z retransmisjami i kontrolą przeciążenia"
  },
  {
    "pytanie": "Jakie są główne cele mechanizmu kontroli przeciążenia w TCP?",
    "odpowiedz": "Zapewnienie sprawiedliwego podziału przepustowości między połączenia TCP\nZapobieganie przeciążeniu sieci poprzez dostosowanie prędkości transmisji\nOptymalizacja wykorzystania zasobów sieciowych, minimalizacja opóźnień i strat pakietów"
  },
  {
    "pytanie": "Jakie są główne scenariusze utraty segmentów w TCP?",
    "odpowiedz": "Timeout: retransmisja segmentu po upływie czasu oczekiwania\nDuplikaty ACK: szybkie wykrywanie utraty segmentów i retransmisja"
  },
  {
    "pytanie": "Jakie są główne elementy zarządzania połączeniem w TCP?",
    "odpowiedz": "Inicjalizacja połączenia (three-way handshake)\nKontrola przepływu\nKontrola przeciążenia\nZamykanie połączenia (four-way handshake)"
  },
  {
    "pytanie": "Jakie są zalety stosowania TCP do komunikacji strumieniowej?",
    "odpowiedz": "Niezawodność i uporządkowanie przesyłanych danych\nKontrola przepływu i przeciążenia zapewniające stabilność połączenia\nBufory umożliwiające płynne przesyłanie danych"
  },
  {
    "pytanie": "Jakie są główne cechy stosowanego przez TCP mechanizmu kontroli przepływu?",
    "odpowiedz": "Dopasowanie prędkości wysyłania danych do możliwości odbiorcy\nOdbiorca ogłasza wielkość wolnego miejsca w buforze\nNadawca ogranicza rozmiar okna transmisyjnego do ogłoszonego rozmiaru okna odbiorcy"
  },{
    "pytanie": "Jakie są funkcje warstwy sieci hosta i rutera?",
    "odpowiedz": "Protokół rutingu\nWybór ścieżek\nProtokół RIP, OSPF, BGP\nProtokół IP\nAdresowanie\nFormat pakietu\nPrzetwarzanie pakietów\nProtokół ICMP\nRaportowanie błędów\n\"Sygnalizacja\" ruterów\nWarstwa transportu: TCP, UDP\nWarstwa łącza\nWarstwa fizyczna"
  },
  {
    "pytanie": "Czym jest adres IP i jak jest przypisany do interfejsów w sieci?",
    "odpowiedz": "Adres IP to 32-bitowy identyfikator hosta lub interfejsu rutera.\nKażdy interfejs w urządzeniu ma przypisany unikalny adres IP.\nRutery zazwyczaj posiadają wiele interfejsów, a hosty mogą mieć wiele interfejsów, z których każdy ma przypisany adres IP."
  },
  {
    "pytanie": "Jakie są części składowe adresu IP?",
    "odpowiedz": "Część sieciowa (bardziej znaczące bity)\nCzęść hosta (mniej znaczące bity)\nAdres sieci definiuje, które interfejsy mogą się bezpośrednio komunikować bez pośrednictwa rutera."
  },
  {
    "pytanie": "Jakie są klasy adresów IP i ich zakresy?",
    "odpowiedz": "Klasa A: 1.0.0.0 do 127.255.255.255\nKlasa B: 128.0.0.0 do 191.255.255.255\nKlasa C: 192.0.0.0 do 223.255.255.255\nKlasa D (multicast): 224.0.0.0 do 239.255.255.255"
  },
  {
    "pytanie": "Co to jest CIDR i jakie są jego zalety w adresowaniu IP?",
    "odpowiedz": "CIDR (Classless Inter-Domain Routing) to metoda adresowania bez użycia klas.\nPozwala na bardziej efektywne wykorzystanie przestrzeni adresowej poprzez dowolną długość części sieciowej adresu.\nFormat adresu: a.b.c.d/x, gdzie x jest liczbą bitów w części sieciowej."
  },
  {
    "pytanie": "Jak host otrzymuje adres IP w sieci?",
    "odpowiedz": "Adres IP może być przypisany statycznie przez administratora lub dynamicznie za pomocą DHCP (Dynamic Host Configuration Protocol).\nDHCP umożliwia hostom automatyczne uzyskiwanie adresów IP oraz przedłużanie czasu korzystania z adresów."
  },
  {
    "pytanie": "Jak działa DHCP i jakie są jego etapy?",
    "odpowiedz": "Host wysyła komunikat DHCP Discover.\nSerwer DHCP odpowiada komunikatem DHCP Offer z proponowanym adresem IP.\nHost wysyła komunikat DHCP Request, żądając przydzielenia adresu.\nSerwer DHCP wysyła komunikat DHCP Ack, potwierdzający przydzielenie adresu."
  },
  {
    "pytanie": "Co to jest NAT i jakie są jego zalety?",
    "odpowiedz": "NAT (Network Address Translation) pozwala na tłumaczenie adresów IP wewnętrznych na jeden adres IP zewnętrzny.\nZalety:\nOszczędność przestrzeni adresowej IP.\nZwiększenie bezpieczeństwa poprzez ukrycie wewnętrznych adresów.\nMożliwość zmiany adresów wewnętrznych bez wpływu na adresy zewnętrzne."
  },
  {
    "pytanie": "Jak działa NAT w przypadku wychodzących i przychodzących pakietów?",
    "odpowiedz": "Wychodzące pakiety: Adres IP źródła i numer portu są zastępowane przez adres IP NAT i nowy numer portu.\nPrzychodzące pakiety: Adres IP NAT i numer portu są zastępowane przez oryginalny adres IP źródła i numer portu z tablicy translacji NAT."
  },
  {
    "pytanie": "Jakie są główne protokoły rutingu wewnętrznego (IGP)?",
    "odpowiedz": "RIP (Routing Information Protocol)\nOSPF (Open Shortest Path First)\nIGRP (Interior Gateway Routing Protocol) – własny protokół firmy Cisco"
  },
  {
    "pytanie": "Na czym polega algorytm rutingu RIP?",
    "odpowiedz": "RIP używa algorytmu wektora odległości.\nMiara odległości to liczba kroków (maksymalnie 15 kroków).\nRutery wymieniają informacje o trasach ze swoimi sąsiadami co 30 sekund poprzez komunikaty UDP."
  },
  {
    "pytanie": "Jak RIP radzi sobie z awarią łącza?",
    "odpowiedz": "Jeśli nie ma ogłoszenia od sąsiada przez 180 sekund, uznaje się, że łącze jest niedostępne.\nŚcieżki przez tego sąsiada stają się nieważne, a informacja o awarii jest rozsyłana do innych ruterów.\nUżywany jest mechanizm \"zatrutego powrotu\" (połączenia z odległością 16 kroków) aby uniknąć pętli routingu."
  },
  {
    "pytanie": "Czym jest OSPF i jakie są jego główne cechy?",
    "odpowiedz": "OSPF (Open Shortest Path First) to protokół rutingu stanu łącza.\nUżywa algorytmu Dijkstry do obliczania najkrótszych ścieżek.\nRutery rozsyłają ogłoszenia stanu łącza (LSA) do całego AS.\nWspiera hierarchiczny ruting w dużych sieciach poprzez podział na obszary."
  },
  {
    "pytanie": "Jakie zaawansowane cechy posiada OSPF?",
    "odpowiedz": "Autentykacja komunikatów OSPF dla bezpieczeństwa.\nObsługa wielu ścieżek o tym samym koszcie (multipath).\nMożliwość przypisania różnych kosztów dla różnych typów usług (QoS).\nIntegracja rutingu unicast i multicast poprzez MOSPF."
  },
  {
    "pytanie": "Czym jest hierarchiczny OSPF?",
    "odpowiedz": "Hierarchiczny OSPF dzieli sieć na obszary lokalne i szkieletowe.\nRutery brzegowe obszarów podsumowują informacje o trasach w swoim obszarze i ogłaszają je do szkieletu.\nRutery szkieletowe realizują ruting OSPF między obszarami i połączeniami zewnętrznymi."
  },
  {
    "pytanie": "Co to jest BGP i do czego służy?",
    "odpowiedz": "BGP (Border Gateway Protocol) to standardowy protokół rutingu zewnętrznego (EGP) używany między systemami autonomicznymi (AS) w Internecie.\nUżywa algorytmu wektora ścieżek, gdzie każda ścieżka to ciąg AS prowadzący do celu.\nPozwala na definiowanie polityk routingu i kontrolę nad trasami poprzez atrybuty tras."
  },
  {
    "pytanie": "Jakie są główne komunikaty w BGP?",
    "odpowiedz": "OPEN: Inicjalizuje połączenie TCP z sąsiadem BGP i uwierzytelnia nadawcę.\nUPDATE: Ogłasza nowe ścieżki lub usuwa istniejące.\nKEEPALIVE: Utrzymuje otwarte połączenie bez przesyłania aktualizacji.\nNOTIFICATION: Informuje o błędach i zamyka połączenie."
  },
  {
    "pytanie": "Jak BGP kontroluje, kto może rutować przez daną sieć?",
    "odpowiedz": "Rutery BGP filtrują ogłoszenia ścieżek na podstawie polityk routingu.\nMożna określić, które ścieżki są akceptowane lub odrzucane, aby kontrolować przepływ ruchu.\nPrzykładowo, ruter może nie ogłaszać tras do konkurencyjnych AS, aby zmusić ruch do przechodzenia przez preferowane AS."
  },
  {
    "pytanie": "Jakie są główne różnice między rutingiem wewnętrznym a zewnętrznym?",
    "odpowiedz": "Polityka:\nRuting zewnętrzny umożliwia kontrolę nad tym, kto kieruje ruch przez sieć.\nRuting wewnętrzny jest zarządzany przez jednego administratora, więc polityka jest mniej istotna.\nSkalowalność:\nRuting hierarchiczny zmniejsza rozmiar tablic routingu i ruch komunikacyjny.\nWydajność:\nRuting wewnętrzny może skupiać się na optymalnej wydajności.\nRuting zewnętrzny może bardziej uwzględniać polityki niż wydajność."
  },
  {
    "pytanie": "Jakie są główne zmiany w protokole IPv6 w porównaniu do IPv4?",
    "odpowiedz": "Adresy IPv6 są 128-bitowe, co znacznie zwiększa przestrzeń adresową.\nProstszy nagłówek pakietu, co usprawnia przetwarzanie.\nObsługa autokonfiguracji adresów (stateless address autoconfiguration).\nWbudowane mechanizmy bezpieczeństwa (IPSec).\nNowy adres anycast.\nEliminacja potrzeby stosowania NAT."
  },
  {
    "pytanie": "Jakie są główne elementy nagłówka pakietu IPv6?",
    "odpowiedz": "Priority: Określa priorytet pakietu w przepływie.\nFlow Label: Identyfikuje pakiety należące do jednego przepływu.\nNext Header: Określa następną część nagłówka IPv6 lub nagłówek protokołu wyższej warstwy.\nAdresy źródłowy i docelowy: 128-bitowe adresy IP.\nPayload Length: Długość danych (zmienna długość)."
  },
  {
    "pytanie": "Jakie są główne metody przejścia z IPv4 na IPv6?",
    "odpowiedz": "Dual Stack: Rutery mają podwójny stos protokołów IPv4 i IPv6, co umożliwia komunikację w obu formatach.\nTunelowanie: Pakiety IPv6 są kapsułkowane w pakiety IPv4 i przesyłane przez sieci IPv4, umożliwiając komunikację między routerami IPv6."
  },
  {
    "pytanie": "Jak działa traceroute?",
    "odpowiedz": "Traceroute wysyła serię pakietów z rosnącym wartością TTL (Time To Live).\nKażdy ruter na trasie zmniejsza TTL i gdy TTL osiąga 0, ruter wysyła komunikat ICMP \"time exceeded\".\nPozwala to na śledzenie trasy pakietu od źródła do celu, wyświetlając adresy IP ruterów na ścieżce."
  },
  {
    "pytanie": "Jakie są główne funkcje protokołu ICMP?",
    "odpowiedz": "Raportowanie błędów, takich jak niedostępny host, sieć, port czy protokół.\nObsługa komunikatów żądania i odpowiedzi echo (używane przez polecenie ping).\nPrzekazywanie informacji o problemach z trasą pakietów."
  },
  {
    "pytanie": "Jakie są główne zalety rutingu hierarchicznego?",
    "odpowiedz": "Skalowalność: Umożliwia zarządzanie dużymi sieciami poprzez podział na mniejsze, autonomiczne systemy.\nRedukcja złożoności: Ogranicza rozmiar tablic routingu i ruch komunikacyjny.\nWydajność: Umożliwia optymalizację tras wewnątrz i między systemami autonomicznymi."
  },
  {
    "pytanie": "Czym są systemy autonomiczne (AS) w kontekście rutingu w Internecie?",
    "odpowiedz": "AS to zbiór ruterów działających pod wspólną administracją i korzystających z tego samego protokołu rutingu wewnętrznego.\nAS są podstawowymi jednostkami w rutingu hierarchicznym i są połączone ze sobą poprzez bramy brzegowe (Border Gateways).\nAS mogą być małe (z jednym połączeniem) lub duże (z wieloma połączeniami)."
  },
  {
    "pytanie": "Jak działa protokół BGP w rutingu między AS?",
    "odpowiedz": "BGP rutuje między AS, wymieniając informacje o ścieżkach do różnych sieci.\nKażda ścieżka to ciąg AS, przez które pakiet musi przejść, aby dotrzeć do celu.\nRutery BGP wybierają najlepszą ścieżkę na podstawie atrybutów tras, takich jak AS_PATH, NEXT_HOP, LOCAL_PREF.\nBGP pozwala na definiowanie polityk routingu i kontrolę nad trasami."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu RIP?",
    "odpowiedz": "RIP (Routing Information Protocol) to protokół rutingu wektora odległości.\nUżywa liczby skoków (hops) jako metryki do wyboru tras.\nMaksymalna liczba skoków to 15, co ogranicza skalowalność.\nAktualizacje routingu są wysyłane co 30 sekund poprzez pakiety UDP.\nProsty do skonfigurowania, ale ma ograniczoną wydajność w dużych sieciach."
  },
  {
    "pytanie": "Jakie są główne różnice między RIP a OSPF?",
    "odpowiedz": "RIP:\nAlgorytm wektora odległości.\nMaksymalnie 15 skoków.\nAktualizacje co 30 sekund.\nProsty, ale mniej skalowalny.\nOSPF:\nAlgorytm stanu łącza.\nWykorzystuje algorytm Dijkstry do obliczania najkrótszych ścieżek.\nSzybsza i bardziej stabilna zbieżność.\nLepsza skalowalność w dużych sieciach."
  },
  {
    "pytanie": "Co to jest fragmentacja IP i jak jest obsługiwana w IPv4?",
    "odpowiedz": "Fragmentacja IP polega na dzieleniu dużych pakietów na mniejsze fragmenty, aby zmieściły się w MTU łącza.\nKażdy fragment ma ten sam identyfikator (ID), określoną pozycję w oryginalnym pakiecie oraz flagę fragmentacji.\nDefragmentacja odbywa się na końcu trasy, gdzie wszystkie fragmenty są łączone w oryginalny pakiet."
  },
  {
    "pytanie": "Jakie są główne zastosowania protokołu ICMP?",
    "odpowiedz": "Ping: Sprawdzenie dostępności hosta poprzez wysyłanie komunikatów echo request i odbieranie echo reply.\nTraceroute: Śledzenie trasy pakietu przez zwiększanie wartości TTL i odbieranie komunikatów ICMP \"time exceeded\" od ruterów na trasie."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu BGP?",
    "odpowiedz": "BGP jest protokołem rutingu zewnętrznego (EGP) używanym między systemami autonomicznymi (AS) w Internecie.\nUżywa algorytmu wektora ścieżek, gdzie każda ścieżka to ciąg AS prowadzący do celu.\nRutery BGP wybierają najlepszą ścieżkę na podstawie atrybutów tras, takich jak AS_PATH, NEXT_HOP, LOCAL_PREF.\nBGP umożliwia definiowanie polityk routingu i kontrolę nad trasami."
  },
  {
    "pytanie": "Jakie są główne etapy przekazywania pakietu IP od źródła do celu?",
    "odpowiedz": "Host źródłowy sprawdza tablicę routingu, aby znaleźć najbliższą trasę do celu.\nJeśli cel jest w tej samej sieci, pakiet jest wysyłany bezpośrednio.\nJeśli cel jest w innej sieci, pakiet jest wysyłany do następnego ruteru na trasie.\nProces powtarza się na każdym ruterze aż do osiągnięcia celu."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu IPv6?",
    "odpowiedz": "Adresy IPv6 są 128-bitowe, co znacznie zwiększa przestrzeń adresową.\nProstszy i bardziej efektywny nagłówek pakietu.\nObsługa autokonfiguracji adresów (stateless address autoconfiguration).\nWbudowane mechanizmy bezpieczeństwa (IPSec).\nNowy adres anycast umożliwiający najlepszą dostępność serwerów.\nEliminacja potrzeby stosowania NAT dzięki dużej przestrzeni adresowej."
  },
  {
    "pytanie": "Jak działa protokół NAT i jakie są jego ograniczenia?",
    "odpowiedz": "NAT tłumaczy adresy IP wewnętrzne na jeden adres zewnętrzny, umożliwiając wielokrotne połączenia przez ten sam adres.\nOgraniczenia:\nRozmiar tablicy translacji NAT.\nKontrowersje związane z zasadą koniec-koniec rutingu.\nProblemy z aplikacjami P2P, które wymagają bezpośrednich połączeń.\nPotrzeba przejścia na IPv6 w celu rozwiązania problemów z NAT."
  },
  {
    "pytanie": "Jakie są główne zalety i wady stosowania NAT?",
    "odpowiedz": "Zalety:\nOszczędność przestrzeni adresowej IP.\nZwiększenie bezpieczeństwa poprzez ukrycie wewnętrznych adresów.\nMożliwość zmiany adresów wewnętrznych bez wpływu na adresy zewnętrzne.\nWady:\nOgraniczenie liczby jednoczesnych połączeń (maksymalnie 60,000 dla 16-bitowych portów).\nZłożoność konfiguracji i utrzymania tablic translacji.\nProblemy z aplikacjami wymagającymi bezpośrednich połączeń."
  },
  {
    "pytanie": "Jakie są główne etapy działania protokołu OSPF?",
    "odpowiedz": "Rutery rozsyłają ogłoszenia stanu łącza (LSA) do wszystkich ruterów w obszarze.\nKażdy ruter buduje mapę topologii sieci na podstawie otrzymanych LSA.\nRutery używają algorytmu Dijkstry do obliczania najkrótszych tras do wszystkich sieci.\nTablice routingu są aktualizowane na podstawie obliczonych tras."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu OSPF w kontekście bezpieczeństwa?",
    "odpowiedz": "OSPF obsługuje autentykację komunikatów, co zapobiega złośliwym zmianom routingu.\nUmożliwia stosowanie różnych metod autentykacji, takich jak hasła tekstowe czy kryptograficzne."
  },
  {
    "pytanie": "Jakie są główne wyzwania związane z rutingiem multicast?",
    "odpowiedz": "Tworzenie i zarządzanie drzewem multicastowym od nadawcy do wszystkich odbiorców.\nEfektywne zarządzanie grupami multicastowymi i adresami.\nZapewnienie, że pakiety multicastowe są dostarczane tylko do zainteresowanych odbiorców.\nIntegracja rutingu multicastowego z istniejącymi protokołami rutingu unicast."
  },
  {
    "pytanie": "Jakie są główne cechy protokołu ICMPv6?",
    "odpowiedz": "ICMPv6 jest nową wersją ICMP dla IPv6.\nObsługuje dodatkowe komunikaty, takie jak \"Packet Too Big\".\nUmożliwia zarządzanie grupami multicast.\nIntegruje funkcje DHCP poprzez Neighbor Discovery."
  },
  {
    "pytanie": "Jakie są główne zalety rutingu hierarchicznego w dużych sieciach?",
    "odpowiedz": "Redukuje rozmiar tablic routingu i ruch komunikacyjny.\nUmożliwia skalowalność poprzez podział na mniejsze, autonomiczne systemy.\nPoprawia wydajność rutingu poprzez optymalizację tras wewnątrz i między systemami autonomicznymi."
  }
  ]
  