import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select, Slider, TextField, TextareaAutosize } from "@mui/material";
import { action, computed, makeObservable, observable } from "mobx";
import { observer } from 'mobx-react-lite';

type ComponentBaseType = "input" | "checkbox" | "select" | "radio" | "textarea" | "button" 

export class ComponentBaseStore<T> {
    componentType: ComponentBaseType = "input";
    value: T;
    options?: { value: T; label: string }[] = [];
    visible: boolean = true;
    label: string = "";
    placeholder: string = "";
    style: React.CSSProperties = {};
    disabled: boolean = false;
    loading: boolean = false;
    className: string = "";
    validation: { rule: (value: T) => boolean, message: string } | null = null;
    error: string = "";
    

    constructor(initialValue: T, componentType: ComponentBaseType) { 
        this.value = initialValue;
        this.componentType = componentType;
        makeObservable(this, {
            value: observable,
            visible: observable,
            label: observable,
            placeholder: observable,
            style: observable,
            disabled: observable,
            loading: observable,
            className: observable,
            validation: observable,
            error: observable,
            componentType: observable,
            options: observable,
            setValue: action,
            setVisible: action,
            setLabel: action,
            setPlaceholder: action,
            setStyle: action,
            setDisabled: action,
            setLoading: action,
            setClassName: action,
            setValidation: action,
            setError: action,
            setComponentType: action,
            setOptions: action,
            getValue: computed,
            getVisible: computed,
            getLabel: computed,
            getPlaceholder: computed,   
            getStyle: computed, 
            getDisabled: computed,
            getLoading: computed,
            getClassName: computed,
            getValidation: computed,
            getError: computed,
            getComponentType: computed,
            getOptions: computed,
        });
    }

    setValue(value: T) {
        if (this.validation && !this.validation.rule(value)) {
            this.error = this.validation.message;
        } else {
            this.error = "";
        }
        this.value = value;
    }

    get getValue() {
        return this.value;
    }

    setVisible(visible: boolean) {
        this.visible = visible;
    }

    get getVisible() {
        return this.visible;
    }

    setLabel(label: string) {
        this.label = label;
    }

    get getLabel() {
        return this.label;
    }

    setPlaceholder(placeholder: string) {
        this.placeholder = placeholder;
    }

    get getPlaceholder() {
        return this.placeholder;
    }

    setStyle(style: React.CSSProperties) {
        this.style = style;
    }

    get getStyle() {
        return this.style;
    }

    setValidation(rule: (value: T) => boolean, message: string) {
        this.validation = { rule, message };
    }

    get getValidation() {
        return this.validation;
    }

    setDisabled(disabled: boolean) {
        this.disabled = disabled;
    }

    get getDisabled() {
        return this.disabled;
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    get getLoading() {
        return this.loading;
    }

    setClassName(className: string) {
        this.className = className;
    }

    get getClassName() {
        return this.className;
    }

    setComponentType(type: ComponentBaseType) {
        this.componentType = type;
    }

    get getComponentType() {
        return this.componentType;
    }

    setError(error: string) {
        this.error = error;
    }

    get getError() {
        return this.error;
    }

    setOptions(options: { value: T; label: string }[]) {
        this.options = options;
    }

    get getOptions() {
        return this.options;
    }
}

export const BaseComponentView:  React.FC<{ store: ComponentBaseStore<any>, id: string }> = observer(({ store, id }) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>) => {
        let value: any;
        if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
            value = event.target.value;
        } else {
            value = event.target.value;
        }

        store.setValue(value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Sadece sayı tuşlarına izin ver
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode < 48 || charCode > 57) {
          event.preventDefault();
        }
    };

    if (!store.getVisible) {
        return null;
    }

    const style = {
        ...store.getStyle,
    };

    switch (store.getComponentType) {
        case "input":
            return (
                <TextField
                    id={id}
                    value={store.getValue}
                    onChange={handleChange}
                    placeholder={store.getPlaceholder}
                    disabled={store.getDisabled}
                    label={store.getLabel}
                />
            );
        case "checkbox":
            return (
                <FormControlLabel
                    control={<Checkbox checked={!!store.getValue} onChange={handleChange} />}
                    label={store.getLabel}
                    disabled={store.getDisabled}
                    
                />
            );
        case "select":
            return (
                <Select
                    id={id}
                    value={store.getValue}
                    // onChange={handleChange}
                    disabled={store.getDisabled}
                    onChange={handleChange}
                >
                    {store.getOptions?.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            );
        case "radio":
            return (
                <FormControl component="fieldset" >
                    <FormLabel component="legend">{store.getLabel}</FormLabel>
                    <RadioGroup
                        id={id}
                        value={store.getValue}
                        onChange={handleChange}
                    >
                        {store.getOptions?.map(option => (
                            <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                                disabled={store.getDisabled}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            );
        case "textarea":
            return (
                <TextareaAutosize
                    id={id}
                    value={store.getValue}
                    onChange={handleChange}
                    placeholder={store.getPlaceholder}
                    disabled={store.getDisabled}
                    
                />
            );
        case "button":
            return (
                <Button
                    id={id}
                    onClick={() => { /* handle button click */ }}
                    disabled={store.getDisabled}
                   
                >
                    {store.getLabel}
                </Button>
            );
            return null;
    }
});