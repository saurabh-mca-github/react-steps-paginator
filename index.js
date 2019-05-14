import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class StepsPaginator extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            page: this.props.page || 1,
            perPage: this.props.perPage || 10,
            totalItems: this.props.totalItems || 100
        }
    }

    onClick(page = 1){
        this.setState({page}, () => {
            if(this.props.onPaginate)
            {
                this.props.onPaginate(this.state.page)
            }
          })       
    }

    makeLinks(){
        let links = [];
        let count = this.state.totalItems/this.state.perPage
        //console.log(count)
        for(let i = 1; i < count; i++){
            links.push(
                <li key={'lp-link-'+i} className={this.state.page == i ? `page-item disabled` : `page-item`}>
                    <a className="page-link" href="javascript:void" onClick={() => this.onClick(i)}>{i}</a>
                </li>
            );
        } 

        return links
    }

    render(){
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={this.state.page == 1 ? `page-item disabled` : `page-item`}>
                        <a className="page-link" onClick={() => this.onClick(1)} href="javascript:void" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                        </a>
                    </li>
                        {this.makeLinks()}                     
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}


//# sourceURL=laravel-pagination.js