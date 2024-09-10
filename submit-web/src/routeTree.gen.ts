/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegistrationImport } from './routes/registration'
import { Route as OidcCallbackImport } from './routes/oidc-callback'
import { Route as ErrorImport } from './routes/error'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as AuthenticatedAdminLoginImport } from './routes/_authenticated/admin-login'
import { Route as AuthenticatedDashboardImport } from './routes/_authenticated/_dashboard'
import { Route as AuthenticatedRegistrationCreateAccountImport } from './routes/_authenticated/registration/create-account'
import { Route as AuthenticatedRegistrationCompleteImport } from './routes/_authenticated/registration/complete'
import { Route as AuthenticatedRegistrationAddProjectsImport } from './routes/_authenticated/registration/add-projects'
import { Route as AuthenticatedDashboardProfileImport } from './routes/_authenticated/_dashboard/profile'
import { Route as AuthenticatedDashboardProjectsIndexImport } from './routes/_authenticated/_dashboard/projects/index'
import { Route as AuthenticatedDashboardProjectsProjectIdIndexImport } from './routes/_authenticated/_dashboard/projects/$projectId/index'
import { Route as AuthenticatedDashboardProjectsProjectIdNewSubmissionImport } from './routes/_authenticated/_dashboard/projects/$projectId/new-submission'
import { Route as AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdIndexImport } from './routes/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/index'
import { Route as AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdSubmissionsSubmissionIdImport } from './routes/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/submissions/$submissionId'

// Create Virtual Routes

const AuthenticatedDashboardAboutpageLazyImport = createFileRoute(
  '/_authenticated/_dashboard/aboutpage',
)()

// Create/Update Routes

const RegistrationRoute = RegistrationImport.update({
  path: '/registration',
  getParentRoute: () => rootRoute,
} as any)

const OidcCallbackRoute = OidcCallbackImport.update({
  path: '/oidc-callback',
  getParentRoute: () => rootRoute,
} as any)

const ErrorRoute = ErrorImport.update({
  path: '/error',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedAdminLoginRoute = AuthenticatedAdminLoginImport.update({
  path: '/admin-login',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedDashboardRoute = AuthenticatedDashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedDashboardAboutpageLazyRoute =
  AuthenticatedDashboardAboutpageLazyImport.update({
    path: '/aboutpage',
    getParentRoute: () => AuthenticatedDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/_dashboard/aboutpage.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedRegistrationCreateAccountRoute =
  AuthenticatedRegistrationCreateAccountImport.update({
    path: '/registration/create-account',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedRegistrationCompleteRoute =
  AuthenticatedRegistrationCompleteImport.update({
    path: '/registration/complete',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedRegistrationAddProjectsRoute =
  AuthenticatedRegistrationAddProjectsImport.update({
    path: '/registration/add-projects',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedDashboardProfileRoute =
  AuthenticatedDashboardProfileImport.update({
    path: '/profile',
    getParentRoute: () => AuthenticatedDashboardRoute,
  } as any)

const AuthenticatedDashboardProjectsIndexRoute =
  AuthenticatedDashboardProjectsIndexImport.update({
    path: '/projects/',
    getParentRoute: () => AuthenticatedDashboardRoute,
  } as any)

const AuthenticatedDashboardProjectsProjectIdIndexRoute =
  AuthenticatedDashboardProjectsProjectIdIndexImport.update({
    path: '/projects/$projectId/',
    getParentRoute: () => AuthenticatedDashboardRoute,
  } as any)

const AuthenticatedDashboardProjectsProjectIdNewSubmissionRoute =
  AuthenticatedDashboardProjectsProjectIdNewSubmissionImport.update({
    path: '/projects/$projectId/new-submission',
    getParentRoute: () => AuthenticatedDashboardRoute,
  } as any)

const AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdIndexRoute =
  AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdIndexImport.update(
    {
      path: '/projects/$projectId/submission-packages/$submissionPackageId/',
      getParentRoute: () => AuthenticatedDashboardRoute,
    } as any,
  )

const AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdSubmissionsSubmissionIdRoute =
  AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdSubmissionsSubmissionIdImport.update(
    {
      path: '/projects/$projectId/submission-packages/$submissionPackageId/submissions/$submissionId',
      getParentRoute: () => AuthenticatedDashboardRoute,
    } as any,
  )

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
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/error': {
      id: '/error'
      path: '/error'
      fullPath: '/error'
      preLoaderRoute: typeof ErrorImport
      parentRoute: typeof rootRoute
    }
    '/oidc-callback': {
      id: '/oidc-callback'
      path: '/oidc-callback'
      fullPath: '/oidc-callback'
      preLoaderRoute: typeof OidcCallbackImport
      parentRoute: typeof rootRoute
    }
    '/registration': {
      id: '/registration'
      path: '/registration'
      fullPath: '/registration'
      preLoaderRoute: typeof RegistrationImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/_dashboard': {
      id: '/_authenticated/_dashboard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedDashboardImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/admin-login': {
      id: '/_authenticated/admin-login'
      path: '/admin-login'
      fullPath: '/admin-login'
      preLoaderRoute: typeof AuthenticatedAdminLoginImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/_dashboard/profile': {
      id: '/_authenticated/_dashboard/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthenticatedDashboardProfileImport
      parentRoute: typeof AuthenticatedDashboardImport
    }
    '/_authenticated/registration/add-projects': {
      id: '/_authenticated/registration/add-projects'
      path: '/registration/add-projects'
      fullPath: '/registration/add-projects'
      preLoaderRoute: typeof AuthenticatedRegistrationAddProjectsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/registration/complete': {
      id: '/_authenticated/registration/complete'
      path: '/registration/complete'
      fullPath: '/registration/complete'
      preLoaderRoute: typeof AuthenticatedRegistrationCompleteImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/registration/create-account': {
      id: '/_authenticated/registration/create-account'
      path: '/registration/create-account'
      fullPath: '/registration/create-account'
      preLoaderRoute: typeof AuthenticatedRegistrationCreateAccountImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/_dashboard/aboutpage': {
      id: '/_authenticated/_dashboard/aboutpage'
      path: '/aboutpage'
      fullPath: '/aboutpage'
      preLoaderRoute: typeof AuthenticatedDashboardAboutpageLazyImport
      parentRoute: typeof AuthenticatedDashboardImport
    }
    '/_authenticated/_dashboard/projects/': {
      id: '/_authenticated/_dashboard/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof AuthenticatedDashboardProjectsIndexImport
      parentRoute: typeof AuthenticatedDashboardImport
    }
    '/_authenticated/_dashboard/projects/$projectId/new-submission': {
      id: '/_authenticated/_dashboard/projects/$projectId/new-submission'
      path: '/projects/$projectId/new-submission'
      fullPath: '/projects/$projectId/new-submission'
      preLoaderRoute: typeof AuthenticatedDashboardProjectsProjectIdNewSubmissionImport
      parentRoute: typeof AuthenticatedDashboardImport
    }
    '/_authenticated/_dashboard/projects/$projectId/': {
      id: '/_authenticated/_dashboard/projects/$projectId/'
      path: '/projects/$projectId'
      fullPath: '/projects/$projectId'
      preLoaderRoute: typeof AuthenticatedDashboardProjectsProjectIdIndexImport
      parentRoute: typeof AuthenticatedDashboardImport
    }
    '/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/': {
      id: '/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/'
      path: '/projects/$projectId/submission-packages/$submissionPackageId'
      fullPath: '/projects/$projectId/submission-packages/$submissionPackageId'
      preLoaderRoute: typeof AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdIndexImport
      parentRoute: typeof AuthenticatedDashboardImport
    }
    '/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/submissions/$submissionId': {
      id: '/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/submissions/$submissionId'
      path: '/projects/$projectId/submission-packages/$submissionPackageId/submissions/$submissionId'
      fullPath: '/projects/$projectId/submission-packages/$submissionPackageId/submissions/$submissionId'
      preLoaderRoute: typeof AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdSubmissionsSubmissionIdImport
      parentRoute: typeof AuthenticatedDashboardImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedDashboardRoute: AuthenticatedDashboardRoute.addChildren({
      AuthenticatedDashboardProfileRoute,
      AuthenticatedDashboardAboutpageLazyRoute,
      AuthenticatedDashboardProjectsIndexRoute,
      AuthenticatedDashboardProjectsProjectIdNewSubmissionRoute,
      AuthenticatedDashboardProjectsProjectIdIndexRoute,
      AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdIndexRoute,
      AuthenticatedDashboardProjectsProjectIdSubmissionPackagesSubmissionPackageIdSubmissionsSubmissionIdRoute,
    }),
    AuthenticatedAdminLoginRoute,
    AuthenticatedRegistrationAddProjectsRoute,
    AuthenticatedRegistrationCompleteRoute,
    AuthenticatedRegistrationCreateAccountRoute,
  }),
  ErrorRoute,
  OidcCallbackRoute,
  RegistrationRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/error",
        "/oidc-callback",
        "/registration"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/_dashboard",
        "/_authenticated/admin-login",
        "/_authenticated/registration/add-projects",
        "/_authenticated/registration/complete",
        "/_authenticated/registration/create-account"
      ]
    },
    "/error": {
      "filePath": "error.tsx"
    },
    "/oidc-callback": {
      "filePath": "oidc-callback.tsx"
    },
    "/registration": {
      "filePath": "registration.tsx"
    },
    "/_authenticated/_dashboard": {
      "filePath": "_authenticated/_dashboard.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/_dashboard/profile",
        "/_authenticated/_dashboard/aboutpage",
        "/_authenticated/_dashboard/projects/",
        "/_authenticated/_dashboard/projects/$projectId/new-submission",
        "/_authenticated/_dashboard/projects/$projectId/",
        "/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/",
        "/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/submissions/$submissionId"
      ]
    },
    "/_authenticated/admin-login": {
      "filePath": "_authenticated/admin-login.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/_dashboard/profile": {
      "filePath": "_authenticated/_dashboard/profile.tsx",
      "parent": "/_authenticated/_dashboard"
    },
    "/_authenticated/registration/add-projects": {
      "filePath": "_authenticated/registration/add-projects.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/registration/complete": {
      "filePath": "_authenticated/registration/complete.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/registration/create-account": {
      "filePath": "_authenticated/registration/create-account.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/_dashboard/aboutpage": {
      "filePath": "_authenticated/_dashboard/aboutpage.lazy.tsx",
      "parent": "/_authenticated/_dashboard"
    },
    "/_authenticated/_dashboard/projects/": {
      "filePath": "_authenticated/_dashboard/projects/index.tsx",
      "parent": "/_authenticated/_dashboard"
    },
    "/_authenticated/_dashboard/projects/$projectId/new-submission": {
      "filePath": "_authenticated/_dashboard/projects/$projectId/new-submission.tsx",
      "parent": "/_authenticated/_dashboard"
    },
    "/_authenticated/_dashboard/projects/$projectId/": {
      "filePath": "_authenticated/_dashboard/projects/$projectId/index.tsx",
      "parent": "/_authenticated/_dashboard"
    },
    "/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/": {
      "filePath": "_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/index.tsx",
      "parent": "/_authenticated/_dashboard"
    },
    "/_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/submissions/$submissionId": {
      "filePath": "_authenticated/_dashboard/projects/$projectId/submission-packages/$submissionPackageId/submissions/$submissionId.tsx",
      "parent": "/_authenticated/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
