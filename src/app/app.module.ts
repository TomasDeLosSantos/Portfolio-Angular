import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { QualifComponent } from './components/qualif/qualif.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortComponent } from './components/port/port.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutmeComponent,
    QualifComponent,
    SkillsComponent,
    PortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
