## BornFight Assigment

Tvoj zadatak je napraviti web aplikaciju koja prikazuje listu albuma i detalje izvođača. Zadatak možeš riješiti na način koji ti se čini najprikladnijim. Na rješavanje zadatka možeš potrošiti onoliko vremena koliko smatraš da je dovoljno da pokažeš što znaš. Prilikom kreiranja web aplikacije, stavi naglasak na funkcionalnost, ali gledat ćemo i vizualni dojam.

#### Funkcionalnosti

1. Aplikacija treba imati dvije rute
   * / - na ovoj ruti se nalazi lista svih albuma
     * ruta prihvaća opcionalni query parametar “limit” koji definira limit za request na api
     * primjer /?limit=5
     * ako query parametar nije naveden, default limit je 10
     * prikazati sve informacije o albumu i izvođaču
     * klik na ime izvođača vodi na njegov single page
   * /artist/{artist_id} - na ovoj ruti nalazi se prikaz jednog izvođača
     * primjer /artist/2
     * potrebno je prikazati sve njegove albume 
2. Omogućiti filtriranje albuma preko API-ja 
   * primjer http://localhost:3004/albums/?q=when
3. Omogućiti označavanje albuma kao “favorite”
4. Responsive - može biti vrlo jednostavan, no layout mora raditi

#### Dodatne napomene
mock API sa instalacijskim postupkom se nalazi u prilogu  
![main screen mock][asset1.jpg]  
![artist screen mock][asset2.jpg]  

#### Dodatna pravila

1. Dozvoljeno je korištenje modernog JavaScripta i TypeScripta
2. Nije dozvoljeno korištenje UI frameworka ili CSS biblioteka (react-bootstrap, bootstrap,..)
3. Aplikacija treba raditi u zadnje dvije verzije browsera
