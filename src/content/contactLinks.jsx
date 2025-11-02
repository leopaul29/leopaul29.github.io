import { Mail, Linkedin, Github, BookOpen } from 'lucide-react';
import {trackEvent} from "@/lib/ga4.js";

export const myGithub = "https://github.com/leopaul29";

export const myLinkedIn = "https://www.linkedin.com/in/leo-paul-martin/";

export const myBlog = "https://lpm.hashnode.dev/";

export const contactLinks = [
    // {
    //   icon: <Mail className="w-6 h-6 text-blue-600" />,
    //   label: "Email",
    //   value: "your.email@example.com",
    //   href: "mailto:your.email@example.com"
    // },
    {
        icon: <Linkedin className="w-6 h-6 text-blue-600" />,
        label: "LinkedIn",
        value: "@leo-paul-martin",
        href: myLinkedIn,
        track: () => handleClickLinkedIn()
    },
    {
        icon: <Github className="w-6 h-6 text-blue-600" />,
        label: "GitHub",
        value: "@leopaul29",
        href: myGithub,
        track: () => handleClickGithub()
    },
    // {
    //   icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    //   label: "Blog",
    //   value: "your-blog-url.com",
    //   href: "#"
    // }
];

export const GithubLinkData = {
    href: myGithub,
    label: myGithub,
    icon: <Github size={22}/>,
    target: '_blank',
    rel: 'noopener noreferrer',
    handleClick: () => handleClickGithub()
}
export const LinkedInLinkData = {
    href: myLinkedIn,
    label: myLinkedIn,
    icon: <Linkedin size={22}/>,
    target: '_blank',
    rel: 'noopener noreferrer',
    handleClick: () => handleClickLinkedIn()
}
export const BlogLinkData = {
    href: myBlog,
    label: myBlog,
    icon: <BookOpen size={22}/>,
    target: '_blank',
    rel: 'noopener noreferrer',
    handleClick: () => handleClickBlog()
}
export const MailLinkData = {
    href: "mailto:your.email@example.com",
    label: "myemail",
    icon: <Mail size={22} />
}

export const handleClickLinkedIn = () => {
    trackEvent("Social", "Click", "LinkedIn");
};
export const handleClickGithub = () => {
    console.log("handleClickGithub");
    trackEvent("Social", "Click", "Github");
};
export const handleClickProjectsGithub = () => {
    console.log("handleClickGithub");
    trackEvent("Social", "Click", "ProjectsGithub");
};
export const handleClickBlog = () => {
    trackEvent("Social", "Click", "Blog");
};