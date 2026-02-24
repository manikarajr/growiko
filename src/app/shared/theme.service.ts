import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private platformId = inject(PLATFORM_ID);

    isDark = signal<boolean>(false);

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const saved = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.isDark.set(saved === 'dark' || (!saved && prefersDark));
        }

        effect(() => {
            const dark = this.isDark();
            if (isPlatformBrowser(this.platformId)) {
                document.documentElement.classList.toggle('dark', dark);
                localStorage.setItem('theme', dark ? 'dark' : 'light');
            }
        });
    }

    toggle() {
        this.isDark.update(v => !v);
    }
}
