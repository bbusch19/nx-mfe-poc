import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'child1',
          loadChildren: () =>
            import('child1/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'child2',
          loadChildren: () =>
            import('child2/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          loadChildren: () =>
            import('default-child/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
