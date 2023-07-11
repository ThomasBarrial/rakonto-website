export interface SanityDocument {
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
}

export interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'bloclquote';
}

export interface Subject extends SanityDocument {
  description: string;
  titleFr: string;
  titleEn: string;
}

export interface Author extends SanityDocument {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

export interface SanityPage extends SanityDocument {
  keywords: string[];
  title: string;
  description: string;
}

export interface SanityImage {
  _type: Image;
  alt?: string;
  asset: {
    _type: 'reference';
    _ref: string;
  };
}

export interface INavLinks extends SanityDocument {
  nameEn: string;
  nameFr: string;
  link: string;
  orderPlace: string;
}

export interface ISocialMedia extends SanityDocument {
  name: string;
  link: string;
  icon: SanityImage;
}

export interface IHomePage extends SanityPage {
  pageBuilder: [
    {
      _type: string;
      _key: string;
      titleFr: string;
      titleEn: string;
      textEn: string;
      textFr: string;
      image: SanityImage;
    },
    {
      _type: string;
      _key: string;
      titleFr: string;
      titleEn: string;
      textEn: string;
      textFr: string;
      callToAction: {
        link: string;
        nameFr: string;
        nameEn: string;
      };
    },
  ];
}

export interface IHomePresentationSection {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  textEn: string;
  textFr: string;
  image: SanityImage;
}

export interface IHomeOurProjectSection {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  textEn: string;
  textFr: string;
  callToAction: {
    link: string;
    nameFr: string;
    nameEn: string;
  };
}

export interface IHomeOurOffersSection {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  textEn: string;
  textFr: string;
  callToAction: {
    link: string;
    nameFr: string;
    nameEn: string;
  };
}

export interface IHomeGalleryImage {
  _type: string;
  _key: string;
  gallery: SanityImage[];
}

export interface IHomeSupportUs {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  TextEn: Block[];
  textFr: Block[];
  callToAction: {
    _type: string;
    _key: string;
    nameFr: string;
    nameEn: string;
    TextEn: Block[];
    textFr: Block[];
    link: string;
    buttonNameFr: string;
    buttonNameEn: string;
  }[];
}

export interface IHomeOurLastestArticlesSection {
  _type: string;
  _key: string;
  titleFr: string;
  titleEn: string;
  callToAction: {
    link: string;
    nameFr: string;
    nameEn: string;
  };
}

export interface Article extends SanityDocument {
  author: Author;
  bodyEn: Block[];
  bodyFr: Block[];
  subjects: Subject[];
  mainImage: SanityImage;
  slug: Slug;
  title: string;
  titleEn: string;
  url: string;
  gallery: SanityImage[];
  descriptionEN: string;
  descriptionFR: string;
  publishedAt: string;
}

export interface IContactInfos extends SanityDocument {
  email: string;
  phoneNumber: number;
}

export interface ISubject extends SanityDocument {
  titleFr: string;
  titleEn: string;
}
