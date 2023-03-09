import { Pressable, View, Text } from "react-native";

function CategoryGridTile(props) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
