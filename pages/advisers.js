import React from 'react';
import CategoryFilters from "../src/components/CategoryFilters/CategoryFilters";
import Layout from "../src/components/Layout/Layout";
import LayoutWithSidebar from '../src/components/Kit/Layouts/LayoutWithSidebar.js';

function AdvisersHome() {
    return (
        <Layout>
            <LayoutWithSidebar>
                <CategoryFilters url={'advisers'}/>
            </LayoutWithSidebar>
        </Layout>
    );
}

export default AdvisersHome
