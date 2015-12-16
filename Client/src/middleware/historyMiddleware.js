
export default history => store => next => action => {
  if (action.meta && action.meta.changeUrl) {
    history.push(
    { pathname: action.url }
    );
  }

  return next(action);
};
