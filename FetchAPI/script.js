var sviProizvodi;
podaci = () => {
    fetch("http://onlineshop.wrd.app.fit.ba/api/ispit20190914/Narudzba/GetProizvodiAll")
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Geska: ' +
                        response.status);
                    return;
                }
                response.json().then((data) => {    //ovo data imenovanje podataka iz bodya striktno u ovoj funkciji
                    console.log(data);
                    sviProizvodi = data;
                    popuniPodatke(data);
                });
            }
        )
        .catch((err) => {
            console.log('Fetch Greska :-S', err);
        });
}



//pretrazuje podatke sa APIa
popuniPodatke = (podaci) => {
    for (let i = 0; i < podaci.length; i++) {


        //pravi element, appenda za id definisan na htmlu, isti ispisuje
        let IDproizvoda = document.createElement("p");
        containerI.appendChild(IDproizvoda);
        IDproizvoda.innerHTML = "ID proizvoda: " + podaci[i].proizvodID;


        let nazivProizvoda = document.createElement("p");
        containerI.appendChild(nazivProizvoda);
        nazivProizvoda.innerHTML = "Naziv proizvoda: " + podaci[i].naziv;

        //isto kao ostalo samo se pravi img element i postavlja atribut source width i height
        let slikaProizvoda = document.createElement("img");
        slikaProizvoda.setAttribute("src", podaci[i].slikaUrl);
        slikaProizvoda.setAttribute("width", "200");
        slikaProizvoda.setAttribute("height", "200");
        containerI.appendChild(slikaProizvoda);
        slikaProizvoda.innerHTMl = "Slika: " + podaci[i].slikaUrl;

        let cijena = document.createElement("p");
        containerI.appendChild(cijena);
        cijena.innerHTML = "Cijena proizvoda: " + podaci[i].cijenaPoKvadratu;

    }
}








