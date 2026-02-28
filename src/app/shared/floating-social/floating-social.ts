import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-floating-social',
    standalone: true,
    templateUrl: './floating-social.html',
    styleUrl: './floating-social.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingSocial {
    whatsappLink = 'https://wa.me/9198765432660'; // Replace with actual number
    instagramLink = 'https://www.instagram.com/clixhora/'; // Replace with actual handle
}
