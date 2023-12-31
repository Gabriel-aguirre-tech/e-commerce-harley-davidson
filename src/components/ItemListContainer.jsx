import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase'
import Loader from "./Loader";

export default function ItemListContainer({ }) {

    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const [arrayProductos, setArrayProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {

        const db = getFirestore();

        const itemCollection = (categoria === 'all') ? db.collection("productos") : db.collection("productos").where('category', '==', categoria)

        itemCollection.get()
            .then((querySnapShot) => {
                if (querySnapShot.size === 0) {
                    console.log('no hay documentos con ese query');
                    return
                }
                setArrayProductos(querySnapShot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                }
                ));
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLlegoPromesa(true);
            })

    }, [categoria]);

    return (
        <>
            {(llegoPromesa) ?
                <>
                    < ItemList arrayProductos={arrayProductos} />
                </>
                :
                <Loader/>
            }
        </>
    )

}