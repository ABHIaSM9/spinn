import { AuthUser } from './../../../app/core/schema/AuthUser';
import { Observable, of } from 'rxjs';

const authUser:AuthUser = {email:'manish@gmaili.com',password:'Manish@123'}


export class AuthenticationServiceMock{
    constructor(){}

    getUserListener():Observable<AuthUser>{
        return of(authUser);
    }
}
