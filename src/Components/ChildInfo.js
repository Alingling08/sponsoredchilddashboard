import React from 'react'
import ChildPage from './ChildPage'

const ChildInfo = ({ children }) => {

    return (
        <>
            {children.map((child) => (
                <ChildPage
                    key={child.crmSponsorshipInformationId}
                    child={child}
                />
            ))}
        </>
    )
}

export default ChildInfo
