import React from 'react';
import { BaseComponentView } from '../baseComponent/ComponentBaseStore';
import { ComponentBaseStore } from '../baseComponent/ComponentBaseStore';
import tcknStore from '../store/tcknStore';
import { AllComponentProps } from '../props/AllComponentProps';


interface TcknComponentProps extends AllComponentProps {
    store: tcknStore;
}


const C_Tckn: React.FC<TcknComponentProps> = ({ store, ...props }) => {
    React.useEffect(() => {
        if (props.visible !== undefined) {
            store.setVisible(props.visible);  // Set visibility based on prop
        }
        if (props.className) {
            store.setClassName(props.className);  // Set className based on prop
        }
        // Diğer props'ları da burada kontrol edebilirsiniz
    }, [props, store]);


    
    // Validation fonksiyonunu tanımla
    // const validateTckn = (value: number) => {
    //     // Regular expression to match only digits
    //     const regex = /^\d+$/;

    //     // Check if value is exactly 11 digits and starts with a non-zero number
    //     return value.length === 11 && regex.test(value) && value[0] !== '0' && value[10] !== '0';
    // };


    // Store'a özellikleri set et
    store.setLabel("Kimlik Numarası"); // Label'ı ayarla
    store.setPlaceholder("12345678901"); // Placeholder'ı ayarla
    // store.setValidation(validateTckn, "Geçerli bir kimlik numarası giriniz."); // Validation'ı ayarla

    return (
        <BaseComponentView  store={store} id="tckn-input" />
    );
}

export default C_Tckn;