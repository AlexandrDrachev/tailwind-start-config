import React from 'react';

const {
    Provider: ServiceProvider,
    Consumer: ServiceConsumer
} = React.createContext();

export { ServiceConsumer, ServiceProvider };