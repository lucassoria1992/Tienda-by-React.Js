import React,{useEffect, useState} from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import axios from 'axios';
import useGetProduct from '../hooks/useGetProducts';
const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProduct(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
				<ProductItem product={product} key={product.id}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;
