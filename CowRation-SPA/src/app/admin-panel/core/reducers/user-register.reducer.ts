import { UserRegister } from "../models/user-register";
import * as UsersActions from '../actions/user-register.actions';


const initialState: UserRegister = {
    login: 'Vicc',
    email: 'lenevich768@mail.ru',
    firstName: 'Victor',
    lastName: 'Lenevich'

}

export function reducer(state: UserRegister[] = [initialState], action: UsersActions.Actions) {

    switch(action.type){
        
        case UsersActions.ADD_USER:
            return [...state, action.payload];
        
        case UsersActions.REMOVE_USER:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;

    }

}