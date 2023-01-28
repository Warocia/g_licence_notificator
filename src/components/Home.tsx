import React from 'react'
import './Home.css';

export default function Home() {
  return (
    <div className="white-font">
        <p>
          Lisenssi muistikirja on työkalu, jolla voit hallita lisenssejä. Se auttaa sinua pitämään kirjaa kaikista lisensseistä, 
          niiden voimassaolon päivämääristä ja niiden lisätiedoista. 
          Tässä on joitain vinkkejä käyttämiseen:
        </p>
        <ul>
        <li>Lisää uusi lisenssi: Kirjoita lisenssin numero ja lisää se painamalla "Lisää" -painiketta. Voit myös lisätä lisenssin voimassaolon päivämäärän ja muut tiedot.</li>
        <li>Poista lisenssi: Voit poistaa lisenssin valitsemalla sen ja käyttämällä "Poista" -painiketta.</li>
        <li>Muistutukset: Aseta muistutuksia lisenssin voimassaolon päättymisestä, jotta saat ilmoituksen ennen kuin lisenssi vanhenee.</li>
        <li>Yhteistyö: jos teet yhteistyötä muiden kanssa, voit jakaa lisenssi muistikirjan tiedot kollegoidesi kanssa, jotta tiedot ovat ajan tasalla kaikille.</li>
      </ul>
      <p>Nämä ovat vain esimerkkejä toiminnoista, joita lisenssi muistikirja saattaa tarjota. Tarkista käytössäsi olevan sovelluksen toiminnot ja käytä niitä tukemaan lisenssien hallintaasi.</p>
  </div>
  )
}