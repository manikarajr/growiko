import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSection } from '../cta-section/cta-section';
import { DataService } from '../../shared/data.service';
import { Meta, Title } from '@angular/platform-browser';
import { Service } from '../../shared';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-services',
  imports: [RouterLink, CtaSection, SafeHtmlPipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services implements OnInit {
  private dataService = inject(DataService);
  private meta = inject(Meta);
  private title = inject(Title);

  services = signal<Service[]>([]);

  ngOnInit() {
    this.title.setTitle('Our Services | Growiko Media - Digital Marketing');
    this.meta.updateTag({ name: 'description', content: 'Explore Growiko Media\'s full range of digital marketing services: SEO, social media management, paid advertising, video production, and more.' });
    this.services.set(this.dataService.getServices());
  }

  getIconBg(color: string): string {
    const map: Record<string, string> = {
      indigo: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      emerald: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      pink: 'bg-gradient-to-br from-pink-500 to-rose-600',
      orange: 'bg-gradient-to-br from-orange-500 to-amber-600',
      violet: 'bg-gradient-to-br from-violet-500 to-purple-600',
    };
    return map[color] || map['indigo'];
  }

  getCheckBg(color: string): string {
    const map: Record<string, string> = {
      indigo: 'bg-indigo-500', emerald: 'bg-emerald-500',
      pink: 'bg-pink-500', orange: 'bg-orange-500', violet: 'bg-violet-500',
    };
    return map[color] || map['indigo'];
  }

  getBtnBg(color: string): string {
    const map: Record<string, string> = {
      indigo: 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30',
      emerald: 'bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/30',
      pink: 'bg-pink-600 hover:bg-pink-700 shadow-lg shadow-pink-500/30',
      orange: 'bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-500/30',
      violet: 'bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-500/30',
    };
    return map[color] || map['indigo'];
  }

  getDecoBg(color: string): string {
    const map: Record<string, string> = {
      indigo: 'bg-indigo-500', emerald: 'bg-emerald-500',
      pink: 'bg-pink-500', orange: 'bg-orange-500', violet: 'bg-violet-500',
    };
    return map[color] || map['indigo'];
  }

  process = [
    { title: 'Discovery', desc: 'We learn about your business, goals, target audience, and current digital presence.' },
    { title: 'Strategy', desc: 'We create a tailored marketing plan with clear KPIs and timelines.' },
    { title: 'Execution', desc: 'Our team implements the strategy with creative campaigns and data-backed decisions.' },
    { title: 'Optimization', desc: 'We continuously monitor, analyze, and improve performance for better ROI.' },
  ];
}
