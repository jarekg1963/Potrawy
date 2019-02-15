import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Language() lang: string;

  constructor(
    public locale: LocaleService,
    public translation: TranslationService
  ) { }

  ngOnInit() {
  }

}
