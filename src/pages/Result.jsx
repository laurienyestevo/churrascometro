import { useLocation, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/Button";

const translatedProducts = {
    totalCarne: "Carne",
    totalPaoDeAlho: "Pão de alho",
    totalCarvao: "Carvão",
    totalSal: "Sal",
    totalGelo: "Gelo",
    totalRefrigerante: "Refrigerante",
    totalAgua: "Água",
};

const translatedPeople = {
    menCount: "Homens",
    womenCount: "Mulheres",
    kidCount: "Crianças",
};

const getUnit = (productName) => {
    const units = {
        totalCarne: 'kg',
        totalPaoDeAlho: 'unidades',
        totalCarvao: 'kg',
        totalSal: 'kg',
        totalGelo: 'kg',
        totalRefrigerante: 'garrafas de 2l',
        totalAgua: 'garrafas de 1,5l',
    };

    return units[productName] || '';
};

const renderProductList = (products) => {
    return Object.keys(products).map((productName, index) => (
        <li key={index}>
            <strong>{translatedProducts[productName]}</strong>
            <span>
                {products[productName]} {getUnit(productName)}
            </span>
        </li>
    ));
};

const renderPeopleList = (people) => {
    return Object.keys(people).map((personName, index) => (
        <span key={index} className="guest-list">
            {people[personName]} {translatedPeople[personName]}
        </span>
    ));
};

const renderUserData = () => {
    const user = localStorage.getItem("registerData");
    return user ? JSON.parse(user).name : "Olá";
};

const Result = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state || !state.products) {
        return null;
    }

    const { people, products } = state;

    const returnCalculator = () => {
        navigate("/");
    };

    const resetData = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="container">
            <Title />
            <div className="calculator">
                <div className="result-total-guest">
                    <p>
                        {renderUserData()}, confira a lista para o seu
                        churrasco!
                    </p>
                    <p id="total-guest">
                        {people.menCount + people.womenCount + people.kidCount}{" "}
                        convidados
                    </p>
                    {renderPeopleList(people)}
                </div>
                <div className="input-group-result">
                    <div id="header-result">
                        <p>ITEM</p>
                        <p>QUANTIDADE</p>
                    </div>
                    <ul className="results">{renderProductList(products)}</ul>
                </div>
                <div className="row">
                    <Button onClick={returnCalculator} label="Novo cálculo" />
                    <Button onClick={resetData} label="Limpar dados" />
                </div>
            </div>
        </div>
    );
};

export default Result;