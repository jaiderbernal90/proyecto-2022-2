import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  nav:any = [
    {
      url:'/',
      icon:'fas fa-home',
      title:'Inicio'
    },
    {
      url:'/',
      icon:'fas fa-heartbeat',
      title:'Actividades'
    },
    {
      url:'/',
      icon:'fas fa-ambulance',
      title:'Examenes'
    },
    {
      url:'/',
      icon:'fas fa-notes-medical',
      title:'Historial Medico'
    },
    {
      url:'/',
      icon:'fas fa-cog',
      title:'Configuración'
    },
  ]

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {}
  
  onClickExit():void {
    // Todo exit
    console.log('Saliendo ->');
    this.authService.logout();
  }
}
