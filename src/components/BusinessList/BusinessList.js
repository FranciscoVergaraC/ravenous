import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component{
    render () {
        console.log(this.props.businesses.map((business) => <Business key={business.id} business={business} />));
        return(
            <div className="BusinessList">
                {
                this.props.businesses.map((business) => <Business key={business.id} business={business} />)
                }
            </div>
        );
    }
}

export default BusinessList;