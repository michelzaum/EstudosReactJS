import React, { Component } from 'react';
import api from '../../Services/api';
import { Link } from 'react-router-dom';

import './style.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1
    }

    //SERÁ EXECUTADO QUANDO O COMPONENTE FOR EXIBIDO EM TELA.
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        //docs = DADOS DOS PRODUTOS.
        //productInfo = TODO O RESTO DE DADOS QUE SÃO TRAZIDOS DA API.
        const { docs, ...productInfo } = response.data;

        //ALTERANDO O ESTADO DA VARIAVEL PRODUCTS.
        this.setState({
            products: docs, productInfo, page
        })
    };

    prevPage = () => {
        const { page } = this.state;

        //SE ESTIVER NA PRIMEIRA PÁGINA, NÃO FAZ NADA.
        if(page === 1) return;

        //SE NÃO, ATRIBUI O NÚMERO DA PÁGINA COM O VALOR DA PÁGINA ATUAL MENOS 1.
        const pageNumber = page - 1;

        // RECARREGA OS PRODUTOS PASSANDO O NÚMERO DA PÁGINA QUE SERÁ EXIBIDA.
        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        // SE FOR A ULTIMA PÁGINA, NÃO FAZ NADA.
        if(page === productInfo.pages) return;

        // SE NÃO, ATRIBUI O NÚMERO DA PÁGINA COM O VALOR DA PÁGINA ATUAL MAIS 1.
        const pageNumber = page + 1;

        // RECARREGA OS PRODUTOS PASSANDO O NÚMERO DA PÁGINA QUE SERÁ EXIBIDA.
        this.loadProducts(pageNumber);
    }

    render() {
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="action">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}