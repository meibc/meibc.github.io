---
title: "Maternal Health & Service Delivery Redesign Modeling"
area: "Quantitative Modeling of Complex Systems"
summary: ""
---

## Overview

This Gates Foundation-funded project develops a hybrid multi-agent and dynamical systems model to evaluate Service Delivery Redesign (SDR), a health system strengthening strategy for improving maternal and neonatal health in Kakamega County, Kenya.

In Kakamega, SDR aims to shift deliveries and high-risk pregnancies from home or lower-capacity Level 2/3 facilities to better-equipped Level 4/5 hospitals. The central modeling question is not only whether this shift could improve outcomes, but under what implementation conditions it would do so.

The model is informed by an integrated implementation science and systems science framework and translates hypothesized SDR pathways into a quantitative simulation environment. It represents both pregnant women’s care-seeking trajectories and the health system conditions that shape whether women receive the right care, at the right place, and at the right time.

Related papers: the [full quantitative model (ResearchSquare preprint)](https://www.researchsquare.com/article/rs-8352244/v1), the [integrated systems + implementation science conceptual framework (Health Policy and Planning)](https://doi.org/10.1093/heapol/czaf099), and the [BMJ Global Health paper](https://doi.org/10.1136/bmjgh-2024-018240).

## Conceptual Design

The model was conceptually grounded in an integrated implementation science and systems science framework. Implementation science helped identify the key intervention components, implementation strategies, barriers, facilitators, and outcomes relevant to Service Delivery Redesign. Systems science helped organize these relationships into causal pathways and feedback loops that could be translated into a quantitative simulation model.


The resulting conceptual design represents SDR as a set of interacting demand-side and supply-side mechanisms. Demand-side strategies, including community health promoter outreach and SMS-based engagement, influence antenatal care attendance, self-referral, and delivery at higher-level facilities. Supply-side strategies, including facility upgrades, workforce strengthening, equipment availability, and referral system improvements, influence service readiness, quality of care, and emergency response capacity.

**Figure 1** visualizes resource flows within L2/3 and L4/5 facilities separately, while **Figure 2** shows how those flows interact across facility levels through intersectional pathways and feedback.

<figure>
  <a href="/images/research/sdr_resource1.png" target="_blank" rel="noopener">
    <img src="/images/research/sdr_resource1.png" alt="Service Delivery Redesign conceptual structure and implementation pathways" />
  </a>
  <figcaption><strong>Figure 1.</strong> Resource flows across L2/3 and L4/5 facilities individually.</figcaption>
</figure>

<figure>
  <a href="/images/research/sdr_resource2.png" target="_blank" rel="noopener">
    <img src="/images/research/sdr_resource2.png" alt="Conceptual comparison of SDR implementation pathways" />
  </a>
  <figcaption><strong>Figure 2.</strong> Resource flows across L2/3 and L4/5 facilities intersectionally and with feedback.</figcaption>
</figure>

This structure makes it possible to evaluate not only whether SDR increases use of higher-level facilities, but whether the health system can adapt to that increased demand. The conceptual model therefore serves as the bridge between implementation theory, stakeholder-informed causal pathways, and the hybrid agent-based/system dynamics simulation.

## Methodology

The model uses a hybrid simulation approach:

- **Agent-based modeling** represents heterogeneous pregnant women and their care-seeking pathways.
- **System dynamics** represents evolving health system conditions, including facility capacity, staffing, equipment, and referral readiness.
- **Cost-effectiveness modeling** links simulated maternal outcomes to DALYs, costs, and cost per DALY averted.

The simulation follows pregnant women through four broad phases: baseline condition, antenatal care, labor/delivery/immediate postnatal care, and maternal outcomes. During these phases, women may attend ANC, be risk stratified, be referred, receive interventions, deliver at home or in a facility, require emergency transfer, experience complications, or die from maternal causes. **Figure 3** illustrates this process. 

<figure>
  <a href="/images/research/sdrdiagram1.png" target="_blank" rel="noopener">
    <img src="/images/research/sdrdiagram1.png" alt="Maternal care simulation process across baseline, ANC, delivery, and outcomes" />
  </a>
  <figcaption><strong>Figure 3.</strong> Maternal care simulation process across baseline condition, antenatal care, delivery, and outcomes.</figcaption>
</figure>

Model parameters were informed by multiple data sources, including Kakamega County health facility data, Jacaranda Health implementation and costing data, Rescue.co emergency referral data, Kenya Health Information System data, Kenya Demographic and Health Survey data, and published literature.

The model was calibrated using Bayesian optimization to reproduce baseline maternal care processes and outcomes before being used for counterfactual scenario analysis. Calibration targets included delivery location, C-section rates, maternal complication rates, maternal mortality ratio, and cause-specific patterns of maternal deaths.

## Scenario Analyses

The model evaluates six SDR implementation scenarios over 72 months: a 36-month implementation phase followed by a 36-month maintenance phase.

Three scenarios represent capacity fully-adjusted implementation:

- Conservative
- Moderate
- Aggressive

In these scenarios, increased demand for Level 4/5 delivery is matched by adaptive expansion in facility capacity, staffing, equipment, and referral support.

Three additional scenarios represent capacity partially-adjusted implementation:

- Conservative*
- Moderate*
- Aggressive*

These scenarios mirror the demand targets of the fully-adjusted scenarios but assume the health system cannot fully adapt to increased utilization. They are designed to test what happens when demand rises faster than system readiness.

Scenario contrasts are summarized across **Figure 4** (service indicators), **Figure 5** (process indicators), and **Figure 6** (health indicators).

<figure>
  <a href="/images/research/sdrpaper1.png" target="_blank" rel="noopener">
    <img src="/images/research/sdrpaper1.png" alt="Service indicators across SDR scenarios" />
  </a>
  <figcaption><strong>Figure 4.</strong> Service indicators across SDR implementation scenarios.</figcaption>
</figure>

<figure>
  <a href="/images/research/sdrpaper2.png" target="_blank" rel="noopener">
    <img src="/images/research/sdrpaper2.png" alt="Process indicators across SDR scenarios" />
  </a>
  <figcaption><strong>Figure 5.</strong> Process indicators across SDR implementation scenarios.</figcaption>
</figure>

<figure>
  <a href="/images/research/sdrpaper3.png" target="_blank" rel="noopener">
    <img src="/images/research/sdrpaper3.png" alt="Health indicators across SDR scenarios" />
  </a>
  <figcaption><strong>Figure 6.</strong> Health indicators across SDR implementation scenarios.</figcaption>
</figure>

The scenario results highlight a central insight: SDR is most effective when increased demand is matched by improved system capacity. In capacity fully-adjusted scenarios, facility utilization remains below saturation, process indicators improve, and maternal mortality declines substantially. In contrast, partially-adjusted scenarios can increase demand for higher-level facilities while creating bottlenecks in staffing, equipment, transport, or facility capacity.

In the aggressive fully-adjusted scenario, the model projected a 64% reduction in maternal mortality ratio, from 210.8 to 75.5 maternal deaths per 100,000 live births, with approximately 189,000 DALYs averted per 100,000 live births at an estimated cost of $131 per DALY averted. Across scenarios, results suggest that capacity expansion is not only important for health impact, but also for cost-effectiveness.

<p><small>This work was done in collaboration with Dr. Tingting Ji, advised by Dr. Olakunle Alonge and Dr. Tak Igusa.</small></p>
