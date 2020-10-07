---
pagination:
    data: series-1
    size: 1
    alias: interview
permalink: "interviews/{{ interview.title | slug }}-{{ interview.intervieweeName | slug }}/"
---

// This page will be empty of html as it will yse the interview NJK template
// That keeps the HTML in the layouts folder 

{{ interview.intro }}

{%- for link in interview.intervieweeSocial %}
[{{ link.title }}]({{ link.href }}) 
{% endfor %}

{%- for item in interview.body %}

{%- if item.type == 'question' %}
<dl class="interviewQuestion" itemprop="mainEntity" itemscope itemtype="http://schema.org/Thing">
	<dt itemprop="name">{{ item.fields.question }}</dt>
	<dd itemprop="description">{{ item.fields.answer }}</dd>
</dl>
{%- endif %}
{%- if item.type == 'pullquote' %}
<div itemscope itemtype="http://schema.org/Quotation">
	<blockquote itemprop="mainEntity" itemscope itemtype="http://schema.org/Thing">
		<p itemprop="description">{{ item.fields.quote }}</p>
	</blockquote>
	<cite class="isHidden" itemprop="spokenByCharacter" itemscope itemtype="http://schema.org/Person">
		<meta itemprop="name" content="{{ interview.intervieweeName }}">
	</cite>
</div>
{%- endif %}
{% endfor %}