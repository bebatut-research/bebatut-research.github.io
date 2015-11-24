---
layout: default
title: Teaching
---

# Teaching

I like learning and also teaching to pass down my knowledge and passions. So,
when I had the opportunity, I gave lectures as associate professor at INSA de Lyon
and at IUT d'Aurillac. The sources of my lectures are available at 
[bebatut-edu.github.io](http://bebatut-edu.github.io).

I would like to be a good teacher. So to learn how to teach, I followed the 
[Data and Software Carpentry](https://software-carpentry.org/) instructor 
training. I learned so much about pedagogy and teaching techniques. I highly
recommend this training to everyone who wants to teach computer science. 

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