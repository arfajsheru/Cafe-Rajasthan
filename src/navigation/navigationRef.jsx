import { createNavigationContainerRef } from "@react-navigation/native";



export const navigationRef = createNavigationContainerRef();


export function navigate(name, parmas) {
    if(navigationRef.isReady()){
        navigationRef.navigate(name, parmas);
    }
}