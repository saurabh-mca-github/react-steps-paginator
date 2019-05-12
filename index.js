import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class StepsPaginator extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            page: this.props.page || 1,
            numItemsDisplay: this.props.page || 10,
            totalNumItems: this.props.page || 100
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
        let count = this.state.totalNumItems/this.state.numItemsDisplay
        //console.log(count)
        for(let i = 1; i < count; i++){
            links.push(
                <li key={'lp-link-'+i} className="page-item">
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
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
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