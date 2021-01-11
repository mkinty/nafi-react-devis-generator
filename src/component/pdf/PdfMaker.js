import React from 'react';
import ReactDOM from 'react-dom';
import {Document, Page, Text, View, StyleSheet, PDFViewer} from '@react-pdf/renderer';

export default function PdfMaker({text}) {

    // Create styles
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    const totals = {
        totalWithoutTaxes: 0,
        taxes: 0,
        totalTaxeIncluded: 0
    }

    const totalWithoutTaxes = (items) => {
        const resultWithoutTaxes = Object.keys(items)
            .map(key => {
                const amount = parseFloat(items[key].amount, 10);
                const quantity = parseInt(items[key].quantity, 10);
                return (amount * quantity);
            })
            .reduce((acc, curr) => acc + curr, 0);
            // on fixe le resultat à deux chiffres après la virgule (grâce à .toFixed)
            return (
                totals.totalWithoutTaxes = parseFloat(resultWithoutTaxes.toFixed(2))
            )
    }

    const totalTaxeIncluded = (items) => {
        const resultTaxeIncluded = Object.keys(items)
            .map(key => {
                const amount = parseFloat(items[key].amount, 10);
                const quantity = parseInt(items[key].quantity, 10);
                const taxe = parseFloat(items[key].taxe, 10);
                totals.taxes += (amount * quantity * taxe)
                return (
                    (amount * quantity) + totals.taxes
                    );
            })
            .reduce((acc, curr) => acc + curr, 0);
            return (
                totals.totalTaxeIncluded = parseFloat(resultTaxeIncluded.toFixed(2))
            )
    }

    return (
        <Document>
            <Page size="A4" style = {styles.page}>
                <View style = {styles.section}>
                    <Text>Devis : {text.title} </Text>
                    <Text>n° : {text.id} </Text>
                    <Text>client : {text.customerFirstName} {text.customerLastName} </Text>
                    <Text>Articles : </Text>
                    {Object.keys(text.items).map((key, index) => (
                        <Text key={index}>
                            {text.items[key].quantity}  &nbsp;
                            {text.items[key].description} &nbsp;
                            {parseFloat(text.items[key].taxe) * 100}% &nbsp;
                            {text.items[key].amount} €
                        </Text> 
                    ))}
                </View>
            </Page>
        </Document>
    )
}

export const renderPDFInDom = (text) => {
    const Wrapper = () => (
        <PDFViewer>
            <PdfMaker text = {text} />
        </PDFViewer>
    );

    ReactDOM.render(<Wrapper />, document.getElementById('pdf'));
}
