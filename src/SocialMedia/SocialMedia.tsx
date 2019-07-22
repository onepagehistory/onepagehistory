import React from 'react';
import './SocialMedia.css';

export class SocialMedia extends React.Component<{title: string, follow: boolean}> {  
    urlToShare: string;

    componentWillMount(){
        this.urlToShare = location.href;
    }

    componentWillUpdate(){
        this.urlToShare = location.href;
    }

    render() {
        return(
            <div className="Share-box">
                <p className="Share-box__text">{this.props.title}</p>
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?">
                    <svg className="Share-box__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 0H2.5C1.12125 0 0 1.12125 0 2.5V17.5C0 18.8787 1.12125 20 2.5 20H10V13.125H7.5V10H10V7.5C10 5.42875 11.6788 3.75 13.75 3.75H16.25V6.875H15C14.31 6.875 13.75 6.81 13.75 7.5V10H16.875L15.625 13.125H13.75V20H17.5C18.8787 20 20 18.8787 20 17.5V2.5C20 1.12125 18.8787 0 17.5 0Z" fill="white"/>
                    </svg>
                </a>
                { this.props.follow ? 
                    <a target="_blank" href="https://twitter.com/RKubinets">
                        <svg className="Share-box__icon" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3333 2.79875C19.5895 3.125 18.797 3.34125 17.9708 3.44625C18.8208 2.93875 19.4695 2.14125 19.7745 1.18C18.982 1.6525 18.107 1.98625 17.1745 2.1725C16.422 1.37125 15.3495 0.875 14.1795 0.875C11.9095 0.875 10.082 2.7175 10.082 4.97625C10.082 5.30125 10.1095 5.61375 10.177 5.91125C6.76825 5.745 3.752 4.11125 1.72575 1.6225C1.372 2.23625 1.1645 2.93875 1.1645 3.695C1.1645 5.115 1.89575 6.37375 2.98575 7.1025C2.327 7.09 1.68075 6.89875 1.13325 6.5975C1.13325 6.61 1.13325 6.62625 1.13325 6.6425C1.13325 8.635 2.5545 10.29 4.41825 10.6712C4.0845 10.7625 3.72075 10.8062 3.34325 10.8062C3.08075 10.8062 2.81575 10.7913 2.567 10.7362C3.09825 12.36 4.60575 13.5538 6.39825 13.5925C5.00325 14.6838 3.232 15.3412 1.3145 15.3412C0.978252 15.3412 0.655752 15.3263 0.333252 15.285C2.1495 16.4563 4.302 17.125 6.62325 17.125C14.1683 17.125 18.2933 10.875 18.2933 5.4575C18.2933 5.27625 18.287 5.10125 18.2783 4.9275C19.092 4.35 19.7758 3.62875 20.3333 2.79875Z" fill="white"/>
                        </svg>
                    </a>
                :
                    <a target="_blank" rel="canonical" href={`https://twitter.com/intent/tweet?text=Look+what+I+found+out+here+${this.urlToShare}`}>
                        <svg className="Share-box__icon" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3333 2.79875C19.5895 3.125 18.797 3.34125 17.9708 3.44625C18.8208 2.93875 19.4695 2.14125 19.7745 1.18C18.982 1.6525 18.107 1.98625 17.1745 2.1725C16.422 1.37125 15.3495 0.875 14.1795 0.875C11.9095 0.875 10.082 2.7175 10.082 4.97625C10.082 5.30125 10.1095 5.61375 10.177 5.91125C6.76825 5.745 3.752 4.11125 1.72575 1.6225C1.372 2.23625 1.1645 2.93875 1.1645 3.695C1.1645 5.115 1.89575 6.37375 2.98575 7.1025C2.327 7.09 1.68075 6.89875 1.13325 6.5975C1.13325 6.61 1.13325 6.62625 1.13325 6.6425C1.13325 8.635 2.5545 10.29 4.41825 10.6712C4.0845 10.7625 3.72075 10.8062 3.34325 10.8062C3.08075 10.8062 2.81575 10.7913 2.567 10.7362C3.09825 12.36 4.60575 13.5538 6.39825 13.5925C5.00325 14.6838 3.232 15.3412 1.3145 15.3412C0.978252 15.3412 0.655752 15.3263 0.333252 15.285C2.1495 16.4563 4.302 17.125 6.62325 17.125C14.1683 17.125 18.2933 10.875 18.2933 5.4575C18.2933 5.27625 18.287 5.10125 18.2783 4.9275C19.092 4.35 19.7758 3.62875 20.3333 2.79875Z" fill="white"/>
                        </svg>
                    </a>
                }
            </div>
        )
    }
}