---
layout: default
title: Publications
---

# Publications

[Scholar profile](https://scholar.google.fr/citations?user=q5GpTJYAAAAJ&hl=fr)

Bibtex? Google scholar link?

---

<ul class="publications">
  {% for data in site.data.publications %}
  <h2 class="title">{{ data.type }}</h2>

  <ul class="publications-by-type {{ data.type }}">
    {% for publi in data.publications %}
      <li class="publi">
        <div class="publi-description">
          {{ publi.authors}}. {{ publi.year}}. <a href="{{ publi.link }}">{{ publi.title }}</a>.
          {% if publi.journal %} <em> {{ publi.journal }} </em>,{% endif %}
          {% if publi.conf %} <em> {{ publi.conf }} </em>,{% endif %}
          {% if publi.when %} {{ publi.when }},{% endif %}
          {% if publi.at %} {{ publi.at }},{% endif %}
          {% if publi.ref %}{{ publi.ref }}.{% endif %}
          {% if publi.doi %} doi: {{ publi.doi }}{% endif %}
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
