import React from 'react';

const ViewProduct = (props) => {
    // console.log(props.singleProduct);
    const { photoUrl, name, price, group, key, seller, author, category, collection, date, features } = props.singleProduct;

    return (
        <>
            <h2 style={{color: '#000', marginLeft: '60px'}}>Update your specific product</h2>
            <div className="modal-content">
                <div className="product-detail">
                    <form action="#">
                        <input type="text" defaultValue={name} /> <br />
                        <input type="text" defaultValue={price} /> <br />
                        <input type="text" defaultValue={group} /> <br />
                        <input type="text" defaultValue={key} /> <br />
                        <input type="text" defaultValue={seller} /> <br />
                        <input type="text" defaultValue={author} /> <br />
                        <input type="text" defaultValue={category} /> <br />
                        <input type="text" defaultValue={collection} /> <br />
                        <input type="text" defaultValue={date} />
                    </form>
                    <img src={photoUrl} /> <br />
                </div>
                <div className="product-features">
                    <textarea defaultValue={features}></textarea> <br />
                    <button type="submit">Update product</button>
                </div>
            </div>
        </>
    );
};

export default ViewProduct;