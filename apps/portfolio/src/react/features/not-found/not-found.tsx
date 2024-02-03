import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const NotFound = () => {
  const error = useRouteError() as { message: string };

  if (isRouteErrorResponse(error)) {
    return (
      <p>
        {error.status} {error.statusText}
      </p>
    );
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
};
