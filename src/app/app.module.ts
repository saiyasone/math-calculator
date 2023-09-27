import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './models/light.theme';
import { darkTheme } from './models/dark.theme';
import { zyncTheme } from './models/zync.theme';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ThemeModule.forRoot({
      active: 'dark',
      themes: [lightTheme, darkTheme, zyncTheme],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
