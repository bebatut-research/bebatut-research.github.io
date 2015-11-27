---
layout: default
title: Teaching
---

# Teaching

I like learning and also teaching to pass down my knowledge and passions. So,
when I had the opportunity, I gave lectures as associate professor at INSA de Lyon
and at IUT d'Aurillac. 

I would like to be a good teacher. So to learn how to teach, I followed the 
[Data and Software Carpentry](https://software-carpentry.org/) instructor 
training. I learned so much about pedagogy and teaching techniques. I highly
recommend this training to everyone who wants to teach computer science. 

---

<ul class="lectures">
  {% for data in site.data.teaching %}
    <h2 class="title">{{ data.year }}</h2>

    {% for location in data.locations %}
      <h3 class="subtitle">{{ location.at }}</h3>
      <ul class="lecture-by-location">
      {% for lecture in location.lectures %}
        <li class="lecture-by-location">{{ lecture.title }}

        {% if lecture.lecture_source %} 
          [<a href="{{ lecture.lecture_source }}">sources</a>]
        {% endif %}
        
        <ul class="lecture-content">
        {% for content in lecture.content %} 
          <li class="lecture-content"> 
            {{ content.type }}:
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