import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.scss'
})
export class PaginaInicialComponent {

  public listaCompetencias = [
    {nome: "Desenvolvimento"},
    {nome: "Entrega Contínua"},
    {nome: "Front-End"},
    {nome: "Back-End"},
    {nome: "Raciocínio Lógico"}
  ]
  public listaFerramentas = [
    {nome: "HTML"},
    {nome: "CSS"},
    {nome: ".NET"},
    {nome: "JavaScript"},
    {nome: "LowCode"},
    {nome: "Git & GitHub"},
  ]

  redirecionarParaURL() {
    window.open("https://pay.kirvano.com/07676181-6c86-40f4-9dbb-52c8d2d703e0", "_blank");
  }

}
