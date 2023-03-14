import {FlatList, View} from 'react-native';
import {useEffect, useState} from "react";
import {fetchItems} from "./itemService";
import Item from "./Item";
import {styles} from "./styles";

// {
//   id: string,
//   name: string,
//   inStorage: boolean
// }

export default function App() {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems().then(result => {
            console.log(JSON.stringify(result))
            setItems(result)
        })
    }, [])

    return (
        <View style={styles.container}>
            {/*<Text>Open UUUUUup App.js to start working on your app!</Text>*/}
            {/*<StatusBar style="auto" />*/}
            {/*<View style={styles.container}>*/}
            <FlatList
                data={items.sort((i1, i2) => i1.id > i2.id)}
                renderItem={({item}) => <Item item={item} setItems={setItems}/>}
            />
            {/*</View>*/}
        </View>
    );
}
