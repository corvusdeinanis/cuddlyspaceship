import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/corvusdeinanis/cuddlyspaceship",
      Website: "https://astroslair.xyz",
      //"Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.IndexFilter(Component.ArticleTitle()), //IndexFilter to block article title on homepage.
    Component.IndexFilter(Component.ContentMeta()), //IndexFilter to block time to read, tags, etc on homepage.    
	Component.IndexFilter(Component.TagList()),
	Component.TableOfContents({collapseByDefault:true}),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
//    Component.Explorer({
//	title: "Explorer", // title of the explorer component
//	folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
  }),  	
  ],
  right: [
    Component.Graph(),
    Component.Backlinks(),
	],
 }

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
	
  ],
  right: [],
}
