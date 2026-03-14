const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(date: string): string {
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
    name: "Trevor Mann",
    title: "Co-Founder & Software Architect",
    primaryProject: "CoverageMap.com",
    bio: "I build high-performance web applications and design systems that are used by millions of people around the world. I manage teams, mentor engineers, and lead the technical direction of multiple projects.",
    philosophy: "In this AI world, great software is hard to come by. I believe in shipping fast, iterating relentlessly, and sweating the details that most people never notice but everyone feels.",
  },

  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "jQuery", "Vite"],
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
      items: ["Azure", "Cloudflare Workers", "Docker", "GitHub Actions"],
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
        "Raising millions of dollars every year for charity through the power of livestreaming and gaming. I help track, collect, and analyze data from the event to help the organization make data-driven decisions.",
      tags: ["Volunteer", "Data Analyst", "Architect"],
      startDate: "11/01/2022",
      endDate: null,
      link: "https://www.jinglejam.co.uk/",
    },
    {
      title: "RDA",
      description:
        "A leading consultant for the top companies and organizations in the United States. I lead a team of engineers to develop a technology for Alex Lee, New York Shipping Association, and Kimberly Clark.",
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

  blog: [
    {
      title: "Analysis of U.S. Cellular Coverage and Performance in the Second Half of 2023",
      slug: "2023-us-cellular-coverage-analysis",
      date: "06/13/2024",
      excerpt: "A detailed analysis of the coverage and performance of U.S. cellular networks in the second half of 2023.",
      readTime: "15 min",
    }
  ],

  conversations: [
    {
      type: "Podcast",
      title: "LutzTalk Podcast Ep. 5 - CoverageMap.com",
      guests: ["Stetson Doggett", "Trevor Mann"],
      name: "LutzTalk",
      host: "Austin Lutz",
      description: "Stetson and Trevor join Austin to discuss the future of CoverageMap.com, how we collect and validate speed test data, the future of AI and its impact, our favorite cell phone plan perks, and much more.",
      date: "03/13/2026",
      links: [
        { name: "Spotify", icon: "spotify", link: "https://open.spotify.com/episode/5PLD2rF2fZEs2qGNnLMOJ6  " },
        { name: "Apple Podcasts", icon: "apple", link: "https://podcasts.apple.com/us/podcast/lutztalk-podcast-ep-5-coveragemap-com/id1870110084?i=1000755121989" }
      ],
    }
  ],

  socials: [
    { name: "Twitter", icon: "twitter", link: "https://twitter.com/no1mann" },
    { name: "GitHub", icon: "github", link: "https://github.com/no1mann" },
    { name: "YouTube", icon: "youtube", link: "https://youtube.com/@no1mann" },
    { name: "Reddit", icon: "reddit", link: "https://reddit.com/u/no1mann" },
    { name: "Email", icon: "email", link: "mailto:trevor@coveragemap.com" },
  ],
};
