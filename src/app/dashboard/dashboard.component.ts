import { Component, OnInit } from '@angular/core';
import { alumno } from '../alumno';
import { AlumnosService } from '../core/services/alumnos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  alumnos: alumno[] = [];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
      .subscribe((alumnos: alumno[]) => this.alumnos = alumnos);
  }
}
