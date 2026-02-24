import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-floating-social',
    standalone: true,
    templateUrl: './floating-social.html',
    styleUrl: './floating-social.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingSocial {
    whatsappLink = 'https://wa.me/919876543210'; // Replace with actual number
    instagramLink = 'https://www.instagram.com/growiko.cbe/'; // Replace with actual handle
}
