import { Naslov} from "../components/typography/Kontent"

export default function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-[1650px] flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <PDFViewer width={900} height={900}>
          <MyDocument />
          
        </PDFViewer> */}
        <section>
          <Naslov className={''}>Nalozi Ovaj Mesec</Naslov>
        </section>
      </main>
    </div>
  );
}

