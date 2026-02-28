import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { ThemeService } from './shared/theme.service';
import { Footer } from './shared/footer/footer';
import { FloatingSocial } from './shared/floating-social/floating-social';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, FloatingSocial],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('CLIXHORA');
  themeService = inject(ThemeService);
}
