import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://goods.okeyreview.com/",
    title: "OkeyReview Goods",
    description: "Honest reviews, buying guides, and hands-on testing for beauty, home living, auto accessories, and everyday gear.",
    author: "OkeyReview Team",
    profile: "https://goods.okeyreview.com/posts/about-us/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "UTC",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "mail", url: "mailto:info.okeyreview@gmail.com" },
    { name: "pinterest", url: "https://pinterest.com/" },
  ],
  shareLinks: [
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
