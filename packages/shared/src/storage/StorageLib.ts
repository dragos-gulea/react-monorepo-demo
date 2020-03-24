import AsyncStorage from '@react-native-community/async-storage';

export class StorageLibProvider {

    public static getLib() {
        return AsyncStorage;
    }
}
