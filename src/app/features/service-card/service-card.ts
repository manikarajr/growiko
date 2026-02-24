import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service, SafeHtmlPipe } from '../../shared';


@Component({
  selector: 'app-service-card',
  imports: [RouterLink, SafeHtmlPipe],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCard {
  @Input({ required: true }) service!: Service;

  getIconBg(): string {
    const map: Record<string, string> = {
      indigo: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      emerald: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      pink: 'bg-gradient-to-br from-pink-500 to-rose-600',
      orange: 'bg-gradient-to-br from-orange-500 to-amber-600',
      violet: 'bg-gradient-to-br from-violet-500 to-purple-600',
    };
    return map[this.service.color] || map['indigo'];
  }

  getDotColor(): string {
    const map: Record<string, string> = {
      indigo: 'bg-indigo-500',
      emerald: 'bg-emerald-500',
      pink: 'bg-pink-500',
      orange: 'bg-orange-500',
      violet: 'bg-violet-500',
    };
    return map[this.service.color] || map['indigo'];
  }

  getLinkColor(): string {
    const map: Record<string, string> = {
      indigo: 'text-indigo-600 dark:text-indigo-400 hover:text-indigo-700',
      emerald: 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-700',
      pink: 'text-pink-600 dark:text-pink-400 hover:text-pink-700',
      orange: 'text-orange-600 dark:text-orange-400 hover:text-orange-700',
      violet: 'text-violet-600 dark:text-violet-400 hover:text-violet-700',
    };
    return map[this.service.color] || map['indigo'];
  }
}
