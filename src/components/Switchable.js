import React, { Component } from 'react'

export default class Switchable extends Component {

    // static defaultProps = {
        
    //     data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam laborum impedit placeat. Suscipit repudiandae, distinctio reprehenderit libero corporis pariatur voluptatem accusantium totam, doloremque aspernatur a iste nam, consectetur amet maxime ut? Obcaecati commodi nobis labore quasi, adipisci dolorum, dolorem mollitia libero molestiae nemo deserunt excepturi, maxime ea quos velit."
    // }

    // constructor(props){
    //     super(props);
        
    //     this.state = {
    //         data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam laborum impedit placeat. Suscipit repudiandae, distinctio reprehenderit libero corporis pariatur voluptatem accusantium totam, doloremque aspernatur a iste nam, consectetur amet maxime ut? Obcaecati commodi nobis labore quasi, adipisci dolorum, dolorem mollitia libero molestiae nemo deserunt excepturi, maxime ea quos velit."
    //     }

    //     document.title = `${this.capitalizeFirstLetter(this.props.category)} Newsmonkey`;
    // }

    // tab1 = () =>{
    //     this.setState({
    //         data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam laborum impedit placeat. Suscipit repudiandae, distinctio reprehenderit libero corporis pariatur voluptatem accusantium totam, doloremque aspernatur a iste nam, consectetur amet maxime ut? Obcaecati commodi nobis labore quasi, adipisci dolorum, dolorem mollitia libero molestiae nemo deserunt excepturi, maxime ea quos velit."
        
    //     })
    // }

    // tab2 = () =>{
    //     this.setState({
    //         data : "second"
    //     })
    // }

    // tab3 = () =>{
    //     this.setState({
    //         data : "third"
    //     })
    // }

    

    
    render() {
        return (
            <div className='switchable_tab'>
                <div className="all_tabs">
                    <div className="tab-1 tab" >About</div>
                    <div className="tab-2 tab" >Products</div>
                    <div className="tab-3 tab" >Offer</div>
                </div>
                <div className="tab_content">
                    <div className='left_text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit cupiditate fugiat est ipsum iure repellendus laborum a facilis eligendi, nesciunt velit, pariatur perspiciatis totam possimus dolore repellat illo vel quis? Eius eligendi dolor, saepe velit officiis reiciendis vitae quasi nisi reprehenderit error numquam. Deleniti quasi architecto aliquam consectetur veniam?
                    </div>
                    <div>
                        <div class="map_design">Mpa</div>
                    </div>
                </div>
            </div>
        )
    }
}
