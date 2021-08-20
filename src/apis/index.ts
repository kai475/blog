import http from './http';

export const getRepo = () => http.get('repos/kai475/blog');

export const getContent = (path: string) =>
  http.get(`repos/kai475/blog/contents/${path}`);
