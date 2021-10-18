import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _deleteUser = new Subject();
  private _allUsers = new Subject();
  private _findUser = new Subject();


  constructor(private http:HttpClient) {}




  getAllUsers(){
    console.log('getAllUsers');
    this.http.get(`${environment.baseApiUrl}/user/`)
    .subscribe(
      (value)=>{
        console.log('value',value);
      },
      (err)=>{
        console.log(err);
        if(err.status == 400){
          console.log('Bad Request')
        }
        if(err.status == 401){
          console.log('Unauthorized');
        }
        if(err.status == 403){
          console.log('Forbidden');
        }
        if(err.status == 404){
          console.log('NotFound');
        }
        if(err.status == 500){
          console.log('Internal server error');
        }
      }
    )
  }

  userDeleteById(id:string){
    this.http.delete(`${environment.baseApiUrl}/user/${id}`)
    .subscribe(
      (value)=>{
        console.log(value);
      },
      (err)=>{
        console.log(err);
        if(err.status == 400){
          console.log('Bad Request')
        }
        if(err.status == 401){
          console.log('Unauthorized');
        }
        if(err.status == 403){
          console.log('Forbidden');
        }
        if(err.status == 404){
          console.log('NotFound');
        }
        if(err.status == 500){
          console.log('Internal server error');
        }
      }
    )
  }



  userFindById(id:string){
    this.http.get(`${environment.baseApiUrl}/user/${id}`)
    .subscribe(
      (value)=>{
        console.log('value',value);
      },
      (err)=>{
        console.log(err);
        if(err.status == 400){
          console.log('Bad Request')
        }
        if(err.status == 401){
          console.log('Unauthorized');
        }
        if(err.status == 403){
          console.log('Forbidden');
        }
        if(err.status == 404){
          console.log('NotFound');
        }
        if(err.status == 500){
          console.log('Internal server error');
        }
      }
    )
  }

}
