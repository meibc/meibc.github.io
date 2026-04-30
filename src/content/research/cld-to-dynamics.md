---
title: "From Causal Loop Diagrams to Quantitative Dynamics"
area: "Data & Inference"
summary: ""
---

## Overview

Causal loop diagrams are useful for representing feedback in complex systems, but they often remain qualitative because their relationships are difficult to translate into quantitative model structure.

This project develops a constrained inference pipeline for instsantiating calibrated dynamical models from causal maps. The approach encodes causal-map relationships as sign and sparsity constraints, then uses observed data to estimate pathway strengths and simulate system behavior.

The goal is to make stakeholder-informed causal theory efficiently usable for forecasting, intervention evaluation, and decision support.

This work will be presented at the International Conference of Computational Social Science; the abstract is available [here](https://drive.google.com/file/d/1s6C5TlUuTu5OlcVBqJSBkjNchio8vaS8/view?usp=sharing).

## Methodological Challenge

The central challenge is that causal loop diagrams describe hypothesized relationships, but they do not directly specify the mathematical form, magnitude, or timing of those relationships.

For example, a causal map may suggest that anticipated healthcare stigma reduces HIV testing, or that positive care experiences reduce future stigma. However, the diagram alone does not tell us how large these effects are, how they accumulate over time, or how they interact with other feedback pathways in the system.

This creates a translation problem:

- The causal map provides qualitative structure.
- Observed data provide empirical trends and variability.
- The quantitative model needs to set quantitative system parameters that is consistent with both.

Traditionally, moving from causal loop diagrams to quantitative system models requires expert modelers to define the governing equations, functional relationships, and parameter values. My approach reframes this translation as a constrained dynamical inference problem: rather than manually specifying every relationship, I estimate the parameters of a dynamical system under sign and sparsity constraints derived from the causal map.

<figure>
  <a href="/images/research/cld.jpeg" target="_blank" rel="noopener">
    <img src="/images/research/cld.jpeg" alt="Causal loop diagram used to define directional constraints for the dynamical model" />
  </a>
  <figcaption><strong>Figure 1.</strong> Example causal loop diagram used to define directional and sign constraints in the quantitative model.</figcaption>
</figure>

## Modeling Framework

The workflow begins with a causal loop diagram developed through participatory group model building, literature synthesis, qualitative analysis, or expert elicitation. The relationships in the diagram are translated into a constraint matrix that defines which pathways are allowed in the model and whether each pathway is expected to be positive or negative.

The system is then represented as a first-order discrete-time dynamical model:

$$
X_{t+1} = JX_t + u + \varepsilon_t
$$

where $X_t$ is a vector of state variables at time $t$, $J$ is the interaction matrix describing how variables influence one another over time, $u$ represents baseline or exogenous inputs, and $\varepsilon_t$ represents stochastic error.

The causal loop diagram constrains the structure of $J$. Relationships not present in the causal map are fixed to zero, while hypothesized positive or negative relationships are restricted by sign. This allows the model to preserve qualitative causal assumptions while estimating the relative magnitude of each pathway from data.

## Optimization Approach

Parameter estimation is implemented as a constrained optimization problem. The objective function is designed to identify a system matrix $J$ that can reproduce observed temporal patterns while remaining consistent with the qualitative causal structure.

The loss function combines multiple criteria, including:

- fit to observed aggregate trajectories over time;
- agreement between simulated and observed covariance structure;
- penalties for violating sign or sparsity constraints;
- regularization terms that discourage unstable or overly complex solutions;
- optional stability penalties to ensure dynamically well-behaved trajectories.

Gradient-based optimization is then used to search over the admissible parameter space. At each iteration, candidate values of $J$ are evaluated by simulating the system forward and comparing the resulting trajectories and covariance structure to the observed data.

This approach allows the model to infer latent transition dynamics from repeated cross-sectional or aggregate data, even when individual-level longitudinal follow-up is unavailable.

## Outputs and Questions

The resulting model produces a calibrated interaction matrix, simulated state trajectories, and pathway-strength estimates that can be compared across contexts.

These outputs can be used to ask questions such as:

- Which feedback pathways dominate system behavior?
- How do estimated pathway strengths vary across geographic or institutional contexts?
- Which intervention targets are most likely to propagate through the system?
- How sensitive are downstream outcomes to perturbations in specific social or behavioral mechanisms?

In applied settings, the simulated trajectories can be linked to domain-specific outcome models, such as compartmental models, stock-flow models, or other policy evaluation frameworks.

## Applied Example

I apply this workflow to model how HIV-related stigma influences engagement in prevention and testing services across the United States.

In this application, a stakeholder-informed causal loop diagram is translated into directional constraints on a socio-behavioral dynamical system. Repeated cross-sectional data from the American Men’s Internet Survey are used to estimate state-level behavioral trajectories over time, and the calibrated model is linked to CDC surveillance outcomes, including PrEP uptake, HIV diagnoses, and incidence.

The model allows stigma mitigation strategies to be represented as perturbations to specific state variables or pathways. Scenario analyses can then evaluate how these perturbations propagate through socio-behavioral feedbacks and influence downstream HIV service engagement and epidemiological outcomes. More details are available in [Stigma & HIV Service Engagement Modeling](/research/hiv-stigma-service-engagement/).
