import React from 'react';
import { ComponentBaseStore } from '../baseComponent/ComponentBaseStore';
import { BaseComponentView } from '../baseComponent/ComponentBaseStore';
import ilStore from '../store/ilStore';

interface IlComponentProps{
    store:ilStore;
}

const C_IlSelect: React.FC<IlComponentProps> = ({ store, ...props }) => {
    // Select option için store oluşturma
    store.setLabel("Şehirler");
    store.setPlaceholder("Şehir seçin");
    store.setDisabled(false);
    store.setOptions([
        { value: "ankara", label: "Ankara" },
        { value: "istanbul", label: "İstanbul" },
        { value: "izmir", label: "İzmir" }
    ]);

    return (
        <div>
            <h1>CitySelect Store Kullanımı</h1>
            <BaseComponentView store={store} id="city-select" />
        </div>
    );
}

export default C_IlSelect;
