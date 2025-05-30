/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileImport } from './routes/profile'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as AdminUsersImport } from './routes/admin.users'
import { Route as AdminLoginImport } from './routes/admin.login'
import { Route as AdminDashboardImport } from './routes/admin.dashboard'
import { Route as AdminCoursesImport } from './routes/admin.courses'
import { Route as AuthCallbackIndexImport } from './routes/auth/callback/index'

// Create/Update Routes

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AdminUsersRoute = AdminUsersImport.update({
  id: '/admin/users',
  path: '/admin/users',
  getParentRoute: () => rootRoute,
} as any)

const AdminLoginRoute = AdminLoginImport.update({
  id: '/admin/login',
  path: '/admin/login',
  getParentRoute: () => rootRoute,
} as any)

const AdminDashboardRoute = AdminDashboardImport.update({
  id: '/admin/dashboard',
  path: '/admin/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AdminCoursesRoute = AdminCoursesImport.update({
  id: '/admin/courses',
  path: '/admin/courses',
  getParentRoute: () => rootRoute,
} as any)

const AuthCallbackIndexRoute = AuthCallbackIndexImport.update({
  id: '/auth/callback/',
  path: '/auth/callback/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/admin/courses': {
      id: '/admin/courses'
      path: '/admin/courses'
      fullPath: '/admin/courses'
      preLoaderRoute: typeof AdminCoursesImport
      parentRoute: typeof rootRoute
    }
    '/admin/dashboard': {
      id: '/admin/dashboard'
      path: '/admin/dashboard'
      fullPath: '/admin/dashboard'
      preLoaderRoute: typeof AdminDashboardImport
      parentRoute: typeof rootRoute
    }
    '/admin/login': {
      id: '/admin/login'
      path: '/admin/login'
      fullPath: '/admin/login'
      preLoaderRoute: typeof AdminLoginImport
      parentRoute: typeof rootRoute
    }
    '/admin/users': {
      id: '/admin/users'
      path: '/admin/users'
      fullPath: '/admin/users'
      preLoaderRoute: typeof AdminUsersImport
      parentRoute: typeof rootRoute
    }
    '/auth/callback/': {
      id: '/auth/callback/'
      path: '/auth/callback'
      fullPath: '/auth/callback'
      preLoaderRoute: typeof AuthCallbackIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/profile': typeof ProfileRoute
  '/admin/courses': typeof AdminCoursesRoute
  '/admin/dashboard': typeof AdminDashboardRoute
  '/admin/login': typeof AdminLoginRoute
  '/admin/users': typeof AdminUsersRoute
  '/auth/callback': typeof AuthCallbackIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/profile': typeof ProfileRoute
  '/admin/courses': typeof AdminCoursesRoute
  '/admin/dashboard': typeof AdminDashboardRoute
  '/admin/login': typeof AdminLoginRoute
  '/admin/users': typeof AdminUsersRoute
  '/auth/callback': typeof AuthCallbackIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/profile': typeof ProfileRoute
  '/admin/courses': typeof AdminCoursesRoute
  '/admin/dashboard': typeof AdminDashboardRoute
  '/admin/login': typeof AdminLoginRoute
  '/admin/users': typeof AdminUsersRoute
  '/auth/callback/': typeof AuthCallbackIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/profile'
    | '/admin/courses'
    | '/admin/dashboard'
    | '/admin/login'
    | '/admin/users'
    | '/auth/callback'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/profile'
    | '/admin/courses'
    | '/admin/dashboard'
    | '/admin/login'
    | '/admin/users'
    | '/auth/callback'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/profile'
    | '/admin/courses'
    | '/admin/dashboard'
    | '/admin/login'
    | '/admin/users'
    | '/auth/callback/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ProfileRoute: typeof ProfileRoute
  AdminCoursesRoute: typeof AdminCoursesRoute
  AdminDashboardRoute: typeof AdminDashboardRoute
  AdminLoginRoute: typeof AdminLoginRoute
  AdminUsersRoute: typeof AdminUsersRoute
  AuthCallbackIndexRoute: typeof AuthCallbackIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ProfileRoute: ProfileRoute,
  AdminCoursesRoute: AdminCoursesRoute,
  AdminDashboardRoute: AdminDashboardRoute,
  AdminLoginRoute: AdminLoginRoute,
  AdminUsersRoute: AdminUsersRoute,
  AuthCallbackIndexRoute: AuthCallbackIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/profile",
        "/admin/courses",
        "/admin/dashboard",
        "/admin/login",
        "/admin/users",
        "/auth/callback/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/admin/courses": {
      "filePath": "admin.courses.tsx"
    },
    "/admin/dashboard": {
      "filePath": "admin.dashboard.tsx"
    },
    "/admin/login": {
      "filePath": "admin.login.tsx"
    },
    "/admin/users": {
      "filePath": "admin.users.tsx"
    },
    "/auth/callback/": {
      "filePath": "auth/callback/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
