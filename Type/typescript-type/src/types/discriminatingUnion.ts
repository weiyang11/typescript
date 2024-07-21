type NetworkLoadingState = {
  state: 'loading';
}; // discriminated union

type NetworkFailedState = {
  state: 'failed';
  code: number;
}; // discriminated union

type NetworkSuccessState = {
  state: 'success';
  response: {
    title: string;
    duration: number;
    summary: string;
  };
}; // discriminated union


type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState; // discriminated union

function logger(state: NetworkState){
  switch(state.state){
    case 'loading':
      console.log('loading request');
      break;
    case 'failed':
      console.log(`failed with code ${state.code}`);
      break;
    case 'success':
      console.log(`got a response with title ${state.response.title}`);
      break
  } // no need for default case
}
