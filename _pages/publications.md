---
layout: page
permalink: /publications/
title: Publications
description: |
  I practice open science to ensure my research is accessible, transparent, and reusable. My work is published in **open-access journals** to maximize reach and impact. Preprints are systematically shared on **[bioRxiv](https://www.biorxiv.org/)** and **[BioHackrXiv](https://biohackrxiv.org/)** to enable early access and recognize all contributors.

  All publications are archived on **[HAL](https://hal.science/)** and linked to my **[ORCID profile](https://orcid.org/)**. Research data are annotated and deposited in public databases, while code, workflows, and training materials are released under open licenses on **[GitHub](https://github.com/)** or **[GitLab](https://gitlab.com/)**. Software versions are archived on **[Zenodo](https://zenodo.org/)** (with DOIs) and registered on **[bio.tools](https://bio.tools/)**. Protocols are published on **[Protocols.io](https://www.protocols.io/)** and workflows on **[WorkflowHub](https://workflowhub.eu/)**.

  To ensure quality and credit, software is submitted to peer-reviewed journals like the **[Journal of Open Source Software (JOSS)](https://joss.theoj.org/)**. Conference presentations and posters are openly shared, often on **[F1000Research](https://f1000research.com/)** with DOIs.

  For a complete list of my publications, visit my **[HAL profile](https://hal.science/)**.
nav: true
nav_order: 2
tabs: true
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% tabs publications %}

{% tab publications Peer-Reviewed Journals %}

{% bibliography --query @article %}

{% endtab %}

{% tab publications Non Peer-reviewed Journals and Preprints %}

{% bibliography --query @unpublished %}

{% endtab %}

{% tab publications Book Chapters %}

{% bibliography --query @incollection %}

{% endtab %}

{% tab publications Reports %}

{% bibliography --query @techreport %}

{% endtab %}

{% tab publications Thesis %}

{% bibliography --query @phdthesis %}

{% endtab %}

{% tab publications Talks %}

{% bibliography --query @inproceedings %}

{% endtab %}

{% tab publications Posters %}

{% bibliography --query @misc %}

{% endtab %}

{% endtabs %}

</div>
