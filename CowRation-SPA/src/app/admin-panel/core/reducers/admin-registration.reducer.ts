import { AdminRegister } from '../models/admin-registration';
import * as AdminUserActions from '../actions/admin-register.actions';



const initialState: AdminRegister = {
    login: 'Ewgen',
    email: 'Ewgen@mail.ru',
    firstName: 'Ewgen',
    lastName: 'Kuzmich'

}

export function reducerAdmin(state: AdminRegister[] = [initialState], action: AdminUserActions.Actions) {

    switch(action.type){
        
        case AdminUserActions.ADD_ADMIN_USER:
            return [...state, action.payload];
      
     
        default:
            return state;

    }

}