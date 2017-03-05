---
layout: page
title: John Booth x Sonia Delaunay
permalink: /jb_x_sd/
tags: [production, john, booth, sonia, delaunay]
---

<h2>John Booth x Sonia Delaunay</h2>

<div class="grid">
  <div class="grid-sizer"></div>
  <div class="gutter-sizer"></div>
  	{% for image in site.static_files %}
    	{% if image.path contains 'images/production/jbxsd' %}
      		<div class="grid-item">
        		<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
        		<!-- <p>Here's a little text to go under the image.</p> -->
      		</div>
    	{% endif %}
	{% endfor %}
</div>

Some text about the image above. Some text about the image above. Some text about the image above. Some text about the image above. 

Josh Murr
