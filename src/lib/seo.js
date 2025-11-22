export const defaultMeta = {
title: 'Able Aide — NDIS Support & Support Coordination | Melbourne',
description: 'Able Aide provides compassionate NDIS support including support coordination, ADL, and SCCP across Melbourne metro and regional Victoria. Call 0435 039 110.',
siteUrl: 'https://ableaide.com.au',
image: '/images/hero-support-coordination.jpg'
}


export function buildMeta(overrides = {}) {
return {...defaultMeta, ...overrides}
}