import API, { execute } from './Api'

export default {
  getPosts: (lang) => execute(API().get(`posts/public?lang=${lang}`)),
  getSinglePost: (id, lang) => execute(API().get(`posts/public/${id}?lang=${lang}`)),
  getAnnouncements: lang => execute(API().get(`announcements/public?lang=${lang}`)),
  getSingleAnnouncement: (id, lang) => execute(API().get(`announcements/public/${id}?lang=${lang}`))

}
