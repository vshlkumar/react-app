import MobxReactForm from 'mobx-react-form';
import { FormEvent } from "react";
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';



export function getFormValidation(
    fields: object,
    successHandler?: (form?: FormEvent) => null,
    errorHandler?: (form:any) => null
) {    
    const plugins = {
        dvr: dvr(validatorjs)
      };

      const hooks = {
        onSuccess(form:any) {
          alert('Form is valid! Send the request here.');
          // get field values
          console.log('Form Values!', form.values());
        },
        onError(form:any) {
          alert('Form has errors!');
          // get all form errors
          console.log('All form errors', form.errors());
        }
      }

      const formOptions: any = {
        validateOnChange: true
      };

      if(successHandler){
        hooks.onSuccess = successHandler;
      }

      if(errorHandler){
        hooks.onError = errorHandler;
      }

      return new MobxReactForm({fields}, {plugins, hooks, options:formOptions });
}
