---
title: html5语义化
tags:
  - html
categories:
  - html
toc: true
thumbnail: /2016/11/13/html5语义化/img1.png
date: 2016-11-13 09:07:33
---

## html5使用语义化标签的好处：
---
- 更好的页面展示（无css样式加载时也能清晰的展示网页结构）。
- 更利于开发维护（div+id/class才能抵得上一个header标签）。
- 有利于SEO
- 无障碍阅读
- 目前国内使用语义化标签最大作用是 开发者自己看着舒服🤪
<!--more-->

## 当前严格遵守语义化标签的网站
---
  **找了半天一个没找到**

## 语义化代码和div代码对比
---
一段不使用html5语义化标签的代码
```` javascript
<div id="header">...</div>
<div id="main">
  <div id="nav">...</div> 
  <div class="article"> </div>
  <div id="side-bar">...</div>
</div>
<div id="aside">...</div>
<div id="footer">...</div>


````
使用语义化标签的代码
````javascript
<header></header>
<main>
  <nav></nav>
  <article></article>
  <aside></aside>
</main>
<aside></aside>
<footer></footer>

````

## 常用的语义化标签及基本使用 **规范 规范 规范**
---
````javascript
// 结构标签
<header></header>  // 标签定义文档的页眉（介绍信息）  可使用多个  HTML5 的规定<header>都应包含某个级别的标题
<main></main>      // 文档的主要内容    元素中的内容对于文档来说应当是唯一的。它不应包含在文档中重复出现的内容，比如侧栏、导航栏、版权信息、站点标志或搜索表单。  在一个文档中，不能出现一个以上的 <main> 元素。<main> 元素不能是以下元素的后代：<article>、<aside>、<footer>、<header> 或 <nav>。
<nav></nav>        // 标签定义导航链接的部分。 比如分页，或者顶部导航
<article></article>// 报纸文章 论坛帖子 博客条目 用户评论。。。 等一个独立的自包含内容  内部可使用header
<section></section>// 文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。实际开发中基本当div用了
<aside></aside>    // 标签定义其所处内容之外的内容  side 的内容应该与附近的内容相关。
<footer></footer>  // 文档中的页脚部分 页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。可使用多个
````
每个标签都有一定的使用规范。
![语义化标签使用基本图示](插入图片测试/img1.png)

## 参考
---
1. 《HTML5与CSS3权威指南》陆凌牛
2. [w3school](https://www.w3school.com.cn/)
3. [雨落的blog](https://rainylog.com/post/ife-note-1/)
