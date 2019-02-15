import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Language() lang: string;

  constructor(
    public locale: LocaleService,
    public translation: TranslationService
  ) { }


  ngOnInit() {
  }

}
