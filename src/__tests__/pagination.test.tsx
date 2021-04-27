import React from 'react';
import { Pagination } from '../components/Pagination';
import { shallow, mount, render } from 'enzyme';

const data = [
    { id: 'string', rank: 'string', symbol: 'string', marketCapUsd: 'string', volumeUsd24Hr: 'string', isFavorite: false },
    { id: 'string', rank: 'string', symbol: 'string', marketCapUsd: 'string', volumeUsd24Hr: 'string', isFavorite: false },
    { id: 'string', rank: 'string', symbol: 'string', marketCapUsd: 'string', volumeUsd24Hr: 'string', isFavorite: false },
    { id: 'string', rank: 'string', symbol: 'string', marketCapUsd: 'string', volumeUsd24Hr: 'string', isFavorite: false }
]

describe('Pagination', () => {
    it('renders correctly', () => {
        const wrapper = mount(
            <Pagination totalItems={20} itemsPerPage={5} currentPage={1} updatePage={() => {}}/>,
        );
        expect(wrapper.find('Pagination')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(4);
    })
    it('renders correctly without display', () => {
        const wrapper = mount(
            <Pagination totalItems={5} itemsPerPage={5} currentPage={1} updatePage={() => {}}/>,
        );
        expect(wrapper.find('Pagination')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(0);
    })
    it('renders correctly without display', () => {
        const wrapper = mount(
            <Pagination totalItems={20} itemsPerPage={5} currentPage={1} updatePage={() => {}}/>,
        );
        expect(wrapper.find('button').first().prop('disabled')).toBe(true);
    })
})