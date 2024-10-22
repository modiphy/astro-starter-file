// layout props
interface LayoutProps {
  page?: any
  navigation?: { items: [] }
  slug?: string
}

interface HeadProps {
  page?: {
    name?: string
    fields?: {
      metaTitle?: string
      metaDescription?: string
      ogImage?: {
        imageUrl: string
      }
    }
  }
  slug?: string
  settingSchema?: any
}

interface LogoProps {
  src?: string
  alt?: string
  imageClass?: string
  hrefClass?: string
}

interface HeaderNavigationProps {
  parentNav?: any
  showNavs?: any
}

interface FooterProps {
  schema?: {}
  navigation?: { items: [] }
  hideFooterLocationInfo?: boolean
}

export type { HeadProps, LayoutProps, LogoProps, HeaderNavigationProps, FooterProps }
