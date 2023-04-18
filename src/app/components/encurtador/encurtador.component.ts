import { Component, OnInit } from '@angular/core';
import { ApiUrlService } from 'src/app/api-url.service';

@Component({
  selector: 'page-encurtador',
  templateUrl: './encurtador.component.html',
  styleUrls: ['./encurtador.component.scss']
})
export class EncurtadorComponent implements OnInit {

  public linkUrl: any;

  public urlGrande: any = {
    long_url: "",
    domain: "bit.ly",
  }

  public urlPequena?: string;

  constructor(
    private apiEncurtarUrl: ApiUrlService
  ) { }

  ngOnInit(): void {
  }

  public clicado(link: string) {
    this.urlGrande.long_url = link
    this.apiEncurtarUrl.getLinkReduzido(this.urlGrande).subscribe(res => (this.urlPequena = res.link))
  }
}
