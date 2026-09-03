import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_heroes';
  info: {
    displayName: 'about-hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface SectionsCareStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_care_steps';
  info: {
    displayName: 'care-step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    primaryButtonLabel: Schema.Attribute.String;
    primaryButtonLink: Schema.Attribute.String;
    secondaryButtonLabel: Schema.Attribute.String;
    secondaryButtonLink: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface SectionsDoctor extends Struct.ComponentSchema {
  collectionName: 'components_sections_doctors';
  info: {
    displayName: 'doctor';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    specialties: Schema.Attribute.Component<'sections.specialty-tag', true>;
  };
}

export interface SectionsFacilityCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_facility_cards';
  info: {
    displayName: 'facility-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SectionsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_cards';
  info: {
    displayName: 'feature-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageSubText: Schema.Attribute.String;
    imageText: Schema.Attribute.String;
    primaryButtonLabel: Schema.Attribute.String;
    primaryButtonLink: Schema.Attribute.String;
    secondaryButtonLabel: Schema.Attribute.String;
    secondaryButtonLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface SectionsMarqueeItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_marquee_items';
  info: {
    displayName: 'marquee-item';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SectionsNavLink extends Struct.ComponentSchema {
  collectionName: 'components_sections_nav_links';
  info: {
    displayName: 'nav-link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsPhysician extends Struct.ComponentSchema {
  collectionName: 'components_sections_physicians';
  info: {
    displayName: 'physician';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    highlights: Schema.Attribute.Component<'sections.specialty-tag', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_cards';
  info: {
    displayName: 'service-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServiceDetail extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_details';
  info: {
    displayName: 'service-detail';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    checklist: Schema.Attribute.Component<'sections.specialty-tag', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSpecialtyTag extends Struct.ComponentSchema {
  collectionName: 'components_sections_specialty_tags';
  info: {
    displayName: 'specialty-tag';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SectionsStat extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    authorMeta: Schema.Attribute.String;
    authorName: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    rating: Schema.Attribute.Integer;
  };
}

export interface SectionsTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_timeline_items';
  info: {
    displayName: 'timeline-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface SectionsWhyFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_features';
  info: {
    displayName: 'why-feature';
  };
  attributes: {
    checklist: Schema.Attribute.Component<'sections.specialty-tag', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.about-hero': SectionsAboutHero;
      'sections.care-step': SectionsCareStep;
      'sections.cta': SectionsCta;
      'sections.doctor': SectionsDoctor;
      'sections.facility-card': SectionsFacilityCard;
      'sections.faq-item': SectionsFaqItem;
      'sections.feature-card': SectionsFeatureCard;
      'sections.hero': SectionsHero;
      'sections.marquee-item': SectionsMarqueeItem;
      'sections.nav-link': SectionsNavLink;
      'sections.physician': SectionsPhysician;
      'sections.service-card': SectionsServiceCard;
      'sections.service-detail': SectionsServiceDetail;
      'sections.specialty-tag': SectionsSpecialtyTag;
      'sections.stat': SectionsStat;
      'sections.testimonial': SectionsTestimonial;
      'sections.timeline-item': SectionsTimelineItem;
      'sections.why-feature': SectionsWhyFeature;
    }
  }
}
