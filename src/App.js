import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from './actions/cartActions';
const App = ({products, addToCart, addedItem}) => {
    if (Object.keys(addedItem).length) {
        console.log('cart details', {
            partNo: `#${addedItem.partNumber}`,
            price: addedItem.pricing.list
        });
    }

    const productList = products.map((item, ind) => {
        return (
            <div key={ind + item.brandName} className="row border-bottom p-10">
                <div className="row main align-items-center">
                    <div className="col-3"><img src={item.image} alt={item.brandName}/></div>
                    <div className="col-9">
                        <h4 className="row text-xs text-md font-weight-bold prod-desc-m-l-mobile">{item.productDescription}</h4>
                        <div className="row main align-items-center w100 m-0 justify-content-end">
                            <div className="row flex-grow-1 md-w100 m-l-mobile">Part No :
                                <span className='font-weight-bold'>#{item.partNumber}</span>
                            </div>
                            <div className="primarycolor font-weight-bold">
                                {item.pricing.list}</div>
                            <div className="hidden-xs m-l-2">
                                <button
                                    type="button"
                                    className="btn custom-button btn-sm btn-block-xs-only"
                                    onClick={() => addToCart(item)}>
                                    Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="show-xs p-10 m-l-2">
                        <button
                            type="button"
                            className="btn custom-button btn-sm btn-block"
                            onClick={() => addToCart(item)}>
                            Add to Cart</button>
                    </div>
                </div>

            </div>
        )
    })
    return (
        <div className="d-flex flex-column wrapper-margin">
            {productList}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {products: state.products, addedItem: state.addedItem}
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch(addToCart(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
