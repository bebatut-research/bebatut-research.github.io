---
layout: default
title: Publications
---

# Publications

You can find my publications below. And you may also have a look at my [ORCID](https://orcid.org/{{ site.social.orcid }}">{{ site.social.orcid }}), [ScienceOpen](https://www.scienceopen.com/user/{{ site.social.scienceopen }}), [ResearchGate](https://www.researchgate.net/profile/{{ site.social.researchgate }})
and [Google Scholar](https://scholar.google.fr/citations?user=q5GpTJYAAAAJ&hl=fr) profiles.

---

<ul class="publications">
  {% for data in site.data.publications %}
    <h2 class="title">{{ data.type }}</h2>

    <ul class="publications-by-type {{ data.type }}">
      {% for publi in data.publications %}
        <li class="publi">
          <div class="publi-description">
            {{ publi.authors}}. {{ publi.year}}.

            {% if publi.link %}
              <a href="{{ publi.link }}">{{ publi.title }}</a>.
            {% else %}
              {{ publi.title }}.
            {% endif %}

            {% if publi.journal %} <em>{{ publi.journal }}</em>,{% endif %}

            {% if publi.conf %} <em>{{ publi.conf }}</em>,{% endif %}

            {% if publi.when %} {{ publi.when }},{% endif %}

            {% if publi.at %} {{ publi.at }}.{% endif %}

            {% if publi.ref %}{{ publi.ref }}.{% endif %}

            {% if publi.doi %} doi: {{ publi.doi }}{% endif %}

            {% if publi.type %}({{ publi.type }}){% endif %}
          </div>

          {% if publi.summary %}
            <div class="toggle">
              <a class="toggler">&#10148; <em>Summary</em></a>
              <p class="publi-summary toggled">
                {{ publi.summary }}
              </p>
            </div>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</ul>
