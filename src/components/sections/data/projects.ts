import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
    {
        title: "ITS Enterprise Resource Planning",
        description: "A comprehensive Enterprise Resource Planning solution designed to streamline and integrate business operations by uniting key functions like finance, HR, supply chain, and sales into a single, user-friendly platform.",
        imageSrc: "/projects/ITSERP.png",
        link: "https://itstudios.site/"
    },
    {
        title: "Academic Supervisor Assistant",
        description: "A comprehensive Decision Support System engineered specifically for Educational Facilities to streamline management and analysis.",
        placeholderText: "ASA",
        gradientClasses: "from-blue-900/40 to-slate-900/80",
        imageSrc: "/projects/ASA.png",
        media: [
            { url: "/projects/ASA.png", type: 'image' },
            { url: "/projects/asa2.png", type: 'image' },
            { url: "/projects/asa3.png", type: 'image' },
            { url: "/projects/asa4.png", type: 'image' },
            { url: "/projects/asa5.png", type: 'image' }
        ],
        pptxUrl: "/projects/ASA.pptx"
    },
    {
        title: "Movies App",
        description: "A dynamic, responsive film discovery application that allows users to instantly search and explore up-to-the-minute trending cinema.",
        imageSrc: "/projects/MoviesApp.png",
        link: "https://zainalabdeenkhartabil.github.io/MoviesApp/"
    },
    {
        title: "ZSearch",
        description: "Advanced search engine implementation utilizing Cosine Similarity, TF-IDF, Content Based Image Retrieval, and a custom Web Crawler.",
        placeholderText: "ZSearch",
        gradientClasses: "from-cyan-900/40 to-slate-900/80",
        imageSrc: "/projects/ZSearch.png",
        media: [
            { url: "/projects/ZSearch.mp4", type: 'video' }
        ],
        pptxUrl: "/projects/ZSearch.pptx"
    }
];