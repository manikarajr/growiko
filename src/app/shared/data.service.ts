import { Injectable } from '@angular/core';
import { Service, Stat, Testimonial } from '.';


@Injectable({ providedIn: 'root' })
export class DataService {
    getServices(): Service[] {
        return [
            {
                id: 'digital-marketing',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/></svg>`,
                title: 'Digital Marketing',
                description: 'Comprehensive digital marketing strategies that drive real business growth and maximize your online presence.',
                features: [
                    'Social Media Marketing',
                    'Paid Advertising Campaigns (Meta Ads)',
                    'Online Brand Promotion',
                    'Lead Generation Strategies',
                    'Performance Analytics & Reporting',
                ],
                color: 'indigo',
                gradient: 'from-indigo-500 to-purple-600',
            },
            {
                id: 'seo',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>`,
                title: 'SEO Services',
                description: 'Dominate search engine rankings with our data-driven SEO strategies tailored to your industry.',
                features: [
                    'Google Ranking Improvement',
                    'Keyword Optimization & Research',
                    'Website Traffic Growth',
                    'On-Page SEO Setup',
                    'Technical SEO Audits',
                ],
                color: 'emerald',
                gradient: 'from-emerald-500 to-teal-600',
            },
            {
                id: 'social-media',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/></svg>`,
                title: 'Social Media Management',
                description: 'Build a powerful social presence with engaging content and community management across all platforms.',
                features: [
                    'Instagram & Facebook Management',
                    'Content Creation & Posting',
                    'Caption Writing & Copywriting',
                    'Engagement Handling',
                    'Follower Growth Strategy',
                ],
                color: 'pink',
                gradient: 'from-pink-500 to-rose-600',
            },
            {
                id: 'promotion',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>`,
                title: 'Promotion Services',
                description: 'Amplify your reach with targeted promotional campaigns that connect with your ideal audience.',
                features: [
                    'Post Boosting Campaigns',
                    'Targeted Ad Campaigns',
                    'Brand Awareness Campaigns',
                    'Retargeting Strategies',
                    'Conversion Optimization',
                ],
                color: 'orange',
                gradient: 'from-orange-500 to-amber-600',
            },
            {
                id: 'video',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/></svg>`,
                title: 'Video Production & Editing',
                description: 'Captivate your audience with professional video content that tells your brand story.',
                features: [
                    'Promotional Business Videos',
                    'Product Shoots & Photography',
                    'Reel Creation for Social Media',
                    'Social Media Video Editing',
                    'Motion Graphics & Animation',
                ],
                color: 'violet',
                gradient: 'from-violet-500 to-purple-600',
            },
        ];
    }

    getTestimonials(): Testimonial[] {
        return [
            {
                id: 1,
                name: 'Priya Sharma',
                role: 'Founder',
                company: 'TechNova Solutions',
                avatar: 'PS',
                rating: 5,
                text: "Growiko Media transformed our online presence completely. Our website traffic grew by 320% in just 4 months, and we\'re now ranking on the first page of Google for our key terms.",
            },
            {
                id: 2,
                name: 'Arjun Mehta',
                role: 'CEO',
                company: 'StyleCraft Boutique',
                avatar: 'AM',
                rating: 5,
                text: 'The social media management team at Growiko is exceptional. Our Instagram followers grew from 2K to 28K in 6 months, and our engagement rate is through the roof.',
            },
            {
                id: 3,
                name: 'Kavitha Reddy',
                role: 'Marketing Head',
                company: 'GreenLeaf Organics',
                avatar: 'KR',
                rating: 5,
                text: 'Their Meta Ads campaigns generated 5x ROI for our business. The team is professional, responsive, and truly understands digital marketing. Highly recommended!',
            },
            {
                id: 4,
                name: 'Rohit Verma',
                role: 'Director',
                company: 'Apex Real Estate',
                avatar: 'RV',
                rating: 5,
                text: 'The video production quality is world-class. Our property walkthrough videos have helped us close deals faster and the reels they create get thousands of views.',
            },
        ];
    }

    getStats(): Stat[] {
        return [
            { value: 250, suffix: '+', label: 'Projects Completed', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>` },
            { value: 180, suffix: '+', label: 'Happy Clients', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/></svg>` },
            { value: 500, suffix: '+', label: 'Campaigns Run', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>` },
            { value: 98, suffix: '%', label: 'Client Satisfaction', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>` },
        ];
    }
}