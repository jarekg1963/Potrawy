import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatChipsModule,
  MatTableModule,
  MatTabsModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { L10nConfig, L10nLoader, LocalizationModule, StorageStrategy, ProviderType, LogLevel } from 'angular-l10n';

const l10nConfig: L10nConfig = {
  locale: {
      languages: [
          { code: 'pl', dir: 'ltr' },
          { code: 'en', dir: 'ltr' }
      ],
      language: 'pl',
      storage: StorageStrategy.Cookie
  },
  translation: {
      providers: [
          { type: ProviderType.Static, prefix: './assets/locale/' }
      ],
      caching: true,
      composedKeySeparator: '.',
  }
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    LocalizationModule.forRoot(l10nConfig)
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    LocalizationModule
  ]
})
export class SharedModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
 }
