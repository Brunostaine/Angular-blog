import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/mocks/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = 'https://i.pinimg.com/564x/79/74/af/7974afd661a11d84b51abbb176a78334.jpg';
  @Input() contentTitle: string = 'MINHA NOTICIA';
  @Input() contentDescription: string = 'olá mundo!';

  private id: string | null = '0'


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {
      this.id = param.get('id')
    })
    this.setValuesComponent(this.id)
  }

  setValuesComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
