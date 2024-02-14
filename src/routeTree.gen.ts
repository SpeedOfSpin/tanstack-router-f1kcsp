import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as AuthlayoutImport } from './routes/_auth/_layout'
import { Route as PostsPostIdDeepImport } from './routes/posts_.$postId.deep'
import { Route as Authlayoutlayout2Import } from './routes/_auth/_layout/_layout-2'
import { Route as AuthTeamIddetailLayoutImport } from './routes/_auth/$teamId/_detail-layout'
import { Route as Authlayoutlayout2LayoutBImport } from './routes/_auth/_layout/_layout-2/layout-b'
import { Route as Authlayoutlayout2LayoutAImport } from './routes/_auth/_layout/_layout-2/layout-a'
import { Route as AuthTeamIddetailLayoutRoute2Route2IdImport } from './routes/_auth/$teamId/_detail-layout/route2.$route2Id'
import { Route as AuthTeamIddetailLayoutRoute1Route1IdImport } from './routes/_auth/$teamId/_detail-layout/route1.$route1Id'

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const AuthlayoutRoute = AuthlayoutImport.update({
  id: '/_layout',
  getParentRoute: () => AuthRoute,
} as any)

const PostsPostIdDeepRoute = PostsPostIdDeepImport.update({
  path: '/posts/$postId/deep',
  getParentRoute: () => rootRoute,
} as any)

const Authlayoutlayout2Route = Authlayoutlayout2Import.update({
  id: '/_layout-2',
  getParentRoute: () => AuthlayoutRoute,
} as any)

const AuthTeamIddetailLayoutRoute = AuthTeamIddetailLayoutImport.update({
  path: '/$teamId/detail-layout',
  getParentRoute: () => AuthRoute,
} as any)

const Authlayoutlayout2LayoutBRoute = Authlayoutlayout2LayoutBImport.update({
  path: '/layout-b',
  getParentRoute: () => Authlayoutlayout2Route,
} as any)

const Authlayoutlayout2LayoutARoute = Authlayoutlayout2LayoutAImport.update({
  path: '/layout-a',
  getParentRoute: () => Authlayoutlayout2Route,
} as any)

const AuthTeamIddetailLayoutRoute2Route2IdRoute =
  AuthTeamIddetailLayoutRoute2Route2IdImport.update({
    path: '/route2/$route2Id',
    getParentRoute: () => AuthTeamIddetailLayoutRoute,
  } as any)

const AuthTeamIddetailLayoutRoute1Route1IdRoute =
  AuthTeamIddetailLayoutRoute1Route1IdImport.update({
    path: '/route1/$route1Id',
    getParentRoute: () => AuthTeamIddetailLayoutRoute,
  } as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/_auth/_layout': {
      preLoaderRoute: typeof AuthlayoutImport
      parentRoute: typeof AuthImport
    }
    '/posts/$postId': {
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/posts/': {
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsImport
    }
    '/_auth/$teamId/_detail-layout': {
      preLoaderRoute: typeof AuthTeamIddetailLayoutImport
      parentRoute: typeof AuthImport
    }
    '/_auth/_layout/_layout-2': {
      preLoaderRoute: typeof Authlayoutlayout2Import
      parentRoute: typeof AuthlayoutImport
    }
    '/posts/$postId/deep': {
      preLoaderRoute: typeof PostsPostIdDeepImport
      parentRoute: typeof rootRoute
    }
    '/_auth/_layout/_layout-2/layout-a': {
      preLoaderRoute: typeof Authlayoutlayout2LayoutAImport
      parentRoute: typeof Authlayoutlayout2Import
    }
    '/_auth/_layout/_layout-2/layout-b': {
      preLoaderRoute: typeof Authlayoutlayout2LayoutBImport
      parentRoute: typeof Authlayoutlayout2Import
    }
    '/_auth/$teamId/_detail-layout/route1/$route1Id': {
      preLoaderRoute: typeof AuthTeamIddetailLayoutRoute1Route1IdImport
      parentRoute: typeof AuthTeamIddetailLayoutImport
    }
    '/_auth/$teamId/_detail-layout/route2/$route2Id': {
      preLoaderRoute: typeof AuthTeamIddetailLayoutRoute2Route2IdImport
      parentRoute: typeof AuthTeamIddetailLayoutImport
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthRoute.addChildren([
    AuthlayoutRoute.addChildren([
      Authlayoutlayout2Route.addChildren([
        Authlayoutlayout2LayoutARoute,
        Authlayoutlayout2LayoutBRoute,
      ]),
    ]),
    AuthTeamIddetailLayoutRoute.addChildren([
      AuthTeamIddetailLayoutRoute1Route1IdRoute,
      AuthTeamIddetailLayoutRoute2Route2IdRoute,
    ]),
  ]),
  PostsRoute.addChildren([PostsPostIdRoute, PostsIndexRoute]),
  PostsPostIdDeepRoute,
])
