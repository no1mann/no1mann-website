const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(date: string): string {
  const [month, , year] = date.split('/');
  return `${MONTH_ABBR[parseInt(month, 10) - 1]} ${year}`;
}

export function formatDateRange(startDate: string, endDate: string | null): string {
  if (endDate === null) {
    return `${formatDate(startDate)} – Present`;
  }
  return `${formatDate(startDate)} – ${formatDate(endDate)}`;
}

export function formatConversationDate(date: string): string {
  const parts = date.split('/');

  if (parts.length < 2) {
    return date;
  }

  const [month, , yearFromFullDate] = parts;
  const year = yearFromFullDate ?? parts[1];
  const monthIndex = parseInt(month, 10) - 1;

  if (monthIndex < 0 || monthIndex >= MONTH_ABBR.length || !year) {
    return date;
  }

  return `${MONTH_ABBR[monthIndex]} ${year}`;
}

export const PORTFOLIO_DATA = {
  about: {
    username: "No1mann",
    name: "Trevor Mann",
    title: "Co-Founder & Software Architect",
    headerText: "no1mann",
    bio: "I architect high-performance applications and websites that impact millions of people around the world. I lead the technical direction, manage teams, and mentor engineers.",
    aboutDescription: [
      "I've always been passionate about technology and building things. I've been coding and building computers since I was 13 years old. The first things I built were CraftBukkit Minecraft plugins for my friends and I to use.",
      "In college I studied Computer Science and graduated in 2019 with a Bachelor's degree in the field, as well as a Minor in Mathematics.",
      "Since then, I've been building software for over 15 years and I've been building websites for over 7 years. My desire for building the best possible software and creating useful products is what drives me to continue to build and learn.",
      "I'm currently the Co-Founder, CTO, and Software Architect at CoverageMap.com, where I'm responsible for the technical direction of the company and the development of the software that powers the whole platform. Our mission is to help consumers find the best cellular coverage in their area across all parts of the world.",
    ],
    philosophy: "\"In this AI world, great software is hard to come by. I believe in ironing out the details that most people never notice but everyone feels.\"",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vite", "jQuery"],
    },
    {
      category: "Backend",
      items: ["Node.js", "ASP.NET Core", "Express", "Cloudflare Workers"],
    },
    {
      category: "Data",
      items: ["PostgreSQL", "ClickHouse", "Redis", "MS SQL Server", "MongoDB", "Cloudflare D1", "Cloudflare Durable Objects"],
    },
    {
      category: "Infrastructure",
      items: ["Azure", "Cloudflare", "Docker", "GitHub Actions", "Terraform", "Azure Pipelines"],
    },
    {
      category: "Tooling",
      items: ["Git", "GitHub", "Jira", "Azure DevOps"],
    },
    {
      category: "AI",
      items: ["Cursor", "Codex", "GitHub Copilot"],
    },
  ],
  currentProjects: [
    {
      title: "CoverageMap.com",
      description:
        "Developing the next generation of cellular coverage maps leveraging the power of crowd-sourcing. With hundreds of thousands of users a month and growing, we help you determine which carrier works best in your area.",
      tags: ["Co-Founder", "CTO", "Lead Architect"],
      startDate: "09/22/2022",
      endDate: null,
      link: "https://coveragemap.com",
    },
    {
      title: "Jingle Jam",
      description:
        "Raising millions of dollars every year for multiple charities through the power of livestreaming and gaming. I help track, collect, and analyze the data to help the Jingle Jam make data-driven decisions and maximize effectiveness.",
      tags: ["Volunteer", "Data Analyst", "Developer"],
      startDate: "11/17/2022",
      endDate: null,
      link: "https://www.jinglejam.co.uk/",
    },
    {
      title: "RDA",
      description:
        "A leading consultant working with top-performing U.S. companies and organizations. I lead teams of engineers to develop modern software solutions for Alex Lee, New York Shipping Association, and Kimberly Clark.",
      tags: ["Architect", "Consultant", "Engineer"],
      startDate: "07/15/2019",
      endDate: null,
      link: "https://www.rdadigital.com/",
    },
  ],
  pastProjects: [
    {
      title: "HistoricCellCoverage",
      description:
        "A project to help track historical cell coverage of all carriers in the United States.",
      startDate: "01/01/2022",
      endDate: "01/01/2023",
      link: "https://historiccellcoverage.com/",
    },
    {
      title: "Guitar Hero Tools",
      description:
        "Created free tools for the Guitar Hero fandom to help develop songs, modify charts, and add functionality to the game.",
      startDate: "01/01/2015",
      endDate: "01/01/2017",
      link: "https://github.com/no1mann/GH-Tools-v2.0",
    }
  ],

  posts: [
    {
      title: "Analysis of U.S. Cellular Coverage in H2 of 2023",
      slug: "2023-us-cellular-coverage-analysis",
      date: "06/13/2024",
      excerpt: "A detailed analysis of cell coverage and performance in the second half of 2023.",
      readTime: "15 min",
      author: "Trevor Mann",
    }
  ],
  conversations: [
    {
      type: "Podcast",
      title: "LutzTalk Podcast Ep. 5 - CoverageMap.com",
      guests: ["Stetson Doggett", "Trevor Mann"],
      name: "LutzTalk",
      host: "Austin Lutz",
      description: "Stetson and Trevor join Austin to discuss the future of CoverageMap.com, how we collect and validate speed test data, how AI is impacting the industry, our favorite cell phone plan perks, and much more.",
      date: "03/13/2026",
      links: [
        { name: "Spotify", icon: "spotify", link: "https://open.spotify.com/episode/5PLD2rF2fZEs2qGNnLMOJ6  " },
        { name: "Apple Podcasts", icon: "apple", link: "https://podcasts.apple.com/us/podcast/lutztalk-podcast-ep-5-coveragemap-com/id1870110084?i=1000755121989" },
        { name: "YouTube", icon: "youtube", link: "https://www.youtube.com/watch?v=cRBrHl3GIw0" }
      ],
    }
  ],
  socials: [
    { name: "Twitter", icon: "twitter", link: "https://twitter.com/no1mann" },
    { name: "GitHub", icon: "github", link: "https://github.com/no1mann" },
    { name: "YouTube", icon: "youtube", link: "https://youtube.com/@no1mann" },
    { name: "Discord", icon: "discord", username: "no1mann" },
    { name: "Email", icon: "email", link: "mailto:trevor@coveragemap.com" },
  ],
  repo: {
    website: "https://github.com/no1mann/no1mann-website"
  }
};
