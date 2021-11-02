import buildExtender from '@smartface/extension-utils/lib/router/buildExtender';
import {
  NativeRouter as Router,
  NativeStackRouter as StackRouter,
  Route,
} from '@smartface/router';
import * as Pages from 'pages';
import '@smartface/extension-utils/lib/router/goBack'; // Implements onBackButtonPressed

const router = Router.of({
  path: '/',
  isRoot: true,
  routes: [
    StackRouter.of({
      path: '/pages',
      routes: [
        Route.of({
            path: '/pages/pgLogin',
            build: buildExtender({
              getPageClass: () => Pages.PgLogin,
            }),
          }),
      ],
    }),
  ],
});

export default router;
