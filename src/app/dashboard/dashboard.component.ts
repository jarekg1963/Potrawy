import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Language() lang: string;

  constructor(
    public locale: LocaleService,
    public translation: TranslationService
  ) { }


  ngOnInit() {
  }

}
