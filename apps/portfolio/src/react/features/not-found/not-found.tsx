import {isRouteErrorResponse, useRouteError} from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return <p>{error.status} {error.statusText}</p>
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* @ts-ignore */}
        <i>{error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
