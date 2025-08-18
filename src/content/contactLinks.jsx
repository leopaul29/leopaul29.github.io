import { Mail, Linkedin, Github, BookOpen } from 'lucide-react';

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
        href: myLinkedIn
    },
    {
        icon: <Github className="w-6 h-6 text-blue-600" />,
        label: "GitHub",
        value: "@leopaul29",
        href: myGithub
    },
    // {
    //   icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    //   label: "Blog",
    //   value: "your-blog-url.com",
    //   href: "#"
    // }
];