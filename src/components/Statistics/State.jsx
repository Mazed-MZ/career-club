import React from 'react';

export default function State({storedJob}) {
    const {quantity, name, key, id} = storedJob;
    return (
        <div>
            Name: {name}
            
        </div>
    )
}
