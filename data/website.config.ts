export interface SocialMediaLink {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  profilePicture?: string;
  role: string;
  university: string;
  universityWebsite: string;
  socialMedia: SocialMediaLink[];
}

export interface WebsiteInfo {
  title: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  route: string;
}

export interface HomepageSection {
  AboutSection?: boolean;
  NewsSection?: boolean;
  SelectedPublicationsSection?: boolean;
  ProjectSection?: boolean;
}

export type FontStyle = "sans" | "serif" | "mono";

export const personalInfo: PersonalInfo = {
  name: "Minseo Park",
  profilePicture: "/profile.jpg", //optional
  role: "Ph.D. Student",
  university: "KAIST ID CIxD Lab",
  universityWebsite: "http://cixd.kaist.ac.kr/",
  socialMedia: [
    { name: "Email", url: "minseopark61@kaist.ac.kr" },
   // {
   //   name: "GitHub",
   //   url: "https://github.com/anxndsgn/academic-homepage-template",
   // },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/minseo-park-8175381a8/" },
    { name: "ORCID", url: "https://orcid" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=M5APi1IAAAAJ&hl=ko" },
  ],
};

export const websiteInfo: WebsiteInfo = {
  title: personalInfo.name,
  description: "Design-oriented HCI researcher",
};

export const navigations: NavigationItem[] = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "News", route: "/news" },
  { name: "CV", route: "/cv/cv.pdf" },
];

export const homepageSection: HomepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle: FontStyle = "sans"; // "sans" | "serif" | "mono"
