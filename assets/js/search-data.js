// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "I practice open science to ensure my research is accessible, transparent, and reusable. My work is published in **open-access journals** to maximize reach and impact. Preprints are systematically shared on **[bioRxiv](https://www.biorxiv.org/)** and **[BioHackrXiv](https://biohackrxiv.org/)** to enable early access and recognize all contributors.All publications are archived on **[HAL](https://hal.science/)** and linked to my **[ORCID profile](https://orcid.org/)**. Research data are annotated and deposited in public databases, while code, workflows, and training materials are released under open licenses on **[GitHub](https://github.com/)** or **[GitLab](https://gitlab.com/)**. Software versions are archived on **[Zenodo](https://zenodo.org/)** (with DOIs) and registered on **[bio.tools](https://bio.tools/)**. Protocols are published on **[Protocols.io](https://www.protocols.io/)** and workflows on **[WorkflowHub](https://workflowhub.eu/)**.To ensure quality and credit, software is submitted to peer-reviewed journals like the **[Journal of Open Source Software (JOSS)](https://joss.theoj.org/)**. Conference presentations and posters are openly shared, often on **[F1000Research](https://f1000research.com/)** with DOIs.For a complete list of my publications, visit my **[HAL profile](https://hal.science/)**.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "(Funded) projects in which I am or was involved",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-2026",
              title: "2026",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2026/";
              },
            },{id: "dropdown-2025",
              title: "2025",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2025/";
              },
            },{id: "dropdown-2024",
              title: "2024",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2024/";
              },
            },{id: "dropdown-2023",
              title: "2023",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2023/";
              },
            },{id: "dropdown-2022",
              title: "2022",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2022/";
              },
            },{id: "dropdown-2021",
              title: "2021",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2021/";
              },
            },{id: "dropdown-2020",
              title: "2020",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2020/";
              },
            },{id: "dropdown-2019",
              title: "2019",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2019/";
              },
            },{id: "dropdown-2018",
              title: "2018",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2018/";
              },
            },{id: "dropdown-2017",
              title: "2017",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2017/";
              },
            },{id: "dropdown-2016",
              title: "2016",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2016";
              },
            },{id: "dropdown-2015",
              title: "2015",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2015";
              },
            },{id: "dropdown-2014",
              title: "2014",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2014";
              },
            },{id: "dropdown-2013",
              title: "2013",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://talks.bebatut.fr/2013";
              },
            },{id: "nav-posters",
          title: "Posters",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/http:/bebatut.fr/posters/";
          },
        },{id: "post-ten-common-misconceptions-about-galaxy-and-why-they-re-wrong-galaxy-hub",
        
          title: 'Ten Common Misconceptions About Galaxy (And Why They’re Wrong!) | Galaxy Hub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We are thrilled to announce that &#39;Ten Common Misconceptions About Galaxy (And Why They Are Wrong!)&#39; has just been published in PLOS Computational Biology! This paper is the result of passionate discussions, collaborative debates, and a shared commitment to clarifying what Galaxy truly is—and what it can do. Whether you are a longtime Galaxy user or new to the platform, this paper will challenge assumptions and highlight Galaxy&#39;s versatility, scalability, and impact across disciplines.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2026-02-19-misconception-paper/", "_blank");
          
        },
      },{id: "post-exploring-microbial-dark-matter-outcomes-of-the-fairymags-hackathon-2025-galaxy-hub",
        
          title: 'Exploring Microbial Dark Matter: Outcomes of the FAIRyMAGs Hackathon 2025 | Galaxy Hub... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Exploring Microbial Dark Matter: Outcomes of the FAIRyMAGs Hackathon 2025",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2025-10-21-fairymags-hackathon-outcome/", "_blank");
          
        },
      },{id: "post-how-galaxy-is-unlocking-the-secrets-of-microbes-from-health-to-ecosystems-galaxy-hub",
        
          title: 'How Galaxy is Unlocking the Secrets of Microbes: From Health to Ecosystems |... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Microbes—bacteria, fungi, viruses, and archaea—are invisible to the naked eye, but their impact is everywhere. They shape our health, drive Earth&#39;s ecosystems, and even influence the climate. Thanks to Galaxy and the Microbiology Galaxy Lab, researchers worldwide are unlocking the secrets of these microscopic powerhouses, leading to breakthroughs in medicine, ecology, and sustainability.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2025-09-17-international-microorganism-day/", "_blank");
          
        },
      },{id: "post-galaxy-at-jobim-galaxy-hub",
        
          title: 'Galaxy at JOBIM | Galaxy Hub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The JOBIM conference, the annual event of the French bioinformatics and biostatistic community, brought together researchers, educators, and innovators in bioinformatics to discuss cutting-edge tools, workflows, and collaborative efforts. Among the highlights of this year&#39;s event was the significant presence of Galaxy. This blog post explores the key contributions, presentations, and innovations centered around Galaxy at JOBIM 2025.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2025-07-21-jobim/", "_blank");
          
        },
      },{id: "post-enhancing-scientific-training-the-galaxy-training-network-39-s-role-in-the-elixir-training-life-cycle",
        
          title: 'Enhancing Scientific Training: The Galaxy Training Network&#39;s Role in the ELIXIR Training Life-Cycle... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "In the rapidly evolving landscape of data science, continuous learning and skill development are crucial. The Galaxy Training Network (GTN) plays a pivotal role in this educational ecosystem, particularly within the ELIXIR Training Life-Cycle. This blog post explores how the GTN contributes to each phase of the life-cycle and aligns with the SPLASH recommendations, ensuring high-quality training for researchers worldwide.",
        section: "Posts",
        handler: () => {
          
            window.open("https://training.galaxyproject.org/training-material/news/2025/07/01/gtn-elixir-life-cycle.html", "_blank");
          
        },
      },{id: "post-new-paper-quot-guidance-framework-to-apply-best-practices-in-ecological-data-analysis-lessons-learned-from-building-galaxy-ecology-quot-galaxy-hub",
        
          title: 'New Paper &quot;Guidance framework to apply best practices in ecological data analysis: lessons... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We are excited to share our recent publication in GigaScience. This paper presents a practical framework aimed at improving transparency, reproducibility, and efficiency in ecological research by leveraging the Galaxy-Ecology platform.​",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2025-03-21-galaxy-ecology/", "_blank");
          
        },
      },{id: "post-elixir-funding-for-fairymags-optimising-metagenomics-assembled-genomes-building-galaxy-hub",
        
          title: 'ELIXIR Funding for FAIRyMAGs: Optimising Metagenomics Assembled Genomes building | Galaxy Hub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "FAIRyMAGs: Optimising Metagenomics Assembled Genomes building: workflow finalisation, training material development, real data evaluation and resource allocation tool creation",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2025-01-09-bfsp-fairy-mags/", "_blank");
          
        },
      },{id: "post-a-fond-farewell-to-emmy-as-she-continues-to-make-waves-in-open-science-ols",
        
          title: 'A Fond Farewell to Emmy as She Continues to Make Waves in Open... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2024/07/22/emmy-farewell/", "_blank");
          
        },
      },{id: "post-enabling-architectures-that-collect-community-centric-research-software-metadata-galaxy-hub",
        
          title: 'Enabling architectures that collect community-centric research software metadata | Galaxy Hub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The ELIXIR Research Software Ecosystem (RSEc) and the Galaxy Codex make use of GitHub CI bots to collect research software metadata and provide a FAIR tool metadata repository for the global research community",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2024-07-11-rs-ec-co-dex/", "_blank");
          
        },
      },{id: "post-new-galaxy-training-building-an-amplicon-sequence-variant-asv-table-from-16s-data-using-dada2",
        
          title: 'New Galaxy training: Building an amplicon sequence variant (ASV) table from 16S data... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The GTN hosts its 400th tutorial: Building an amplicon sequence variant (ASV) table from 16S data using DADA2",
        section: "Posts",
        handler: () => {
          
            window.open("https://training.galaxyproject.org/training-material/news/2024/06/06/dada2-tutorial.html", "_blank");
          
        },
      },{id: "post-celebrating-the-milestone-400-tutorials-on-the-galaxy-training-network",
        
          title: 'Celebrating the Milestone: 400 Tutorials on the Galaxy Training Network! <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Galaxy Training Network (GTN) has reached an exciting milestone: our 400th tutorial! This achievement is a testament to the dedication and hard work of our community of educators, researchers, and developers over the last 9 years.",
        section: "Posts",
        handler: () => {
          
            window.open("https://training.galaxyproject.org/training-material/news/2024/06/06/400-tutorials-milestone.html", "_blank");
          
        },
      },{id: "post-how-to-improve-the-annotation-of-galaxy-resources-outcomes-of-an-online-hackathon-for-improving-the-annotation-of-galaxy-resources-for-microbial-data-resources-galaxy-hub",
        
          title: 'How to improve the annotation of Galaxy resources? Outcomes of an online hackathon... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Find out how we improved the annotation of Galaxy tools and training material for microbiological data analysis!",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2024-04-microgalaxy-hackathon/", "_blank");
          
        },
      },{id: "post-2nd-biont-training-workshop-from-hero-to-zero-with-python-galaxy-hub",
        
          title: '2nd BioNT Training workshop - From Hero to Zero with Python | Galaxy... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "BioNT delivered its second training workshop, From Hero to Zero with Python, from 21th to 24th of November, 2023. This post reports this workshop&#39;s organisation, and the backgound and feedback of its applicants and participants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2023-11-21-2nd-biont-workshop/", "_blank");
          
        },
      },{id: "post-meet-our-8th-open-seeds-cohort-of-project-leads-and-their-mentors-ols",
        
          title: 'Meet our 8th Open Seeds cohort of project leads and their mentors |... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2023/10/10/ols-8-announcement/", "_blank");
          
        },
      },{id: "post-1st-biont-training-workshop-a-practical-introduction-to-bioinformatics-and-rna-seq-using-galaxy-galaxy-hub",
        
          title: '1st BioNT Training workshop - A practical introduction to bioinformatics and RNA-seq using... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "BioNT delivered its first training workshop, A practical introduction to bioinformatics and RNA-seq using Galaxy, from 4th to 8th of September, 2023. This post reports this workshop&#39;s organisation, the applicants and participants, as well as their feedback about it.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2023-09-28-biont-workshop/", "_blank");
          
        },
      },{id: "post-launching-the-open-seeds-video-library-ols",
        
          title: 'Launching the Open Seeds Video Library | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2023/07/23/video-library-launching/", "_blank");
          
        },
      },{id: "post-open-seeds-ols-7-graduations-and-apply-now-for-open-seeds-ols-8-ols",
        
          title: 'Open Seeds OLS-7 graduations and apply now for Open Seeds OLS-8! | OLS... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2023/06/12/ols-7-graduations-and-ols-8-call/", "_blank");
          
        },
      },{id: "post-training-material-and-workshops-pathogen-detection-from-direct-nanopore-sequencing-data-using-galaxy-galaxy-hub",
        
          title: 'Training material and workshops - Pathogen detection from (direct Nanopore) sequencing data using... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Our new GTN material has been published in January and used in workshops",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2023-03-21-foodborne-training/", "_blank");
          
        },
      },{id: "post-meet-our-7th-cohort-of-project-leads-and-their-mentors-ols",
        
          title: 'Meet our 7th cohort of project leads and their mentors | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2023/03/21/ols-7-announcement/", "_blank");
          
        },
      },{id: "post-evaluation-of-the-current-usage-and-future-needs-of-galaxy-for-microbial-data-analysis-we-need-your-help-galaxy-hub",
        
          title: 'Evaluation of the current usage and future needs of Galaxy for microbial data... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The microGalaxy community of practice would like to learn more about use-cases where Galaxy was beneficial, and also the barriers that prevent researchers from using Galaxy. The aim is to collectively find solutions to improve user experience and reduce barriers. To this end, we are launching a survey to reach out to, and learn from, the microbial research community.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2023-03-21-microbial-survey/", "_blank");
          
        },
      },{id: "post-galaxy-mentor-network-reset-galaxy-hub",
        
          title: 'Galaxy Mentor Network: Reset | Galaxy Hub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We launched the [Galaxy Mentor Network](https://galaxy-mentor-network.netlify.app/) one year ago with the idea to onboard new members in the community. Now, one year later, we realize that we failed. We still believe in the power that the Galaxy Mentor Network, and, in that spirit, we would like to relaunch the Galaxy Mentor Network with a new matching process.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2023-03-08-gmn-reset/", "_blank");
          
        },
      },{id: "post-new-tutorial-pathogen-detection-from-direct-nanopore-sequencing-data-using-galaxy-foodborne-edition",
        
          title: 'New Tutorial: Pathogen detection from (direct Nanopore) sequencing data using Galaxy - Foodborne... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Food contamination with pathogens are a major burden on our society. Globally, they affect an estimated 600 million people a year and impact socioeconomic development at different levels. These outbreaks are mainly due to Salmonella spp. followed by Campylobacter spp. and Noroviruses.",
        section: "Posts",
        handler: () => {
          
            window.open("https://training.galaxyproject.org/training-material/news/2023/01/26/pathogen-detection-tutorial.html", "_blank");
          
        },
      },{id: "post-announcing-a-new-project-open-science-cloud-infrastructure-and-training-for-communities-in-latin-america-and-africa-ols",
        
          title: 'Announcing a new project: Open science cloud infrastructure and training for communities in... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2022/12/20/ECB-grant-announcement/", "_blank");
          
        },
      },{id: "post-ols-6-graduations-and-apply-now-for-ols-7-ols",
        
          title: 'OLS-6 graduations and apply now for OLS-7! | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2022/12/01/announcing-applications-for-ols-7/", "_blank");
          
        },
      },{id: "post-meet-our-6th-cohort-of-project-leads-and-their-mentors-ols",
        
          title: 'Meet our 6th cohort of project leads and their mentors | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2022/10/24/ols-6-annoucement/", "_blank");
          
        },
      },{id: "post-welcoming-paz-to-the-ols-team-ols",
        
          title: 'Welcoming Paz to the OLS Team | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2022/08/10/welcome-paz/", "_blank");
          
        },
      },{id: "post-bienvenida-paz-al-equipo-ols-ols",
        
          title: 'Bienvenida Paz, al Equipo OLS | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2022/08/10/bienvenida-paz/", "_blank");
          
        },
      },{id: "post-ols-5-graduations-and-apply-now-for-ols-6-ols",
        
          title: 'OLS-5 graduations and apply now for OLS-6! | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2022/06/03/announcing-applications-for-ols-6/", "_blank");
          
        },
      },{id: "post-meet-our-fifth-cohort-of-project-leads-and-their-mentors-ols",
        
          title: 'Meet our fifth cohort of project leads and their mentors | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2022/03/03/ols-5-annoucement/", "_blank");
          
        },
      },{id: "post-galaxy-mentor-network-galaxy-mentor-network",
        
          title: 'Galaxy Mentor Network - Galaxy Mentor Network <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Connecting Galaxy members (both new and existing) with Gmentors (Mentors within the Galaxy Community) in order to learn, improve proficiency and grow with Galaxy",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxy-mentor-network.netlify.app/blog/2022/02/26/welcome-launch/", "_blank");
          
        },
      },{id: "post-job-vacancy-community-researcher-and-programme-coordinator-ols-is-hiring-ols",
        
          title: 'Job vacancy: Community Researcher and Programme Coordinator - OLS is hiring! | OLS... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2022/02/18/ols-is-hiring/", "_blank");
          
        },
      },{id: "post-runway-for-sustainability-ols-awarded-funding-from-the-chan-zuckerberg-initiative-to-power-its-next-phase-ols",
        
          title: 'Runway for sustainability: OLS awarded funding from the Chan Zuckerberg Initiative to power... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2022/01/27/runway-to-sustainability-czi-funding/", "_blank");
          
        },
      },{id: "post-open-life-science-is-awarded-wellcome-trust-open-research-fund-2021-ols",
        
          title: 'Open Life Science is awarded Wellcome Trust Open Research Fund 2021 | OLS... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2021/12/21/wt-open-research-fund/", "_blank");
          
        },
      },{id: "post-ols-5-launch-webinar-and-promotional-materials-ols",
        
          title: 'OLS-5 Launch Webinar and Promotional Materials! | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2021/12/13/ols-5-promotion/", "_blank");
          
        },
      },{id: "post-accessible-and-scalable-detection-and-identification-of-foodborne-pathogens-a-project-with-biolytix-and-funded-by-eosc-life-galaxy-hub",
        
          title: 'Accessible and scalable detection and identification of foodborne pathogens, a project with Biolytix... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Thanks to funding from EOSC-Life, the Freiburg Galaxy team will work in 2022 with Biolytix, a Swiss Small and Medium-sized Enterprise (SME) specialized in molecular biology and microbiological analyses, toward Accessible and scalable detection and identification of foodborne pathogens.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2021-12-08-pathogen-detection-eosc-life-grant/", "_blank");
          
        },
      },{id: "post-ols-4-graduations-and-applications-open-for-ols-5-ols",
        
          title: 'OLS-4 Graduations and applications open for OLS-5! | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2021/12/06/announcing-applications-for-ols-5/", "_blank");
          
        },
      },{id: "post-got-a-minute-take-our-survey-about-galaxy-for-training-and-have-your-say",
        
          title: 'Got a minute? Take our survey about Galaxy for training and have your... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Do you use Galaxy for Training? Have your say! Please take a few minutes to let us know about your training experiences.",
        section: "Posts",
        handler: () => {
          
            window.open("https://training.galaxyproject.org/training-material/news/2021/09/29/survey.html", "_blank");
          
        },
      },{id: "post-got-a-minute-take-our-survey-about-galaxy-for-training-and-have-your-say",
        
          title: 'Got a minute? Take our survey about Galaxy for training and have your... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Do you use Galaxy for Training? Have your say! Please take a few minutes to let us know about your training experiences.",
        section: "Posts",
        handler: () => {
          
            window.open("https://training.galaxyproject.org/training-material/news/2021/09/29/survey.html", "_blank");
          
        },
      },{id: "post-meet-our-fourth-cohort-of-project-leads-and-their-mentors-ols",
        
          title: 'Meet our fourth cohort of project leads and their mentors | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2021/09/07/ols-4-annoucement/", "_blank");
          
        },
      },{id: "post-freiburg-galaxy-team-at-the-galaxy-community-conference-2021-galaxy-hub",
        
          title: 'Freiburg Galaxy Team at the Galaxy Community Conference 2021 | Galaxy Hub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Freiburg Galaxy Team participated in the Galaxy Community Conference 2021 with: Talks Posters/Demos BoF (Birds of Feather) CoFest and training To learn more about the Galaxy Community Conference…",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2021-07-21-freiburg-galaxy-team-gcc/", "_blank");
          
        },
      },{id: "post-quot-galaxy-for-microbiome-via-asaim-story-from-a-local-project-to-a-global-effort-to-support-microbiome-data-analysis-quot-talk-at-holistic-bioinformatic-approaches-used-in-microbiome-research-galaxy-hub",
        
          title: '&quot;Galaxy for microbiome via ASaiM story - From a local project to a... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Bioinformatics Virtual Coordination Network (BVCN) is committed to reducing entry barriers into bioinformatics for researchers.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2021-07-02-bvcn/", "_blank");
          
        },
      },{id: "post-women-in-data-science-2021-perspectives-in-industry-and-academia-join-bayer-ag-and-de-nbi-elixir-germany-event-galaxy-hub",
        
          title: 'Women in Data Science 2021 - Perspectives in Industry and Academia - Join... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Last June 18th, Bayer AG (as a member of the de.NBI Industrial Forum) and de.NBI/ELIXIR Germany organized a common event entitled &quot;Women in Data Science - Perspectives in Industry and Academia&quot;, to…",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2021-07-01-wids/", "_blank");
          
        },
      },{id: "post-open-life-science-program-amp-the-galaxy-community-involvement-in-ols-3-and-invitation-to-apply-to-the-next-cohort-galaxy-hub",
        
          title: 'Open Life Science program &amp; the Galaxy community: involvement in OLS-3 and invitation... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Open Life Science (OLS) is an online mentoring &amp; training program",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2021-06-ols/", "_blank");
          
        },
      },{id: "post-applications-are-open-for-ols-4-ols",
        
          title: 'Applications are open for OLS-4! | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2021/06/21/announcing-applications-for-ols-4/", "_blank");
          
        },
      },{id: "post-new-feature-faqs",
        
          title: 'New Feature: FAQs <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Snippets have received an major overhaul! Snippets/FAQs are small reusable bits of training, often answering a single question. In addition to the general Galaxy snippets, we now also support topic-level and tutorial-level FAQs. This will allow contributors to add common questions and answers to their tutorials, which not only can be included in the tutorial text itself, but are also used to autogenerate an FAQ page for the tutorial or topic listing all common questions (and answers).This will be useful both to participants following tutorials via self-study, and also to instructors preparing for a training event.",
        section: "Posts",
        handler: () => {
          
            window.open("https://training.galaxyproject.org/training-material/news/2021/03/24/faqs.html", "_blank");
          
        },
      },{id: "post-next-gtn-cofest-may-20-2021",
        
          title: 'Next GTN CoFest May 20, 2021 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Every 3 months we organise one day dedicated to the GTN community! Thursday, May 20th is the next GTN CoFest. We will be working on the training materials, have discussions with the global Galaxy traning community. Do you teach with Galaxy? Want to learn how to add your tutorial to the GTN? New to the community and just want to learn more? Everybody is welcome!",
        section: "Posts",
        handler: () => {
          
            window.open("https://training.galaxyproject.org/training-material/news/2021/03/18/gtn_cofest_may.html", "_blank");
          
        },
      },{id: "post-meet-our-third-cohort-of-project-leads-and-their-mentors-ols",
        
          title: 'Meet our third cohort of project leads and their mentors | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2021/02/04/ols3-announcement/", "_blank");
          
        },
      },{id: "post-open-life-science-program-amp-the-galaxy-community-involvement-in-ols-2-and-invitation-to-apply-to-the-next-cohort-galaxy-hub",
        
          title: 'Open Life Science program &amp; the Galaxy community: involvement in OLS-2 and invitation... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "involvement in OLS-2 and invitation to apply to the next cohort",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2020-12-22-ols/", "_blank");
          
        },
      },{id: "post-ols-2-graduations-and-applications-open-for-ols-3-ols",
        
          title: 'OLS-2 Graduations and applications open for OLS-3! | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/11/26/announcing-applications-for-ols-3/", "_blank");
          
        },
      },{id: "post-ols-community-support-micro-grants-ols",
        
          title: 'OLS Community support micro grants | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/11/23/micro-grants-in-2021-ols-3-ols-4/", "_blank");
          
        },
      },{id: "post-ally-skills-training-workshop-ols",
        
          title: 'Ally Skills Training Workshop | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/10/05/ally-skills-training/", "_blank");
          
        },
      },{id: "post-ols-project-and-community-report-part-3-ols",
        
          title: 'OLS Project and Community report - Part 3 | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/10/01/annual-report-part-3/", "_blank");
          
        },
      },{id: "post-ols-project-and-community-report-part-2-ols",
        
          title: 'OLS Project and Community report - Part 2 | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/10/01/annual-report-part-2/", "_blank");
          
        },
      },{id: "post-ols-project-and-community-report-part-1-ols",
        
          title: 'OLS Project and Community report - Part 1 | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/10/01/annual-report-part-1/", "_blank");
          
        },
      },{id: "post-freiburg-galaxy-team-is-participating-to-the-2nd-cohort-of-the-open-life-science-program-galaxy-hub",
        
          title: 'Freiburg Galaxy team is participating to the 2nd cohort of the Open Life... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Open Life Science (OLS) is an online mentoring &amp; training program to help individuals and stakeholders in research to become Open Science ambassadors.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2020-09-07-ols/", "_blank");
          
        },
      },{id: "post-meet-our-second-cohort-of-project-leads-and-their-mentors-ols",
        
          title: 'Meet our second cohort of project leads and their mentors | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/09/01/ols2-announcement/", "_blank");
          
        },
      },{id: "post-end-of-ols-1-and-ols-2-announcement-post-ols",
        
          title: 'End of OLS-1 and OLS-2 Announcement post | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/05/27/ols1-wrapup/", "_blank");
          
        },
      },{id: "post-graduation-and-final-presentations-you-39-re-all-invited-ols",
        
          title: 'Graduation and final presentations - you&#39;re all invited! | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/04/12/final-presentations-youre-all-invited/", "_blank");
          
        },
      },{id: "post-meet-our-first-cohort-of-project-leads-and-their-mentors-ols",
        
          title: 'Meet our first cohort of project leads and their mentors | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2020/01/13/ols1-announcement/", "_blank");
          
        },
      },{id: "post-revising-our-program-with-the-help-of-open-science-leaders-ols",
        
          title: 'Revising our program with the help of Open Science Leaders | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2019/11/25/expert-review/", "_blank");
          
        },
      },{id: "post-supercharge-your-open-project-with-leadership-training-open-bioinformatics-foundation",
        
          title: 'Supercharge your open project with leadership training - Open Bioinformatics Foundation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This post is co-authored by Bérénice Batut, Malvika Sharan, Emmy Tsang, and Yo Yehudi.In 2016, Mozilla launched a program to help grow the skills of people interested in working openly and empower a generation of open-inspired leaders. The program has been through several stages of evolution, from early Working Open Workshops, and eventually to regular twice-yearly cohorts, mentoring project leads from all around the globe. Projects spanned a broad number of domains, but included a large number of research/science and tech-oriented projects, including PREreview, an initiative to get people involved in scientific preprint journal clubs; Outbreak science, a nonprofit using technology to support disease outbreaks; MBac, a computer vision tool for bacterial motility assays; and DuraCloud, an open-source digital preservation storage service.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.open-bio.org/2019/11/12/supercharge-your-open-project-with-leadership-training/", "_blank");
          
        },
      },{id: "post-open-science-projects-from-mozilla-open-leaders-ols",
        
          title: 'Open Science projects from Mozilla Open Leaders | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2019/10/18/projects/", "_blank");
          
        },
      },{id: "post-our-application-to-the-olx-ols",
        
          title: 'Our application to the OLx | OLS <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://we-are-ols.org/posts/2019/09/24/application/", "_blank");
          
        },
      },{id: "post-a-nother-successful-galaxy-hts-data-analysis-workshop-in-freiburg-galaxy-hub",
        
          title: 'A(nother) successful Galaxy HTS data analysis workshop in Freiburg | Galaxy Hub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Last week, the Freiburg Galaxy team taught a 5-day workshop on HTS data analysis in Freiburg!",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2019-03-04-galaxy-hts-workshop/", "_blank");
          
        },
      },{id: "post-gcc2019-training-topic-vote",
        
          title: 'GCC2019 Training Topic Vote <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Galaxy Community Conference starts with training but also continues with training throughout the conference.The community proposed some topics and now YOU NEED TO VOTE to select the ones offered at GCC2019!More than 25 topics have been nominated by the community. The GCC2019 Organizing Committee compiled them and expanded this list with community requests and topics from the previous GCC to offer a large list of possible training to the community.----------------------------------------------Please take a few minutes to vote which ones should be at GCC2019! Thank you!----------------------------------------------Voting closes at the end of February 4.Vote for as many topics as you want, but please note that the more topics you vote for the less your vote for each one counts.What? Here&#39;s an example. If Moni votes for 4 topics then each of her votes counts for 1/4 of a point. If Dave votes for 22 topics then each of his votes counts for 1/22 of a point.----------------------------------------------GCC2019 (https://galaxyproject.org/events/gcc2019/) will be held 1-6 July in Freiburg, Germany. It will feature 1 day of introductory training and then 3 days with more specialized training sessions aligned with talks.Training sessions are 2 hours long on the 1st day and 1 1/2 hours during the following 3 days.",
        section: "Posts",
        handler: () => {
          
            window.open("https://goo.gl/forms/lcPoMt4iZ8hwcdM12", "_blank");
          
        },
      },{id: "post-tutorial-of-the-month-quot-genome-annotation-with-prokka-quot-selected-by-simon-gladman-galaxy-hub",
        
          title: 'Tutorial of the Month: &quot;Genome annotation with Prokka&quot;, selected by Simon Gladman |... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Galaxy community is developing and maintaining a collection of tutorials that are designed to be interactive and are built around Galaxy: https://training.galaxyproject.org.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2019-01-totm/", "_blank");
          
        },
      },{id: "post-tutorial-of-the-month-quot-reference-based-rna-seq-data-analysis-quot-selected-by-saskia-hiltemann-galaxy-hub",
        
          title: 'Tutorial of the Month: &quot;Reference-based RNA-Seq data analysis&quot;, selected by Saskia Hiltemann |... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Galaxy community is developing and maintaining a collection of tutorials that are designed to be interactive and are built around Galaxy: https://training.galaxyproject.org.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2018-11-totm/", "_blank");
          
        },
      },{id: "post-tutorial-of-the-month-quot-galaxy-101-quot-selected-by-yvan-le-bras-galaxy-hub",
        
          title: 'Tutorial of the Month: &quot;Galaxy 101&quot;, selected by Yvan Le Bras | Galaxy... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Galaxy community is developing and maintaining a collection of tutorials that are designed to be interactive and are built around Galaxy: https://training.galaxyproject.org.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2018-10-totm/", "_blank");
          
        },
      },{id: "post-tutorial-of-the-month-maria-doyle-selected-quot-from-peaks-to-genes-quot-galaxy-hub",
        
          title: 'Tutorial of the Month: Maria Doyle selected &quot;From peaks to genes&quot; | Galaxy... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Galaxy community is developing and maintaining a collection of tutorials that are designed to be interactive and are built around Galaxy: https://training.galaxyproject.org.",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2018-09-totm/", "_blank");
          
        },
      },{id: "post-a-fruitful-year-for-the-galaxy-training-material-galaxy-hub",
        
          title: 'A fruitful year for the Galaxy Training material | Galaxy Hub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Galaxy Training Network has developed an infrastructure to deliver interactive training based on Galaxy: one central place (https://training.galaxyproject.org) to aggregate training materials…",
        section: "Posts",
        handler: () => {
          
            window.open("https://galaxyproject.org/news/2018-06-training-material/", "_blank");
          
        },
      },{id: "post-comment-fixer-les-problèmes-de-déploiement-et-de-durabilité-des-outils-en-bioinformatique-indice-conda-bioinfo-fr-net",
        
          title: 'Comment fixer les problèmes de déploiement et de durabilité des outils en bioinformatique... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "La diver­si­té des ques­tions que se posent nos amis bio­lo­gistes entraîne une diver­si­té des don­nées : géno­miques, images, etc. De plus, ces don­nées sont géné­rées à des vitesses folles. Pour mani­pu­ler les don­nées et extraire les infor­ma­tions utiles, des solu­tions et outils bio­in­for­ma­tiques sont néces­saires. De nom­breux outils existent déjà pour répondre à de nom­breuses ques­tions. […]",
        section: "Posts",
        handler: () => {
          
            window.open("https://bioinfo-fr.net/comment-fixer-les-problemes-de-deploiement-et-de-durabilite-des-outils-en-bioinformatique", "_blank");
          
        },
      },{id: "post-s-39-outiller-et-s-39-organiser-pour-mieux-travailler-bioinfo-fr-net",
        
          title: 'S&#39;outiller et s&#39;organiser pour mieux travailler - Bioinfo-fr.net <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "TL;DR La repro­duc­ti­bi­li­té, c’est la vie (dans le monde scien­ti­fique) ! Tout résul­tat doit pou­voir être repro­duit. La tech­no­lo­gie per­met de faci­li­ter la recherche de repro­duc­ti­bi­li­té. Les cahiers de labo­ra­toire papiers ne sont plus du tout adap­tés à la recherche actuelle et au besoin de repro­duc­ti­bi­li­té. Je pré­co­nise donc d’utiliser git et GitHub, de bien […]",
        section: "Posts",
        handler: () => {
          
            window.open("https://bioinfo-fr.net/soutiller-et-sorganiser-pour-mieux-travailler", "_blank");
          
        },
      },{id: "post-software-carpentry-ou-la-transmission-de-bonnes-pratiques-en-informatique-bioinfo-fr-net",
        
          title: 'Software Carpentry ou la transmission de bonnes pratiques en informatique - Bioinfo-fr.net <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Avec l’augmentation de la capa­ci­té des ordi­na­teurs et de la qua­li­té des algo­rithmes, l’informatique prend une place de plus en plus impor­tante dans la vie de tous les jours, mais aus­si dans la recherche. Cela est ren­du aus­si pos­sible grâce à la pro­gram­ma­tion et aux amé­lio­ra­tions des lan­guages, des outils et des pra­tiques. Les déve­lop­peurs sont […]",
        section: "Posts",
        handler: () => {
          
            window.open("https://bioinfo-fr.net/software-carpentry-ou-la-transmission-de-bonnes-pratiques-en-informatique", "_blank");
          
        },
      },{id: "post-automatiser-le-parcours-et-la-manipulation-d-arbres-phylogénétiques-avec-le-module-bio-phylo-de-biopython-bioinfo-fr-net",
        
          title: 'Automatiser le parcours et la manipulation d’arbres phylogénétiques avec le module Bio.Phylo de... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "La géno­mique com­pa­ra­tive per­met d&#39;étudier l&#39;évolution d&#39;organismes par com­pa­rai­son de leur génome. La repré­sen­ta­tion de la proxi­mi­té entre les orga­nismes, élé­ment essen­tiel de la géno­mique com­pa­ra­tive, repose sur des arbres phy­lo­gé­né­tiques. Mais com­ment mani­pu­ler ces arbres faci­le­ment ? Quand il n’y en a qu’un, pas de pro­blème : on uti­lise un visua­li­sa­teur comme ceux pro­po­sés dans l’article sur les […]",
        section: "Posts",
        handler: () => {
          
            window.open("https://bioinfo-fr.net/automatiser-le-parcours-et-la-manipulation-darbres-phylogenetiques-avec-le-module-bio-phylo-de-biopython", "_blank");
          
        },
      },{id: "projects-beerdecoded",
          title: 'BeerDEcoded',
          description: "An immersion into biology, bioinformatics &amp; sciences via beer and their yeasts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beerdecoded/";
            },},{id: "projects-biont",
          title: 'BioNT',
          description: "The Bio Network for Training",
          section: "Projects",handler: () => {
              window.location.href = "/projects/biont/";
            },},{id: "projects-elixir-fairymags",
          title: 'ELIXIR FAIRyMAGs',
          description: "Optimising Metagenomics Assembled Genomes building with workflow finalisation, training material development, real data evaluation and resource allocation tool creation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fairymags/";
            },},{id: "projects-open-life-science",
          title: 'Open Life Science',
          description: "FAIRify OLS and support EOSC-Life community members to build open science teams.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/funding-eosc-life-training/";
            },},{id: "projects-dnanalyzer",
          title: 'DNAnalyzer',
          description: "An online game for DNA data analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/funding-university-of-freiburg-2021/";
            },},{id: "projects-gallantries",
          title: 'Gallantries',
          description: "When Galaxy meets Carpentries to develop Scalable, Modular, Eco-friendly, COVID-ready Bioinformatics Curricula",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gallantries_erasmus+/";
            },},{id: "projects-gallantries",
          title: 'Gallantries',
          description: "When Galaxy meets Carpentries for hybrid training",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gallantries_mozilla/";
            },},{id: "projects-open-life-science",
          title: 'Open Life Science',
          description: "Support for OLS in their education and capacity building efforts through trainings, developing curricula, and maturing their governance structure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ols_czi/";
            },},{id: "projects-pathogfair",
          title: 'PathoGFAIR',
          description: "Accessible and scalable detection and identification of foodborne pathogens",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pathogfair/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%72%65%6E%69%63%65.%62%61%74%75%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-hal',
        title: 'HAL',
        section: 'Socials',
        handler: () => {
          window.open("https://cv.hal.science/berenice-batut", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9852-1987", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=q5GpTJYAAAAJ", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/bebatut.bsky.social", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/berenicebatut", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bebatut", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/bebatut", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zotero.org/bebatut", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
