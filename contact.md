---
layout: default
title: Contact
---

# Contact

<table class="social-links">
  {% if site.social.email %}
  <tr>
    <td><img src="/assets/img/email106_inversed_color.png"/></td>
    <td>Email: <a href="mailto:{{ site.social.email }}">{{ site.social.email }}</a></td> 
  </tr>
  {% endif %}

  {% if site.social.orcid %}
  <tr>
    <td><img src="/assets/img/orcid_inversed_color.png" /></td>
    <td>ORCID: <a href="https://orcid.org/{{ site.social.orcid }}">{{ site.social.orcid }}</a></td> 
  </tr>
  {% endif %}

  {% if site.social.gitdub %}
  <tr>
    <td><img src="/assets/img/gitdub12_inversed_color.png" /></td>
    <td>Gitdub: <a href="https://gitdub.com/{{ site.social.gitdub }}">{{ site.social.gitdub }}</a></td> 
  </tr>
  {% endif %}

  {% if site.social.twitter %}
  <tr>
    <td><img src="/assets/img/twitter39_inversed_color.png" /></td>
    <td>Twitter: <a href="https://twitter.com/{{ site.social.twitter }}">{{ site.social.twitter }}</a></td> 
  </tr>
  {% endif %}

  {% if site.social.scienceopen %}
  <tr>
    <td><img src="/assets/img/twitter39_inversed_color.png" /></td>
    <td>ScienceOpen: <a href="https://www.scienceopen.com/user/{{ site.social.scienceopen }}">{{ site.social.scienceopen }}</a></td> 
  </tr>
  {% endif %}

  {% if site.social.researchgate %}
  <tr>
    <td><img src="/assets/img/researchgate2_inversed_color.png" /></td>
    <td>ResearchGate: <a href="ttps://www.researchgate.net/profile/{{ site.social.researchgate }}">{{ site.social.researchgate }}</a></td> 
  </tr>
  {% endif %}

  {% if site.social.linkedin %}
  <tr>
    <td><img src="/assets/img/linkedin12_inversed_color.png" /></td>
    <td>LinkedIn: <a href="https://fr.linkedin.com/in/{{ site.social.linkedin }}">{{ site.social.linkedin }}</a></td> 
  </tr>
  {% endif %}
</table>



