import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: { image: string; price: number; name: string }[] = [
    {
      image:
        'https://media.istockphoto.com/id/1435385078/photo/transparent-perfume-bottle-near-the-aged-weathered-wooden-snag-and-stones-perfume-with-woody.jpg?s=2048x2048&w=is&k=20&c=4Afg7ajZiz64DxXd2Pa-on3AMS60--1Nhd8o9t1Gli8=',
      price: 500,
      name: 'Gravity',
    },
    {
      image:
        'https://thefoschini.vtexassets.com/arquivos/ids/107448869-1200-1200?v=638424735297270000&width=1200&height=1200&aspect=true',
      price: 9900,
      name: 'Emporio Armani',
    },
    {
      image:
        'https://thefoschini.vtexassets.com/arquivos/ids/108100245-1200-1200?v=638425258037400000&width=1200&height=1200&aspect=true',
      price: 2900,
      name: 'Giorgio Armani',
    },
    {
      image:
        'https://thefoschini.vtexassets.com/arquivos/ids/107447551-1600-1600?v=638424734058700000&width=1600&height=1600&aspect=true',
      price: 4000,
      name: 'Timberland',
    },
    {
      image:
        'https://media.takealot.com/covers_images/5b65d870b48d48d5bbfef94a219521a5/s-pdpxl.file',
      price: 1500,
      name: 'Fcuk Friction Edt',
    },
    {
      image:
        'https://thefoschini.vtexassets.com/arquivos/ids/107471663-1200-1200?v=638424758211370000&width=1200&height=1200&aspect=true',
      price: 3500,
      name: 'Emporio Armani',
    },
    {
      image:
        'https://static.sweetcare.pt/img/prd/488/v-638200521000396084/dior-004957di_01.jpg',
      price: 1500,
      name: 'DIOR SAUVAGE',
    },
    {
      image:
        'https://thefoschini.vtexassets.com/arquivos/ids/107450080-1200-1200?v=638424736497170000&width=1200&height=1200&aspect=true',
      price: 2500,
      name: 'Skagen',
    },
    {
      image:
        'https://thefoschini.vtexassets.com/arquivos/ids/107465387-1200-1200?v=638424751277830000&width=1200&height=1200&aspect=true',
      price: 8000,
      name: 'Eau de Colognes',
    },
    {
      image:
        'https://thefoschini.vtexassets.com/arquivos/ids/108752761-1200-1200?v=638425693546330000&width=1200&height=1200&aspect=true',
      price: 2000,
      name: 'Tempo',
    },
  ];
}
