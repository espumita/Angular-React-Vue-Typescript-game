import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './components/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(error => console.error(error));
