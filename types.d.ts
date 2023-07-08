export interface SanityDocument {
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
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
      key: string;
      titleFr: string;
      titleEn: string;
      textEn: string;
      textFr: string;
      image: SanityImage;
    },
    {
      _type: string;
      key: string;
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
  key: string;
  titleFr: string;
  titleEn: string;
  textEn: string;
  textFr: string;
  image: SanityImage;
}

export interface IHomeOurProjectSection {
  _type: string;
  key: string;
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
