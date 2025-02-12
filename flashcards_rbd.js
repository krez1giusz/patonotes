const flash_cards_rbd = [
    {
        "pytanie": "Instrukcja SELECT służy do:",
        "odpowiedz": "sprowadzania rekordów z bazy danych"
    },
    {
        "pytanie": "Instrukcja INSERT służy do:",
        "odpowiedz": "wstawiania rekordów do bazy danych"
    },
    {
        "pytanie": "Instrukcja DELETE służy do:",
        "odpowiedz": "usuwania rekordów z bazy danych"
    },
    {
        "pytanie": "Instrukcja UPDATE służy do:",
        "odpowiedz": "aktualizacji rekordów w bazie danych"
    },
    {
        "pytanie": "INDEKS w bazie danych przyśpiesza:",
        "odpowiedz": "wyszukiwania rekordów w bazie danych"
    },
    {
        "pytanie": "Instrukcja COMMIT służy do:",
        "odpowiedz": "zatwierdzania zmian w bazie danych"
    },
    {
        "pytanie": "Instrukcja ROLLBACK służy do:",
        "odpowiedz": "wycofywania zmian w bazie danych"
    },
    {
        "pytanie": "Instrukcja GRANT służy do:",
        "odpowiedz": "przyznawania uprawnień w bazie danych"
    },
    {
        "pytanie": "Instrukcja ALTER TABLE służy do:",
        "odpowiedz": "zmiany schematu tabeli"
    },
    {
        "pytanie": "Instrukcja REVOKE służy do:",
        "odpowiedz": "odbierania uprawnień w bazie danych"
    },
    {
        "pytanie": "Jaka jest wartość wyrażenia Null=Null:",
        "odpowiedz": "NULL"
    },
    {
        "pytanie": "Jaka jest wartość wyrażenia True OR Null:",
        "odpowiedz": "True"
    },
    {
        "pytanie": "Jaka jest wartość wyrażenia False OR Null:",
        "odpowiedz": "NULL"
    },
    {
        "pytanie": "Jaka jest wartość wyrażenia False AND Null:",
        "odpowiedz": "False"
    },
    {
        "pytanie": "Jaka jest wartość wyrażenia NOT Null:",
        "odpowiedz": "NULL"
    },
    {
        "pytanie": "Co będzie wynikiem realizacji instrukcji SELECT * FROM Emp WHERE EmpNo=EmpNo OR EmpNo=NULL:",
        "odpowiedz": "relacja Emp"
    },
    {
        "pytanie": "Co będzie wynikiem realizacji instrukcji SELECT * FROM Emp WHERE EmpNo=EmpNo AND NULL=EmpNo:",
        "odpowiedz": "relacja pusta"
    },
    {
        "pytanie": "Relacja R ma atrybut a. Jaka liczba może być wynikiem wykonania instrukcji SELECT Count(*) FROM R WHERE a=a:",
        "odpowiedz": "dowolna liczba całkowita"
    },
    {
        "pytanie": "Relacja R ma atrybut a. Jaka liczba może być wynikiem wykonania instrukcji SELECT Count(*) FROM R WHERE a<a:",
        "odpowiedz": "zawsze 0"
    },
    {
        "pytanie": "Encji odpowiada w relacyjnej bazie danych:",
        "odpowiedz": "tabela"
    },
    {
        "pytanie": "Związkowi jednoznacznemu odpowiada w relacyjnej bazie danych:",
        "odpowiedz": "klucz obcy"
    },
    {
        "pytanie": "Związkowi wieloznacznemu odpowiada w relacyjnej bazie danych:",
        "odpowiedz": "tabela"
    },
    {
        "pytanie": "Atrybutowi w relacyjnej bazie danych odpowiada:",
        "odpowiedz": "kolumna w tabeli"
    },
    {
        "pytanie": "Jednoznacznemu identyfikatorowi odpowiada w relacyjnej bazie danych:",
        "odpowiedz": "klucz główny"
    },
    {
        "pytanie": "Spójność referencyjna dotyczy faktu:",
        "odpowiedz": "wartością klucza obcego może być null lub wartość odpowiadającego mu klucza głównego"
    },
    {
        "pytanie": "III postać normalna dotyczy faktu:",
        "odpowiedz": "wartości w kolumnie niekluczowej nie mogą zależeć ani od części klucza ani nawet przechodnio od klucza"
    },
    {
        "pytanie": "Które ze sformułowań są prawdziwe w modelu relacyjnym:",
        "odpowiedz": "wiersze nie powtarzają się, kolejność kolumn jest nieistotna"
    },
    {
        "pytanie": "Które ze sformułowań są prawdziwe w modelu relacyjnym:",
        "odpowiedz": "wiersze nie mają tożsamości obiektowej, związek jednoznaczny reprezentuje się przy pomocy klucza obcego, może być wiele kluczy jednoznacznych, może być wiele kluczy obcych"
    },
    {
        "pytanie": "Które ze sformułowań są prawdziwe w modelu relacyjnym:",
        "odpowiedz": "tabela jest konkretną reprezentacją relacji, dla klucza jednoznacznego jest automatycznie zakładany indeks, dla klucza głównego jest automatycznie zakładany indeks jednoznaczny"
    },
    {
        "pytanie": "Które ze sformułowań są prawdziwe w modelu relacyjnym:",
        "odpowiedz": "klucz główny nie może być częścią klucza obcego, wartości klucza głównego nie mogą się powtarzać"
    },
    {
        "pytanie": "Zależność złączeniowa jest uogólnieniem zależności wielowartościowej w następującym sensie:",
        "odpowiedz": "dotyczy rozbicia tabeli na więcej niż dwie tabele"
    },
    {
        "pytanie": "Postać normalna Boyce'a-Codda dotyczy faktu:",
        "odpowiedz": "każda nietrywialna zależność funkcyjna jest zależnością od nadklucza"
    },
    {
        "pytanie": "Które z poniższych stwierdzeń są prawdziwe:",
        "odpowiedz": "jedyną poprawną, nietrywialną zależnością funkcyjną jest zależność do klucza"
    },
    {
        "pytanie": "Które z poniższych stwierdzeń są prawdziwe:",
        "odpowiedz": "każdy fakt przechowywany w bazie danych powinien być w niej wyrażany tylko na jeden sposób, należy skonsultować z użytkownikiem poprawność skonstruowanego modelu danych, Przy warunkach zakresowych istotna jest kolejność atrybutów w kluczu wyszukiwania, Indeks haszowany na relacji wewnętrznej jest dobry dla metody Index Nested Loops Join, Pogrupowany indeks na B+ drzewie względem kolumn złączenia jest dobry dla metody Sort-Merge Join, Indeks pogrupowany jest użyteczny przy zapytaniach zakresowych a także przy mało-selektywnych zapytaniach równościowych, Aktualizacja pól wyszukiwania w indeksach spowalnia INSERT/DELETE/UPDATE, Tylko jeden indeks może być pogrupowany dla jednej tabeli"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Miasto, Ulica, Kod}, F = {Miasto,Ulica->Kod; Kod->Miasto}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna, II postać normalna, III postać normalna"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Miasto, Ulica, Kod, Poczta}, F = {Miasto,Ulica->Kod; Kod->Miasto; Kod->Poczta}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Miasto, Ulica, Kod, Poczta}, F = {Miasto,Ulica->Kod; Kod->Poczta}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna, II postać normalna"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Miasto, Ulica, Kod}, F = {Miasto,Ulica->Kod}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna, II postać normalna, III postać normalna, postać normalna Boyce'a-Codda"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Ulica, Kod, Sklep}, F = {Ulica->Kod; Sklep->Ulica}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna, II postać normalna"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Ulica, Kod, Sklep}, F = {Ulica->Kod; Ulica, Numer ->Sklep}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Student,Adres,Akademik}, F = {Student->Adres; Akademik->Adres; Student->Akademik}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna, II postać normalna"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Student,Uczelnia,Adres,Klub}, F = {Student->Uczelnia; Klub->Adres}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Student,Uczelnia,Adres,Klub}, F = {Student->Uczelnia; Klub->Adres; Uczelnia->Adres}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna"
    },
    {
        "pytanie": "Dany jest schemat relacyjny R={Student,Uczelnia,Adres,Akademik}, F = {Student, Uczelnia->Klub; Klub->Adres}. W której postaci normalnej jest ten schemat:",
        "odpowiedz": "I postać normalna, II postać normalna"
    },
    {
        "pytanie": "Które ze sformułowań są prawdziwe dla związku nieidentyfikującego w Erwinie:",
        "odpowiedz": "nie wchodzi w skład jednoznacznego identyfikatora encji po stronie „wiele\", jest oznaczany linią przerywaną"
    },
    {
        "pytanie": "Które sformułowania są prawdziwe dla związku identyfikującego w Erwinie:",
        "odpowiedz": "jest oznaczany za pomocą litery P po stronie „jeden\", jest oznaczany linią ciągłą"
    },
    {
        "pytanie": "Więzy referencyjne dotyczą w Erwinie:",
        "odpowiedz": "wykonywania operacji INSERT, DELETE i UPDATE na powiązanych rekordach"
    },
    {
        "pytanie": "W Erwinie czarne kółko stawia się na linii związku:",
        "odpowiedz": "jednoznacznego"
    },
    {
        "pytanie": "W Erwinie encja niezależna to:",
        "odpowiedz": "encja, której jednoznaczny identyfikator nie zawiera klucza obcego"
    },
    {
        "pytanie": "W Erwinie encja zależna to:",
        "odpowiedz": "encja, której jednoznaczny identyfikator zawiera przy najmniej jeden klucz obcy"
    },
    {
        "pytanie": "Studenci mają pomysły. Każdy pomysł dotyczy pewnej rzeczy. Każdy pomysł przychodzi do głowy dokładnie jednemu studentowi. Student może się podzielić pomysłem z kolegami-studentami. Który ze schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych:",
        "odpowiedz": "Studenci(id_studenta, imię, nazwisko, adres) Pomysły(id_pomysłu, rzecz, opis, id_studenta) Koledzy(id_pomysłu, id_kolegi)"
    },
    {
        "pytanie": "Studenci lubią się, są sobie obojętni lub nie znoszą się (nie ma innej możliwości). Który ze schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych:",
        "odpowiedz": "Studenci(id_studenta, imię, nazwisko) Lubi(id_studenta, id_kolegi) Nie_znosi(id_studenta, id_kolegi) Obojętny(id_studenta, id_kolegi)"
    },
    {
        "pytanie": "W domach mieszkają zwierzęta domowe. Niektóre zwierzęta zjadają się wzajemnie. Domy mogą być położone obok siebie. Jaki schemat zgodny z zasadami projektowania schematów baz danych jest najodpowiedniejszy dla organizacji zajmującej się ochroną zwierząt:",
        "odpowiedz": "Domy(id_domu, adres) Zwierzęta(id_zwierzę, id_rodzaju, id_domu) Rodzaje(id_rodzaju, rodzaj) Obok_siebie(id_domu1, id_domu2) Zjada(id_rodz_je, id_rodz_zjadane)"
    },
    {
        "pytanie": "W filmach grają aktorzy. Każdy film ma dokładnie jednego reżysera i jednego lub więcej scenarzystę. Który z poniższych schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych:",
        "odpowiedz": "Filmy(id_filmu, tytuł, id_reżysera, gaża_reżysera) Osoby(id_osoby, nazwisko) Aktorzy(id_aktora, id_filmu, rola, gaża) Scenarzyści(id_scenarzysty, id_filmu, gaża)"
    },
    {
        "pytanie": "Politycy należą do partii politycznych (czasami je zmieniają, czasami dokonują ich podziału). Partie polityczne, przed wyborami, tworzą koalicje wyborcze. Który z poniższych schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych:",
        "odpowiedz": "Politycy(id_polityka, imię, nazwisko) Partie(id_partii, nazwa, od, do) Koalicje(id_koalicji, data_wyborów) Członkowie(id_partii, id_osoby, od, do) W_koalicji(id_partii, id_koalicji, od, do)"
    },
    {
        "pytanie": "Studenci planują, czym chcieliby się zajmować w swojej przyszłej pracy zawodowej i jakie stanowiska chcieliby pełnić. Który z poniższych schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych:",
        "odpowiedz": "Studenci(id_studenta, imię, nazwisko, rok) Zajęcia(id_zajęcia, nazwa) Stanowiska(id_stanowiska, nazwa) Jakie_zajęcie(id_studenta, id_zajęcia) Jakie_stanowisko(id_studenta, id_stanowiska)"
    },
    {
        "pytanie": "W PJWSTK ma powstać baza danych zbierająca informacje o umiejętnościach przydatnych w pracy zawodowej, o przedmiotach, które uczą tych umiejętności oraz o książkach, w których umiejętności są opisane. Który z poniższych schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych:",
        "odpowiedz": "Przedmioty(id_przedmiotu, nazwa, semestr) Książki(ISBN, tytuł, autorzy) Umiejętności(id_umiejętności, id_przedmiotu, nazwa, opis, ISBN, od_strony, do_strony)"
    },
    {
        "pytanie": "W PJWSTK powstaje baza danych z informacjami, jakie oprogramowanie jest zainstalowane w poszczególnych salach - z myślą o prowadzeniu w nich ćwiczeń z odpowiednich przedmiotów. Który z poniższych schematów jest najodpowiedniejszy z punktu widzenia zasad projektowania baz danych:",
        "odpowiedz": "Programy(id_programu, firma, nazwa, wersja) Przedmioty(id_przedmiotu, nazwa) Sale_programy(nr_sali, id_programu, ile_instalacji) Przedmioty_programy(id_przedmiotu, id_programu)"
    },
    {
        "pytanie": "Dana jest tabela Osoby(Imie, Nazwisko, Zarobki). Które z następujących instrukcji są składniowo poprawnymi instrukcjami SQL w Oracle:",
        "odpowiedz": "DELETE FROM Osoby WHERE USER='KOWALSKI'; INSERT INTO Osoby SELECT * FROM Osoby WHERE USER = 'KOWALSKI'; UPDATE Osoby SET Nazwisko=USER; INSERT INTO Osoby SELECT * FROM Osoby WHERE Nazwisko = 'KOWALSKI'; DELETE FROM Osoby WHERE 'JANKOWSKI'='KOWALSKI';"
    },
    {
        "pytanie": "Dane są dwie tabele Osoby(Imie, Nazwisko, Zarobki, Id_działu) oraz Działy(Id_działu, Nazwa). Które z następujących instrukcji są poprawnymi instrukcjami SQL w Oracle:",
        "odpowiedz": "UPDATE Osoby SET Id_działu=NULL; SELECT Osoby.Nazwisko, COUNT(Działy.Nazwa) FROM Osoby, Działy WHERE Osoby.Id_działu=Działy.Id_działu GROUP BY Osoby.Nazwisko; INSERT INTO Osoby(Imie, Nazwisko,Zarobki) VALUES ('Jan', 'Kowalski', 2000);"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące departamenty zatrudniające powyżej trzech pracowników:",
        "odpowiedz": "SELECT deptno, COUNT(*) FROM emp HAVING COUNT (*) > 3 GROUP BY deptno;"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące pracowników zarabiających minimalną pensję na ich stanowiskach pracy:",
        "odpowiedz": "SELECT ename, job, sal FROM emp e WHERE sal = (SELECT MIN(sal)FROM emp WHERE job = e.job);"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące dla każdego departamentu ostatnio zatrudnionych pracowników:",
        "odpowiedz": "SELECT deptno, ename, hiredate FROM emp WHERE (hiredate, deptno) IN"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące pracowników o najniższych zarobkach w ich działach:",
        "odpowiedz": "SELECT ename, sal, deptno FROM emp WHERE (sal, deptno) IN (SELECT MIN(sal), deptno FROM emp GROUP BY deptno);"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące pracowników, których zarobki są wyższe od pensji każdego pracownika z departamentu 30:",
        "odpowiedz": "SELECT ename, sal, job, deptno FROM emp WHERE sal> ALL (SELECT DISTINCT sal FROM emp WHERE deptno = 30);"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące stanowiska pracy występujące w dziale 10 lub w dziale 20:",
        "odpowiedz": "SELECT DISTINCT job FROM emp WHERE deptno = 10 UNION SELECT DISTINCT job FROM emp WHERE deptno = 20"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące stanowiska pracy występujące zarówno w dziale 10 jak i w dziale 20:",
        "odpowiedz": "SELECT DISTINCT job FROM emp WHERE deptno = 10 INTERSECT SELECT DISTINCT job FROM emp WHERE deptno = 20"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące pracowników, którzy zarabiają mniej od swoich kierowników:",
        "odpowiedz": "SELECT e.ename prac_name, e.sal prac_sal, m.ename kier_name, m.sal kier_sal FROM emp e, emp m WHERE e.mgr = m.empno AND e.sal < m.sal"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące średnie zarobki tylko tych departamentów, które zatrudniają więcej niż trzech pracowników:",
        "odpowiedz": "SELECT deptno, AVG(sal) FROM emp GROUP BY deptno HAVING COUNT (*) > 3;"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące stanowiska, na których średni zarobek wynosi 3000 lub więcej:",
        "odpowiedz": "SELECT job, AVG(sal) FROM emp HAVING AVG (sal) >= 3000 GROUP BY job;"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące ilość pracowników w dziale mającym siedzibę w DALLAS:",
        "odpowiedz": "SELECT COUNT (*) FROM emp, dept WHERE dept.loc = 'DALLAS' AND emp.deptno = dept.deptno GROUP BY dept.deptno;"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące średni zarobek pracowników z drugiej klasy zarobkowej:",
        "odpowiedz": "SELECT AVG(sal) FROM emp, salgrade WHERE grade = 2 AND sal BETWEEN losal AND hisal GROUP BY grade"
    },
    {
        "pytanie": "Wskazać poprawne zapytanie SQL znajdujące trzech najlepiej zarabiających pracowników w firmie - ich nazwiska i pensje:",
        "odpowiedz": "SELECT ename, sal FROM emp e WHERE 3 > (SELECT count (*) FROM emp WHERE e.sal < sal);"
    },
    {
        "pytanie": "Które mechanizmy wchodzą w skład oprogramowania strony serwera bazy danych:",
        "odpowiedz": "deklaratywne więzy spójności, wyzwalacze wierszowe"
    },
    {
        "pytanie": "Wśród więzów spójności encji znajdują się:",
        "odpowiedz": "więzy klucza głównego, więzy CHECK, więzy klucza jednoznacznego, więzy NOT NULL"
    },
    {
        "pytanie": "Wśród więzów spójności referencyjnej znajdują się:",
        "odpowiedz": "więzy klucza obcego"
    },
    {
        "pytanie": "Do zapewnienia więzów spójności referencyjnej służą:",
        "odpowiedz": "wyzwalacze, klauzula REFERENCES"
    },
    {
        "pytanie": "Do zapewnienia więzów spójności encji służą:",
        "odpowiedz": "wyzwalacze, klauzula CHECK, indeksy"
    },
    {
        "pytanie": "Które akcje referencyjne są dostępne w Oracle:",
        "odpowiedz": "RESTRICTED, CASCADE"
    },
    {
        "pytanie": "Polecenia ROLLBACK i COMMIT dotyczą poleceń SQL:",
        "odpowiedz": "wszystkich poleceń SQL zmieniających zawartość tabel"
    },
    {
        "pytanie": "Funkcja NVL służy do:",
        "odpowiedz": "Zamiany napotkanej w tabeli wartości z „NULL\" na podaną w argumencie wartość, Zamiany wartości zmiennej z „NULL\" na podaną w argumencie wartość"
    },
    {
        "pytanie": "Użycie klauzuli UNIQUE w deklaracji pola tabeli instrukcji CREATE TABLE oznacza, że:",
        "odpowiedz": "wartości w tym polu nie mogą się powtarzać"
    },
    {
        "pytanie": "Użycie klauzuli PRIMARY KEY deklaracji pola tabeli instrukcji CREATE TABLE powoduje, że:",
        "odpowiedz": "To pole staje się polem klucz głównego, W polu tym nie może wystąpić wartość „NULL\", Na tej kolumnie (polu) zostanie automatycznie założony indeks"
    },
    {
        "pytanie": "Instrukcja SELECT Table_Name FROM User_Tables:",
        "odpowiedz": "Wypisuje nazwy kolumn z tabeli User_Tables, Zwraca nazwy tabel znajdujących się w obszarze tabel użytkownika"
    },
    {
        "pytanie": "Sekwencja (SEQUENCE) to:",
        "odpowiedz": "Obiekt przechowywany w bazie danych, służący do generowania kluczy głównych i jednoznacznych"
    },
    {
        "pytanie": "Instrukcja COMMIT:",
        "odpowiedz": "Dokonuje trwałej zmiany w zawartości table bazy danych, Wszystkich poleceń INSERT, UPDATE albo DELETE wydanych od ostatniego polecenia COMMIT albo ROLLBACK"
    },
    {
        "pytanie": "Obiektowa baza danych w Oracle obejmuje:",
        "odpowiedz": "kolekcje, typy obiektowe, dziedziczenie, tabele zagnieżdżone, perspektywy obiektowe"
    },
    {
        "pytanie": "W kolumnach bazy danych Oracle można przechowywywać:",
        "odpowiedz": "duże obiekty binarne, duże obiekty znakowe, wskaźniki do obiektów, zagnieżdżone tabele"
    },
    {
        "pytanie": "W bazie danych Oracle można zmieniać zawartość następujących typów obiektów:",
        "odpowiedz": "BLOB, CLOB, NCLOB"
    }
]