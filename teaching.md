---
layout: default
title: Teaching
---

# Teaching

... love teaching

Data and Software Carpentry instructor training

monitorat + vacation IUT Aurillac (tableau du nombre d'heures)

The sources can be found at: [bebatut-edu.github.io](http://bebatut-edu.github.io).

---

<ul class="lectures">
  {% for data in site.data.teaching %}
  <h2 class="title">{{ data.year }}</h2>

  <ul class="lecture-by-year {{ data.year }}">
    {% for lecture in data.lectures %}
      <li class="lecture">
        <div class="lecture-title">
          <a href="{{ lecture.slides_url }}">{{ lecture.title }}</a> - {{ lecture.at }}
          {% if lecture.video_url %} [<a href="{{ lecture.video_url }}">video</a>]{% endif %}{% if lecture.post_url %} [<a href="{{ lecture.post_url }}">post</a>]{% endif %}
        </div>

        <div class="toggle">
          <a class="toggler">&#10148; <em>Summary</em></a>
          <p class="lecture-summary toggled">
            {{ lecture.summary }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
  {% endfor %}
</ul>