import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { FragmentService } from 'src/app/services/fragment.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  items : MenuItem[] = [];
  socialMedia = [
    {label: 'Facebook', url:'https://www.facebook.com/carlix.quinteros/', icon: 'pi pi-facebook'},
    {label: 'Linkedin', url:'https://www.linkedin.com/in/carlos-quinteros-702356123/', icon: 'pi pi-linkedin'},
    {label: 'GitHub', url:'https://github.com/CarlosQuinteros', icon: 'pi pi-github'}
  ]
  constructor(private router : Router, private fragmentService : FragmentService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  goToAboutSection(): void {
    this.router.navigate(['home']).then(
      ()=>this.fragmentService.setFragment('about')
    )
  }

  loadItems(): void {
    this.items = [
      {
        label:'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
        target:''
      },
      {
        label:'Acerca de',
        routerLink: '/home',
        command: ()=> this.goToAboutSection()
      },
      {
        label:'Habilidades'
      },
      {
        label:'Proyectos'
      },
      {
        label:'Experiencia'
      },
      {
        label:'Contacto'
      },
      {
        label: 'Perfil',
        visible: false,
        icon: 'pi pi-user',
        items: [
          {
            label: 'Editar Datos',
            icon: 'pi pi-user-edit'
          },
          {
            label: 'Salir',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ];
  }

}
