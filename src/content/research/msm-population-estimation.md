---
title: Latent Population Estimation for HIV Surveillance
area: "Data & Inference"
summary: ""
---

## Overview

<p class="project-links"><span>Project links</span> <a href="https://github.com/meibc/MSM-Population-Estimates" target="_blank" rel="noopener">Code</a> · <a href="https://github.com/meibc/MSM-Population-Estimates/blob/main/eee_msm_methodology.pdf" target="_blank" rel="noopener">Methodology</a></p>

This project estimates the size and demographic distribution of men who have sex with men (MSM) across the United States for HIV surveillance, resource allocation, and population-based modeling.

## Background

Because MSM is a behaviorally defined population that is not directly measured in most national data systems, Census-based geographic anchors are combined with survey-based estimates of male–male sexual behavior. The resulting workflow produces reproducible, uncertainty-aware estimates at national, state, and county levels across age, race, ethnicity, income, and education.

## Methodology

This approach combines three public data sources: American Community Survey data on households and population counts, General Social Survey data on male–male sexual behavior, and NCHS county urbanicity classifications.

Building on prior MSM population estimation methods, the workflow first estimates county-level same-sex male households, borrowing information across counties within the same state and urbanicity group when direct counts are missing or suppressed. These estimates are then used to construct a household-based scaling index that captures relative county-level variation in MSM population size.

The index is combined with urbanicity-specific MSM prevalence estimates from the General Social Survey and county-level male population counts from the ACS to estimate total MSM populations by county. County totals are then distributed across age, race, ethnicity, income, and education strata using subgroup-specific prevalence estimates and corresponding ACS population counts.

To quantify uncertainty, the full workflow is repeated across 100,000 simulation draws, producing mean estimates, medians, and 95% uncertainty intervals.

This workflow is adapted from previously published MSM population estimation methods, including [Grey et al. (JMIR Public Health and Surveillance, 2016)](https://publichealth.jmir.org/2016/1/e14/) and [Sullivan et al. (Open Forum Infectious Diseases, 2018)](https://academic.oup.com/ofid/article/5/6/ofy124/5021651?login=false).

## Outputs

The project produces MSM population estimates at multiple levels of geographic and demographic detail, including:

- national MSM prevalence and population size;
- state-level MSM prevalence and counts;
- county-level MSM population estimates;
- demographic subgroup estimates by age, race, ethnicity, income, and education;
- uncertainty intervals for all major estimates.

The national MSM prevalence estimate from this workflow is approximately 4.45% of the adult male population, with meaningful geographic variation across states and counties. See **Figure 1**. Higher prevalence estimates are concentrated in parts of the Northeast and West Coast, while lower estimates appear in parts of the upper Midwest and South.

<figure>
  <a href="/images/research/msm_county_map.png" target="_blank" rel="noopener">
    <img src="/images/research/msm_county_map.png" alt="County-level MSM prevalence estimates across the United States" />
  </a>
  <figcaption><strong>Figure 1.</strong> County-level MSM prevalence estimates across the United States.</figcaption>
</figure>

Across demographic strata, MSM prevalence is highest among younger adults, particularly those aged 25–34. Socioeconomic stratification suggests higher estimated prevalence among lower-income groups, while education-specific estimates are relatively flatter across categories. These patterns should be interpreted as population distributions shaped by age, urbanicity, geography, and reporting structure rather than as fixed characteristics of any group.
