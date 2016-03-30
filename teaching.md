---
layout: default
title: Teaching
---

# Teaching

I like learning and also teaching to pass down my knowledge and passions. I followed [Software Carpentry](https://software-carpentry.org/) instructor 
training and get the certificate.
When I had the opportunity, I gave lectures as associate professor at INSA de Lyon and at IUT d'Aurillac. Slides and materials for these courses are available on [http://bebatut-edu.github.io/](http://bebatut-edu.github.io/).

---

<ul class="lectures">
  {% for data in site.data.teaching %}
    <h2 class="title">{{ data.year }}</h2>

    {% for location in data.locations %}
      <h3 class="subtitle">{{ location.at }}</h3>
      <ul class="lecture-by-location">
      {% for lecture in location.lectures %}
        <li class="lecture-by-location">{{ lecture.title }}
        
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