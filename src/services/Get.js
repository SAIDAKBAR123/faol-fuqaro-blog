import API, { execute } from './Api'

export default {
  getPosts: (page = 1, lang) => execute(API().get(`posts/public?page=${page}&size=12&lang=${lang}`)),
  getAnnouncements: lang => execute(API().get(`announcements/public?page=1&size=4&lang=${lang}`)),
  getSinglePost: (id, lang) => execute(API().get(`posts/public/${id}?lang=${lang}`)),
  getSingleAnnouncement: (id, lang) => execute(API().get(`announcements/public/${id}?lang=${lang}`))

}
