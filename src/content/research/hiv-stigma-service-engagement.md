---
title: "Stigma & HIV Service Engagement Modeling"
area: "Quantitative Modeling of Complex Systems"
summary: ""
---
## Overview

This NIH-funded project develops a dynamical systems model of socio-behavioral relationships to forecast how stigma mitigation interventions may influence key outcomes related to Ending the HIV Epidemic, including HIV prevention service use, HIV testing, diagnoses, and incidence across all US states.

The model structure is shown in **Figure 1**. In brief, the model links a constrained linear autoregressive model of socio-behavioral feedbacks with an HIV compartmental model. The socio-behavioral model estimates how stigma, disclosure, healthcare engagement, prevention behavior, and testing evolve over time, while the epidemiological model translates these intermediate behavioral trajectories into projected HIV diagnoses and incidence.

<figure>
  <a href="/images/research/EEE_slide_model.png" target="_blank" rel="noopener">
    <img src="/images/research/EEE_slide_model.png" alt="Integrated socio-behavioral and epidemiological model structure" />
  </a>
  <figcaption><strong>Figure 1.</strong> Integrated model structure linking socio-behavioral dynamics and HIV epidemiology.</figcaption>
</figure>

The model is informed by three sources of information: a conceptual model of stigma and behavioral relationships, [American Men’s Internet Survey data (AMIS 2016–2022)](https://emoryamis.org/), and [CDC AtlasPlus surveillance data (2017–2022)](https://www.cdc.gov/nchhstp/about/atlasplus.html).

A brief overview of the model components is provided below. Detailed code is available in the [EEE-SD-Model-2026 repository](https://github.com/meibc/EEE-SD-Model-2026).

## Conceptual Model

<figure>
  <a href="/images/research/cld.jpeg" target="_blank" rel="noopener">
    <img src="/images/research/cld.jpeg" alt="Participatory causal loop diagram of stigma and HIV service engagement" />
  </a>
  <figcaption><strong>Figure 2.</strong> Participatory causal loop diagram mapping stigma across HIV service engagement.</figcaption>
</figure>

The conceptual model represents hypothesized feedback loops linking stigma, social support, disclosure, healthcare engagement, HIV prevention behavior, and testing. These relationships were developed through [participatory causal loop diagramming](/research/maternal-health-service-redesign/) and refined through empirical validation using logistic regression, structural equation modeling, and correlation analysis.

The resulting causal structure was [translated from qualitative maps into quantitative model constraints](/research/cld-to-dynamics/). These constraints define which relationships are allowed in the socio-behavioral model, their expected direction, and the search space for model parameterization. In this way, the qualitative causal map is not only used as a visual framework, but also becomes a structural prior for quantitative modeling.

## Socio-Behavioral Model

The socio-behavioral model forecasts trajectories across eight variables:

- Anticipated healthcare stigma
- General social stigma
- Family stigma
- Disclosure of sexual identity or behavior to a healthcare provider
- Annual visit to a healthcare provider
- Risk behavior
- Annual use of HIV pre-exposure prophylaxis
- Annual HIV testing

These variables are modeled using a constrained linear autoregressive system:

$$
X_{t+1} = J X_t + u + \varepsilon_t
$$

where $X_t$ is the vector of socio-behavioral state variables at time $t$, $J$ is an $8 \times 8$ interaction matrix encoding the directional influence of each variable on the others, $u$ represents exogenous inputs or baseline shifts, and $\varepsilon_t$ is a stochastic error term.

The structure of $J$ is constrained by the causal map. Relationships that are not supported by the conceptual model are fixed to zero, while hypothesized positive or negative relationships are constrained by sign. The model is then calibrated to observed state-level behavioral trajectories from AMIS data, allowing the estimated system to preserve qualitative causal assumptions while fitting empirical trends.

**Figure 3** shows fitted and projected trajectories from the socio-behavioral model for the state of New York. These outputs illustrate how the constrained autoregressive system captures observed patterns in stigma, disclosure, healthcare engagement, prevention behavior, and testing while generating forward projections under the fitted model.


<figure>
  <a href="/images/research/example_sem.png" target="_blank" rel="noopener">
    <img src="/images/research/example_sem.png" alt="<figcaption><strong>Figure 3.</strong> Example fitted and projected socio-behavioral trajectories from the constrained autoregressive model for New York.</figcaption>" />
  </a>
  <figcaption><strong>Figure 3.</strong> Socio-behavioral model representation used for constrained autoregressive estimation.</figcaption>
</figure>

## Epidemiological Model

The HIV compartmental model takes selected outputs from the socio-behavioral model—risk behavior, annual PrEP use, and annual HIV testing—and incorporates them into epidemiological equations for the following population outcomes: 

- Number of individuals on HIV Pre-exposure Prophylaxis 
- Number of individuals newly diagnosed with HIV 
- HIV incidence 

In this integrated framework, the socio-behavioral model generates projected behavioral trajectories under baseline or intervention scenarios. These trajectories then modify epidemiological processes such as HIV acquisition risk, PrEP-mediated protection, and testing-driven diagnosis. The model can therefore be used to evaluate how upstream changes in stigma and engagement may propagate through prevention behaviors and ultimately shape downstream HIV outcomes.

Together, the socio-behavioral and epidemiological components provide a scenario analysis framework for asking how stigma mitigation strategies may affect HIV prevention service use, diagnoses, and incidence over time.

**Figure 4** shows fitted and projected epidemiological outcomes from the integrated model for the state of NY. These outputs illustrate how behavioral trajectories from the socio-behavioral model are translated into projected PrEP use, HIV diagnoses, and incidence over time at the population level.


<figure>
  <a href="/images/research/example_epi.png" target="_blank" rel="noopener">
    <img src="/images/research/example_epi.png" alt="Example fitted and projected epidemiological outcomes from the integrated HIV model for New York." />
  </a>
  <figcaption><strong>Figure 4.</strong> Epidemiological model component linking behavioral trajectories to diagnoses and incidence outcomes.</figcaption>
</figure>
