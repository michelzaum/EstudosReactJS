import React, { Component } from 'react';
import api from '../../Services/api';
import './style.css';

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
        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        )
    }
}