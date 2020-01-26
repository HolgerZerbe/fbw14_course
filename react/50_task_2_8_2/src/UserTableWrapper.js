import React from 'react';

const MyUserTableWrapper = (wrappedComponent) => {
    return (args) => {

        return (args.loading? <div>loading....</div> : wrappedComponent({users: args.users}))

        // if (args.loading) {
        //     return <div>Loading....</div>
        // } else {
        //     return wrappedComponent({
        //         users: args.users
        //     })
        // }
    }
}

export default MyUserTableWrapper