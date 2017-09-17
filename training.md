---
layout: default
title: Training
---

# Training and teaching

I like learning and also teaching to pass down my knowledge and passions. When I had the opportunity, I gave lectures and exercises as associate professor at INSA de Lyon, at IUT d'Aurillac and at the Department of Computer Science of the University of Freiburg. Now, I am giving training, mainly on Galaxy use and development of tools.

Since March 2016, I am a [Software Carpentry](https://software-carpentry.org/) instructor. I am also highly involved in the development of the [Training Material repository](http://galaxyproject.github.io/training-material/) of the [Galaxy Training Network](https://new.galaxyproject.org/teach/gtn/).

---

<ul class="lectures">
  {% for data in site.data.teaching %}
    <h2 class="title">{{ data.year }}</h2>

    {% for location in data.locations %}
      <h4 class="subtitle">{{ location.at }}</h4>
      <ul class="lecture-by-location">
      {% for lecture in location.lectures %}
        <li class="lecture-by-location">
        {% if lecture.link %}
          <a href="{{ lecture.link }}">{{ lecture.title }}</a>
        {% else %}
          {{ lecture.title }}
        {% endif %}

        <ul class="lecture-content">
        {% for content in lecture.content %}
          <li class="lecture-content">
            {% if content.link %}
              <a href="{{ content.link }}">{{ content.type }}:</a>
            {% else %}
              {{ content.type }}:
            {% endif %}

            <ul class="lecture-detailed-content">
            {% for detailed_content in content.detailed_content %}
              <li class="lecture-detailed-content">
                {% if detailed_content.link %}
                  <a href="{{ detailed_content.link }}">{{ detailed_content.title }}</a>
                {% else %}
                  {{ detailed_content.title }}
                {% endif %}
                {% if detailed_content.data_link %}
                  [<a href="{{ detailed_content.data_link }}">data</a>]
                {% endif %}
              </li>
            {% endfor %}
            </ul>
          </li>
        {% endfor %}
        </ul>
        </li>
      {% endfor %}
      </ul>
    {% endfor %}
  {% endfor %}
</ul>
