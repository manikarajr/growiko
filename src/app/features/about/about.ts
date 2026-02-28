import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSection } from '../cta-section/cta-section';
import { Meta, Title } from '@angular/platform-browser';
import { SafeHtmlPipe } from '../../shared';

@Component({
  selector: 'app-about',
  imports: [CtaSection, SafeHtmlPipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('About Us | CLIXHORA');
    this.meta.updateTag({ name: 'description', content: 'Learn about CLIXHORA - our story, mission, vision, and the team driving digital marketing results for businesses across India.' });
  }

  stats = [
    { value: '4+ Years', label: 'Industry Experience' },
    { value: '250+', label: 'Projects Completed' },
    { value: '180+', label: 'Happy Clients' },
    { value: '500+', label: 'Campaigns Executed' },
  ];

  whyReasons = [
    {
      title: 'Industry-Specific Expertise',
      desc: 'We have deep experience across e-commerce, real estate, healthcare, education, retail, and service industries.',
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>`,
    },
    {
      title: 'Real-Time Reporting',
      desc: 'Access live dashboards showing your campaign performance metrics, ad spend, and ROI at any time.',
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>`,
    },
    {
      title: 'Agile & Adaptive',
      desc: 'We pivot quickly based on market changes, algorithm updates, and campaign performance data.',
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>`,
    },
    {
      title: 'Affordable Packages',
      desc: 'Flexible pricing plans designed for startups, SMEs, and enterprises — quality marketing at any budget.',
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/></svg>`,
    },
  ];

  team = [
    { name: 'Arun Kumar', role: 'Founder & CEO', initials: 'AK', bio: '8+ years in digital marketing & brand strategy', gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
    { name: 'Nithya Priya', role: 'Head of SEO', initials: 'NP', bio: 'Google certified SEO specialist with proven rankings', gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
    { name: 'Vishnu Raj', role: 'Creative Director', initials: 'VR', bio: 'Award-winning designer & content creator', gradient: 'bg-gradient-to-br from-pink-500 to-rose-600' },
    { name: 'Lakshmi S', role: 'Ads Manager', initials: 'LS', bio: 'Meta & Google Ads certified performance marketer', gradient: 'bg-gradient-to-br from-orange-500 to-amber-600' },
  ];
}
