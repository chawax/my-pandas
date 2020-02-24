import { action } from '@storybook/addon-actions';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore, Middleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CreatePandaForm from '.';

export default {
  title: 'CreatePandaWithReduxForm',
};

const buildFormDecoratorStore = () => {
  const appReducer = combineReducers({
    form: formReducer,
  });
  const rootReducer = (state: any, action: any) => appReducer(state, action);
  const middlewares: Middleware[] = [];
  const store = createStore(rootReducer, {}, compose(applyMiddleware(...middlewares)));
  return store;
};

const FormDecorator = (props: { children: JSX.Element[] | JSX.Element }) => {
  const formDecoratorStore = buildFormDecoratorStore();
  return <Provider store={formDecoratorStore}>{props.children}</Provider>;
};

export const creationForm = () => {
  return (
    <FormDecorator>
      <div style={{ padding: 20 }}>
        <CreatePandaForm onSubmit={action('on submit')} onCancel={action('on cancel')} />
      </div>
    </FormDecorator>
  );
};
