import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore, Middleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CreatePandaWithReduxForm from './CreatePandaWithReduxForm';

export default {
  title: 'Forms/CreatePandaWithReduxForm',
  component: CreatePandaWithReduxForm,
} as Meta;

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

export const noInitialValues = () => {
  return (
    <FormDecorator>
      <div style={{ padding: 20 }}>
        <CreatePandaWithReduxForm onSubmit={action('on submit')} onCancel={action('on cancel')} />
      </div>
    </FormDecorator>
  );
};
