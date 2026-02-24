import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Testimonial } from '../../shared';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialCard {
  @Input({ required: true }) testimonial!: Testimonial;

  get stars() {
    return Array(this.testimonial.rating).fill(0);
  }
}
