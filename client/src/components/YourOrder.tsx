import { useState, useEffect } from "react";

const YourOrders = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile') || "{}"));

    useEffect(() => {
        const profile: any = localStorage.getItem('profile');
        setUser(JSON.parse(profile));
    }, [localStorage.getItem('profile')]);
    return (
        <div className="your-orders">
            {!user?.result ? null : <p>{user.result.email}</p>}
            {console.log(user?.result?.email)}
        </div>
    );
}

export default YourOrders;