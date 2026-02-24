import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  imports: [RouterLink],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaSection {
  @Input() badge = 'Ready to Grow?';
  @Input() heading = 'Start Your Digital Growth Journey Today';
  @Input() subheading = 'Partner with Growiko Media and transform your online presence with proven strategies that deliver real results.';
  @Input() primaryCta = 'Get Free Consultation';
  @Input() secondaryCta = 'View Our Services';
}
