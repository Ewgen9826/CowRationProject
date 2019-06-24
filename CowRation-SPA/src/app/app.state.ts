import { UserRegister } from './admin-panel/core/models/user-register';
import { NewKorm } from './admin-panel/core/models/new-korm';
import { KormsHistory } from './admin-panel/core/models/korms-table-history';
import { AdminRegister } from './admin-panel/core/models/admin-registration';

export interface AppState{
    readonly users: UserRegister[];
    readonly korms: NewKorm[];
    readonly historykorms: KormsHistory[];
    readonly adminusers: AdminRegister[]
}