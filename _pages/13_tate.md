---
layout: page
title: Tate
permalink: /tate/
tags: [writing, tate]
---

<div class="grid">
  <div class="grid-sizer"></div>
  <div class="gutter-sizer"></div>
  	{% for image in site.static_files %}
    	{% if image.path contains 'images/writing/tate' %}
      		<div class="grid-item">
        		<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
        		<!-- <p>Here's a little text to go under the image.</p> -->
      		</div>
    	{% endif %}
	{% endfor %}
</div>