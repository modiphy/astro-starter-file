class PageSectionFieldsModel {
  [key: string]: any
  private sectionCount?: number = 0

  constructor(fields: { [key: string]: any }, sectionCount?: number | 0) {
    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        this[key] = fields[key]
      }
    }

    this.sectionCount = sectionCount
  }

  get sectionOptions(): Object {
    return {
      backgroundColorClass: this.backgroundColorClass
        ? this.backgroundColorClass !== 'default'
          ? `bg-${this.backgroundColorClass}`
          : 'bg-transparent'
        : 'bg-transparent',
      backgroundCoverOpacity:
        this.backgroundCoverOpacity !== 'default' ? this.backgroundCoverOpacity : '',
      backgroundImageBlendMode:
        this.backgroundImageBlendMode !== 'default' ? this.backgroundImageBlendMode : '',
      customClass: ''
    }
  }

  get containerOptions(): Object {
    return {
      containerWidth: this.containerWidth !== 'default' ? this.containerWidth : 'max-w-screen-2xl',
      textAlign: this.textAlign !== 'default' ? this.textAlign : 'text-left',
      padding: 'py-8 md:py-24 lg:py-28',
      customClass: 'container'
    }
  }

  get titleOptions(): Object {
    return {
      titleTag:
        this.titleTag !== 'default'
          ? this.titleTag.toUpperCase()
          : this.sectionCount === 0
            ? 'H1'
            : 'H2',
      subtitleTag:
        this.subtitleTag !== 'default'
          ? this.subtitleTag.toUpperCase()
          : this.sectionCount === 0
            ? 'H2'
            : 'H3',
      titlesInverted: this.titlesInverted === 'default' ? false : true,
      titleSize: this.titleSize !== 'default' ? this.titleSize : 'text-4xl md:text-6xl',
      subtitleSize: this.subtitleSize !== 'default' ? this.subtitleSize : 'md:text-2xl',
      titleClass: `font-heading text-gray-900 font-bold ${this.titleClass ?? ''}`,
      subtitleClass: `mt-4 font-semibold uppercase tracking-wide text-primary-600 ${this.subtitleClass ?? ''}`
    }
  }

  get bodyOptions(): Object {
    return {
      bodySize: this.bodySize !== 'default' ? this.bodySize : 'prose-lg md:prose-xl',
      extraBodySize: this.extraBodySize !== 'default' ? this.extraBodySize : 'prose-lg md:prose-xl',
      bodyClass: `prose ${this.bodyClass ?? ''}`,
      extraBodyClass: `mt-4 prose ${this.extraBodyClass ?? ''}`
    }
  }

  get buttonOptions(): Object {
    return {
      button: {
        className: '',
        componentType: 'ButtonPrimary'
      },
      'button-2': {
        className: '',
        componentType: 'ButtonPrimary'
      }
    }
  }

  get otherOptions(): any {
    return {
      subContainer: ''
    }
  }
}

export default PageSectionFieldsModel
