import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withFetch, withInterceptors  } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { tokenInterceptorInterceptor } from './services/token-interceptor-interceptor';
import { MenuItems } from './shared/menu-items';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
     provideHttpClient(withFetch()),
     MenuItems,
      provideHttpClient(
      withInterceptors([tokenInterceptorInterceptor]) // register interceptor here
    )
  ]
};
