import { FlatList } from 'react-native';
import CategoryGridTile from '../Components/CategoryGridTile';
import {CATEGORIES} from '../data/DummyData'

function renderCategoryItem(item_wrapper){
    return <CategoryGridTile title={item_wrapper.item.title} color={item_wrapper.item.color}></CategoryGridTile>
}

function CategoriesScreen(){
    return <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem}></FlatList>
}

export default CategoriesScreen;