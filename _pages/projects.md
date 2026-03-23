---
layout: page
title: Projects
permalink: /projects/
description: (Funded) projects in which I am or was involved
nav: true
nav_order: 3
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  {% assign today_iso = 'now' | date: '%Y-%m-%d' %}
  {% assign projects_by_start_date = site.projects | sort: 'start_date' | reverse %}
  {% assign projects_by_end_date = site.projects | sort: 'end_date' | reverse %}

  <h2 class="category">Current Projects</h2>
  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {% for project in projects_by_start_date %}
          {% if project.end_date == nil or project.end_date == '' or project.end_date == 'present' or project.end_date == 'Present' %}
            {% include projects_horizontal.liquid %}
          {% else %}
            {% assign project_end_iso = project.end_date | date: '%Y-%m-%d' %}
            {% if project_end_iso >= today_iso %}
              {% include projects_horizontal.liquid %}
            {% endif %}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in projects_by_start_date %}
        {% if project.end_date == nil or project.end_date == '' or project.end_date == 'present' or project.end_date == 'Present' %}
          {% include projects.liquid %}
        {% else %}
          {% assign project_end_iso = project.end_date | date: '%Y-%m-%d' %}
          {% if project_end_iso >= today_iso %}
            {% include projects.liquid %}
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}

  <h2 class="category mt-4">Past Projects</h2>
  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {% for project in projects_by_end_date %}
          {% if project.end_date and project.end_date != '' and project.end_date != 'present' and project.end_date != 'Present' %}
            {% assign project_end_iso = project.end_date | date: '%Y-%m-%d' %}
            {% if project_end_iso < today_iso %}
              {% include projects_horizontal.liquid %}
            {% endif %}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in projects_by_end_date %}
        {% if project.end_date and project.end_date != '' and project.end_date != 'present' and project.end_date != 'Present' %}
          {% assign project_end_iso = project.end_date | date: '%Y-%m-%d' %}
          {% if project_end_iso < today_iso %}
            {% include projects.liquid %}
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}
</div>
