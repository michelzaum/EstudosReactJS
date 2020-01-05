import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//BrowserRouter = DEFINE QUE AS ROTAS SERÃO UTILIZADAS EM UM BROWSER.
//Switch = NESTE CONTEXTO, O SWITCH IRÁ FAZER COM QUE APENAS UMA ROTA SEJA CHAMADA AO MESMO TEMPO.
//Route = DEFINE A ROTA(O CAMINHO DELA E O COMPONENTE).

import Main from './Pages/main';
import Product from './Pages/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
)

export default Routes;