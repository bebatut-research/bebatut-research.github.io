---
layout: default
title: Publications
---

# Publications

Bibtex? Google scholar link?

---

<ul class="publications">
  {% for data in site.data.publications %}
  <h2 class="title">{{ data.type }}</h2>

  <ul class="publications-by-type {{ data.type }}">
    {% for publi in data.publications %}
      <li class="publi">
        <div class="publi-description">
          {{ publi.authors}}. {{ publi.year}}. {{ publi.title }}. <em> {{ publi.journal }} </em>, {{ publi.ref }}. {{ publi.doi }}
        </div>
        <div class="toggle">
          <a class="toggler">&#10148; <em>Summary</em></a>
          <p class="publi-summary toggled">
            {{ publi.summary }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
  {% endfor %}
</ul>
