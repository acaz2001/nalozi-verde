'use client'
import { Naslov} from "../components/typography/Kontent"
// import { PDFViewer } from "@react-pdf/renderer";
// import MyDocument from "../components/pdf/MyDocument"

const test = {
  ime: 'Aca Zivkovic',
  brojTelefona: '0603170707',
  datum: 'novembar 28 2026',
  proizvod: [
    {
      imeProizvoda: 'Flot 4mm',
      obradaProizvoda: 'Kp obrada',
      sirinaProizvoda: 200,
      duzinaProizvoda: 200,
      uslugaProizvoda: 'Montaza u radnji',
      brojKomadaProizvoda: 3,
      cena: 15000,
      _id: 15456415  
    },
    {
      imeProizvoda: 'Flot 4mm',
      obradaProizvoda: 'Kp obrada',
      sirinaProizvoda: 200,
      duzinaProizvoda: 200,
      uslugaProizvoda: 'Montaza u radnji',
      brojKomadaProizvoda: 3,
      cena: 15000,
      _id: 15456415  
    },
    {
      imeProizvoda: 'Flot 4mm',
      obradaProizvoda: 'Kp obrada',
      sirinaProizvoda: 110,
      duzinaProizvoda: 110,
      uslugaProizvoda: 'Montaza u radnji',
      brojKomadaProizvoda: 3,
      cena: 3000,
      _id: 15456415  
    },
  ],
  ram: [
    {
      staklo: "ogledalo4mm",
      sifraRama: "720-55",
      sirina: 100,
      duzina: 100,
      paspatuBoja: "nema",
      cenaRama: 8450
    }
  ],
  ukupnaCena: 15000,
  _id: 'p65j465jk456'

}

export default function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-[1650px] flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <PDFViewer width={900} height={900}>
          <MyDocument nalog={test}/>
        </PDFViewer> */}
        <section>
          <Naslov className={''}>Nalozi Ovaj Mesec</Naslov>
        </section>
      </main>
    </div>
  );
}

