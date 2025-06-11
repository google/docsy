---
layout: default
title: "pmm inventory"
suppress_header: true
extra_css:
  - team.css
---

<!-- markdownlint-disable -->
-# THE CONTENT FOR THIS PAGE IS IN https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/inventory/pmm.yml
.wrapper
  .container
    .team-head
      %h1
        %b PMM Inventory
      %p.text-center Welcome to the PMM Resource Inventory

    %p.text-center<
      %h2.js-in-page-nav-section#all.text-center="General Collateral"
      - data.inventory.pmm.each do |l|
        - if l.use_case == "all"
          %p.text-left<
            = link_to l.title, l.link, target: :_blank
            = ", type: " + l.asset_type
      %br

    %p.text-center<
      %h2.js-in-page-nav-section#agile.text-center="Agile"
      - data.inventory.pmm.each do |l|
        - if l.use_case == "agile"
          %p.text-left<
            = link_to l.title, l.link, target: :_blank
            = ", type: " + l.asset_type
      %br

    %p.text-center<
      %h2.js-in-page-nav-section#ci.text-center="Continuous Integration"
      - data.inventory.pmm.each do |l|
        - if l.use_case == "ci"
          %p.text-left<
            = link_to l.title, l.link, target: :_blank
            = ", type: " + l.asset_type
      %br

    %p.text-center<
      %h2.js-in-page-nav-section#cd.text-center="Continuous Delivery"
      - data.inventory.pmm.each do |l|
        - if l.use_case == "cd"
          %p.text-left<
            = link_to l.title, l.link, target: :_blank
            = ", type: " + l.asset_type
      %br

    %p.text-center<
      %h2.js-in-page-nav-section#cloudnative.text-center="Cloud Native"
      - data.inventory.pmm.each do |l|
        - if l.use_case == "cloud native"
          %p.text-left<
            = link_to l.title, l.link, target: :_blank
            = ", type: " + l.asset_type
      %br

    %p.text-center<
      %h2.js-in-page-nav-section#devsecops.text-center="DevSecOps"
      - data.inventory.pmm.each do |l|
        - if l.use_case == "devsecops"
          %p.text-left<
            = link_to l.title, l.link, target: :_blank
            = ", type: " + l.asset_type
      %br

    %p.text-center<
      %h2.js-in-page-nav-section#gitops.text-center="GitOps"
      - data.inventory.pmm.each do |l|
        - if l.use_case == "gitops"
          %p.text-left<
            = link_to l.title, l.link, target: :_blank
            = ", type: " + l.asset_type
      %br

    %p.text-center<
      %h2.js-in-page-nav-section#simplifydevops.text-center="Simplify DevOps"
      - data.inventory.pmm.each do |l|
        - if l.use_case == "simplifydevops"
          %p.text-left<
            = link_to l.title, l.link, target: :_blank
            = ", type: " + l.asset_type
      %br

    %p.text-center<
      %h2.js-in-page-nav-section#vcc.text-center="Version Control and Collaboration"
      - data.inventory.pmm.each do |l|
        - if l.use_case == "vcc"
          %p.text-left<
            = link_to l.title, l.link, target: :_blank
            = ", type: " + l.asset_type
      %br
<!-- markdownlint-enable -->
