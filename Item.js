import {Button, Text, View} from "react-native";
import {styles} from "./styles";
import {updateItem} from "./itemService";

// {
//   id: string,
//   name: string,
//   inStorage: boolean
// }

export default function Item({item, setItems}) {
    return <View style={styles.item}>
        <Text style={{
            width: "50%",
            fontSize: 18
        }}>{item.name}</Text>
        <Text style={{
            width: "25%",
            fontSize: 18
        }}>{item.inStorage ? "Have" : "Buy"}</Text>
        <Button style={{
            width: "25%",
        }} title={"Change"} onPress={() => updateItem(item).then(result => setItems(result))}
                color={item.inStorage ? "blue" : "red"}></Button>
    </View>
}