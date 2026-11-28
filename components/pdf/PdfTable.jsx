import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { createTw } from "react-pdf-tailwind";


const styles = StyleSheet.create({
    tableHeader: {
        width: '100%',
        backgroundColor: '#dbdbdb',
        paddingHorizontal: '10px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '10px'
    },
    tableRow: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: '10px',
        borderBottomWidth: 1,
        borderLeftWidth:1,
        borderRightWidth: 1,
        borderColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '10px'
        
    },
    rezime: {
        width: '100%', 
        height: 30, 
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        paddingHorizontal: 10, 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black'
    }
})
const tw = createTw({
  fontFamily: {
    sans: ['Papyrus'],
  },
  colors: {
    custom: '#bada55',
  },
});

function PdfTable({proizvod, ukupnaCena}) {
  return (
    <View>
        <PdfTableHeader />
        {proizvod.map((p) => {
            return (
            <PdfTableRow key={p._id} podaci={p}/>
            )
        })}
        <PdfTableRezime ukupnaCena={ukupnaCena}/>
    </View>
  )
}

function PdfTableHeader() {
    return (
        <View style={styles.tableHeader}>
            <View style={{borderRightWidth: 1, borderColor: 'black', width: 192}}>
                <Text>
                    Opis
                </Text>
            </View>
            <View style={{width: 25 , borderRightWidth: 1, borderColor: 'black'}}>
                <Text >
                    jm
                </Text>
            </View>
            <View style={{width: 50, borderRightWidth: 1, borderColor: 'black'}} > 
                <Text>
                    Kolicina
                </Text>
            </View>
            <View style={{ width: 92, borderRightWidth: 1, borderColor: 'black' }}>
                <Text>
                    Jed.cena
                </Text>
            </View>
            <View style={{ width: 80}}>
                <Text>
                    Cena
                </Text>
            </View>
        </View>
    )
}

function PdfTableRow({podaci}) {
    const kvadratura = (podaci.sirinaProizvoda/100) * (podaci.duzinaProizvoda/100);
    const cenaProizvoda = (podaci.cena / kvadratura)
    const cena = cenaProizvoda.toFixed(2)

    console.log("PDF TABLE", kvadratura.toFixed(2));
    
    return (
        <View style={styles.tableRow}>
            <View style={{borderRightWidth: 1, borderColor: 'black', width: 192, height: 40, justifySelf: 'center', alignSelf: 'center', paddingTop: 6}}>
                <Text>
                    {podaci.imeProizvoda}
                </Text>
            </View>
            <View style={{width: 25 ,height: 40, borderRightWidth: 1, borderColor: 'black'}}>
                <Text >
                    m²
                </Text>
            </View>
            <View style={{width: 50, height: 40, borderRightWidth: 1, borderColor: 'black'}}> 
                <Text>
                    {kvadratura.toFixed(2)}
                </Text>
            </View>
            <View style={{ width: 92, height: 40, borderRightWidth: 1, borderColor: 'black' }}>
                {/* Jed cena */}
                <Text>
                    {cenaProizvoda.toFixed(1)}
                </Text>
            </View>
            <View style={{ width: 80, height: 40}}>
                <Text>
                    {podaci.cena}
                </Text>
            </View>
        </View>
    )
}

function PdfTableRezime({ukupnaCena}) {
    return (
        <View style={styles.rezime}>
            <Text style={{fontWeight: '600', fontSize: 14}}>
                Ukupno za naplatu:
            </Text>
            <Text style={{fontWeight: '600', fontSize: 14}}>
                {ukupnaCena}
            </Text>
        </View>
    )
}

export default PdfTable
