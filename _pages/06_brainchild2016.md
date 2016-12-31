---
layout: page
title: Brainchild 2016
permalink: /brianchild_test_page2/
tags: [brainchild, 2016, adc]
---

<div class="grid">
  <div class="grid-sizer"></div>
  <div class="gutter-sizer"></div>
  	{% for image in site.static_files %}
    	{% if image.path contains 'images/art_direction/brainchild/2016' %}
      		<div class="grid-item">
        		<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
        		<!-- <p>Here's a little text to go under the image.</p> -->
      		</div>
    	{% endif %}
	{% endfor %}
</div>

Some text about the image above. Some text about the image above. Some text about the image above. Some text about the image above. 

Josh Murr
