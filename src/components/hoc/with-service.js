import React from 'react';
import { ServiceConsumer } from "../service-context";

const withService = () => (Wrapped) => {

    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (serviceApi) => {
                        return (<Wrapped {...props} serviceApi={serviceApi} />)
                    }
                }
            </ServiceConsumer>
        );
    };
};

export default withService;