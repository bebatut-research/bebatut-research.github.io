---
layout: page
title: PathoGFAIR
description: Accessible and scalable detection and identification of foodborne pathogens
img: assets/img/eosc_logo.png
category: work
related_publications: false
start_date: 2022-02-01
end_date: 2023-01-31
funding_type: European grants
funder: EOSC-Life Call for Industry Collaboration
beneficiary: University of Freiburg
role: PI
budget: "€87,500"
github: https://github.com/usegalaxy-eu/pathogfair
---

Food contamination by pathogens poses a global health threat, affecting an estimated 600 million people annually. During a foodborne outbreak investigation, microbiological analysis of food vehicles detects responsible pathogens and traces contamination sources. Metagenomic approaches offer a comprehensive view of the genomic composition of microbial communities, facilitating the detection of potential pathogens in samples. Combined with sequencing techniques like Oxford Nanopore sequencing, such metagenomic approaches become faster and easier to apply. **A key limitation of these approaches is the lack of accessible, easy-to-use, and openly available pipelines for pathogen identification and tracking from (meta)genomic data.**

## The project

The industry partner of this project, Biolytix, is a Swiss Small and Medium-sized Enterprise (SME) founded in 1998, that specializes in molecular biology and microbiological analyses. They developed a procedure to extract, sequence using MinION (ONT) sequencing and analyze a food sample for foodborne pathogen detection and contamination source tracking. However, the bioinformatics pipelines are not following the best practices for open data science, not straightforward and can only be manipulated by the original author, making it not scalable.

Thanks to funding from EOSC-Life, the Freiburg Galaxy team will work with Biolytix, a Swiss Small and Medium-sized Enterprise (SME) specialized in molecular biology and microbiological analyses, toward Accessible and scalable detection and identification of foodborne pathogens.

The aim of the project is to modernize, FAIRify and validate the bioinformatic pipeline developed by Biolytix to extract, sequence using MinION (ONT) sequencing and analyze a food sample for foodborne pathogen detection and contamination source tracking using modern paradigms of data science to make it accessible and scalable.

## Outcomes

[PathoGFAIR](https://usegalaxy-eu.github.io/PathoGFAIR/) is a collection of Galaxy-based Findable, Accessible, Interoperable, and Reusable (FAIR) workflows employing state-of-the-art tools to detect and track pathogens from metagenomic Nanopore sequencing. Although initially developed to detect pathogens in food datasets, the workflows can be applied to other metagenomic Nanopore pathogenic data.

The workflows are accompagnied with extensive training material in the format of a [tutorial via the Galaxy Training Network (GTN)](https://bit.ly/pathogen-tuto). This tutorial has been used as training support in multiple workshops and conferences' training sessions:

1. A [1-day workshop early 2023](https://galaxyproject.org/events/2023-02-02-foodborne-pathogen-detection-workshop/) in FHNW in Muttenz, Switzerland that received [highly positive feedback](https://galaxyproject.org/news/2023-03-21-foodborne-training/)
2. A 1-day session in several **High-Throughput Data Analysis with Galaxy** workshops delivered in Freiburg with the next iteration will be on [July 26th 2024](https://galaxyproject.org/events/2024-07-22-galaxy-workshop-freiburg/).
3. A 2-hour workshop during the Galaxy Community Conference [GCC 2024](https://galaxyproject.org/events/gcc2024/training/microbiome-analysis).

PathoGFAIR was published in [Gigascience](https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giaf017/8266457).
