import React, { Component } from 'react'

export default class Heading extends Component {
    render() {
        return (
            <div>
                <div className="top_bg_header">
                </div>
                <div className="header_profile_image"></div>
                <div className="tag_and_name">
                    <div className='heaading_tags'>
                        <div className="tag_1">Category</div>
                        <div className="tag_2">Opening Hours</div>
                    </div>
                    <div className="customer_name">
                        Neha Jha
                    </div>
                </div>
                <div className="header_contact_info">
                    <div className="phone_loc">
                        <div>
                        <span class="material-icons">phone</span>
                        <p>8585858585</p>
                        </div>
                        <div>
                        <span class="material-icons">map</span>
                        <p>Delhi</p>
                        </div>
                    </div>
                    <div>
                       <span class="material-icons">mail</span>
                       <p>neha.jha@gmail.com</p>
                    </div>
                </div>
            </div>
        )
    }
}
