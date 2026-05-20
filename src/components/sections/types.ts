export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    location?: string;
    borderColor: string;
    textColor: string;
    markerColor: string;
    highlights: string[];
}

export interface CourseItem {
    title: string;
    provider: string;
    date: string;
    borderColor: string;
    textColor: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    location: string;
    borderColor: string;
    textColor: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface ProjectMedia {
    url: string;
    type: 'image' | 'video';
}

export interface ProjectItem {
    title: string;
    description: string;
    imageSrc?: string;
    placeholderText?: string;
    gradientClasses?: string;
    link?: string;
    media?: ProjectMedia[];
    pptxUrl?: string;
}