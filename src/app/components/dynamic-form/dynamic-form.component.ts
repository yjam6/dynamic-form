import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ADDRESS_FORM, Field, FieldType, ValidatorType } from './dynamic-form.model';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {

    config: Field[] = [];

    @Input()
    configJson: string = "";

    @Output() valueChanges = new EventEmitter<string>();

    @Input()
    isSubForm: boolean = false;

    FieldType = FieldType;
    ADDRESS_FORM = ADDRESS_FORM;


    @Input()
    public formGroup: FormGroup = this.fb.group({});

    constructor(private fb: FormBuilder) {

     }


    ngOnChanges(changes: SimpleChanges) {
        if (changes['configJson']) {
            this.config = JSON.parse(changes['configJson'].currentValue);
            this.createForm(this.config);
        }

        if(!this.isSubForm)
        {
           this.formGroup.valueChanges.subscribe(data=>this.valueChanges.emit(data));
        }
    }

    createForm(fields: Field[]) {
        for (const field of fields) {

            if(field.type != FieldType.ADDRESS)
            {
            const validatorsToAdd: any = this.getValidators(field);

            this.formGroup.addControl(
                field.label,
                this.fb.control('', validatorsToAdd)
            );
        }}
    }

    /**
     * generate Field Validator
     * @param field Form Control
     * @returns 
     */
    getValidators(field: Field): Validators[] {
        const validatorsToAdd: Validators[] = [];
        if (!!field.validators) {
            field.validators.forEach(validator => {
                switch (validator.validatorType) {
                    case ValidatorType.REQUIRED:
                        validatorsToAdd.push(Validators.required);
                        break;
                    case ValidatorType.MIN_LENGTH:
                        validatorsToAdd.push(Validators.minLength(<number>validator.value));
                        break;
                    case ValidatorType.MAX_LENGTH:
                        validatorsToAdd.push(Validators.maxLength(<number>validator.value));
                        break;
                    case ValidatorType.PATTERN:
                        validatorsToAdd.push(Validators.pattern(<string>validator.value));
                        break;
                }
            });

        }
        return validatorsToAdd;
    }

}
