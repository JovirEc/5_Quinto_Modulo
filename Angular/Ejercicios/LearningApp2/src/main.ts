import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EmpresaComponent } from './app/components/empresa/empresa.component';

bootstrapApplication(EmpresaComponent, appConfig)
  .catch((err) => console.error(err));
