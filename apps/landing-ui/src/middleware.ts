import { NextRequest } from 'next/server';
import { i18nRouter } from 'next-i18n-router';

import { i18nConfig } from '@core/i18n';

const Middleware = (req: NextRequest) => {
  return i18nRouter(req, i18nConfig);
};

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};

export default Middleware;
