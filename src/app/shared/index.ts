export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    features: string[];
    color: string;
    gradient: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
    text: string;
}

export interface Stat {
    value: number;
    suffix: string;
    label: string;
    icon: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    linkedin?: string;
}

export * from './pipes/safe-html.pipe';
export * from './theme.service';
export * from './data.service';