import { NextPageWithLayout } from '@/pages/_app';
import MarketplaceLayout from '@/components/layout/marketplaceLayout';
import DatasetInfo, { DatasetInfoContext } from '@/components/layout/datasetLayout';
import { useContext } from 'react';
import DatasetSettings from '@/components/specific/marketplace/datasetSettings';

const DatasetActivityPage: NextPageWithLayout = function () {
    const dataset = useContext(DatasetInfoContext);
    if (dataset) {
        return <DatasetSettings { ...dataset }></DatasetSettings>;
    }
    else {
        return <></>;
    }
};

DatasetActivityPage.getLayout = function (page) {
    return (
        <MarketplaceLayout>
            <DatasetInfo>
                { page }
            </DatasetInfo>
        </MarketplaceLayout>
    );
};

export default DatasetActivityPage;