import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /(\.)?stories\.(tsx|jsx|js)?$/), module);
