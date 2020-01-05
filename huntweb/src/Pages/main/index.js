import React, { Component } from 'react';
import api from '../../Services/api';

export default class Main extends Component {
    state = {
        products: []
    }

    //SERÁ EXECUTADO QUANDO O COMPONENTE FOR EXIBIDO EM TELA.
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        //ALTERANDO O ESTADO DA VARIAVEL PRODUCTS.
        this.setState({
            products: response.data.docs
        })
    };

    render() {
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key={product._id}>{product.title}</h2>
                ))}
            </div>
        )
    }
}