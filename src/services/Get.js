import API, { execute } from './Api'

export default {
  getPosts: (lang) => execute(API().get(`posts/public?lang=${lang}`)),
  getSinglePost: (id, lang) => execute(API().get(`posts/public/${id}?lang=${lang}`)),
  getAnnouncements: () => execute(API().get('announcement')),
  getSingleAnnouncement: id => execute(API().get(`announcement/${id}`))

}
