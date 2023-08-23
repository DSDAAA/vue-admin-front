import defaultSettings from '@/settings'

const title = defaultSettings.title || 'DSDAAACookBook'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
