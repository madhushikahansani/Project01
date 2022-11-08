import React from "react";
class ServiceItem extends React.Component{
    render(props){
        return(
            <div>
               <li>
                {this.props.name} - {this.props.description}
                </li>
            </div>
        )
    }
}
export default ServiceItem;