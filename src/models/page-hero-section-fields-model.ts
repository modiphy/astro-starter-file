class PageHeroSectionFieldsModel {
  [key: string]: any

  constructor(fields: { [key: string]: any }) {
    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        this[key] = fields[key]
      }
    }
  }

  get sectionOptions(): Object {
    return {
      backgroundColorClass: this.backgroundColorClass
        ? this.backgroundColorClass !== 'default'
          ? this.backgroundColorClass
          : 'bg-light-tertiary'
        : 'bg-light-tertiary',
      backgroundCoverOpacity:
        this.backgroundCoverOpacity !== 'default' ? this.backgroundCoverOpacity : '',
      backgroundImageBlendMode:
        this.backgroundImageBlendMode !== 'default' ? this.backgroundImageBlendMode : ''
    }
  }

  get containerOptions(): Object {
    return {
      containerWidth: this.containerWidth !== 'default' ? this.containerWidth : 'xl:w-full',
      textAlign: this.textAlign !== 'default' ? this.textAlign : 'text-left',
      padding: 'py-24 lg:py-28',
      customClass: 'relative h-full'
    }
  }

  get titleOptions(): Object {
    return {
      titleTag: this.titleTag !== 'default' ? this.titleTag.toUpperCase() : 'H1',
      subtitleTag: this.subtitleTag !== 'default' ? this.subtitleTag.toUpperCase() : 'H2',
      titlesInverted: this.titlesInverted === 'default' ? false : true,
      titleSize: this.titleSize !== 'default' ? this.titleSize : 'text-3xl md:text-6xl',
      subtitleSize: this.subtitleSize !== 'default' ? this.subtitleSize : 'text-xl md:text-4xl',
      titleClass: `font-heading font-bold text-white ${this.titleClass ?? ''}`,
      subtitleClass: `mt-1 font-normal uppercase uppercase tracking-wide text-primary-400 ${this.subtitleClass ?? ''}`
    }
  }

  get bodyOptions(): Object {
    return {
      bodySize: this.bodySize !== 'default' ? this.bodySize : 'prose prose-lg xl:prose-2xl',
      extraBodySize:
        this.extraBodySize !== 'default' ? this.extraBodySize : 'prose prose-lg xl:prose-2xl',
      bodyClass: `mt-6 prose-secondary-invert ${this.bodyClass ?? ''}`,
      extraBodyClass: `mt-6 prose-secondary-invert ${this.extraBodyClass ?? ''}`
    }
  }

  get buttonOptions(): any {
    return {
      button: {
        className: 'flex max-w-lg',
        componentType: 'ButtonPrimary'
      },
      'button-2': {
        className: 'flex max-w-lg',
        componentType: 'ButtonPrimary'
      },
      buttonDivClass: 'mt-8 flex mx-auto space-y-2'
    }
  }

  get otherOptions(): any {
    return {
      subContainer:
        'left-0 flex w-full flex-col lg:justify-between lg:absolute lg:bottom-0 lg:max-w-[850px]',
      titleContainer: 'bg-primary px-6 py-6 lg:px-10 lg:py-12 z-1'
    }
  }
}

export default PageHeroSectionFieldsModel
