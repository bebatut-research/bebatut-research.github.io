---
layout: default
title: Talks
---

# Talks

Most of my talks are available on [Slideshare](http://fr.slideshare.net/bebatut),
 and the sources can be found at: [bebatut-slides.github.io](http://bebatut-slides.github.io).

---

<ul class="talks">
  {% for data in site.data.talks %}
  <h2 class="title">{{ data.year }}</h2>

  <ul class="talks-by-year {{ data.year }}">
    {% for talk in data.talks %}
      <li class="talk">
        <div class="talk-title">
          <a href="{{ talk.slides_url }}">{{ talk.title }}</a> - {{ talk.at }}
          {% if talk.video_url %} [<a href="{{ talk.video_url }}">video</a>]{% endif %}{% if talk.post_url %} [<a href="{{ talk.post_url }}">post</a>]{% endif %}
        </div>

        <div class="toggle">
          <a class="toggler">&#10148; <em>Summary</em></a>
          <p class="talk-summary toggled">
            {{ talk.summary }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
  {% endfor %}
</ul>


