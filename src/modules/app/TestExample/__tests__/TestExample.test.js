import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestExample from '../';

describe('<TestExample />', () => {
    const component = <TestExample />
    const wrapper= shallow(component);

    describe('Markup should stay consistent', () => {
        it('should not have any changes without a new snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('Component works', () => {
        it('should render without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(component, div);
        });
    });
});
