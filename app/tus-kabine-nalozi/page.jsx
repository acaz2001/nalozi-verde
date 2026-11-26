import React, { Suspense } from "react"
import Search from "../../components/Search"
import Link from "next/link";
import { Button } from "../../components/ui/button";
import Kalendar2 from "../../components/Kalendar2";
import NalogKabineMain from "../../components/tusKabine/NalogKabineMain";
import moment from 'moment';


// let date = moment();
// let datum = date.format("MMMM DD YYYY")
// let tacanDatum = date.format("MMMM DD YYYY").charAt(0).toLocaleUpperCase()+datum.slice(1)
// let mesec = date.format("MMMM")
// moment.locale('sr')
moment.locale('sr')
const date = moment();
const datum = date.format("MMMM DD YYYY")
const tacanDatum = date.format("MMMM DD YYYY").charAt(0).toLocaleLowerCase()+datum.slice(1)
const mesec = date.format("MMMM")





async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/tus-kabine-nalozi`, {method:"GET"});
  return res.json();
}


async function TusKabineNaloziPage(props) {
  const searchParams = await props.searchParams;
  //const query = `${searchParams?.query}&${searchParams?.pretraga}`;
  const query = searchParams?.query;
  const query2 = searchParams?.pretraga;
  console.log("QUERY:" + query,query2)
  const nalozi = await getPosts();



  return (
    <div className="w-full">
      <main className="max-w-[1650px] mx-auto md:px-5 px-0">
        <div className="flex flex-row justify-between p-5 items-end">
          <div className="flex flex-col items-start gap-2.5">
            <label for="name">Pretraži nalog:</label>
            <Suspense fallback='Loading'>
              <Search placeholder={"Pretraži nalog po imeni ili br. telefona..."} />
            </Suspense>
          </div>
          <div className="flex flex-row items-center gap-2">
            <h1 className="w-full text-nowrap md:block hidden">Izaberi datum:</h1>
            <Suspense fallback='Loading'>
              <Kalendar2/>
            </Suspense>
          </div>
        </div>
        <div className="pl-5 mb-5">  
          <Link href={'/tus-kabine-novi-nalog'}>
              <Button className="cursor-pointer">
                  Napravi novi nalog za tuš kabinu.
              </Button>
          </Link>
        </div>
        <div className="px-5 w-full">
          <NalogKabineMain kabineNalozi={nalozi} query={query} query2={query2}/>
        </div>
      </main> 
    </div>
  )
}


export default TusKabineNaloziPage





