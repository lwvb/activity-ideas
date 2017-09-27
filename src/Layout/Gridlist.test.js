import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';

import Gridlist from './Gridlist';
  

describe('Gridlist component', () => {
    it('renders', () => {
        const component = TestRenderer.create(<Gridlist />);
        expect(component.toJSON()).toMatchSnapshot()
    });

    it('outputs an empty grid without children', () => {
        const component = ReactTestUtils.renderIntoDocument(<Gridlist />);
        const rows = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'row').length
        const cols = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'col').length
        expect(rows).toBe(1);
        expect(cols).toBe(0);
    });

    it('wraps children in columns', () => {
        const component = ReactTestUtils.renderIntoDocument(<Gridlist><div>Child1</div><div>Child2</div><div>Child3</div></Gridlist>);
        const rows = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'row').length
        const cols = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'col-xs-12').length
        expect(rows).toBe(1);
        expect(cols).toBe(3);
    })
     
});
